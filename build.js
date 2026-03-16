const fs = require("fs");
const JavaScriptObfuscator = require("javascript-obfuscator");
const file = "page/profile.html";
let html = fs.readFileSync(file,"utf8");
html = html.replace(
/<script>([\s\S]*?)<\/script>/g,
(match,js)=>{
const obf = JavaScriptObfuscator.obfuscate(js,{
compact:true,
controlFlowFlattening:true,
stringArray:true,
stringArrayEncoding:["base64"]
});
return `<script>${obf.getObfuscatedCode()}</script>`
}
);
fs.writeFileSync("fk.obf.html",html);
console.log("Obfuscate xong");