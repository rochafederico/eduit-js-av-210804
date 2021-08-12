// var miRegex = new RegExp("a", "i");
// var miRegex = /asd/i; // i = no distingue entre mayusculas y miniscula
// var miRegex = /aSd/m; 
// var miRegex = /[a]{1,2}/g; 
// var miRegex = /[a]{2,}/g; 
// var miRegex = /[a-z]{2,}/g; 
// var miRegex = /[A-Z]{2,}/g; 
// var miRegex = /[9]{2,}/g; 
// var miRegex = /[\d]{2,}/g; // /[0-9']{2,}/g; 
// var miRegex = /[\D]{2,}/g;
// var miRegex = /[^a]{1,}/g;
// var miRegex = /[^0-9']{1,}/g;
// var miRegex = /[\w]{2,}/g; // a-zA-Z0-9
// var miRegex = /[\W]{2,}/g; // negacion a-zA-Z0-9
// var miRegex = /[\w]{1,}.[\w]{1,}/g; // comodin
// var miRegex = /[\s]{1,}/g; // espacios, saltos de linea, etc.
// var miRegex = /[\S]{1,}/g; // negacion espacios, saltos de linea, etc.
var miRegex = /[\S]{1,}$/g; // negacion espacios, saltos de linea, etc.

console.log(miRegex.test("aaaaasd as"));
// console.log(miRegex.exec("aaaaasd as"));

console.log("------")
const resultado = "aaa99aasd as      asdasd,.asdasdas".matchAll(miRegex);
for (const item of resultado) {
    console.log(item)
}

const textoJunto = "Juan,Pepe;Laura,Patri/cia";
console.log(textoJunto.split(','));
console.log(textoJunto.split(/[,;\/]/));
