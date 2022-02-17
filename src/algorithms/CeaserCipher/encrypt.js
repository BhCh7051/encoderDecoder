/********************************
 *
 * Use: "Hello World!".encrypt(4)
 * => 'Lipps$[svph%'
 *
 ********************************/
String.prototype.Ceaserencrypt = function (n) {
  let out = "";
  for (let i of this) {
    out += String.fromCharCode(i.charCodeAt(0) + n);
  }
  return out;
};
export default (text, n) => text.encrypt(n);
