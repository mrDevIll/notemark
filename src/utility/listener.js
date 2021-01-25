import { getStatus } from './manageStatus';

export function addListenerToPageContent(element) {
    getStatus(element);
    let { notes } = element;
    document.body.addEventListener('mouseup', function launchMenu(e) {


        let textSelected = window.getSelection();
        if (textSelected.toString().trim().length > 0) {

            const checkStatus = new Promise(
                function (resolve, reject) {
                    getStatus(element);
                    setTimeout(resolve, 10, element.active)
                }
            )
            checkStatus.then(
                function (data) {
                    if (data) {
                        document.body.removeEventListener("mouseup", launchMenu);
                        sendNote(notes);
                    }
                }
            )
        }

        else false;

        function sendNote(notes) {
            let website = document.location.href;
            let title = document.getElementsByTagName('title')[0].innerText;
            const text = textSelected.toString();
            let evt = e;
            let position = { left: evt.pageX, top: evt.pageY };
            let id = element.length + text.split(" ")[0] + position.left;
            notes.push({ id, title, website, text, position })
        }
    }, false);


}

