var fs = require('fs');

module.exports.readFromFile = function (filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
}