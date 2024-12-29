class pageObject {
  changeFont() {
    cy.wait(1000);
    cy.getIframe().within(() => {
      cy.get(
        '[class="sc-enMaOJ hbBQWD blockbuilder-layer blockbuilder-layer-selectable"]',
        { timeout: 8000 }
      )
        .eq(2)
        .click();
      cy.get('[class="sc-hbtGpV CUfHT dropdown-button"]')
        .eq(0)
        .should("be.visible")
        .click();
      cy.get('[id=":r2s:"]').click({ force: true });
    });
  }

  changeColor() {
    //  .and("have.css", "color", "rgb(255, 255, 255)")
    //cy.get('[class="sc-cpjgyG cvnHWw circle-picker"]').should("be.visible");
    //cy.get('[ class="sc-fJAEDJ hLQVoj"]');
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
