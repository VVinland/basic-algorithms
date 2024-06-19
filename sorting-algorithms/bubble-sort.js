// Сложность: O(n^2);


// function bubbleSort(arr){

//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j < arr.length-i; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//             }
//         }
//     }

//     return arr;
// }


// console.log(bubbleSort([2,3,10,6,8,1])); // 1,2,3,6,8,10


function heightChecker(heights) {
    const expected = [...heights];

    for (let i = 0; i < expected.length; i++) {
        for (let j = 0; j < expected.length - i; j++) {
            if (expected[j] > expected[j + 1]) {
                [[expected[j]], [expected[j + 1]]] = [[expected[j + 1]], [expected[j]]]
            }
        }
    }

    let count = heights.reduce((prevValue, curr, index) => {
        if(curr !== expected[index]){
            return prevValue+=1;
        }

        return prevValue;
    },0);

    return count;
}

console.log(heightChecker([5, 1, 2, 3, 4])); //5
console.log(heightChecker([1, 1, 4, 2, 1, 3])); //3
console.log(heightChecker([1, 2, 3, 4, 5])); //0