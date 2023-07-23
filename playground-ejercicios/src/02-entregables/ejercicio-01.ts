console.log("************** DELIVERABLE 01 *********************");

//1. Array operations
//Head
//Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const headts = ([a1, ...an]) => { console.log(a1) };

headts(['hola',1,2,'adios']); // hola

// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tailts = ([t1, ...tn]) => {
    for(const elem in tn) {
        console.log(tn[elem])
    }
};

tailts(['hola',1,2,'adios']); // 1, 2, adios


// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const initts = <T>(list: T[]): T[] => {
    const result = list.slice(0, list.length - 1);
    for(const elem in result) {
        console.log(result[elem])
    }
    return result;
}

initts([1, 2, false, 'adios']); // 1, 2, false

// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const lastts = <U>(arr: U[]): U => {
    console.log(arr.pop());
    return arr.pop();
}

lastts(['hola',1,2,'adios']); // adios