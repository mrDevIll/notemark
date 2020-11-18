
var enableExtension = true;


startApp(enableExtension);


function startApp(enable) {
    if (enableExtension) {
        let textSelected;

        document.body.addEventListener('mouseup', function (e) {

            textSelected = window.getSelection();
            if (textSelected.toString().length > 0) {
                let website = document.location.href;
                let title = document.getElementsByTagName('title')[0].innerText;
                const data = textSelected.toString();
                let evt = e;
                giveFeedback(e);
                chrome.runtime.sendMessage({ "message": { title, website, data } });

            }
            else
                false;

        }, false);

        function giveFeedback(evt) {
            const css = (
                backGroundClr = "black",
                textClr = "white",
                boxPadding = ".2rem",
                boxBorderRadius = "3px",
                textFontSize = "0.8rem"
            ) => `position:absolute;
              background:${backGroundClr};
              color:${textClr};
              padding:${boxPadding};
              z-index:10000;
              border-radius:${boxBorderRadius}; 
              font-size:${textFontSize};
              box-shadow:3px 3px 3px rgba(0,0,0,.4);
              opacity:0;
              transition:opacity 0.3s;
              left:${evt.pageX + 15}px;
              top:${evt.pageY - 15}px`

            const element = document.createElement('div');
            element.style.cssText = css();

            element.innerHTML = 'copied';

            const addTransitionToElOpacity = window.setTimeout(() => {
                element.style.opacity = 1;
                window.setTimeout(() => element.style.opacity = 0, 800)
            }, 10)

            document.body.appendChild(element);

        }
    }

}