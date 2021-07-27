// require('app-module-path').addPath(process.cwd);

const { Given, Then, When } = require('@cucumber/cucumber')
const { expect } = require('chai')
const uploadPage = require('/home/ariny/wdio-playground/features/pageobjects/upload-page.js')
const formPage = require('/home/ariny/wdio-playground/features/pageobjects/form-page.js')
const uploadPicture = require('/home/ariny/wdio-playground/features/pageobjects/upload-picture.js')
const displayModal = require('/home/ariny/wdio-playground/features/pageobjects/display-page.js')

Given('go to {string}', function (web) {
  browser.url(web)
});

// Fill Form
When('fill username', function () {
  formPage.fullName.setValue('Ariny Haq Hidayati')
});

When('fill email', function () {
  formPage.emailField.setValue('ariny@mailinator.com')
});

When('set current address', function () {
  formPage.currentAddress.setValue('Jakarta Selatan')
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
When('fill first name', function () {
  formPage.firstName.setValue('Ariny Haq')
});

When('fill last name', function () {
  formPage.lastName.setValue('Hidayati')
});

When('select gender', function () {
  formPage.gender.click({ x: 30 })
});

When('fill mobile', function () {
  formPage.mobile.setValue('0812000000')
});

When('select DOB', function () {
  formPage.dateOfBirthField.click()
  formPage.yearOfBirth.click()
  formPage.year.click()
  formPage.monthOfBirth.click()
  formPage.month.click()
  formPage.monthOfBirth.click()
  formPage.dateOfBirth.click()
});

When('fill subjects', function () {
  formPage.subjects.setValue('Computer Science')
  formPage.selectedSubjects.click()
});

When('select hobbies', function () {
  formPage.hobbies.click({ x: 30 })
});

When('upload picture', function() {
  uploadPicture.uploadFile()
})

When('fill current address', function () {
  formPage.currentAddress.setValue('Perumahan Bukit Cirendeu')
});

When('select state', function () {
  formPage.state.scrollIntoView()
  formPage.state.click()
  formPage.selectedState.click()
});

When('select city', function () {
  formPage.city.click()
  formPage.selectedCity.click()
});

Then('form submitted', function() {
  expect(displayModal.display).to.exist
  expect(displayModal.title.getText()).to.include('Thanks for submitting the form')
  expect(displayModal.tableData).to.exist
  displayModal.closeModal.click()
  driver.pause(2000)
})