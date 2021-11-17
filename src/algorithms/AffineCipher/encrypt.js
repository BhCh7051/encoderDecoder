String.prototype.Affineencrypt = function (a, b) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let array = [];
  for (let i of this) {
    if (i.toLowerCase() >= 'a' && i.toLowerCase() <= 'z')
      array.push(alphabet.indexOf(i.toLowerCase()));
    else
      array.push(i);
  }
  let output = "";
  let cle = [];
  let divtem = "";
  for (let i of array) {
    if (i <= 26) {
      const image = alphabet[(i * a + b) % 26];
      output += image;
    } else
      output += i;
    const div = Math.floor((i * a + b) / 26).toString();
    cle.push(div);
  }
  return output;
  // return [output, cle.join("-")];
};
module.exports = (text, a, b) => text.encrypt(a, b);
