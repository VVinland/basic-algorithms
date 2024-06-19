// Сложность O(n^2);

// function cycleSort(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         value = arr[i];
//         position = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < value) {
//                 position++;
//             }
//         }

//         if (position === i) {
//             continue;
//         }

//         while (value === arr[position]) {
//             position++;
//         }

//         [arr[position], value] = [value, arr[position]];

//         while (position !== i) {
//             position = i;
//             for (let k = i + 1; k < arr.length; k++) {
//                 if (arr[k] < value) {
//                     position++;
//                 }
//             }

//             while (value === arr[position]) {
//                 position++;
//             }

//             [arr[position], value] = [value, arr[position]];
//         }
//     }

//     return arr;
// }

// console.log(cycleSort([7, 2, 3, 4, 5, 6]));

// от 0 до n 
// var missingNumber = function (nums) {

//     for (let i = 0; i < nums.length; i++) {
//         let value = nums[i];
//         let position = i;

//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] < value) position++
//         }

//         if (i === position) continue;

//         while (value === nums[position]) position++;

//         [nums[position], value] = [value, nums[position]];

//         while (i !== position) {
//             position = i;
//             for (let k = i + 1; k < nums.length; k++) {
//                 if (nums[k] < value) position++;
//             }

//             while (value === nums[position]) position++

//             [nums[position], value] = [value, nums[position]];
//         }

//     }

//     let result;
//     for(let i=0; i<=nums.length;i++){
//         if(i !== nums[i]){
//             result=i;
//             break
//         }
//     }

//     return result;
// };

// console.log(missingNumber([0, 1]));

var isGood = function (nums) {
    const maxNumber = Math.max(...nums);
    if (maxNumber + 1 !== nums.length) return false;

    for (let i = 0; i < nums.length; i++) {
        let value = nums[i];
        let position = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < value) position++;
        }

        if (position === i) continue;

        while (value === nums[position]) position++;

        [nums[position], value] = [value, nums[position]];

        while (i !== position) {
            position = i;
            for (let k = i + 1; k < nums.length; k++) {
                if (nums[k] < value) position++;
            }

            while (value === nums[position]) position++;

            [nums[position], value] = [value, nums[position]];
        }
    }

    const n = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === maxNumber && !n["maxNumber"]) {
            n["maxNumber"] = 1;
            continue;
        }

        if (nums[i] === maxNumber) {
            n["maxNumber"] += 1;
            continue;
        }

        if (nums[i] === maxNumber - 1 && !n["maxNumberMinusOne"]) {
            n["maxNumberMinusOne"] = 1;
            continue;
        }

        if (nums[i] === maxNumber) {
            n["maxNumberMinusOne"] += 1;
            continue;
        }

        if (!n[nums[i]]) {
            n[nums[i]] = 1;
            continue;
        }

        if (n[nums[i]]) n[nums[i]] += 1;
    }

    for (let key in n) {
        if (key !== "maxNumber" && key!== "maxNumberMinusOne" && n[key] > 1
        ) return false;

        if (key === "maxNumberMinusOne" && n[key] > 1) return false;

        if (key === "maxNumber" && n[key] !== 2) return false;
    }

    return true;
};
console.log(isGood([1,3,3,2]));
// console.log(isGood([5, 7, 3, 1, 5, 2, 6, 4]));
// console.log(isGood([1, 1]));