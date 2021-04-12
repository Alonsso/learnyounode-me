const fs = require('fs');
const path = require('path');

module.exports = (dirname, ext, callback) => {
    let fileext = "." + ext;
    fs.readdir(dirname, (err, data) => {
        if (err) return callback(err);
        let result = data.filter((item) => path.extname(item) == fileext);
        callback(null, result);
    });
};