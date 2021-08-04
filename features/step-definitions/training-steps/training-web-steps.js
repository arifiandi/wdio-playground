const { Given, Then, When } = require('@cucumber/cucumber');
const { expect } = require('chai');
const textboxPage = require('../../pageobjects/textbox');
const uploadPage = require('../../pageobjects/upload.page');
// const path = require('app-module-path').addPath(process.cwd());

Given('go to website', function () {
  // Write code here that turns the phrase above into concrete actions
  // return 'pending';
  browser.url('https://www.google.com')
  driver.pause(5000)
});

Given('go to {string}', function (web) {
  // Write code here that turns the phrase above into concrete actions
  browser.url(web)
});

// Fill form

When('fill username', function () {
  // Write code here that turns the phrase above into concrete actions
  textboxPage.fullNameField.setValue('Joycelind')
});

// add assertion
// Then('username is filled', function() {

// })

When('fill email', function () {
  // Write code here that turns the phrase above into concrete actions
  textboxPage.emailField.setValue('joy@test.com')
});

When('set current address', function () {
  // Write code here that turns the phrase above into concrete actions
  textboxPage.currentAddressField.setValue('Plaza Bank Index')
});

When('set permanent address', function () {
  // Write code here that turns the phrase above into concrete actions
  textboxPage.permanentAddressField.setValue('Pantai Indah Kapuk')
});

Then('click submit button', function () {
  // Write code here that turns the phrase above into concrete actions
  textboxPage.submitButton.scrollIntoView()
  textboxPage.submitButton.click()
  driver.pause(5000)
});

// Radio Button
Then ('click radio button', function() {
  // called using multiple elements using index
  const yesRadioButton = $$('.custom-control-label')[0]
  yesRadioButton.click()
})

// Upload Document
Then ('upload document', function() {
  uploadPage.uploadFile()
  driver.pause(5000)
})

Then ('file uploaded', function() {
  // using chai
  expect(uploadPage.uploadFilePath).to.exist
  expect(uploadPage.uploadFilePath.getText()).to.include('image.png')
})