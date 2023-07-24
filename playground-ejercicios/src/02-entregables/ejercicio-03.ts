console.log("************** DELIVERABLE 03 *********************");

// 3. Clone Merge
// * Clone
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

const clonets = (source: object): object => ({ ...source });

const objToClone = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

console.log(clonets(objToClone));

// * Merge
//Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

const mergets = (source: object, target: object): object => ({ ...target, ...source });

const obj1 = { name: "Maria", surname: "Ibañez", country: "SPA" };
const obj2 = { name: "Luisa", age: 31, married: true };

console.log(mergets(obj1, obj2)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}