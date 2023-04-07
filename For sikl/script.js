//  1

// let k = 12;
// let n = 8;
// for (let k = 0; k < n; k++) {
//   console.log(k, n);
// }

//  2

// let k = 12;
// let n = 8;
// for (n = 8; n <= k; n++) {
//   console.log(n);
// }

//  3

// let k = 12;
// let n = 8;
// for (k = 12; k > n; k--) {
//   console.log(k);
// }

//  4

// let kg = 7500;
// let son = 78;
// for(let i = 1; i < son ; i++){
//   console.log(`${i} kg narxi ${i * kg}`);
// }

//  5

// let kg = 7500;
// let son = 8;
// for(let i = 1; i < son ; i+=0.1){
//   let natija = `${i.toFixed(1)} kg narxi ${i.toFixed(1) * kg}`
//   console.log(natija);
// }

// 6

// let kg = 7500;
// let son = 8;
// for(let i = 1; i < son ; i+=0.2){
//   let natija = `${i.toFixed(1)} kg narxi ${i.toFixed(1) * kg}`
//   console.log(natija);
// }

//   karra jadvali ===========================================================

// for (let i = 1; i < 11; i++) {
//   for (let j = 1; j < 11; j++) {
//     let son = j * i;
//     let natija = `${i}x${j}=${son}`;
//     console.log(natija);
//   }
// }

//   massive korinishida saqlab olish ================================================

// let son = 50
// let data = []
// for (let i = 1; i <= son; i++) {
//     if(i % 2 !== 0){
//         data.push(i)
//     }
// }
// console.log(data);

//   massive dan string olib olish ================================================

// let data = [NaN, 2424, "sdasfsgg", undefined, "453", "32432423rthdfg"];
// data.forEach((i) => {
//   if (typeof i === "string") {
//       console.log(i);
//   }
// });

//   qutidan qutiga solish ================================================

// let arr = [3234, "salom", NaN, undefined, "hayir", "real", "barca"];
// let data = [];
// arr.forEach((e) => {
//   if (typeof e === "string") {
//     data.push(e);
//   }
// });
// console.log(data);

//  taxlash massive ==================================================

// let arr = [3234, "arnold", NaN, undefined, "mary", "real", "barca"];
// let str = [];
// let num = [];
// let und = [];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "string") {
//     str.push(arr[i]);
//   }
//   if (typeof arr[i] === "number") {
//     num.push(arr[i]);
//   }
//   if (typeof arr[i] === "undefined") {
//     und.push(arr[i]);
//   }
// }
// console.log(str);
// console.log(num);
// console.log(und);

//   filter bilan taxlash  ========================================================

// let arr = [3234, "salom", NaN, undefined, "hayir", "real", "barca"];
// let str = [];
// arr.filter((item) => {
//   if (typeof item === "string") {
//     str.push(item);
//   }
// });
// console.log(str);

//   ================================================  for in =========================================

// let mevalar = ['anor', 'olma' , 'banan', 'shaftoli', 'urik']
// for(let i in mevalar){
//     console.log(i);
// }

// let meva = {
//   nomi: "olma",
//   narxi: 1200,
//   vazni: 120,
//   rangi: "qizil",
// };
// for (let i in meva) {
//   console.log(i + ": " + meva[`${i}`] + ";");
// }

//   ================================================  for of =========================================

// let mevalar = ['anor', 'olma' , 'banan', 'shaftoli', 'urik']
// for(let i of mevalar){
//     console.log(i);
// }


///   ========================================  prebrat user ================================

// let array = [
//   {
//     name: "Shuxrat",
//     surname: "Musayev",
//     age: 32,
//     nationality: "Uzbek",
//   },
//   {
//     name: "Joseph",
//     surname: "Brac",
//     age: 23,
//     nationality: "Yevrey",
//   },
//   {
//     name: "Nurlan",
//     surname: "Saburov",
//     age: 32,
//     nationality: "Kazak",
//   },
//   {
//     name: "Mike",
//     surname: "Tyson",
//     age: 67,
//     nationality: "American",
//   },
//   {
//     name: "Artem",
//     surname: "Staschuk",
//     age: 42,
//     nationality: "Russian",
//   },
//   {
//     name: "Konstantin",
//     surname: "Kovchenko",
//     age: 17,
//     nationality: "Ukrain",
//   },
// ];

// for (let key of array) {
//   for (let item in key) {
//     console.log(key[`${item}`]);
//   }
// }