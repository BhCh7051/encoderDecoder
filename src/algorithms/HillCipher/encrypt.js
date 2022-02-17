/* ==========================================================================
 *
 *    Use:
 *    "Hello World!".encrypt(4)
 *    => "HWe o!lordll"
 *
 * ========================================================================== */

String.prototype.hillEncrypt = function (keys) {
    var plaintext = this.toLowerCase().replace(/[^a-z]/g, "");
    // var k = keys.toLowerCase().replace(/[^0-9 ]/g, "");
    var output = "";
    // console.log(keys)
    // keys = k.split(" ");
    // do some error checking
    if (plaintext.length < 1) {
        alert("please enter some plaintext (letters and numbers only)");
        return;
    }
    let i = 0;
    if (plaintext.length % 2 === 1) {
        plaintext = plaintext + "x";
    }
    if (keys.length !== 4) {
        alert("key should consist of 4 integers");
        return;
    }
    for (i = 0; i < 4; i++)
        keys[i] = keys[i] % 26;

    for (i = 0; i < plaintext.length; i += 2) {
        output += String.fromCharCode((keys[0] * (plaintext.charCodeAt(i) - 96) + keys[1] * (plaintext.charCodeAt(i + 1) - 96)) % 26 + 96);
        output += String.fromCharCode((keys[2] * (plaintext.charCodeAt(i) - 96) + keys[3] * (plaintext.charCodeAt(i + 1) - 96)) % 26 + 96);
    }
    return output;
}

export default (text, keys) => text.encrypt(keys);
