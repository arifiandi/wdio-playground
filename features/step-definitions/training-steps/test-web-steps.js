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
  assert.notEqual(testingPage.firstName.getValue(), 'first name kosong')
});

When('fill last name', function () {
  testingPage.lastName.setValue('Kepanjangan')
  assert.notEqual(testingPage.lastName.getValue(), '' , 'last name kosong')
});

When('fill email', function () {
  testingPage.emailField.setValue('test@test.com')
  assert.notEqual(testingPage.emailField.getValue(), '', 'email kosong')
});

When('fill gender', function () {
  testingPage.maleRadio.click()
  driver.pause(500)
  assert.isTrue(testingPage.cekRadio.isSelected())
  // testingPage.femaleRadio.click()
  // driver.pause(500)
  // testingPage.otherRadio.click()
  // driver.pause(500)
});

When('fill mobile', function () {
  testingPage.userNumber.setValue('0811111111')
  expect(testingPage.userNumber.getValue()).to.have.lengthOf(10, 'Tidak 10 digit')
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
  //assert.notEqual(testingPage.subject.getValue(), '')
  driver.pause(500)
});

When('fill hobbies', function () {
  testingPage.hobbiesOne.click()
  assert.isTrue(testingPage.cekHobi1.isSelected())
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
  assert.notEqual(testingPage.currentAddress.getValue(), '' , 'alamat kosong')
  driver.pause(500)
});

When('fill state', function () {
  testingPage.state.scrollIntoView()
  testingPage.state.setValue('NCR')
  assert.notEqual(testingPage.state.getValue(), '' , 'state kosong')
  browser.keys("Enter")
  driver.pause(500)
});

When('fill city', function () {
  testingPage.city.setValue('Delhi')
  assert.notEqual(testingPage.city.getValue(), '' , 'city kosong')
  browser.keys("Enter")
  driver.pause(500)
});

Then('click submit', function () {
  expect(testingPage.submitBtn).to.be.exist
  testingPage.submitBtn.click();
  
  expect(testingPage.modal).to.be.exist

  driver.pause(5000)
});

//assert nya masi belum banyak bisa