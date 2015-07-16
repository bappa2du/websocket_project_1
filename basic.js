function printHelp(){
    console.log("basic.js (c) Iftakhar");
    console.log("");
    console.log("usage:");
    console.log("--help      print this help");
    console.log("--name      say hello to {NAME}");
    console.log("");
}

var args = require("minimist")(process.argv.slice(2),{string:"name"});

if(args.help || !args.name){
    printHelp();
    process.exit();
}

var name = args.name;

console.log("welcome home "+ name);