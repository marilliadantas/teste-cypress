const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // viewportWidth: 1920,
    // viewportHeight: 1080,
    // video: false,
    // screenshotOnRunFailure: false,
    // chromeWebSecurity: false,
    // baseUrl: "https://walkdog.vercel.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      requestMode: true,
      hideCredentials: true, 
      hideCredentialsOptions: {
	    body: ['username','password']
      }
    }
  },
})