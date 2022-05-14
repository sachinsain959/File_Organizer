let fs = require("fs");
let path = require("path");
let utilObj = require("../util");
function organizeFn(dirPath) {
    dirPath = dirPath != undefined ? dirPath : process.cwd()
    organizeHelper(dirPath);
}
function organizeHelper(dirPath) {
    // create an organized_dir in dirPath
    let organizeddirPath = path.join(dirPath, "organized_dir");
    let doesorganizedFolderExist = fs.existsSync(organizeddirPath);
    if (doesorganizedFolderExist == false) {
        fs.mkdirSync(organizeddirPath)
    }
    let names = fs.readdirSync(dirPath);
    for (let i = 0; i < names.length; i++) {
        let assetPath = path.join(dirPath, names[i]);
        let ans = utilObj.utilIsFileFn(assetPath);
        if (ans == true) {
            let type = utilObj.utilFolderFn(assetPath);
            utilObj.utilCopyFn(assetPath, type, organizeddirPath);
        }
    }
}
module.exports={
    organizeFn:organizeFn
}