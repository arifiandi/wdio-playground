const { Given, Then } = require('@cucumber/cucumber');
const { expect, assert } = require('chai');
const datePicker = require('../../pageobjects/test-pageobjects/date-picker');
const practiceForm = require('../../pageobjects/test-pageobjects/practice-form');
const submitModal = require('../../pageobjects/test-pageobjects/submit-modal');
const uploadPicture = require('../../pageobjects/test-pageobjects/upload-picture');

Given('go to (.*?)', function (web) {
    // Write code here that turns the phrase above into concrete actions
    browser.url(web)
    expect(browser.getUrl()).equals("https://demoqa.com/automation-practice-form")
});

Then('fill first name {string} and last name {string}', function (firstName, lastName) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.firstNameField.setValue(firstName)
    practiceForm.lastNameField.setValue(lastName)

    expect(practiceForm.firstNameField.getText()).to.exist
    expect(practiceForm.lastNameField.getText()).to.exist
});

Then('fill email {string}', function (enterEmail) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.userEmailField.setValue(enterEmail)

    expect(practiceForm.userEmailField.getText()).to.exist
});

Then('select gender', function () {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.genderRadioButton.click()

    // expect(practiceForm.genderRadioButton.isSelected()).equals(true)
});

Then('enter mobile number {string}', function (phoneNumber) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.mobileNumberField.setValue(phoneNumber)

    expect(practiceForm.mobileNumberField.getText()).to.exist
});

Then('select date of birth', function () {
    // Write code here that turns the phrase above into concrete actions
    datePicker.selectDate()
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
});

Then('fill current address {string}', function (currentAddress) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.currentAddressField.setValue(currentAddress)
});

Then('select state and city', function () {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.selectStateAndCity()
});

Then('click submit button in form', function () {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.submitButton.click()
});

Then('validate form submitted', function () {
    // Write code here that turns the phrase above into concrete actions
    expect(submitModal.modalContent).to.exist
    expect(submitModal.modalText.getText()).to.include("Thanks for submitting the form")
    expect(submitModal.modalTable.getText()).to.exist
    // expect(submitModal.studentName.getText()).to.include("Joycelind Chow")
    // expect(submitModal.studentEmail.getText()).to.include("joy@test.com")
    // expect(submitModal.studentGender.getText().to.include("Female"))
    // expect(submitModal.studentMobileNumber.getText()).to.include("6212345678")
    // expect(submitModal.studentSubjects.getText()).to.include("Computer Science")
    // expect(submitModal.studentHobbies.getText()).to.include("Sports")
    // expect(submitModal.studentPicture.getText()).to.include("sampleFile.jpeg")
    // expect(submitModal.studentAddress.getText()).to.include("Plaza Bank Index")
    // expect(submitModal.studentStateAndCity.getText()).to.include("NCR Delhi")
});