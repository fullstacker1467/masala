// 1

// let l = 144;
// console.log(parseInt(l / 10));

// 2

// let m = 143255;));
// console.log(parseInt(m / 100

// 3

// let b = +prompt('sonni kiriting');
// let kb = parseInt( b / 1024);
// console.log(kb);

// 4

// let a = +prompt('')
// let b = +prompt('')
// let c = a / b;
// console.log(parseInt(c));

// 5

// 6

// let a = 19
// let b = parseInt(a / 10)
// let c = a - (b * 10)
// console.log(b , c);

// 8

// let a = 29;
// let b = parseInt(a / 10)
// let c = a - (b * 10)
// let d = b + (c * 10)
// console.log(d);

// 13

// let son = 245;
// let yuz = parseInt(son / 100);
// let on = parseInt((son - yuz * 100) / 10);
// let bir = son - (yuz * 100 + on * 10);
// let natija = on * 100 + bir * 10 + yuz;
// console.log(natija);

// 24

// let yil = +prompt('kunni kiriting');
// let k = yil % 7;
// console.log(k);

// 25

// let yil = +prompt('kunni kiriting');
// let k = ((yil % 7) + 3) % 7;
// console.log(k);

// 26

// let yil = +prompt('kunni kiriting');
// let k = yil % 7 + 1;
// console.log(k);

// 27

// let yil = +prompt('kunni kiriting');
// let k = (((yil % 7) + 5) % 7) + 1;
// console.log(k);

// 28

// let son = 10
// n = 1
// console.log((((son % 7 ) + n) % 7 ) + 1);

// 30

// let a = 2000;
// console.log(Math.ceil(a / 100));

// 22

// let a = 5
// let b = 4
// let c = a
// a = b
// b = c

// console.log(a ,b);

// 23

// let a = 5
// let b = 4
// let c = 6
// let d = a
// a = b
// b = c
// c = d

// console.log(a ,b , c);

// ==========================================   boolean  ====================================== //

// 1

// let a = 1
// console.log(a > 0);

// 2

// let a = 3
// console.log(a % 2 !== 0);

// 3

// let a = 3
// console.log(a % 2 == 0);

// 4

// let a = 7
// let b = 2
// console.log(a > 2 && b <= 3);

// 5

// let a = 0;
// let b = 4;
// console.log(a <= 0 || b < -2);

// 6

// let a = 6
// let b = 7
// let c = 8
// console.log((a <= b) && (b <= c));

// 7

// let a = 3
// let b = 4
// let c = 10
// console.log((a <= b) && (b <= c));

// 8

// let a = 7
// let b = 3
// console.log(a % 2 !== 0 && b % 2 !== 0);

// 9

// let a = 2
// let b = 7
// console.log(a % 2 !== 0 || b % 2 !== 0);

// 10

// let a = 3
// let b = 2
// console.log((a % 2 !== 0 || b % 2 !== 0) && (a % 2 == 0 || b % 2 == 0));

// 11

// let a = 1
// let b = 1
// console.log(a % 2 !== 0 || b % 2 == 0 && a % 2 !== 0 || b % 2 == 0);

// 12

// 13

// let a = -10
// let b = -12
// let c = 2
// console.log(((a - 1) >= 0) || ((b - 1) >= 0) || ((c - 1) >= 0));

// =======================================================   Math  ===============================================

// let a = 10
// console.log(Math.floor(a)); //  pastga yaxlitlash

// let a = 10.000000
// console.log(Math.ceil(a)); //  tepaga yaxlitlash

// let a = 13.988
// console.log(Math.round(a)); //  5 dan pastga yoki tepaga yaxlitlaydi

// ==================================  if else ============================================

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

//   =========================================== switch case ========================================

//  1-masala

// let p = 7.7
// p = parseInt(p)
// switch (a) {
//   case 1:
//     console.log("dushanba");
//     break;
//   case 2:
//     console.log("seshanba");
//     break;
//   case 3:
//     console.log("chorshanba");
//     break;
//   case 4:
//     console.log("payshanba");
//     break;
//   case 5:
//     console.log("juma");
//     break;
//   case 6:
//     console.log("shanba");
//     break;
//   case 7:
//     console.log("yakshanba");
//     break;
//   default:
//     break;
// }

//  2-masala

// let a = 7
// switch (a) {
//   case 1:
//     console.log("yomon");
//     break;
//   case 2:
//     console.log("qoniqarsiz");
//     break;
//   case 3:
//     console.log("qoniqarli");
//     break;
//   case 4:
//     console.log("yaxshi");
//     break;
//   case 5:
//     console.log("alo");
//     break;
//   default:
//     console.log('unday baho yoq');
//     break;
// }

//  3-masala

