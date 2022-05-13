let utilObj = require('../util');
let fs = require("fs");
function organizeFn(dirPath) {
    
    dirPath = dirPath != undefined ? dirPath : process.cwd();
    let content = fs.readdirSync(dirPath);
    console.log(content);
    for (let i = 0; i < content.length; i++) {
        let typeOfFolder = utilObj.utilFn(content[i]);
    }
}
module.exports={
    organizeFn:organizeFn
}