import { resolve } from 'core-js/fn/promise';
import { getStatus } from './manageStatus';

const updateActive = async () => {
    let result = await getStatus(element)
}


export function addListenerToPageContent(element) {
    let { active, notes } = element;


    document.body.addEventListener('mouseup', function launchMenu(e) {
        let textSelected = window.getSelection();
        let updateActive = new Promise(
            function (resolve, reject) {
                getStatus(element);
                setTimeout(resolve(active), 10);
            }
        )
        updateActive.then(active => {

            if (textSelected.toString().trim().length > 0) {

                document.body.removeEventListener("mouseup", launchMenu);
                sendNote(notes);
            }

            else false;
        })

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

