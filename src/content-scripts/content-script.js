document.body.addEventListener('mouseup', function () {
    let webAddress = document.location.href;

    let title = document.getElementsByTagName('title')[0].innerText;
    let text = window.getSelection()
    if (text.toString().length > 0) {
        // msg = text.toString();
        // chrome.runtime.sendMessage({ "title": title, "note": msg, "address": webAddress });
        console.log("err ****" + title);

    }
    else false;

}, false)

