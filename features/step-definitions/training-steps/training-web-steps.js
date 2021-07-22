require('app-module-path').addPath(process.cwd());

const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require('chai')
const uploadPage = require('features/pageobjects/upload-page')
const textBoxPage = require('features/pageobjects/text-box')

  Given('go to {string}', function (web) {
    browser.url(web)
  });

  When('fill username', function () {
    textBoxPage.fullName.setValue('Ridwan Arifiandi')
  });

  When('fill email', function () {
    textBoxPage.emailField.setValue('emailku@gmail.com')
  });

  When('set current address', function () {
    textBoxPage.currentAddress.setValue('RT 3 RW5 jl.In aja dulu')
  });

  When('set fixed address', function () {
    textBoxPage.permanentAddress.setValue('RT 3 RW5 jl.In aja dulu')
  });

  Then('click submit button', function () {
    textBoxPage.submitBtn.scrollIntoView()
    textBoxPage.submitBtn.click()
    browser.pause(5000);
  });

  When('set status to {string}', function (string) {
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
    expect(uploadPage.uploadedFilePath.getText()).to.include('test.jpg')
  });