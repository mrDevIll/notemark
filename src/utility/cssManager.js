import createClass from './dynamicCss/createCssClass'

const cliccable = "cursor: pointer;";
const closeIcon = "color: red; position: absolute; top: -0.5rem; right: -0.5rem; background-color: white; border-radius: 50%; padding: 1px; opacity: 0.9;";
const closeIconHover = "color: orangered; opacity: 1";
const shadow = "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);";
const notemarkMiniMenuSelected = "position: absolute; z-index: 10000 !important; padding: 0.4rem 0.8rem; background-color: #7c4dff; border: 0.1rem solid #bdbdbd; border-radius: 3 %; opacity: 0.95;";
const notemarkMiniMenuSelectedIcon = "margin-right: 0.5rem; color: white;";



export const addCssSelectors = () => {
    createClass(".cliccable", cliccable)
    createClass(".close-icon", closeIcon);
    createClass(".close-icon:hover", closeIconHover);
    createClass(".shadow", shadow);
    createClass(".notemark-mini-menu-selected", notemarkMiniMenuSelected);
    createClass(".notemark-mini-menu-selected-icon", notemarkMiniMenuSelectedIcon);
    createClass(".notemark-mini-menu-selected-icon:first-child", "margin-right: 1rem;");
    createClass(".notemark-mini-menu-selected-noteInput", "padding: 0 0.2rem; width: 8rem;")
    createClass(".notemark-mini-menu-selected-icon:hover", "color: #b1b1b1; transform: scale(1.2);")

}