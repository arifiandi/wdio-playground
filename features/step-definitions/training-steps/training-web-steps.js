const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require('chai');
const uploadePage = require('../../pageobjects/uploadPage')
const textField = require('../../pageobjects/textField');
const radioButton = require('../../pageobjects/radioButton');
const dateOB = require('../../pageobjects/dateOB');
const scrollView = require('../../pageobjects/scrollView')
const { dateOfBirthInput } = require('../../pageobjects/dateOB');
const { uploadDocuments } = require('../../pageobjects/uploadPage');
const { subject } = require('../../pageobjects/textField');
const { submitButton } = require('../../pageobjects/radioButton');

Given('go to form page', function () {
    // Write code here that turns the phrase above into concrete actions
    browser.url('https://demoqa.com/automation-practice-form')
  });

When('fill first name', function () {
    // Write code here that turns the phrase above into concrete actions
    textField.firstName.setValue('Miftaugro')
  });

When('fill last name', function () {
    // Write code here that turns the phrase above into concrete actions
    textField.lastName.setValue('Malik') 
  });

When('fill email', function () {
    // Write code here that turns the phrase above into concrete actions
    textField.userEmail.setValue('miftaugromalik@gmail.com')
    });

When('select gender', function () {
    // Write code here that turns the phrase above into concrete actions
    radioButton.radio1.doubleClick()
   });


When('fill mobile number', function () {
    // Write code here that turns the phrase above into concrete actions
    textField.userNumber.setValue('081284755469')
  });

When('set date of birth', function () {
    // Write code here that turns the phrase above into concrete actions
    dateOB.dateOfBirthInput.click()
    dateOB.prevDate.click()
    dateOB.isDate.click()
});
  

When('fill subjects', function () {
    // Write code here that turns the phrase above into concrete actions
    textField.subject.click()
  });

When('select Hobbies', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log(radioButton.hobibutton.isSelected())
    radioButton.hobibutton.isSelected()
  });

// When('upload picture', function () {
//     // Write code here that turns the phrase above into concrete actions
//     // uploadePage.uploadFile()    
//     // driver.pause(4000)
//     return 'pending';

//     });

When('set current address', function () {
    // Write code here that turns the phrase above into concrete actions
    textField.currentAddress.setValue('Jln. Persatuan 3 No.58 Kemanggisan, Jakarta Selatan')
  });

// When('set state and city', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });

Then('click submit button', function () {
    // Write code here that turns the phrase above into concrete actions
    scrollView.scoll.scrollIntoView();
    radioButton.submitButton.click()
    driver.pause(5000)

  });