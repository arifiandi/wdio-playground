const {Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('chai');
const { datasets } = require('../../helpers/training-datasets');
const practiceFormPage = require('../../pageobjects/practice-form-page');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

Given('go to {string}', function (string) {
  browser.url(string)
});

When('fill first name with {string}', function (string) {
  practiceFormPage.firstName.setValue(string)

  datasets.firstName = practiceFormPage.firstName.getValue()
});

When('fill last name with {string}', function (string) {
  practiceFormPage.lastName.setValue(string)

  datasets.lastName = practiceFormPage.lastName.getValue()
});

When('fill email with {string}', function (string) {
  practiceFormPage.email.setValue(string)

  datasets.email = practiceFormPage.email.getValue()
});

When('choose gender as {string}', function (string) {
  practiceFormPage.chooseGender(string)

  datasets.gender = string
});

When('fill mobile number with {string}', function (string) {
  practiceFormPage.mobileNumber.setValue(string)

  datasets.mobileNumber = practiceFormPage.mobileNumber.getValue()
});

When('fill date of birth with {string}', function (string) {
  practiceFormPage.dateOfBirth.scrollIntoView()
  practiceFormPage.dateOfBirth.click()
  browser.keys(['Control', 'a'])
  practiceFormPage.dateOfBirth.addValue(string)
  browser.keys('Enter')

  var d = new Date(practiceFormPage.dateOfBirth.getValue())
  var date = d.getDate()
  var month = months[d.getMonth()]
  var year = d.getFullYear()
  datasets.dateOfBirth = date+' '+month+','+year
});

When('fill subjects with {string}', function (string) {
  practiceFormPage.subjects.addValue(string)
  practiceFormPage.subjectsList.waitForDisplayed()
  browser.keys('Enter')

  datasets.subjects.push(string)
});

When('choose Hobbies as {string}', function (string) {
  practiceFormPage.hobbiesSports.scrollIntoView()
  practiceFormPage.chooseHobbies(string)

  datasets.hobbies.push(string)
});

When('upload picture {string}', function (string) {
  practiceFormPage.uploadPicture(string)

  datasets.picture = string
});

When('fill current address with {string}', function (string) {
  practiceFormPage.currentAddress.setValue(string)

  datasets.currentAddress = string
});

When('select state {string}', function (string) {
  practiceFormPage.state.addValue(string)
  practiceFormPage.stateList.waitForDisplayed()
  browser.keys('Enter')

  datasets.state = string
});

When('select city {string}', function (string) {
  practiceFormPage.city.addValue(string)
  practiceFormPage.cityList.waitForDisplayed()
  browser.keys('Enter')

  datasets.city = string
});

When('click submit button', function () {
  practiceFormPage.submitButton.click()
});

Then('form submitted', function () {
  expect(practiceFormPage.studentName.getText()).to.contain(datasets.firstName)
  expect(practiceFormPage.studentName.getText()).to.contain(datasets.lastName)
  expect(practiceFormPage.studentEmail.getText()).to.equal(datasets.email)
  expect(practiceFormPage.studentGender.getText()).to.equal(datasets.gender)
  expect(practiceFormPage.studentMobile.getText()).to.equal(datasets.mobileNumber)
  expect(practiceFormPage.studentDateOfBirth.getText()).to.equal(datasets.dateOfBirth)
  datasets.subjects.forEach(function(s) {
    expect(practiceFormPage.studentSubjects.getText()).to.contain(s)
  })
  datasets.hobbies.forEach(function(h) {
    expect(practiceFormPage.studentHobbies.getText()).to.contain(h)
  })
  expect(practiceFormPage.studentPicture.getText()).to.equal(datasets.picture)
  expect(practiceFormPage.studentAddress.getText()).to.equal(datasets.currentAddress)
  expect(practiceFormPage.studentStateAndCity.getText()).to.contain(datasets.state)
  expect(practiceFormPage.studentStateAndCity.getText()).to.contain(datasets.city)

  // console.log(datasets)
  // driver.pause(30000)
});