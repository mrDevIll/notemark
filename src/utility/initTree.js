const dataTree = require('data-tree');
var node = dataTree.create();

export default function initTree() {
    chrome.storage.sync.get(['test3Node'], function (res) {

        if (isEmpty(res)) {
            chrome.storage.sync.set({ test3Node: node });
        }




    });

}


function isEmpty(obj) {
    return JSON.stringify(obj) === '{}';
}
