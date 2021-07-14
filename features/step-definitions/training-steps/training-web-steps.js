require('app-module-path').addPath(process.cwd());

const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require('chai')
const uploadPage = require('features/pageobjects/upload-page')

  Given('go to {string}', function (web) {
    browser.url(web)
  });

  When('fill username', function () {
    const fullName = $('#userName')
    fullName.setValue('Ridwan Arifiandi')
    driver.pause(5000)

  });

  When('fill email', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('set current address', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('set fixed address', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('click submit button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('set status to {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    if(string !== page.status.getText()){
      link.click()
    }
  });

  When('upload document', function () {
    uploadPage.uploadFile()
    driver.pause(5000)
  });  

  Then('file uploaded', function () {
    expect(uploadPage.uploadedFilePath).to.exist
  });