// for each loop
const arr = [2, 58, 5, 7, 4 ,01, 36, 9, 7, 4, 8];
// arr.forEach( ele => {
//     console.log(ele)
//     if (ele === 5) {
//         break;  // can't break in foreeach loop
//     }
// });

for (let [i, el] of   arr.entries()) {
    if (el === 01) break;
    console.log(i, el)
}