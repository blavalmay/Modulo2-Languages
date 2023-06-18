console.log("************** DELIVERABLE 01 *********************");

//1. Array operations
//Head
//Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const headts = ([a1, ]) => { console.log(a1) };

// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tailts = ([t1, ...tn]) => {console.log(tn)};

// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const initts = (a: []) => {console.log(a.slice(0, a.length - 1))};

// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const lastts = (a: []) => {console.log(a.pop())};