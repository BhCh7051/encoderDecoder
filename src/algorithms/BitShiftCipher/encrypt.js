/* ==========================================================================
 *
 *  Use:
 *  "Hello World!".encrypt("key")
 *  => "WzM3NDQyLDUyNDg4LDU1ODc0LDU2MDcyLDU3NDEwLDE3MTYwLDQ1MTIyLDU3NjA4LDU4OTQ2LDU2MDcyLDUxNzc4XQ=="
 *
 * ========================================================================== */

String.prototype.encode = function () {
    let array = [];
    for (let i of this) {
        array.push(i.charCodeAt(0));
    }
    return array;
};
String.prototype.BitShiftencrypt = function (key) {
    const encoded = this.encode();
    const keyEncoded = key.encode();
    //console.log(keyEncoded);
    //console.log(encoded);
    let array = encoded.map((x) => {
        x = parseInt(x);
        for (let i of keyEncoded) {
            x = (x + 1) << i % 8;
        }
        keyEncoded.reverse();
        return x;
    });
    if (typeof btoa === "undefined") {
        global.btoa = (str) => new Buffer(str, "binary").toString("base64");
    }
    return btoa(JSON.stringify(array));
};

export default (text, key) => text.encrypt(key);
