const assert = require("assert");

describe("wdio-vscode-debug-demo.netlify.com page", async () => {
  it("should have the right header", async () => {
    await browser.url("https://wdio-vscode-debug-demo.netlify.com/");
    const header = await $("[data-e2e-test='page-header']");
    const headerText = await header.getText();
    assert.strictEqual(headerText, "DEMO OF WEBDRIVERIO DEBUG WITH VSCODE");
  });
});
