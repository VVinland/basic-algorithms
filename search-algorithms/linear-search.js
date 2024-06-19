//Сложность O(n);

// const linearSearch = (arr, findEl) => {
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] === findEl){
//             return i;
//         }
//     }

//     return -1;
// }

// var intersection = function (nums1, nums2) {
//     const set1 = new Set(nums1);
//     const set2 = new Set(nums2);
//     const result = [];

//     for (const item of set1) {
//         if (set2.has(item)) {
//             result.push(item);
//         }
//     }

//     return result;
// };

// const nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4];

// console.log(intersection(nums1, nums2));

let users = [
    1, 2, 3, 2
];

console.log(users.findIndex(num => num === 2)); // 0


