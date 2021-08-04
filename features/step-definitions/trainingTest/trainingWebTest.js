const {Given, When, Then} = require('@cucumber/cucumber');
const {expect} = require ('chai');
const {datasets} = require ('../../helpers/datasetsTest');
const functions = require ('../../functions/functionsTest');
const textBox = require ('../../pageobjects/textBoxTest');

Given('User go to website {string}', function (web) {  
    browser.url(web);
});

When ('User input first name {string}', function (firstName) {
    textBox.firstName.setValue(firstName);
    datasets.firstName = textBox.firstName.getValue();
    expect(textBox.firstName.getValue()).to.include(firstName);
});

When ('User input last name {string}', function (lastName) {
    textBox.lastName.setValue(lastName);
    datasets.lastName = textBox.lastName.getValue();
    expect(textBox.lastName.getValue()).to.include(lastName);
});

When ('User input email address {string}', function (email) {
    textBox.userEmail.setValue(email);
    datasets.email = textBox.userEmail.getValue();
    expect(textBox.userEmail.getValue()).to.include(email);
});

When ('User select gender {string}', function (value) {
    functions.selectGender(value);
    expect(datasets.gender).to.include(value);
});

When ('User input mobile phone number {string}', function (number) {
    textBox.mobileNumber.setValue(number);
    datasets.mobileNumber = textBox.mobileNumber.getValue();
    expect(textBox.mobileNumber.getValue()).to.include(number);
});

When ('User input date of birth {string}', function(value) {
    textBox.fieldDateOfBirth.click()
    browser.keys(['Control','a']);
    textBox.fieldDateOfBirth.addValue(value);
    browser.keys(['Enter']);
    
    const date = new Date(textBox.fieldDateOfBirth.getValue());
    const day = functions.frontNumber(date);
    const month = functions.getMonth(date);
    const years = date.getFullYear();
    datasets.dateOfBirth = day + ' ' + month + ',' + years;
    expect(textBox.fieldDateOfBirth.getValue()).to.include(value);
})

When ('User input subject {string}', function(value) {
    textBox.subjectField.click();
    functions.autoComplete(value)
    browser.keys('Tab')
    datasets.subjects = textBox.valueSubject.getText();
    expect(datasets.subjects).to.include(value);
})

When ('User select hobby {string}', function(value) {
    functions.selectHobby(value)
    expect(datasets.hobby).to.include(value);
})

When ('User upload picture', function() {
    functions.uploadFile();
})

When ('User input current address {string}', function(value) {
    textBox.currentAddress.setValue(value);
    datasets.currentAddress = textBox.currentAddress.getValue();
    expect(textBox.currentAddress.getValue(value)).to.include(value);
})

When ('User select {string} and {string}', function(value,param) {
    textBox.submitBtn.scrollIntoView();
    textBox.selectState.click();
    functions.selectStateCity(value,param);
    expect(textBox.selectState.getText()).to.include(value);
    expect(textBox.selectCity.getText()).to.include(param);
})

When ('User click submit button', function() {
    textBox.submitBtn.click();
})

When ('Validate the output', function() {
    expect(textBox.headerTable.getText()).to.include('Thanks for submitting the form')
    expect(textBox.studentName.getText()).to.include(`${datasets.firstName} ${datasets.lastName}`);
    expect(textBox.studentEmail.getText()).to.include(`${datasets.email}`);
    expect(textBox.studentGenders.getText()).to.include(`${datasets.gender}`);
    expect(textBox.studentNumber.getText()).to.include(`${datasets.mobileNumber}`);
    expect(textBox.studentBirth.getText()).to.include(`${datasets.dateOfBirth}`);
    expect(textBox.studentSubject.getText()).to.include(`${datasets.subjects}`);
    expect(textBox.studentHobbie.getText()).to.include(`${datasets.hobby}`);
    expect(textBox.studentImage.getText()).to.include(`${datasets.imagePath}`);
    expect(textBox.studentAddress.getText()).to.include(`${datasets.currentAddress}`);
    expect(textBox.studentStateCity.getText()).to.include(`${datasets.state} ${datasets.city}`);
    expect(textBox.closeBtn).to.exist;
})