// let p = 13;
// a = parseInt(p % 12)
// switch (a) {
//   case 1:
//     console.log("yanvar: qish");
//     break;
//   case 2:
//     console.log("fevral: qish");
//     break;
//   case 3:
//     console.log("mart: bahor");
//     break;
//   case 4:
//     console.log("aprel: bahor");
//     break;
//   case 5:
//     console.log("may: bahor");
//     break;
//   case 6:
//     console.log("iyun: yoz");
//     break;
//   case 7:
//     console.log("iyul: yoz");
//     break;
//   case 8:
//     console.log("avgust: yoz");
//     break;
//   case 9:
//     console.log("sentyabr: kuz");
//     break;
//   case 10:
//     console.log("oktyabr: kuz");
//     break;
//   case 11:
//     console.log("noyabr: kuz");
//     break;
//   case 12:
//     console.log("dekabr: qish");
//     break;
//   default:
//     console.log('bunday oy yoq');
//     break;
// }

//  4-masala

// let p = 13;
// a = parseInt(p % 12)
// switch (a) {
//   case 1:
//     console.log("yanvar: qish , 31 kun");
//     break;
//   case 2:
//     console.log("fevral: qish , 28 kun");
//     break;
//   case 3:
//     console.log("mart: bahor , 31 kun");
//     break;
//   case 4:
//     console.log("aprel: bahor , 30 kun");
//     break;
//   case 5:
//     console.log("may: bahor , 31 kun");
//     break;
//   case 6:
//     console.log("iyun: yoz , 30 kun");
//     break;
//   case 7:
//     console.log("iyul: yoz , 31 kun");
//     break;
//   case 8:
//     console.log("avgust: yoz , 31 kun");
//     break;
//   case 9:
//     console.log("sentyabr: kuz , 30 kun");
//     break;
//   case 10:
//     console.log("oktyabr: kuz , 31 kun");
//     break;
//   case 11:
//     console.log("noyabr: kuz , 30 kun");
//     break;
//   case 12:
//     console.log("dekabr: qish , 31 kun");
//     break;
//   default:
//     console.log('bunday oy yoq');
//     break;
// }

//   5-masala

// let birinchi = 10
// let ikkinchi = 4
// let son = -3
// switch (son) {
//   case 1:
//       console.log( birinchi + ikkinchi );
//     break;
//     case 2:
//       console.log( birinchi - ikkinchi );
//     break;
//     case 3:
//       console.log( birinchi / ikkinchi );
//     break;
//     case 4:
//       console.log( birinchi * ikkinchi );
//     break;

//   default:
//     console.log('oynayvering');
//     break;
// }

///  6-masala

// let son = +prompt("metr kiriting");
// let raqam = 2;
// let natija = "";
// switch (raqam) {
//   case 1:
//     natija =`detsimetr ${son * 10}`;
//     break;
//   case 2:
//     natija = `kilometr ${son / 10}`;;
//     break;
//   case 3:
//     natija = `metr ${son}`;;
//     break;
//   case 4:
//     natija = `millimetr ${son * 1000}`;;
//     break;
//   case 5:
//     natija = `santimetr ${son * 100}`;;
//     break;
//   default:
//     console.log('oynayvering');
//     break;
// }

// console.log(natija);

//  2 xonalik son

// let son = 23;
// let onlik = parseInt(son / 10);
// let birlik = son % 10;
// let natija = "";
// switch (onlik) {
//   case 1:
//     natija = "on";
//     break;
//   case 2:
//     natija = "yigirma";
//     break;
//   case 3:
//     natija = "ottiz";
//     break;
//   case 4:
//     natija = `qirq`;
//     break;
//   case 5:
//     natija = "ellik";
//     break;
//   case 6:
//     natija = "oltmish";
//     break;
//   case 7:
//     natija = "yetmish";
//     break;
//   case 8:
//     natija = "sakson";
//     break;
//   case 9:
//     natija = `to'qson`;
//     break;
//   default:
//     break;
// }

// switch (birlik) {
//   case 1:
//     natija = natija + ' ' + "bir";
//     break;
//   case 2:
//     natija = natija + ' ' + "ikki";
//     break;
//   case 3:
//     natija = natija + ' ' + "uch";
//     break;
//   case 4:
//     natija = natija + ' ' + `to'rt`;
//     break;
//   case 5:
//     natija = natija + ' ' + "besh";
//     break;
//   case 6:
//     natija = natija + ' ' + "olti";
//     break;
//   case 7:
//     natija = natija + ' ' + "yetti";
//     break;
//   case 8:
//     natija = natija + ' ' + "sakkiz";
//     break;
//   case 9:
//     natija = natija + ` to'qqiz`;
//     break;
//   default:
//     break;
// }
// console.log(natija);

//   3 xonalik son

