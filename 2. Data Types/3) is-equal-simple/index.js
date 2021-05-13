function isEqual(a, b) {
    // Напиши свой код здесь
    if (a === null || b === null) return false;
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let key of keysA) {
        if (!b.hasOwnProperty(key) || String(a[key]) !== String(b[key])) {
            return false;
        }
    }
    return true;

}

window.isEqual = isEqual;

export default isEqual;
