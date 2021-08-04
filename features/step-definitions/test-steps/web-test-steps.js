const { Given, Then } = require('@cucumber/cucumber');
const { expect, assert } = require('chai');
const { stateAndCity } = require('../../helpers/state-city');
const { students } = require('../../helpers/student');
const datePicker = require('../../pageobjects/test-pageobjects/date-picker');
const practiceForm = require('../../pageobjects/test-pageobjects/practice-form');
const stateCity = require('../../pageobjects/test-pageobjects/state-city');
const submitModal = require('../../pageobjects/test-pageobjects/submit-modal');
const uploadPicture = require('../../pageobjects/test-pageobjects/upload-picture');

Given('go to (.*?)', function (web) {
    // Write code here that turns the phrase above into concrete actions
    browser.url(web).waitForDisplayed()
    expect(browser.getUrl()).equals("https://demoqa.com/automation-practice-form")
});

Then('fill first name {string} and last name {string}', function (firstName, lastName) {
    // Write code here that turns the phrase above into concrete actions

    practiceForm.firstNameField.setValue(firstName)
    practiceForm.lastNameField.setValue(lastName)

    students.firstName = firstName
    students.lastName = lastName
});

Then('fill email {string}', function (enterEmail) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.userEmailField.setValue(enterEmail)

    students.email = enterEmail
});

Then('select gender {string}', function (gender) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.selectGender(gender)

    students.gender = gender
});

Then('enter mobile number {string}', function (phoneNumber) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.mobileNumberField.setValue(phoneNumber)

    students.mobileNumber = phoneNumber
});

Then('select date of birth {string}', function (dateOfBirth) {
    // Write code here that turns the phrase above into concrete actions
    datePicker.selectDate(dateOfBirth)

    students.dateOfBirth = dateOfBirth
});

Then('select subject {string}', function (subject) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.subjectInput.setValue(subject)
    practiceForm.enterSubject()

    students.subjects = subject
});

Then('select hobbies {string}', function (hobby) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.selectHobbies(hobby)

    students.hobbies = hobby
});

Then('upload picture', function () {
    // Write code here that turns the phrase above into concrete actions
    uploadPicture.uploadFile()
});

Then('fill current address {string}', function (currentAddress) {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.currentAddressField.setValue(currentAddress)

    students.currentAddress = currentAddress
});

Then('select state {string} and city {string}', function (state, city) {
    // Write code here that turns the phrase above into concrete actions
    stateCity.randomState(state, city)
});

Then('click submit button in form', function () {
    // Write code here that turns the phrase above into concrete actions
    practiceForm.submitButton.click()
});

Then('validate submitted form', function () {
    // Write code here that turns the phrase above into concrete actions
    expect(submitModal.modalContent).to.exist
    expect(submitModal.modalText.getText()).to.equal("Thanks for submitting the form")
    expect(submitModal.modalTable.getText()).to.exist
    expect(submitModal.studentName.getText()).to.include(students.firstName + ' ' + students.lastName)
    expect(submitModal.studentEmail.getText()).to.include(students.email)
    expect(submitModal.studentGender.getText()).to.include(students.gender)
    expect(submitModal.studentMobileNumber.getText()).to.include(students.mobileNumber)
    expect(submitModal.studentSubjects.getText()).to.include(students.subjects)
    expect(submitModal.studentHobbies.getText()).to.include(students.hobbies)
    expect(submitModal.studentPicture.getText()).to.include(students.picture)
    expect(submitModal.studentAddress.getText()).to.include(students.currentAddress)
    expect(submitModal.studentStateAndCity.getText()).to.include(stateAndCity.state + ' ' + stateAndCity.city)
    expect(submitModal.closeModalButton).to.exist
});