require('app-module-path').addPath(process.cwd());
const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('chai')
const formPage = require('features/exam-pageobjects/form-page')

Given('go to (.*?)', function (web) {
    browser.url(web)
});

When('input full name', function () {
    formPage.firstName.setValue('Hizkia')
    formPage.lastName.setValue('Sondakh')
});

When('insert email', function () {
    formPage.userEmail.setValue('hizkiatest@mail.com')
});

When('pick gender', function () {
    formPage.optionMale.click()
});

When('input phone number', function () {
    formPage.phoneNumber.setValue('082156631382')
});

When('input DoB', function () {
    formPage.dob.click()
    formPage.month.selectByAttribute('value', '3')
    formPage.year.selectByAttribute('value', '1997')
    formPage.date.click()
});

When('input subject', function () {
  formPage.subject.setValue('Maths')
  browser.keys(['Enter'])
  
});

When('pick hobbies', function () {
    formPage.sportHobbies.click()
});

When('upload picture', function () {
    formPage.uploadFile()
});

When('input full address', function () {
    formPage.currAddress.scrollIntoView()
    formPage.currAddress.setValue('Jl. di sebuah jalan, antara bumi dan langit')
    formPage.state.click()
    formPage.stateOption.click()
    formPage.city.click()
    formPage.cityOption.click()  
});

When('click submit button', function() {
     formPage.submitButton.click()
     driver.pause(5000)
});

Then('verify if the information shown is correct', function () {
    expect(formPage.submitForm.getText('Student Name')).to.include('Hizkia')
    expect(formPage.submitForm.getText('Student Email')).to.include('hizkiatest@mail.com')
    expect(formPage.submitForm.getText('Gender')).to.include('Male')
    expect(formPage.submitForm.getText('Mobile')).to.include('082156631382')
    expect(formPage.submitForm.getText('Date of Birth')).to.include('8 April,1997')
    expect(formPage.submitForm.getText('Subjects')).to.include('Maths')
    expect(formPage.submitForm.getText('Hobbies')).to.include('Sport')
    expect(formPage.submitForm.getText('Picture')).to.include('DarkseidRender.png')
    expect(formPage.submitForm.getText('Address')).to.include('Jl. di sebuah jalan, antara bumi dan langit')
    expect(formPage.submitForm.getText('State and City')).to.include('Haryana')
});