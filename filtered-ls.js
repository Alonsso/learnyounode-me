const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, list) => {
    list.filter((item) => {
        if (path.extname(item) == "." + process.argv[3]) {
            console.log(item);
        }
    });
});