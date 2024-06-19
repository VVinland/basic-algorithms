const graph = {
    '0': [[0, 1, 100]],
    '1': [[1, 2, 100], [1, 3, 600]]
}

const obj = {};

for (let key in graph) {
    const vert = transformGraph(key, graph[key]);
    obj = { ...obj, ...vert };
}

function transformGraph(name, value) {
    const vert = {};
    for (let i = 0; i < value.length; i++) {
        vert[name] = { ...vert[name], [value[i][1]]: value[i][2] };
    }
    return vert;
};

console.log(obj);
// return vert;

// {
//     '0': {'1':100}
//     '1':  {'2': 100,  '3': 600},
// '0': [ [ 0, 1, 100 ] ],
// '1': [ [ 1, 2, 100 ], [ 1, 3, 600 ] ],
//   }