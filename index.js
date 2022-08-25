#!/usr/bin/env node
const bf = require("brainfudge");
const args = process.argv;
args.shift(); args.shift(); // remove binary path and current directory
const fs = require("fs");

// Potato Script
// Brainf*** but with potatoes
// [  ]           <                      >                              +                                                                                                 
// chicken bucket chicken chicken bucket chicken chicken chicken bucket chicken chicken chicken chicken bucket chicken chicken chicken chicken chicken bucket
// -                                                      .             
// chicken chicken chicken chicken chicken chicken bucket chicken chicken chicken chicken chicken chicken chicken bucket
// ,
// chicken chicken chicken chicken chicken chicken chicken chicken bucket
// confusing right?

function convert(code) {
  return code.replaceAll("chicken chicken chicken chicken chicken chicken chicken chicken bucket ", ",")
    .replaceAll("chicken chicken chicken chicken chicken chicken chicken bucket ", ".")
    .replaceAll("chicken chicken chicken chicken chicken chicken bucket ", "-")
    .replaceAll("chicken chicken chicken chicken chicken bucket ", "+")
    .replaceAll("chicken chicken chicken chicken bucket ", ">")
    .replaceAll("chicken chicken chicken bucket", "<")
    .replaceAll("chicken chicken bucket ", "]")
    .replaceAll("chicken bucket ", "[");
}

function run(code) {
  output = "";
  bf.exec(code, (e, o) => {
    if (e) { throw e; }
    output = o;
  });
  return output;
}

if (args.length === 0) {
  console.log("Please provide a file to run");
  process.exit(0);
}

if (args[0] === ".") args[0] = "index.ps";
rawcode = fs.readFileSync("./" + args[0], { encoding: 'utf8', flag: 'r' });
console.log(run(convert(rawcode)));