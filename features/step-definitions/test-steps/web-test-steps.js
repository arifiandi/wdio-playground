const { Given, Then } = require('@cucumber/cucumber');
const { expect, assert } = require('chai');
const { datasets } = require('../../helpers/student');
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
    datasets.firstName = firstName
    datasets.lastName = lastName
});

Then('fill email {string}', function (enterEmail) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.userEmailField.setValue(enterEmail)
    datasets.email = enterEmail
});

Then('select gender {string}', function (gender) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.selectGender(gender)
    datasets.gender = gender
});

Then('enter mobile number {string}', function (phoneNumber) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.mobileNumberField.setValue(phoneNumber)
    datasets.phoneNumber = phoneNumber
});

Then('select date of birth {string}', function (dateOfBirth) {
    // Write code here that turns the phrase above into concrete actions
    datePicker.selectDate(dateOfBirth)
    datasets.dateOfBirth = dateOfBirth
});

Then('select subject {string}', function (subject) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.subjectInput.setValue(subject)
    practiceForm.enterSubject()

    datasets.subjects = subject
});

Then('select hobbies {string}', function (hobby) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.selectHobbies(hobby)

    datasets.hobbies = hobby
});

Then('upload picture', function () {
    // Write code here that turns the phrase above into concrete actions
    uploadPicture.uploadFile()
});

Then('fill current address {string}', function (currentAddress) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.currentAddressField.setValue(currentAddress)

    datasets.currentAddress = currentAddress
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
    expect(submitModal.modalText.getText()).to.equal("Thanks for submitting the form")
    expect(submitModal.modalTable.getText()).to.exist
    expect(submitModal.studentName.getText()).to.include(datasets.firstName)
    expect(submitModal.studentEmail.getText()).to.include(datasets.email)
    expect(submitModal.studentGender.getText()).to.include(datasets.gender)
    expect(submitModal.studentMobileNumber.getText()).to.include(datasets.mobileNumber)
    expect(submitModal.studentSubjects.getText()).to.include(datasets.subjects)
    expect(submitModal.studentHobbies.getText()).to.include(datasets.hobbies)
    expect(submitModal.studentPicture.getText()).to.include("sampleFile.jpeg")
    expect(submitModal.studentAddress.getText()).to.include(datasets.currentAddress)
    expect(submitModal.studentStateAndCity.getText()).to.include("NCR Delhi")
});