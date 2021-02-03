export const nameChromeStorage = "notemark-extension";
export const idVueApp = "notemark-container"
export const appStatus = "notemark-status";



export function initExtension() {
    const bodyTag = window.document.getElementsByTagName("body");
    const vueDivContainer = document.createElement("div");
    vueDivContainer.id = idVueApp;
    bodyTag[0].insertBefore(vueDivContainer, bodyTag[0].firstChild);

}