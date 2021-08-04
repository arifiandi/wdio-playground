require('app-module-path').addPath(process.cwd());
const {Given, When, Then} = require('@cucumber/cucumber')
const studentRegistPage = require('../../pageobjects/student-regist')
const { expect, KeyboardEvent } = require('chai')


Given('go to student registration form page', function () {
  browser.url('https://demoqa.com/automation-practice-form')
  driver.pause(5000)
});

When('fill firstname', function () {
  studentRegistPage.firstName.setValue('Selenayya')
});

When('fill lastname', function () {
  studentRegistPage.lastName.setValue('Gomez')
});

When('fill email', function () {
  studentRegistPage.email.setValue('selenayyagomez@uk.com')
});

When('choose gender', function () {
  studentRegistPage.gender.click()
});

When('fill mobile number', function () {
  studentRegistPage.mobileNumber.setValue('6285210994679')
});

When('fill DoB', function () {
  studentRegistPage.DoB.clearValue()
  studentRegistPage.DoB.setValue("10 May 1993")
  driver.pause(500)
});

When('fill subjects', function () {
  studentRegistPage.subject.setValue('English')
});

When('checklist hobbies1', function () {
  studentRegistPage.hobbies1.click({x:5})
});

When('checklist hobbies2', function () {
  studentRegistPage.hobbies2.click({x:5})
});

When('upload a picture', function () {
  studentRegistPage.uploadFile(browser)
  // driver.pause(500)
});

When('fill current address', function () {
  studentRegistPage.currentAddress.setValue('Jalan Kemerdekaan 1945')
});

When('select state', function () {
  studentRegistPage.state.setValue('NCR')
  studentRegistPage.state.click({x:7})
});

When('select city', function () {
  studentRegistPage.city.setValue('Delhi')
  studentRegistPage.city.click({x:7})
});

Then('click submit button', function () {
  studentRegistPage.submitButton.scrollIntoView();
  studentRegistPage.submitButton.click();
  browser.pause(5000);
});

Then('data submitted', function () {
  expect(studentRegistPage.modal).to.exist
  expect(studentRegistPage.closeButton).to.exist
});