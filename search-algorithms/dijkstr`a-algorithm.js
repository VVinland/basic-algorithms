//Сложность алгоритма: O(E * log V);

// const getLowestCostNode = (queue) => {
//     let min = Infinity;
//     let lowIndex;

//     for (let i = 0; i < queue.length; i++) {
//         const [, value] = queue[i];
//         if (value < min) {
//             min = value;
//             lowIndex = i;
//         }
//     }

//     const lowestNode = queue.splice(lowIndex, 1)[0];
//     return lowestNode;
// };

// const dijkstra = (graph, start) => {
//     const parents = {};
//     const costs = {};
//     const queue = [];

//     for (let vert in graph) {
//         if (vert === start) {
//             costs[vert] = 0;
//             queue.push([vert, 0]);
//         } else {
//             costs[vert] = Infinity;
//             queue.push([vert, Infinity]);
//         }
//         parents[vert] = null;
//     }

//     while (queue.length) {
//         const node = getLowestCostNode(queue);
//         let [vert, value] = node;
//         const cost = costs[vert];

//         if (node && value !== Infinity) {
//             for (let subNode in graph[vert]) {
//                 const nextSubNodeValue = graph[vert][subNode];
//                 const newCost = cost + nextSubNodeValue;
//                 if (costs[subNode] > newCost) {
//                     costs[subNode] = newCost;
//                     parents[subNode] = vert;
//                     queue.push([subNode, newCost]);
//                 }
//             }
//         }
//     }
// };

// const dijkstra = (graph, start) => {
//     const parents = {};
//     const costs = {};
//     const queue = [];

//     for (const vert in graph) {
//         if (vert === start) {
//             costs[vert] = 0;
//             queue.push([vert, costs[vert]]);
//         } else {
//             costs[vert] === Infinity;
//             queue.push([vert, costs[vert]]);
//         }
//         parents[vert] = null;
//     }

//     while (queue.length !== 0) {
//         const node = getLowestCostNode(queue);
//         const [vert, value] = node;
//         const cost = costs[vert];
//         if (node && value !== Infinity) {
//             for (let subNode in graph[vert]) {
//                 const nextSubNodeValue = graph[vert][subNode];
//                 const newCost = cost + nextSubNodeValue;
//                 if (costs[subNode] > newCost) {
//                     costs[subNode] = newCost;
//                     parents[subNode] = vert;
//                     queue.push([subNode, newCost]);
//                 }
//             }
//         }
//     }
// }

// function getLowestCostNode(queue) {
//     let min = Infinity;
//     let lowIndex = null;

//     for (let i = 0; i < queue.length; i++) {
//         const [, value] = queue[i];
//         if (value < min) {
//             min = value;
//             lowIndex = i;
//         }
//     }

//     const node = queue.splice(lowIndex, 1)[0];
//     return node;
// }

//задача
// n-количество городов
const findCheapestPrice = function (n, flights, src, dst, k) {
    const path = dijkstra(n, flights, src, dst);
};

const dijkstra = (cityCount, flights, start, end) => {
    const parents = {};
    const costs = {};
    const queue = [];

    const graph = createGraph(cityCount, flights);
    for (const vert in graph) {
        if (vert === String(start)) {
            costs[vert] = 0;
            queue.push([vert, 0])
        } else {
            costs[vert] = Infinity;
            queue.push([vert, Infinity])
        }
        parents[vert] = null;
    }

    while (queue.length !== 0) {
        const node = getLowestCostNode(queue);
        const [vert, value] = node;
        const cost = costs[vert];

        if (node && value !== Infinity) {
            for (let subNode in graph[vert]) {
                const nextSubNodeValue = graph[vert][subNode];
                const newCost = cost + nextSubNodeValue;
                if (costs[subNode] > newCost) {
                    costs[subNode] = newCost;
                    parents[subNode] = vert;
                    queue.push([subNode, newCost])
                }
            }
        }
    }
}

const createGraph = (cityCount, flights) => {
    const graph = {};
    for (let i = 0; i < cityCount; i++) {
        graph[i] = flights.filter(function (item) {
            if (item[0] === i) return true;
        })
    }
    let resultGraph = {}
    for (let key in graph) {

        const vert = transformGraph(key, graph[key]);
        resultGraph = { ...resultGraph, ...vert };
    }
    return resultGraph;
}

function transformGraph(name, value) {
    if (value.length === 0) return { [name]: {} };

    const vert = {};
    for (let i = 0; i < value.length; i++) {
        vert[name] = { ...vert[name], [value[i][1]]: value[i][2] };
    }
    return vert;
};

const getLowestCostNode = (arr) => {
    let min = Infinity;
    let lowIndex = null;

    for (let i = 0; i < arr.length; i++) {
        const [, value] = arr[i];
        if (value < min) {
            min = value;
            lowIndex = i
        };
    }

    const node = arr.splice(lowIndex, 1)[0];
    return node;
}