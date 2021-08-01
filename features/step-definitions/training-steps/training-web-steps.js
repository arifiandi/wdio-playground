// require('app-module-path').addPath(process.cwd);

const { Given, Then, When } = require('@cucumber/cucumber')
const { expect } = require('chai')
const uploadPage = require('/home/ariny/wdio-playground/features/pageobjects/upload-page.js')
const formPage = require('/home/ariny/wdio-playground/features/pageobjects/form-page.js')
const uploadPicture = require('/home/ariny/wdio-playground/features/pageobjects/upload-picture.js')

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
  const gender = $('#gender-radio-2')
  gender.click({ x: 30 })
});

When('fill mobile', function () {
  formPage.mobile.setValue('0812000000')
});

When('select DOB', function () {
  formPage.dateOfBirthField.click()

  // select year
  formPage.yearOfBirth.click()
  const year = $('option[value="1994"]')
  year.click()
  
  // select month
  formPage.monthOfBirth.click()
  const month = $('option[value="11"]')
  month.click()
  formPage.monthOfBirth.click()

  // select specific date
  const date = $('div[aria-label="Choose Monday, December 26th, 1994"]')
  date.click()
});

When('fill subjects', function () {
  formPage.subjects.setValue('Computer Science')
  const selectedSubjects = $('#react-select-2-option-0')
  selectedSubjects.click()
});

When('select hobbies', function () {
  const hobbies = $('#hobbies-checkbox-3')
  hobbies.click({ x: 30 })
});

When('upload picture', function() {
  uploadPicture.uploadFile()
})

When('select state', function () {
  formPage.state.scrollIntoView()
  formPage.state.click()
  const selectedState = $('#react-select-3-option-0')
  selectedState.click()
});

When('select city', function () {
  formPage.city.click()
  const selectedCity = $('#react-select-4-option-0')
  selectedCity.click()
});

Then('form submitted', function() {
  expect(formPage.display).to.exist
  expect(formPage.title.getText()).to.include('Thanks for submitting the form')
  expect(formPage.tableData).to.exist
  formPage.closeModal.click()
  driver.pause(2000)
})