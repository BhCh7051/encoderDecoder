String.prototype.Affinedecrypt = function (a, b) {
  // const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  // const keyArray = this
  // console.log(keyArray)
  // (key).split("-");
  let msg = "";
  let a_inv = 0;
  let flag = 0;
  let cipher = this;
  //Find a^-1 (the multiplicative inverse of a
  //in the group of integers modulo m.)
  for (let i = 0; i < 26; i++) {
    flag = (a * i) % 26;

    //Check if (a*i)%26 == 1,
    //then i will be the multiplicative inverse of a
    if (flag === 1) {
      a_inv = i;
    }
  }
  for (let i = 0; i < this.length; i++) {
    // console.log(a_inv);
    // console.log(cipher[i]);
    // console.log(cipher.charCodeAt(i));
    // console.log((((a_inv * ((cipher[i]+65 - b)) % 26)) + 65));
    if (cipher[i] !== " ")
      msg =
          msg +
          String.fromCharCode(
              ((a_inv * (cipher.charCodeAt(i) - 97 + 26 - b)) % 26) + 97
          );
    //else simply append space character
    else msg += cipher[i];
  }
  // for (let i in keyArray) {
  //   keyArray[i] = parseInt(keyArray[i]);
  // }
  // let array = [];
  // for (let i of this) {
  //   array.push(alphabet.indexOf(i));
  // }
  // let output = "";
  // for (var i = 0; i < array.length; i++) {
  //   const image = alphabet[(keyArray[i] * 26 + array[i] - b) / a];
  //   output += image;
  // }
  // console.log(msg);
  return msg;
};
module.exports = (text, a, b) => text.decrypt(a, b);
