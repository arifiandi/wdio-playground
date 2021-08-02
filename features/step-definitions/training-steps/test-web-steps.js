require('app-module-path').addPath(process.cwd());
const {Given} = require('@cucumber/cucumber')
const {When} = require('@cucumber/cucumber')
const {Then} = require('@cucumber/cucumber')
const {expect, assert} = require ('chai');
const testingPage = require('features/pageobjects/testing-page');
const uploadPage = require('features/pageobjects/upload-page');


Given('go to {string}', function (web) {
  browser.url(web)
});

//test isi form
When('fill first name', function () {
  testingPage.firstName.setValue('Test')
});

When('fill last name', function () {
  testingPage.lastName.setValue('Nama')
});

When('fill email', function () {
  testingPage.emailField.setValue('Test@test.com')
});

When('fill gender', function () {
  testingPage.maleRadio.click()
  driver.pause(500)
  testingPage.femaleRadio.click()
  driver.pause(500)
  testingPage.otherRadio.click()
  driver.pause(500)
});

When('fill mobile', function () {
  testingPage.userNumber.setValue('0811111111')
});

When('fill date', function () {
  testingPage.dateClick.click()
  testingPage.selectYear.selectByAttribute('value',"1996")
  testingPage.selectMonth.selectByAttribute('value',"4")
  testingPage.selectDate.click()
  driver.pause(500)
});

When('fill subjects', function () {
  testingPage.subject.setValue('Computer')
  browser.keys("Enter")
  driver.pause(500)
});

When('fill hobbies', function () {
  testingPage.hobbiesOne.click()
  testingPage.hobbiesTwo.click()
  testingPage.hobbiesThree.click()
  driver.pause(500)
});

When('upload picture', function () {
  uploadPage.uploadFile()
  expect(uploadPage.uploadedFilePath).to.exist
  driver.pause(500)
});

When('fill currentAddress', function () {
  testingPage.currentAddress.setValue('Alamat test no.2')
  driver.pause(500)
});

When('fill state', function () {
  testingPage.state.scrollIntoView()
  testingPage.state.setValue('N')
  browser.keys("Enter")
  driver.pause(500)
});

When('fill city', function () {
  testingPage.city.setValue('Delhi')
  browser.keys("Enter")
  driver.pause(500)
});

Then('click submit', function () {
  testingPage.submitBtn.click();
  driver.pause(5000)
});