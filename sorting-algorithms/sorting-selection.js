// Сложность: O(n^2);

// function sortingSelection(arr) {

//     for (let i = 0; i < arr.length; i++) {

//         let min = i;

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[min] > arr[j]) {
//                 min = j;
//             }
//         }

//         [arr[i], arr[min]] = [arr[min], arr[i]];
//     }

//     return arr;
// }

// console.log(sortingSelection([1, 34, 6, 7, 1, 10, 7]));

const reconstructQueue = function (people) {
    const result= [];
    for (let i = 0; i < people.length; i++) {
        let min = i;

        for (let j = i + 1; j < people.length; j++) {
           if(people[min][0] === people[j][0]){
                if(people[min][1] > people[j][1]){
                    min = j;
                }
                continue;
           }

           if(people[min][0] !== people[j][0]){
                if(people[min][0] < people[j][0]){
                min = j;
                }
           }
        }

        [people[i], people[min]] = [people[min], people[i]];
    }
    people.forEach(element => {
        result.splice(element[1], 0, element)
    });
    return result;
};

console.log(reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]));
console.log(reconstructQueue([[6, 0], [5, 0], [4, 0], [3, 2], [2, 2], [1, 4]]));

// var thirdMax = function(nums) {
//     nums = [...new Set(nums)];
//     for(let i=0; i<nums.length; i++){
//         let min =i;
//         for(let j=i+1; j<nums.length; j++){
//             if(nums[min]>nums[j]){
//                 min = j;
//             }
//         }
//         [nums[min], nums[i]]= [nums[i], nums[min]];
//     }
//     // nums= nums.sort((a,b)=>a-b);

//     if(nums.length < 3) return Math.max(...nums);
    
//     nums.length= nums.length-2;
//     return Math.max(...nums);
// }

// console.log(thirdMax([-2147483648,-2147483648,-2147483648,-2147483648,1,1,1]));