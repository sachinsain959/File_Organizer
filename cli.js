#!/usr/bin/env node  //shebang syntax for node stack overflow

//objects(module.exporst wale)
let helpObj=require('./commands/help');
let treeObj=require('./commands/tree');
let organiseObj=require('./commands/organize');

let input=process.argv.slice(2);
let command=input[0];
let dirPath=input[1];


switch(command){
    case "help":
        helpObj.helpFn();
        break;
    case "tree":
        treeObj.treeFn(dirPath);
        break;
    case "organize":
        organiseObj.organizeFn(dirPath);
        break;
    default:
        console.log("Wrong command.Type help to see all the commands");    
}