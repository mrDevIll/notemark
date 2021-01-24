import { resolve } from "core-js/fn/promise";
import { appStatus } from "./initEnv";


export function getStatus(value) {
    chrome.storage.sync.get([appStatus], function (res) {
        if (isEmpty(res)) {
            chrome.storage.sync.set({ [appStatus]: false });
            value.active = false;
        } else { value.active = res[[appStatus]]; }

    })

    function isEmpty(obj) {
        return JSON.stringify(obj) === '{}';
    }
}

export function setStatus(value) {
    chrome.storage.sync.set({ [appStatus]: value });
}



