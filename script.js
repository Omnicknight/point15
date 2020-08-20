const user = {
    name: 'Vasya',
};

const user2 = {
    name: 'Vasya The Second',
};

const newMap = new Map();

newMap.set(user, 0);
newMap.set(user2, 5);

newMap.set(user, newMap.get(user) + 1);

console.log(newMap);

// for (const [user, visits] of newMap) {
//     console.log(user, visits);
// }

// for (const iterator of newMap) {
//     console.log(...iterator);
// }

newMap.forEach((...rest) => {
    console.log(rest);
})