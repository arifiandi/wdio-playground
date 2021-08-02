const { Given, Then } = require('@cucumber/cucumber');
const datePicker = require('../../pageobjects/test-pageobjects/date-picker');
const practiceForm = require('../../pageobjects/test-pageobjects/practice-form');
const uploadPicture = require('../../pageobjects/test-pageobjects/upload-picture');

Given('go to {string}', function (web) {
    // Write code here that turns the phrase above into concrete actions
    browser.url(web)
});

Then('fill first name {string} and last name {string}', function (firstName, lastName) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.firstNameField.setValue(firstName)
    practiceForm.lastNameField.setValue(lastName)
});

Then('fill email {string}', function (enterEmail) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.userEmailField.setValue(enterEmail)
});

Then('select gender', function () {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.genderRadioButton.click()
});

Then('enter mobile number {string}', function (phoneNumber) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.mobileNumberField.setValue(phoneNumber)
});


Then('select date of birth', function () {
    // Write code here that turns the phrase above into concrete actions
    datePicker.selectDate()
    driver.pause(5000)
});

Then('select subject {string}', function (subjectSelection) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.subjectInput.setValue(subjectSelection)
    practiceForm.enterSubject()
});


Then('select hobbies', function () {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.selectHobbies()
});

Then('upload picture', function () {
    // Write code here that turns the phrase above into concrete actions
    uploadPicture.uploadFile()
    driver.pause(2000)
});

Then('fill current address {string}', function (currentAddress) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.currentAddressField.setValue(currentAddress)
});

Then('select state and city', function () {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.selectStateAndCity()
});