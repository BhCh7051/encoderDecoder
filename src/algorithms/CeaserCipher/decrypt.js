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
export default (text, n) => text.decrypt(n);
