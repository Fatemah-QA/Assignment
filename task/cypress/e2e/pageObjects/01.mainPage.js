class pageObject {
  changeFontAndColor() {
    cy.wait(1000);
    cy.getIframe().within(() => {
      cy.get(
        '[class="sc-enMaOJ hbBQWD blockbuilder-layer blockbuilder-layer-selectable"]',
        { timeout: 8000 }
      )
        .eq(2)
        .should("be.visible")
        .and("have.css", "color", "rgb(255, 255, 255)")
        .click();
      cy.get('[class="sc-hbtGpV CUfHT dropdown-button"]')
        .eq(0)
        .should("be.visible")
        .click();
      cy.get('[id=":r2s:"]').click({ force: true });
      this.changeFontSize();
      this.changeColor();
    });
  }

  changeFontSize() {
    cy.get(
      '[class="blockbuilder-widget blockbuilder-font-size-widget"]'
    ).within(() => {
      cy.get('[class="sc-fFoeYl cogLub input-form"]')
        .should("be.visible")
        .type("{backspace}{backspace}50");
    });
  }

  changeColor() {
    cy.fixture("data").then((data) => {
      cy.get('[id="color-picker-trigger"]').should("be.visible").click();
      cy.get(data.changeColor).click();
    });
  }

  saveDesign() {
    cy.contains("Save Design").should("be.visible").click();
  }

  exportHTML() {
    cy.wait(4000);
    cy.contains("Export HTML").should("be.visible").click();
  }

  verifyChanges(consoleLogs) {
    cy.then(() => {
      cy.fixture("data").then((data) => {
        cy.log(`Console Output: ${consoleLogs}`);
        expect(
          consoleLogs.some((log) =>
            log.includes(data.changedPortion + '="' + data.changesMade + '"')
          )
        ).to.be.true;
      });
    });
  }
}

export default pageObject;
