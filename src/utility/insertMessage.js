


export default function insertMessage() {
    const nodeName = "test3Node"
    chrome.storage.sync.get([nodeName], function (res) {
        console.log("res before: ", res)
        var node = Object.assign({}, res);
        console.log("node before", node);
        node = node.test3Node
        console.log("node after: ", node._currentNode);
        node.insert(100)
        // console.log("res after:  ", res)
        console.log("node after: ", node);

    })
}