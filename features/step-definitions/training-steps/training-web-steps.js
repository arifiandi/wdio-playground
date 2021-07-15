require('app-module-path').addPath(process.cwd());
const {Given} = require('@cucumber/cucumber')
const {When} = require('@cucumber/cucumber')
const {Then} = require('@cucumber/cucumber')
const {expect} = require ('chai');
const uploadPage = require('features/pageobjects/upload-page')
const textBoxPage = require('features/pageobjects/text-box')

Given('go to {string}', function (web) {
  browser.url(web)
});

// Given('go to website', function () {
//     Write code here that turns the phrase above into concrete actions
//     return 'pending';
//    browser.url('http://www.google.com')
//    driver.pause(5000)
//   });

// Given('go to webToolsQA', function () {
//     // Write code here that turns the phrase above into concrete actions
//     // return 'pending';
//     browser.url('https://demoqa.com/text-box')
//   });

// Text Box Page
When('fill fullName', function () {
    //const fullName = $('#userName')
    textBoxPage.fullName.setValue('Tomy Gunawan')
    //driver.pause(5000)
    });

When('fill email', function () {
      // Write code here that turns the phrase above into concrete actions
      //return 'pending';
      //const userEmail = $('#userEmail')
      textBoxPage.emailField.setValue('Test@test.com')
      //driver.pause(5000)
    });

When('fill currentAddress', function () {
      //const currentAddress = $('#currentAddress')
      textBoxPage.currentAddress.setValue('Alamat test no.2')
      //driver.pause(5000)
    });

When('fill permanentAddress', function () {
      //const permanentAddress = $('#permanentAddress')
      textBoxPage.permanentAddress.setValue('Alamat permanent test no.1')
      //driver.pause(5000)
    });

Then('click submit', function () {
      // const submitButton = $('#submit')
      // submitButton.click()
      textBoxPage.submitBtn.scrollIntoView()
      textBoxPage.submitBtn.click();
      driver.pause(5000)
    });


// page Upload
When('upload document', function () {
      uploadPage.uploadFile()
      driver.pause(5000)
    });

Then('file uploaded', function () {
      expect(uploadPage.uploadedFilePath).to.exist
      expect(uploadPage.uploadedFilePath.getText()).to.include('NPWP.jpg')
    });
