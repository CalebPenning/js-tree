class Node {
    constructor(val, children=[]) {
        this.val = val
        this.children = children
    }
    
    findDFS(val) {
        // depth first search
        const stackToVisit = [this]
        // empty the node into an array
        while (stackToVisit.length) {
            // while there is an element in the array
            // assign current to the pop'd value
            let current = stackToVisit.pop()
            // If the val is what we're looking for,
            // return it
            if (current.val === val) return current
            // otherwise, add the current node's children to the stack
            // and repeat until found
            for (let child of current.children) 
                stackToVisit.push(child)
        }
    }

    findBFS(val) {
        // breadth first search
        const queueToVisit = [this]
        while (queueToVisit.length) {
            const current = queueToVisit.shift()
            console.log(`Visiting: ${current.val}`)
            if (current.val === val) return current
            for (let child of current.children) queueToVisit.push(child)
        }
    }

}

