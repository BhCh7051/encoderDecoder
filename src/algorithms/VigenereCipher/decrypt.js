String.prototype.Vigeneredecrypt = function (key) {
    function ordA(a) {
        return a.charCodeAt(0) - 97;
    }

    let i = 0;
    let b;
    key = key.toLowerCase().replace(/[^a-z]/g, '');
    return this.toLowerCase().replace(/[^a-z]/g, '').replace(/[a-z]/g, a => {
        b = key[i++ % key.length];
        return String.fromCharCode(((ordA(a) + 26 - ordA(b)) % 26 + 97));
    });
}
export default (text, key) => text.decrypt(key)
