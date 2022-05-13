let fs = require("fs");
let path = require("path");
function treeFn(dirPath) {
    //process.cwd() is the direcotry in which node command is executed  where as the __dirname in which our current file is executed direcoty
    dirPath = dirPath != undefined ? dirPath : process.cwd();
    let folderKaContent = fs.readdirSync(dirPath);
    console.log(path.basename(dirPath));
    for (let i = 0; i < folderKaContent.length; i++) {
        console.log("\t" + folderKaContent[i]);
    }
}
module.exports={
    treeFn:treeFn
}