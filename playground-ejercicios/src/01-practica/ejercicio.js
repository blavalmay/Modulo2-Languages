console.log("************** PRACTICE *********************");
console.log("Use this folder 00 practice to practice with homework exercises");
console.log("You can add new files as long as they are imported from index.ts");

// 101 * Crea una función que reciba una frase en formato string y devuelva la palabra más larga

function biggestWord(phrase) {
    const words = phrase.split(" ");
    let elLength = 0;
    let largestEl;
    words.forEach(element => {
        if (element.length > elLength) {
            elLength = element.length;
            largestEl = element;
        }
    });

    return largestEl;
}

// Ejemplo
console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"


// 102 * Dada la calificación de alumnos de una clase implementa una función que muestre la media de la clase de forma textual (Matrúcla de Honor, Sobresaliente, Notable...)

const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

const getAvg = notesObj => {
    const notesArr = Object.values(notesObj);
    let notesSum = 0;

    notesArr.forEach(element => {
        notesSum += element;
    });

    return notesSum / notesArr.length;
}

const printAverage = classResults => {
    if (classResults == 10) {
        return "Matrícula de Honor";
    } else if (9 <= classResults && classResults < 10) {
        return "Sobresaliente";
    } else if (7 <= classResults && classResults < 9) {
        return "Notable";
    } else if (6 <= classResults && classResults < 7) {
        return "Bien";
    } else if (5 <= classResults && classResults < 6) {
        return "Suficiente";
    } else if (4 <= classResults && classResults < 5) {
        return "Insuficiente";
    } else if (classResults < 4) {
        return "Muy deficiente";
    }
}

console.log(printAverage(getAvg(eso2o)));


// 103 * En este ejercicio debes convertir el código de abajo en algo equivalente pero más compacto y expresivo

// function f(input) {
//     var result;
//     if (input === undefined) {
//       result = "Unknown";
//     } else if (input === null) {
//       result = "";
//     } else {
//       result = input;
//     }
//     return result;
// }

function f(input) {
    const result = input === undefined ? 'Unknown' : (input === null ? '' : input);
    return result;
}


// 104 A * Implementa una función clone que devuelva un objeto clonado a partir de otro

const clone = source => ({ ...source });

console.log(clone(eso2o));

// 104 B * Dados dos objetos cualesquiera, implementa una función merge que mezcle uno sobre otro

const merge = (source, target) => ({ ...target, ...source });

// Por ejemplo, dados estos 2 objetos:
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

// El resultado de mezclar a sobre b sería:
merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}


// 105 A * Suponiendo objetos sin anidamiento y con propiedades primitivas, construye una función que compare el contenido de 2 objetos.

var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

console.log(user === clonedUser); // false

function isEqual(a, b) {
    let equals = true;
    for (const item in a) {
        if (!b.hasOwnProperty(item) || (a[item] !== b[item])) {
            equals = false;
        }
    }
    return equals;
}

console.log(isEqual(user, clonedUser)); // true

// 105 B * Vamos a mejorar la solución del apartado A suponiendo ahora que si puede existir anidamiento de objetos.

var user = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
};
var clonedUser = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
};

function isDeepEqual(a, b) {
    let deepEquals = true;
    for (const item in a) {
        if (typeof (a[item]) === 'object') {
            for (const deepItem in a[item]) {
                if (!b[item].hasOwnProperty(deepItem) || (a[item][deepItem] !== b[item][deepItem])) {
                    deepEquals = false;
                }
            }
        } else {
            if (!b.hasOwnProperty(item) || (a[item] !== b[item])) {
                deepEquals = false;
            }
        }
    }
    return deepEquals;
}

console.log(isDeepEqual(user, clonedUser)); // true


// 106 * Empleando el concepto de closure, emula el comportamiento de 2 dados.


// 108 * Crea una función que reciba un array y un valor y devuelva un boolean indicando si el valor está dentro del array.

function includes(array, value) {
    let boo = true;
    array.forEach(function (item) {
        boo = item === value ? true : false;
    })
    return boo;
}

// método simplificado:
function includesFind(array, value) {
    const boo = array.indexOf(value) < 0 ? false : true;
    return boo;
}

// Ejemplo:
console.log(includesFind([1, 2, 3], 3)); // true
console.log(includesFind([1, 2, 3], 0)); // false


// 109 * Crea una función tal que, dado un número entero de inicio from y otro de fin to, encuentre los números primos entre ellos y los muestre por pantalla.

