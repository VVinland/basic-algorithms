// Сложность O(V+E);

// для дерева
// const dfs = (tree, start) => {
//     const stack = [start]

//     while (stack.length > 0) {
//         const vert = stack.pop();

//         if (tree[vert]) {
//             stack.push(...tree[vert]);
//         }
//     }
// }

// для графа 
const dfs = (graph, start) => {
    const visited = {};
    const stack = [start];

    while (stack.length > 0) {
        const vert = stack.shift();

        if (!visited[vert]) {
            visited[vert] = true;
        }else continue;

        if (graph[vert]) {
            for (const subVert of graph[vert]) {
                if (!visited[subVert]) {
                    stack.push(subVert);
                }
            }
        }
    }
}