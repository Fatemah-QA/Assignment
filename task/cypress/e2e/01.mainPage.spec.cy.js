import pageObject from "./pageObjects/01.mainPage";

describe("Test Email Editor", () => {
  const obj = new pageObject();
  let consoleLogs = [];
  beforeEach("", () => {
    cy.getConsoleLog(consoleLogs);
    cy.visit("/");
  });
  it("Customize and Modify email content - Main Heading", () => {
    obj.changeFontAndColor();
    obj.saveDesign();
    obj.exportHTML();
    obj.verifyChanges(consoleLogs);
  });
});
