const { Given, Then, When } = require('@cucumber/cucumber');
const { expect } = require('chai');
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
  const fullName = $('#userName')
  fullName.setValue('Joycelind')
});

When('fill enail', function () {
  // Write code here that turns the phrase above into concrete actions
  const email = $('#userEmail')
  email.setValue('joy@test.com')
});

When('set current address', function () {
  // Write code here that turns the phrase above into concrete actions
  const currentAddress = $('#currentAddress')
  currentAddress.setValue('Plaza Bank Index')
});

When('set permanent address', function () {
  // Write code here that turns the phrase above into concrete actions
  const permanentAddress = $('#permanentAddress')
  permanentAddress.setValue('Pantai Indah Kapuk')
});

Then('click submit button', function () {
  // Write code here that turns the phrase above into concrete actions
  const submitButton = $('#submit')
  submitButton.click()
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
})