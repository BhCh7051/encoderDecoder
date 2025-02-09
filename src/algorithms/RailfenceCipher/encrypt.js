/* ==========================================================================
 *
 *    Use:
 *    "Hello World!".encrypt(4)
 *    => "HWe o!lordll"
 *
 * ========================================================================== */

String.prototype.Railfenceencrypt = function (rows = 3) {
    rows = rows || 3;
    let fence = [];
    for (let i = 0; i < rows; i++) fence.push([]);
    let rail = 0;
    let change = 1;

    for (let char of this.split("")) {
        fence[rail].push(char);
        rail += change;

        if (rail === rows - 1 || rail === 0) change = -change;
    }

    let r = "";
    for (let rail of fence) r += rail.join("");

    return r;
};

export default (text, rows = 3) => text.encrypt(rows);