// let son = 775;
// let yuzlik = parseInt(son / 100);
// let onlik = parseInt((son - yuzlik * 100) / 10);
// let birlik = son - (yuzlik * 100 + onlik * 10)
// let natija = "";
// switch (yuzlik) {
//   case 1:
//     natija = "bir yuz" + " ";
//     break;
//   case 2:
//     natija = "ikki yuz" + " ";
//     break;
//   case 3:
//     natija = "uch yuz" + " ";
//     break;
//   case 4:
//     natija = `to'rt yuz` + " ";
//     break;
//   case 5:
//     natija = "besh yuz" + " ";
//     break;
//   case 6:
//     natija = "olti yuz" + " ";
//     break;
//   case 7:
//     natija = "yetti yuz" + " ";
//     break;
//   case 8:
//     natija = "sakkiz yuz" + " ";
//     break;
//   case 9:
//     natija = `to'qqiz yuz` + " ";
//     break;
//   default:
//     break;
// }

// switch (onlik) {
//   case 1:
//     natija = natija + "on" + " ";
//     break;
//   case 2:
//     natija = natija + "yigirma" + " ";
//     break;
//   case 3:
//     natija = natija + "ottiz" + " ";
//     break;
//   case 4:
//     natija = natija + `qirq` + " ";
//     break;
//   case 5:
//     natija = natija + "ellik" + " ";
//     break;
//   case 6:
//     natija = natija + "oltmish" + " ";
//     break;
//   case 7:
//     natija = natija + "yetmish" + " ";
//     break;
//   case 8:
//     natija = natija + "sakson" + " ";
//     break;
//   case 9:
//     natija = natija + `to'qson` + " ";
//     break;
//   default:
//     break;
// }

// switch (birlik) {
//   case 1:
//     natija = natija + "bir";
//     break;
//   case 2:
//     natija = natija + "ikki";
//     break;
//   case 3:
//     natija = natija + "uch";
//     break;
//   case 4:
//     natija = natija + `to'rt`;
//     break;
//   case 5:
//     natija = natija + "besh";
//     break;
//   case 6:
//     natija = natija + "olti";
//     break;
//   case 7:
//     natija = natija + "yetti";
//     break;
//   case 8:
//     natija = natija + "sakkiz";
//     break;
//   case 9:
//     natija = natija + `to'qqiz`;
//     break;
//   default:
//     break;
// }
// console.log(natija);

//  ==========================================================  for =============================================================

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
// let num = [];
// let und = [];
// arr.filter((item) => {
//   if (typeof item === "string") {
//     str.push(item);
//   }
// });
// console.log(str);

// ==================================================    object  =====================================

// let ishga_yaroqli = [];
// let odamlar = [
//   {
//     ism: "Zufar",
//     fam: "Ahmadaliev",
//     yosh: 18,
//   },
//   {
//     ism: "Abror",
//     fam: "Jumayev",
//     yosh: 50,
//   },
//   {
//     ism: "Ahror",
//     fam: "Sotvoldiyev",
//     yosh: 45,
//   },
//   {
//     ism: "Samandar",
//     fam: "Ahrorhonov",
//     yosh: 63,
//   },
//   {
//     ism: "Qoqonboy",
//     fam: "Chustiy",
//     yosh: 29,
//   },
// ];

// odamlar.forEach(i => {
//     if(i.yosh > 18 && i.yosh < 50){
//         ishga_yaroqli.push(i)
//     }
// })
// console.log(ishga_yaroqli);

//   1

// let talaba = [
//   {
//     ism: "Anvar",
//     yosh: 14,
//   },
//   {
//     ism: "Sodiq",
//     yosh: 35,
//   },
//   {
//     ism: "Shokir",
//     yosh: 29,
//   },
//   {
//     ism: "Jasur",
//     yosh: 23,
//   },
// ];
// let student = []

// talaba.forEach(i => {
//   if(i.yosh > 18){
//     student.push(i)
//   }
// })
// console.log(student);

//   2

// let ishchilar = [
//   {
//     ismi: "Mariam",
//     jinsi: "ayol",
//   },
//   {
//     ismi: "Rano",
//     jinsi: "ayol",
//   },
//   {
//     ismi: "Murod",
//     jinsi: "erkak",
//   },
//   {
//     ismi: "Akram",
//     jinsi: "erkak",
//   },
//   {
//     ismi: "Holida",
//     jinsi: "ayol",
//   },
// ];
// let ayollar = [];
// let erkaklar = [];

// ishchilar.forEach((i) => {
//   if (i.jinsi === "erkak") {
//     erkaklar.push(i);
//   } else if (i.jinsi === "ayol") {
//     ayollar.push(i);
//   }
// });
// console.log(ayollar, erkaklar);


