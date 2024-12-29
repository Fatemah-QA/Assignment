const { defineConfig } = require("cypress");
module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://react-email-editor-demo.netlify.app/",
  },
});
