const mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], (err, data) => {
    data.forEach(element => {
        console.log(element);
    });
});