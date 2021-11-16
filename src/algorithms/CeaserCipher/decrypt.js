/********************************
 *
 * Use: "Lipps$[svph%".decrypt(4)
 * => 'Hello World!'
 *
 ********************************/
String.prototype.Ceaserdecrypt = function (n) {
    let out = "";
    for (let i of this) {
        out += String.fromCharCode(i.charCodeAt(0) - n);
    }
    return out;
};
module.exports = (text, n) => text.decrypt(n);
