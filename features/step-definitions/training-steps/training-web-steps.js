require('app-module-path').addPath(process.cwd());
const {Given, When, Then} = require('@cucumber/cucumber')
const {expect} = require('chai')
const uploadPage = require('features/pageobjects/upload-page')
const textBoxPage = require('features/pageobjects/textbox-page')

Given('go to {string}', function(web) {
    browser.url(web)
  });

    When('input name', function () {
      textBoxPage.fullName.setValue('Hizkia Sondakh')
    });
  
    When('input email', function () {
      // Write code here that turns the phrase above into concrete actions
      // return 'pending';
      textBoxPage.emailField.setValue('hizkia@mail.com')
    });
  
    When('input current address', function () {
      // Write code here that turns the phrase above into concrete actions
      // return 'pending';
      textBoxPage.currentAddress.setValue('Jakarta Selata, DKI Jakarta')
     
    });

    When('input permanent address', function () {
      // Write code here that turns the phrase above into concrete actions
      // return 'pending';
      textBoxPage.permanentAddress.setValue('Jakarta, DKI Jakarta, Indonesia')
    });
  
  Then('click submit', function () {
      // Write code here that turns the phrase above into concrete actions
      // return 'pending';
      // const submit = $('#submit')
      // submit.click()
      textBoxPage.submitBtn.scrollIntoView();
      textBoxPage.submitBtn.click();
      driver.pause(5000)
    });
  

    When('upload document', function () {
      uploadPage.uploadFile()
      driver.pause(5000)
    });
    

    Then('file uploaded', function () {
      expect(uploadPage.uploadedFilePath).to.exist
      expect(uploadPage.uploadedFilePath.getText()).to.include('DarkseidRender.png')
    });