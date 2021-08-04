require('app-module-path').addPath(process.cwd());

const {Given, Then, When} = require('@cucumber/cucumber')
const {expect} = require('chai')
const uploadPage = require('features/pageobjects/upload-page')
const textBox = require('features/pageobjects/text-box')
Given('go to website', function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    browser.url('http://www.google.com')
    driver.pause(5000)
  });

  Given('open {string}', function (url) {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    browser.url(url)
    driver.pause(1000)
  });

Then('input Full Name', function () {
      // Write code here that turns the phrase above into concrete actions
      // const fullName=$('#userName')
      textBox.fullName.setValue('Andre Test')
      // fullName.addValue('Andre Test')
      browser.pause(1000)
    });
  
Then('input Email', function () {
      // Write code here that turns the phrase above into concrete actions
      // const email=$('#userEmail')
      textBox.email.setValue('andre@mail.com')
      browser.pause(1000)
    });
  
Then('input Currect Address', function () {
      // Write code here that turns the phrase above into concrete actions
      // const currAddress=$('#currentAddress')
      textBox.currentAddress.setValue('Current address Andre')
      browser.pause(1000)
    });
  
Then('input Permanent Address', function () {
      // Write code here that turns the phrase above into concrete actions
      // const permanentAddress=$('#permanentAddress')
      textBox.permanentAddress.setValue('Permanent address Andre')
      browser.pause(1000)
    });
  
Then('click Submit', function () {
      // Write code here that turns the phrase above into concrete actions
      // const submit=$('#submit')
      textBox.submit.click()
      browser.pause(1000)
    });

When('upload document', function () {
      // Write code here that turns the phrase above into concrete actions
      uploadPage.uploadFile()
      browser.pause(1000)
    });

Then('file uploaded', function(){
      expect(uploadPage.uploadedFilePath).to.exist
      expect(uploadPage.uploadedFilePath.getText()).to.include('KTP_ACCEPTED.jpg')
});