const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

//funcion para encontrar numero primo mas eficiente:
const isPrimeS = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

const showPrimes = (from, to) => {
    for (let i = from; i <= (to - from); i++) {
        const primo = isPrime(i) ? `${i} is PRIME!` : `${i} is not a prime`;
        console.log(primo);
    }
}


// 110 * Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no el libro.

function isBookRead(books, titleToSearch) {
    let read = false;
    books.forEach(function (item) {
        if (item.title === titleToSearch) {
            read = item.isRead;
        }
    })
    return read;
}

//función más pro:

function isBookReadFilter(books, titleToSearch) {
    const readBooks = books.filter(book => book.title === titleToSearch);
    return readBooks[0]?.isRead ?? false; // si es undefined devuelve falso y si no devuelve el valor
}

// Ejemplo:
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

console.log(isBookReadFilter(books, "Devastación")); // true
console.log(isBookReadFilter(books, "Canción de hielo y fuego")); // false
console.log(isBookReadFilter(books, "Los Pilares de la Tierra")); // false (no existe)


// 111 * Dado un texto cualquiera, invierte el orden de las palabras

const reverseText = text => text.split(" ").reverse().join(" ");

console.log(reverseText('Uno dos tres')); // "tres dos Uno"


// 112 * Escribe una función que acepte un string como argumento y devuelva todas las partes finales de dicha palabra:

function subsets(word) {
    const arrWord = word.split("");
    const newArrWord = [];
    for (let i = 0; i < arrWord.length; i++) {
        newArrWord.push(word.slice(i));
    }
    return newArrWord;
}

// Ejemplo
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]


// 114 * Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto:

function values(obj) {
    const arrProp = [];
    for (const elem in obj) {
        arrProp.push(obj[elem]);
    }
    return arrProp;
}

// Ejemplo:
console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]

// Evita añadir las propiedades heredadas en caso de ser instancia de una clase:

function valuesProp(obj) {
    const arrProp = [];
    for (const elem in obj) {
        arrProp.push(Object.getPrototypeOf(obj[elem]));
    }
    return arrProp;
}

// Ejemplo:
function Person(name) {
    this.name = name;
}

Person.prototype.walk = function () {
    console.log("I'm walking");
};

var john = new Person("John");
console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]


// 115 * Crea una función zipObject tal que acepte un array de claves como primer argumento y un array de valores como segundo argumento y cuyo objetivo sea crear un objeto uniendo las claves con sus valores

function zipObject(keys, values) {
    const newObj = {};
    for (let i = 0; i < keys.length; i++) {
        if (values[i] !== undefined) {
            newObj[keys[i]] = values[i];
        }
    }
    return newObj;
}

// Ejemplo
console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); // {spanish: "hola", english: "hi", french: "salut"}


// 116 * Descifra el siguiente secreto:

var secret = "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
    const newText = [];
    const arrPlain = plain.split("");
    const arrCipher = cipher.split("");
    for (let letter of secret) {
        if (letter === " ") {
            newText.push(" ");
        }
        for (let i = 0; i < cipher.length; i++) {
            if (letter === arrCipher[i]) {
                newText.push(arrPlain[i]);
            }
        }
    }
    return newText.join("");
}

console.log(decrypt(secret)) // lo estas haciendo super bien, puedes vacilar en el canal de slack escribiendo 'turing fliparia conmigo' :)


// 202 A * Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = ([a1 ,]) => { console.log(a1) };

// 202 B * Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([t1, ...tn]) => {console.log(tn)};

// 202 C * Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (a) => {console.log(a.slice(0,a.length - 1))};

// 202 D * Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (a) => {console.log(a.pop())};


// 203 A * Implementa una función concat, tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread.

const concat = (a, b) => {console.log([...a, ...b])}

// 203 B * Repite el ejercicio anterior suponiendo cualesquiera arrays de entrada (no te limites solamente a 2).

const concatMulti = (...args) => {console.log([...args.flat()])}


// 204 A * Intenta razonar cual será el resultado de la consola al ejecutar este código:

var a = 1;
let b = 2;

{
  try {
    console.log('log 1', a, b); // 1
  } catch (error) {}
  let b = 3;
  console.log('log 2', a, b); // 1 3
}

console.log('log 3', a, b); // 1

() => {
  console.log('log 4', a); // 1
  var a = 5;
  let b = 6;
  console.log('log 5', a, b); // 5 6
};

console.log('log 6', a, b); // 5 2