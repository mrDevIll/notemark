export const nameChromeStorage = "test5Node";


export function initExtension() {
    const bodyTag = window.document.getElementsByTagName("body");
    const vueDivContainer = document.createElement("div");
    vueDivContainer.id = "notemark-container";
    bodyTag[0].insertBefore(vueDivContainer, bodyTag[0].firstChild);

}