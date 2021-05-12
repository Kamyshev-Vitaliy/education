function sumCheck(a, b) {
  // Напиши свой код здесь
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }else
        throw 'Wrong arguments type!';
}

window.sumCheck = sumCheck;

export default sumCheck;
