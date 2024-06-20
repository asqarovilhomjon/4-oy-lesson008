// 3 xil javobli masalalar
// 1-Masala
// {
//     // 1-masala for
//     function number(array) {
//         let musbat = 0,
//         manfiy = 0;
//         for (let i = 0; i < array.length; i++){
//             if (array[i] > 0) {
//                 musbat += array[i];
//             } else {
//                 manfiy += array[i];
//             }
//         }
//         return ` ${musbat} ${manfiy}`;
//     }
//     console.log(number([5, 8, 9, 6, -6, -5]));
// }
  
// {
//     // 1-masala while
//     function number(array){
//         let musbat = 0,
//         manfiy = 0;
//         let i = 0;
//         while (i < array.length) {
//             if (array[i] > 0) {
//                 musbat += array[i];
//             } else {
//                 manfiy += array[i];
//             }  
//             i++;
//         }
//         return `${musbat} ${manfiy}`;
//     }
//     console.log(number([9, 5, 4, 8, 9, 7, -7, -9]));
// }
  
// {
//     // 1-masala do while
//     function number(array){
//         let musbat = 0,
//         manfiy = 0;
//         let i = 0;
//         do{
//             if (array[i] > 0){
//                 musbat += array[i];
//             } else {
//                 manfiy += array[i];
//             }
//             i++;
//         } while (i < array.length);
//         return `${musbat} ${manfiy}`;
//     }
//     console.log(number([4, 7, 8, 5, -4, 6, 5, -4, -3]));
// } 

// 2-masala
// {
//     // 2-masala for
//     function number(array){
//         let sum = 0;
//         for (let i = 0; i <= array; i += 2){
//             sum = sum + i;
//         }
//         return `juft sonlar yigindisi ${sum}ga teng`;
//     }
//     console.log(number(74));
// }
  
// {
//     // 2-masala while
//     function number(array){
//         let sum = 0;
//         let i = 0;
//         while (i <= array){
//             sum = sum + i;
//             i += 2;
//         }
//         return `juft sonlar yigindisi ${sum}ga teng`;
//     }
//     console.log(number(65));
// }

// {
//     // 2-masala do while
//     function number(array) {
//         let sum = 0;
//         let i = 0;
//         do {
//             sum = sum + i;
//             i += 2;
//         }while (i <= array);
//         return `juft sonlar yigindisi ${sum}ga teng`;
//     }
//     console.log(number(44));
// }

// 3-masala
// {
//     // 3 masala for
//     function number(a, b){
//         let sum = 0;
//         for (let i = a; i <= b; i++) {
//             sum = sum + i;
//         }
//         return sum;
//     }
//     console.log(number(15, 21));
// }

// {
//     // 3 masala while
//     function number(a, b) {
//         let i = a;
//         let sum = 0;
//         while (i <= b) {
//             sum = sum + i;
//             i++;
//         }
//         return sum;
//     }
//     console.log(number(15, 21));
// }

// {
//     // 3 masala do while
//     function number(a, b) {
//         let sum = 0;
//         let i = a;
//         do {
//             sum = sum + i;
//             i++;
//         } while (i <= b);
//         return sum;
//     }
//     console.log(number(15, 21));
// }
  
// 4-masala
// {
//     // 4-masala for
//     function number(n){
//         for (let i = n; i >= 0; i -= 2) {
//             console.log(i);
//         }
//     }
//     console.log(number(25));
// }

// {
//     // 4 masala while
//     function number(n){
//         let i = n;
//         while (i >= 0){
//             console.log(i);
//         i -= 2;
//         }
//     }
//     console.log(number(25));
// }

// {
//     // 4-masala do while
//     function number(n){
//         let i = n;
//         do {
//             console.log(i);
//             i -= 2;
//         }while (i >= 0);
//     }
//     console.log(number(25));
// }










// {
//     // { while 1-masala
//     function number(a, b){
//         let i = 0;
//         while (a >= b) {
//             i++;
//             a -= b;
//         }
//         console.log(a);
//     }
//     console.log(number(60, 8));
// }

// {
//     // while 2-masala
//     function number(a, b) {
//         let i = 0;
//         while (a > b) {
//             a -= b;
//             i++;
//         }
//         console.log(i);
//     }
//     console.log(number(60, 8));
// }

// {
//     // while 3-masala
//     function number(n, k) {
//         let i = 0;
//         while (n <= k) {
//             i++;
//             k -= n;
//         }
//         console.log(` ${k} qoldiq`);
//         console.log(`${i} butun`);
//     }
//     console.log(number(7, 65));
// } 
{
    // while 4-masala
    function number(n){
        if (n <= 0){
            console.log("n 0dan katta bo'lsin");
            return;
        }
        let i = 1
        while (i < n){
            i *= 3;
        }
        if (i === n){
            return "3ning darajasi"
        }else {
            return "3ning darajasi emas"
        }
    }
    // console.log(35);
}