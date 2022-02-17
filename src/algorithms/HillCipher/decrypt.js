/* ==========================================================================
 *
 *    Use:
 *    "HWe o!lordll".decrypt(4)
 *    => "Hello World!"
 *
 * ========================================================================== */

String.prototype.hillDecrypt = function hillDecrypt(keys) {
    // console.log(keys);

    var ciphertext = this.toLowerCase();
    // keys = keys.split(" ");
    // do some error checking
    if (ciphertext.length < 1) {
        alert("please enter some ciphertext (letters only, numbers should be spelled)");
        return;
    }
    if (ciphertext.length % 2 === 1) {
        alert("Ciphertext is not divisible by 2 (wrong algorithm?)");
        return;
    }
    if (keys.length !== 4) {
        alert("Key should consist of 4 integers");
        return;
    }
    for (i = 0; i < 4; i++)
        keys[i] = keys[i] % 26;
    // calc inv matrix
    var det = keys[0] * keys[3] - keys[1] * keys[2];
    // det = ((det % 26) + 26) % 26;
    var di = 0;
    for (var i = 0; i < 26; i++) {
        if ((det * i) % 26 === 1) di = i;
    }
    if (di === 0) {
        alert("Could not Invert, Try different Key(Determinant 0 or Determinant and 26 not co-prime)");
        return;
    }
    var ikeys = new Array(4);
    ikeys[0] = (di * keys[3]) % 26;
    ikeys[1] = (-1 * di * keys[1]) % 26;
    ikeys[2] = (-1 * di * keys[2]) % 26;
    ikeys[3] = di * keys[0];
    for (i = 0; i < 4; i++) {
        if (ikeys[i] < 0) ikeys[i] += 26;
    }
    let plaintext = "";
    for (i = 0; i < ciphertext.length; i += 2) {
        plaintext += String.fromCharCode((ikeys[0] * (ciphertext.charCodeAt(i) - 96) + ikeys[1] * (ciphertext.charCodeAt(i + 1) - 96)) % 26 + 96);
        plaintext += String.fromCharCode((ikeys[2] * (ciphertext.charCodeAt(i) - 96) + ikeys[3] * (ciphertext.charCodeAt(i + 1) - 96)) % 26 + 96);
    }

    return plaintext;
};

module.exports = (text, keys) => text.decrypt(keys);
