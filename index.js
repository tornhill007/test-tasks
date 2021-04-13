//===============================   1   =============================


function format (phoneNumberString) {
  let correctNumber = ('' + phoneNumberString).replace(/\D/g, '');
  
  let match = correctNumber.match(/^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/);
  return match ? `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}` : 'Incorrect number';
  
}

console.log(format('380675252203'));


//===============================   2   =============================

let isValid = (year, month, day) => {

	if(month >= 13 || month <= 0 || year < 1100 || year > 2999){
		return false;
	}
	

	const date = new Date(year, Number(month) - 1, day);
	const isValidDate = Boolean(Number(date)) && date.getDate() == day;


	return isValidDate;
};

console.log(isValid(2098, 2, 29));

//===============================   3   =============================

let longestNonRepetString = (numberString) => {
	let arr = [];
	let finishArr = [];
	for(let i = 0; i < numberString.length; i++) {
		for(let j = i; j < numberString.length; j++ ) {
			if(arr.length === 0) {
					arr.push(numberString[i]);
				}
				else {
					if(arr.indexOf(String(numberString[j])) === -1) {
						arr.push(numberString[j])
					}
					else {
						finishArr = arr.length >= finishArr.length ? [...arr] : finishArr;
						arr = [];
						break;
					}
				}
			}
		
	}
	console.log("Result", finishArr.join(''))
}

longestNonRepetString('ababacsabzab');
longestNonRepetString('1243121');
longestNonRepetString('1213212');


//v 2.0


function longestNonRepetStringV2(string) {
    var max = '', current_string = "", char, pos;

    for (var i = 0; i < string.length; i += 1) {
        char = string.charAt(i);
        pos = current_string.indexOf(char);
        if (pos !== -1) {
            current_string = current_string.substr(pos + 1);
        }
        current_string += char;
        max = max.length > current_string.length ? max : current_string;
    }
    console.log("V2", max);
}

longestNonRepetStringV2("1213212qw2211");
longestNonRepetStringV2('ababacsabzab');
longestNonRepetStringV2('1243121');
longestNonRepetStringV2('1213212');


//===============================   4   =============================


let periodicIterator = function(array, time) {
  for(let i = 0; i < array.length; i++) {
  	setTimeout(() => {
  		console.log(array[i]);
  	}, time * i)
  }
 }

periodicIterator([3,2,4], 100)

//===============================   5   =============================


function MySingleton() {
	var instance;

	MySingleton = function() {
		return instance;
	};

	MySingleton.prototype = this;
	MySingleton.prototype.download = function(url) {
		console.error(33344);
	}

	instance = new MySingleton();

	instance.constructor = MySingleton;
	return instance;
}

let a = MySingleton();
let b = new MySingleton();
let c = new MySingleton();
let d = MySingleton();
console.log(a === b)
console.log(b === c)
console.log(c === d)
console.log(a === d)
console.log(c.download())


//===============================   6   =============================



let myBind = function(thisArg, target) {
	const rest = Array.prototype.slice.call(arguments, 2)
	return function() {
		const args = Array.prototype.slice.call(arguments)
		return target.apply(thisArg, rest.concat(args))
	}
}

let user = "admin:";
let log = {
	error: myBind(console, console.log, "[Error]", user),
	warning: myBind(console, console.log, "[Warning]", user)
}

log.error("File not found");
log.warning("No timezone set!");



//===============================   7   =============================


let myApply = function(thisArg, target, args) {
	id = Date.now().toString();
	thisArg[id] = target;
	const result = thisArg[id](...args);
	delete thisArg[id];
	return result;
}

myApply(console, console.log, ['[Error]', "admin:", "File not found"])



//===============================      =============================
