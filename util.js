let fs = require("fs");
let path = require("path");

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function returnFolderName(fileName) {
    let extname = path.extname(fileName);
    extname = extname.slice(1);
    for (let key in types) {
        let totalExtension = types[key];
        for (let i = 0; i < totalExtension.length; i++) {
            if (totalExtension[i] == extname){
                return key;
            }
        }
    }
    return "others";
}

function copytothatType(assetPath, type, organizeddirPath) {
    // organized_dir -> type wala folder create
    let destFolderPath = path.join(organizeddirPath, type);
    if (!fs.existsSync(destFolderPath) ) {
        fs.mkdirSync(destFolderPath)
    }
    let originalName = path.basename(assetPath);
    let destFilePath = path.join(destFolderPath, originalName);
    console.log(assetPath);
    console.log(destFilePath);
    fs.copyFileSync(assetPath, destFilePath);
    fs.unlinkSync(assetPath);
    // content copy
    console.log(originalName, "file copied to ", type);

}

function isFile(assetPath) {
    // file or folder
    // console.log(assetPath);
    let ans = fs.lstatSync(assetPath).isFile();
    return ans;
}

module.exports={
    utilFolderFn:returnFolderName,
    utilCopyFn: copytothatType,
    utilIsFileFn:isFile
}

// organize
            // organizedFiles
            //         media
            //         archives
            //         documents
            //         app
            //         other