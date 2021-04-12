const fs = require('fs');
const path = require('path');

module.export = fs.readFile(process.argv[2], process.argv[3], (callback) => {
    (err, data) => {
        if (err) return callback(errr);
        data.filter((item) => {
            if (path.extname(item) == "." + process.argv[3]) {
                console.log(item);
            }
        });
        callback(null, data);
    }
});