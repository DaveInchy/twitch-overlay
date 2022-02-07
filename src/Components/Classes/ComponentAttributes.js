// Descriptor: React friendly style/class constructors
// Author: Dadavinci
// Language: javascript
// Path: src\Components\Classes\Element.js

import Style from './Style';

const makeStyles = (addon = "") => {
    return (new Style(` ${addon} `), "").toString().replaceAll("  ", " ");
};

const makeClasses = (addon = "") => {
    return (` ${addon} `).toString().replaceAll("  ", " ");
};


const combineStyles = (addon = "", current) => {
    return (new Style(` ${addon} `), current).toString().replaceAll("  ", " ");
}

const combineClasses = (addon = "", current) => {
    return (` ${current} ${addon} `).toString().replaceAll("  ", " ");
}

export { makeStyles, makeClasses, combineStyles, combineClasses };