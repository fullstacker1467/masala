//  1

// let a = -1;
// if (a < 0) {
//   if (a >= 0) {
//     a++;
//   }
// } else {
//   a++;
// }
// console.log(a);

//   1 ni 2 - usul

// if(a > 0) {
//     a++
// }
// else if(a === 0) {
//     a = 'son 0 ga teng'
// }

// console.log(a);
//  2

// let a = -12;
// if (a < 0) {
//   if (a >= 0) {
//     a++;
//   } else {
//     a -= 2;
//   }
// } else {
//   a++;
// }
//   console.log(a);

//  3

// let a = 0;
// if (a > 0){
//     a++
// }else if(a == 0){
//     a += 10
// }else{
//     a -= 2
// }

// console.log(a);

//  4

// let a = 2
// let b = -1
// let c = -3
// musbat = 0
// if(a >= 0){
//     musbat++
// }
// if(b >= 0){
//     musbat++
// }
// if(c >= 0){
//     musbat++
// }
// console.log(`musbat sonlar soni ${musbat}`);

//  5

// let a = 2
// let b = -1
// let c = 3
// musbat = 0
// manfiy = 0
// if(a >= 0){
//     musbat++
// }else{
//     manfiy++
// }if(b >= 0){
//     musbat++
// }else{
//     manfiy++
// }if(c >= 0){
//     musbat++
// }else{
//     manfiy++
// }
// console.log(`musbat sonlar soni ${musbat} ---- manfiy sonlar soni ${manfiy}`);

//  6

// let a = 12
// let b = 12

// if(a < b){
//     console.log(b);
// }else if (a == b){
//     console.log('teng');
// }else{
//     console.log(a);
// }

//  7

// let a = 21
// let b = 32
// tartibi = 0
// if(a > b){
//     tartibi ++
// }else{
//     tartibi += 2
// }console.log(tartibi);

//  8

// let a = 2;
// let b = 7897654;
// let c;
// if (a > b) {
//   console.log(a, b);
// } else {
//   console.log(b, a);
// }

// if (a < b) {
//   console.log(a, b);
// } else if (a === b) {
//   console.log("sonlar teng");
// } else {
//   c = a;
//   a = b;
//   b = c;
//   console.log(a, b);
// }

//  9

// let a = 12
// let b = 18
// let c = 0
// if(a > b){
//     c = a
//     a = b
//     b = c
//     console.log(`a soni ${a} ----, b soni ${b}`);
// }else if(a == b && b == a){
//     console.log(`a va sonlari teng: a ${a}, b ${b}`);
// }
// else{
//     console.log(`a soni ${a} ----, b soni ${b}`);
// }

//  10

// let a = 12;
// let b = 12;
// let c = a + b;
// if (a != b) {
//   console.log(c);
// } else if (a == b) {
//   a = b = 0;
//   console.log(a, b);
// }

//  11

// let a = 45;
// let b = 12;
// let c;
// if (a != b) {
//   if (a < b) {
//     a = b;
//   } else {
//     b = a;
//   }
//   console.log(`a = ${a} b = ${b}`);
// } else if (a == b) {
//   a = b = 0;
//   console.log(a, b);
// }

//  12

// let a = 34
// let b = 12
// let c = 54
// if(a > b && a > c){
//     console.log(a);
// }if(b > c && b > a){
//     console.log(b);
// }if(c > b && c > a){
//     console.log(c);
// }

//  13

// let a = 13;
// let b = 15;
// let c = 12;

// if (a > b && b > c) {
//   console.log(b);
// } else if (c > b && b > a) {
//   console.log(b);
// }
// if (b > a && a > c) {
//   console.log(a);
// } else if (c > a && a > b) {
//   console.log(a);
// }
// if (b > c && c > a) {
//   console.log(c);
// } else if (a > c && c > b) {
//   console.log(c);
// }

//  14

// let a = 133;
// let b = 150;
// let c = 123;

// if (a > b && b > c) {
//   console.log(c, b, a);
// } else if (c > b && b > a) {
//   console.log(c, b, a);
// }
// if (b > a && a > c) {
//   console.log(c, a, b);
// } else if (c > a && a > b) {
//   console.log(b, a, c);
// }
// if (b > c && c > a) {
//   console.log(a, c, b);
// } else if (a > c && c > b) {
//   console.log(b, c, a);
// }

//  29

// let a = 13
// if(a == 0){
//     console.log(`a nolga teng`);
// }else{
//     if(a > 0 && Math.round(a % 2 !== 0)){
//         console.log(`a soni toq son va musbat`);
//     }else if(a > 0 && Math.round(a % 2 == 0)){
//         console.log(`a soni juft son va musbat`);
//     }
//     if(a < 0 && Math.round(a % 2 !== 0)){
//         console.log(`a soni toq son va manfiy`);
//     }else if(a < 0 && Math.round(a % 2 == 0)){
//         console.log(`a soni juft son va musbat`);
//     }
// }

//  30

// let a = 222,
//   natija = "";
// if (a > 0 && a < 10 && a % 2 === 0) {
//   natija = `berilgan son ${a}, musbat bir xonali juft son`;
// } else if (a < 0 && a > -10 && a % 2 !== 0) {
//   natija = `berilgan son ${a}, manfiy bir xonali toq son`;
// } else if (a > 0 && a < 10 && a % 2 !== 0) {
//   natija = `berilgan son ${a}, musbat bir xonali toq son`;
// } else if (a < 0 && a > -10 && a % 2 === 0) {
//   natija = `berilgan son ${a}, manfiy bir xonali juft son`;
// } else if (a > 9 && a < 100 && a % 2 === 0) {
//   natija = `berilgan son ${a}, musbat ikki xonali juft son`;
// } else if (a > 9 && a < 100 && a % 2 !== 0) {
//   natija = `berilgan son ${a}, musbat ikki xonali toq son`;
// } else if (a < -9 && a > -100 && a % 2 === 0) {
//   natija = `berilgan son ${a}, manfiy ikki xonali juft son`;
// } else if (a < -9 && a > -100 && a % 2 !== 0) {
//   natija = `berilgan son ${a}, manfiy ikki xonali toq son`;
// } else {
//   natija = "son nolga teng";
// }
// console.log(natija);