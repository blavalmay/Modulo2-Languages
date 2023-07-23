console.log("************** DELIVERABLE 02 *********************");

// 2. Concat

//Implementa una función concat, tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread.

//const concatts = (a, b) => {console.log([...a, ...b])}

const concatts = <A, B>(a: A[], b: B[]) => {console.log([...a, ...b])}

concatts([1,'ok'],[2,'ko']); // [1, 'ok', 2, 'ko']

// Repite el ejercicio anterior suponiendo cualesquiera arrays de entrada (no te limites solamente a 2).

const concatMultits = (...args: string[]) => {console.log([...args.flat()])}