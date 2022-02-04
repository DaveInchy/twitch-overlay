
import Style from './Style';

const addStyles = (addon, current = {}) => {
    return new Style(`
        ${addon}
    `, current);
}

const addClasses = (addon, current = "") => {
    return `
        ${addon}
        ${current.toString()}
    `;
}

export { addStyles, addClasses };