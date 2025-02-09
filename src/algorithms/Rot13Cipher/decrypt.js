/* ==========================================================================
 *
 *    Use:
 *    'Uryyb Jbeyq!'.encrypt()
 *    => 'Hello World!'
 *
 * ========================================================================== */

String.prototype.Rot13decrypt = function () {
    let output = "";
    let alphabet = {};

    const chr = (x) => String.fromCharCode(x);

    for (let i = 0; i < 26; i++) {
        alphabet[chr(65 + i)] = chr(65 + ((i + 13) % 26));
        alphabet[chr(97 + i)] = chr(97 + ((i + 13) % 26));
    }

    for (let char of this) {
        if (char in alphabet) output += alphabet[char];
        else output += char;
    }

    return output;
};

export default (text) => text.decrypt();
