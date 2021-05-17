function arraysSort(arr) {
  // Напиши свой код здесь
    const copyA = [...arr];
    return copyA.sort(function (a,b){
       return Math.max(...a) - Math.max(...b);
    });

};

window.arraysSort = arraysSort;

export default arraysSort;
