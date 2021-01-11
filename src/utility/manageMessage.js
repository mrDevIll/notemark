import { nameChromeStorage } from "./initEnv";
import { Node } from "./Node";

export function deleteNode(name) {
    chrome.storage.sync.get(nameChromeStorage, function (r) {
        //TODO: check if name exists as Key
        const tmp = r[nameChromeStorage];
        const oldNote = new Node(tmp);
        oldNote.deleteNode(name);
        chrome.storage.sync.set({ [nameChromeStorage]: oldNote.node })

    })
}
export function deleteNodeChild(name, id) {
    chrome.storage.sync.get(nameChromeStorage, function (r) {
        //TODO: check if name exists as Key
        const tmp = r[nameChromeStorage];
        const oldNote = new Node(tmp);
        oldNote.deleteChildFromNode(name, id);
        chrome.storage.sync.set({ [nameChromeStorage]: oldNote.node })

    })
}

export function insertMessage(name, node) {
    chrome.storage.sync.get(nameChromeStorage, function (r) {
        const tmp = r[nameChromeStorage];
        const oldNode = new Node(tmp);

        Object.keys(oldNode.node).includes(name) ? oldNode.addChildToExistingParent(name, node) : oldNode.addNewNode(name, node);

        chrome.storage.sync.set({ [nameChromeStorage]: oldNode.node })

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



