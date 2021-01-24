export class Node {

    constructor(obj) {
        this.node = obj || {};
    }

    addChildToExistingParent(name, child) {
        //TODO add validation to check if child and name is a valid 
        this.node[name].push(child);
    }
    deleteAllNodes() {
        this.node = {};
    }
    deleteNode(name) {
        //TODO validate if node name exists
        const obj = Object.assign({}, this.node);
        delete obj[name];
        this.node = obj;
    }
    deleteChildFromNode(nodeName, childId) {
        //TODO add validation
        const branch = [...this.node[nodeName]
            .filter(child => child.id != childId)];

        this.node[nodeName] = branch;
    }
    addNewNode(name, child) {
        //TODO add validation to check if child is a valid object
        const newEl = [child];
        this.node[name] = newEl;
    }
}
