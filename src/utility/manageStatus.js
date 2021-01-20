import { appStatus } from "./initEnv";


export class UpdateStatus {
    status = { isActive: false }

    getStatus() {
        chrome.storage.sync.get([appStatus], function (res) {
            res[[appStatus]];
        })

    }
    init(value) {
        chrome.storage.sync.get([appStatus], function (res) {
            if (isEmpty(res)) {
                chrome.storage.sync.set({ [appStatus]: value });
                console.log("init", value)
            }
        })
    }
}

function isEmpty(obj) {
    return JSON.stringify(obj) === '{}';
}


