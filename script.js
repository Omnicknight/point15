// const user = {
//     name: 'Vasya',
// };

// const user2 = {
//     name: 'Vasya The Second',
// };

// const newMap = new Map();

// newMap.set(user, 0);
// newMap.set(user2, 5);

// newMap.set(user, newMap.get(user) + 1);

// console.log(Array.from(newMap));

// const mySet = new Set();
// const arr = [1, 1, 2, 4, 5, 67, 3, 2, 3, 2, 2445, 221, 1, 2];
// arr.forEach((value) => {
//     mySet.add(value);
// });

// console.log(mySet);

// for (const [user, visits] of newMap) {
//     console.log(user, visits);
// }

// for (const iterator of newMap) {
//     console.log(...iterator);
// }

// newMap.forEach((...rest) => {
//     console.log(rest);
// })

// counter = () => {
//     let a = 0;
//     return function () {
//         return ++a;
//     };
// };

// const count = counter();


// console.log(count());
// console.log(count());
// console.log(count());

// counter = (a, b) => {
//     let res = a;
//     return function () {
        
//         return res + b;
//     };
// };
const sum = a => b => a + b;

function sumFnc(a) {
    return function (b) {
        return a + b;
    };
};

const memoized = sum(3);


console.log(memoized(5));
// console.log(memoized(3));
// console.log(memoized(5));