let fs = require('fs');

exports.read = function (filepath,callback) {
  fs.readFile(filepath, 'utf8', function (err, data) {
    data = (data.length === 0 ? [] : JSON.parse(data));
    callback(data);
  })
};

exports.write = function (filepath, data, callback) {
  fs.writeFile(filepath, JSON.stringify(data), callback)
}
