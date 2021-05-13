function fullSum(...args) {
    // Напиши свой код здесь
    return args.reduce(function (acc, curVal) {
        if (typeof curVal !== 'number') throw new Error('Wrong Argument Type')
        return acc + curVal;
    }, 0);
}

window.fullSum = fullSum;

export default fullSum;
