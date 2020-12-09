export function initExtension() {
    const bodyTag = window.document.getElementsByTagName("body");
    const vueDivContainer = document.createElement("div");
    vueDivContainer.id = "noteMarkDiv";
    bodyTag[0].insertBefore(vueDivContainer, bodyTag[0].firstChild);

}
