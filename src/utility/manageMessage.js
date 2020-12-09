const nameChromeStorage = "test4Node";




export function insertMessage(node, name) {
    chrome.storage.sync.get(nameChromeStorage, function (r) {
        //TODO: check if name is exists as Key and add child instead of node if so
        const tmp = r.test4Node;
        const newNote = new Node(tmp);
        newNote.addNewNode(name, node);
        console.log(newNote);
        chrome.storage.sync.set({ [nameChromeStorage]: newNote.node })

    })
}


export function initMessage() {
    var note = new Node;
    chrome.storage.sync.get([nameChromeStorage], function (res) {

        if (isEmpty(res)) {
            chrome.storage.sync.set({ [nameChromeStorage]: note.node });
        }
    });

    function isEmpty(obj) {
        return JSON.stringify(obj) === '{}';
    }
}



class Node {

    constructor(obj) {
        this.node = obj || {};
    }

    addChildToExistingParent(name, child) {
        //TODO add validation to check if child and name is a valid 
        this.node[name].push(child)
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