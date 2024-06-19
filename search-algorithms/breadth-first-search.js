// Сложность O(V + E);

// для дерева
// const bfs = (tree, start) => {
//     const queue = [start];

//     while (queue.length > 0) {
//         const vert = queue.shift();

//         if (tree[vert]) {
//             queue.push(...tree[vert]);
//         }
//     }
// }

// для графа

// const bfs = (graph, start) => {
//     const visited = {};
//     const queue = [start];

//     while (queue.length > 0) {
//         const vert = queue.shift();

//         if (!visited[vert]) {
//             visited[vert] = true;
//         } else continue;

//         if (graph[vert]) {
//             for (const subVert of graph[vert]) {
//                 if (!visited[subVert]) {
//                     queue.push(subVert);
//                 }
//             }
//         }
//     }
// }

function get(arr) {
    while (arr.length > 0) {
        for(let i =0; i<arr.length; i++){
            return;
        }
    }

    return arr;
}

console.log(get([1,2,3]))