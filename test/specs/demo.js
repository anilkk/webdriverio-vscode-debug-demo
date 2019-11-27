const assert = require("assert");

describe("wdio-vscode-debug-demo.netlify.com page", () => {
  it("should have the right header", async () => {
    await browser.url("https://wdio-vscode-debug-demo.netlify.com/");
    const title = await browser.getTitle();
    assert.strictEqual(title, "DEMO OF WEBDRIVERIO DEBUG WITH VSCODE");
  });
});
