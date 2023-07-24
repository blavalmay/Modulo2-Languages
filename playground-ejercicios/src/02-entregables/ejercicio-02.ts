console.log("************** DELIVERABLE 02 *********************");

// 2. Concat

//Implementa una función concat, tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread.

//const concatts = (a, b) => {console.log([...a, ...b])}

const concatts = <A, B>(a: A[], b: B[]) => {console.log([...a, ...b])}

concatts([1,'ok'],[2,'ko']); // [1, 'ok', 2, 'ko']

// Repite el ejercicio anterior suponiendo cualesquiera arrays de entrada (no te limites solamente a 2).

const concatMultits = <C>(...args: C[]) => {console.log([...args.flat()])}

concatMultits([1,'ok'],[2,'ko'],[3,'ok']); // [1, 'ok', 2, 'ko', 3, 'ok]