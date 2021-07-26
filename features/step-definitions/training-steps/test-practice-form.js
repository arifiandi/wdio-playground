const {Given, When, Then} = require('@cucumber/cucumber');
const practiceForm = require ('/home/dafa/wdio-playground/features/pageobjects/practice-form');
const {expect} = require ('chai');
const {datasets} = require ('/home/dafa/wdio-playground/features/helper/datasets')
const {addZero} = require('/home/dafa/wdio-playground/features/helper/date-format')
const {months} = require('/home/dafa/wdio-playground/features/helper/date-format')

Given('Go to website {string}', function (web) {  
    browser.url(web);
    browser.fullscreenWindow();
  });

When ('User Input first name {string}', function (firstName) {
    practiceForm.firstName.waitForDisplayed();
    practiceForm.firstName.setValue(firstName);
    expect(practiceForm.firstName.getValue()).to.include(firstName)
    datasets.firstName = practiceForm.firstName.getValue();
});

When ('User input last name {string}', function (lastName) {
    practiceForm.lastName.waitForEnabled();
    practiceForm.lastName.setValue(lastName);
    expect(practiceForm.lastName.getValue()).to.include(lastName)
    datasets.lastName = practiceForm.lastName.getValue();
});

When ('User input email {string}', function (email) {
    practiceForm.email.waitForEnabled();
    practiceForm.email.setValue(email);
    expect(practiceForm.email.getValue()).to.include(email)
    datasets.email = practiceForm.email.getValue();
});

When ('User choose gender {string}', function (value) {
    practiceForm.fillGender(value);
    expect(datasets.gender.toLowerCase()).to.include(value);
});

When ('User input mobile number {string}', function (number) {
    practiceForm.mobileNumber.waitForEnabled();
    practiceForm.mobileNumber.setValue(number);
    expect(practiceForm.mobileNumber.getValue()).to.include(number)
    datasets.mobileNumber = practiceForm.mobileNumber.getValue();
});

When ('User fill date of birth {string}', function(value) {
    practiceForm.fieldDateBirth.click()
    browser.keys(['Control','a']);
    practiceForm.fieldDateBirth.addValue(value)
    browser.keys(['Enter']);
    let date = new Date(practiceForm.fieldDateBirth.getValue())
    let day = addZero(date,2)
    let month = months(date)
    let years = date.getFullYear()
    datasets.dateBirth = day + ' ' + month + ',' + years
})

When ('User fill subject {string}', function(value) {
    practiceForm.subjectField.click();
    practiceForm.fillAutoComplete(value)
    browser.keys('Tab')
    datasets.subjects = practiceForm.valueSubject.getText();
})

When ('User choose hobbie {string}', function(value) {
    practiceForm.clickHobbies(value)
    expect(datasets.hobbies.toLowerCase()).to.include(value.toLowerCase());
})

When ('User upload picture', function() {
    practiceForm.uploadFile();
})

When ('User fill address {string}', function(value) {
    practiceForm.address.setValue(value);
    expect(practiceForm.address.getValue()).to.include(value)
    datasets.address = practiceForm.address.getValue();
})

When ('User choose {string} and {string}', function(value,param) {
    practiceForm.submitBtn.scrollIntoView();
    expect(practiceForm.selectCity.isClickable()).to.be.false
    practiceForm.selectState.click()
    practiceForm.chooseStateCity(value,param)
    expect(practiceForm.selectState.getText().toLowerCase()).to.include(value.toLowerCase())
    expect(practiceForm.selectCity.getText().toLowerCase()).to.include(param.toLowerCase())
})

When ('User click submit button', function() {
    practiceForm.submitBtn.click();
})

When ('Checking the value of table', function() {
    practiceForm.headerTable.waitForDisplayed();
    expect(practiceForm.headerTable.getText()).to.include('Thanks for submitting the form')
    expect(practiceForm.studentName.getText()).to.include(`${datasets.firstName} ${datasets.lastName}`)
    expect(practiceForm.studentEmail.getText()).to.include(`${datasets.email}`)
    expect(practiceForm.studentGenders.getText()).to.include(`${datasets.gender}`)
    expect(practiceForm.studentNumber.getText()).to.include(`${datasets.mobileNumber}`)
    expect(practiceForm.studentbirth.getText()).to.include(`${datasets.dateBirth}`)
    expect(practiceForm.studentSubject.getText()).to.include(`${datasets.subjects}`)
    expect(practiceForm.studentHobbie.getText()).to.include(`${datasets.hobbies}`)
    expect(practiceForm.studentStateCity.getText()).to.include(`${datasets.state} ${datasets.city}`)
    expect(practiceForm.closeBtn).to.exist
})
