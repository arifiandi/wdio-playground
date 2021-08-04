// require('app-module-path').addPath(process.cwd);

const { Given, Then, When } = require('@cucumber/cucumber')
const { expect } = require('chai')
const { datasets } = require('/home/ariny/wdio-playground/features/helpers/datasets');
const uploadPage = require('/home/ariny/wdio-playground/features/pageobjects/upload-page.js')
const formPage = require('/home/ariny/wdio-playground/features/pageobjects/form-page.js')

Given('go to {string}', function (web) {
  browser.url(web)
});

// Fill Form
When('fill username', function () {
  formPage.fullName.setValue('Ariny Haq Hidayati')
});

When('fill email {string}', function (emailField) {
  formPage.emailField.setValue(emailField)
  datasets.emailField = emailField
});

When('set current address {string}', function (currentAddress) {
  formPage.currentAddress.setValue(currentAddress)
  datasets.currentAddress = currentAddress
});

When('set permanent address', function () {
  formPage.permanentAddress.setValue('Tangerang Selatan')
});

Then('click submit button', function () {
  formPage.submitBtn.scrollIntoView()
  formPage.submitBtn.click()
  browser.pause(5000)
});

// Upload Document
When('upload document', function() {
  uploadPage.uploadFile()
  driver.pause(5000)
})

Then('file uploaded', function() {
  expect(uploadPage.uploadedFilePath).to.exist
  expect(uploadPage.uploadedFilePath.getText()).to.include('image.png')
})

// Registration Form
When('fill first name {string}', function (firstName) {
  formPage.firstName.setValue(firstName)
  datasets.firstName = firstName
});

When('fill last name {string}', function (lastName) {
  formPage.lastName.setValue(lastName)
  datasets.lastName = lastName
});

When('select gender {string}', function (gender) {
  formPage.selectGender(gender)
  datasets.gender = gender
});

When('fill mobile {string}', function (mobile) {
  formPage.mobile.setValue(mobile)
  datasets.mobile = mobile
});

When('select DOB {string}', function (selectedDOB) {
  formPage.dateOfBirthField.click()
  browser.keys(['Control','a'])
  formPage.dateOfBirthField.addValue(selectedDOB)
  browser.keys(['Enter'])
  datasets.dateOfBirthField = selectedDOB
});

When('fill subjects {string}', function (subjects) {
  formPage.subjects.setValue(subjects)
  datasets.subjects = subjects
  const selectedSubjects = $('#react-select-2-option-0')
  selectedSubjects.click()
});

When('select hobbies {string}', function (hobbies) {
  formPage.selectHobbies(hobbies)
  datasets.hobbies = hobbies
});

When('upload picture {string}', function(filePath) {
  formPage.uploadFile(filePath)
  datasets.filePath = filePath
})

When('select state {string} and city {string}', function (state,city) {
  formPage.state.scrollIntoView()
  formPage.state.click()
  formPage.selectStateAndCity(state,city)
  datasets.state = state
});

Then('form submitted', function() {
  expect(formPage.display).to.exist
  expect(formPage.title.getText()).to.include('Thanks for submitting the form')
  expect(formPage.tableData).to.exist
  expect(formPage.studentNameValue.getText()).to.include(datasets.firstName + ' ' + datasets.lastName)
  expect(formPage.studentEmailValue.getText()).to.include(datasets.emailField)
  expect(formPage.genderValue.getText()).to.include(datasets.gender)
  expect(formPage.mobileValue.getText()).to.include(datasets.mobile)
  expect(formPage.dateOfBirthValue.getText()).to.include(datasets.dateOfBirthField)
  expect(formPage.subjectsValue.getText()).to.include(datasets.subjects)
  expect(formPage.hobbiesValue.getText()).to.include(datasets.hobbies)
  expect(formPage.pictureValue.getText()).to.include(datasets.filePath)
  expect(formPage.addressValue.getText()).to.include(datasets.currentAddress)
  expect(formPage.stateAndCityValue.getText()).to.include(datasets.state + ' ' + datasets.city)
  formPage.closeModal.click()
  driver.pause(2000)
})