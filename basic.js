function printHelp(){
    console.log("basic.js (c) Iftakhar");
    console.log("");
    console.log("usage:");
    console.log("--help          print this help");
    console.log("--file={NAME}   read the fale of {NAME} nd output");
    console.log("");
}

var args = require("minimist")(process.argv.slice(2),{string:"file"});

if(args.help || !args.file){
    printHelp();
    process.exit(1);
}

var hello = require("./helloworld.js");

var contents = hello.say(args.file);

console.log(contents);
