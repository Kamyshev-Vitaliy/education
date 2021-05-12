function stringToType(str) {
    // Напиши свой код здесь
    if(Number(str)){
        return Number(str);
    }
    switch (str) {
        case 'null':
            return null;
        case 'undefined':
            return undefined;
        case 'true':
            return true;
        case 'false':
            return false;
        case '':
            return '';
        case '0':
            return 0;
        default:
            return str;
    }
};

window.stringToType = stringToType;

export default stringToType;
