const sumArg2 = function() {
    let element = 0;
    for (let index = 2; index < process.argv.length; index++) {
        element += Number(process.argv[index]);
    }
    return element;
};

console.log(sumArg2());