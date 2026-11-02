var assert = require("assert");
var YN = require("./yn-order.js");

assert.strictEqual(YN.isBinaryYNQuestion({
  type: "single",
  options: [{ id: "A", text: "Yes", textZh: "是" }, { id: "B", text: "No", textZh: "否" }],
}), true);
assert.strictEqual(YN.isBinaryYNQuestion({
  type: "choice",
  options: [{ id: "A", textEn: "True" }, { id: "B", textEn: "False" }],
}), true);
assert.strictEqual(YN.keepOptionOrder({
  type: "single",
  options: [{ id: "A", textZh: "是" }, { id: "B", textZh: "否" }],
}), true);
assert.strictEqual(YN.isBinaryYNQuestion({
  type: "single",
  options: [{ id: "A", text: "Azure OpenAI" }, { id: "B", text: "Azure AI Search" }, { id: "C", text: "No" }],
}), false);
assert.strictEqual(YN.isBinaryYNQuestion({
  type: "multi",
  options: [{ id: "A", text: "Yes" }, { id: "B", text: "No" }],
}), false);
assert.strictEqual(YN.keepOptionOrder({ type: "hotspot", boxes: [{ id: "b1" }] }), true);
assert.strictEqual(YN.isYNToken("是") && YN.isYNToken("False") && !YN.isYNToken("Azure"), true);

console.log("yn-order tests ok");
