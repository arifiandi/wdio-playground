require('app-module-path').addPath(process.cwd());

const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require('chai')
const studentRegistrationPage = require('features/pageobjects/student-registration-page')
const { datasets } = require('../../helpers/datasets');

Given('go to {string}', function(web) {
    browser.url(web)
})

When('fill first name {string}', function(firstName){
    studentRegistrationPage.firstName.setValue(firstName)
    datasets.firstName = firstName
})

When('fill last name {string}', function(lastName){
    studentRegistrationPage.lastName.setValue(lastName)
    datasets.lastName = lastName
})

When('fill email {string}', function(email){
    studentRegistrationPage.userEmail.setValue(email)
    datasets.email = email
})

When('choose gender {string}', function(option){
	if(option == 'Male'){
		studentRegistrationPage.maleRadioButton.click()
	}
	else if(option == 'Female'){
		studentRegistrationPage.femaleRadioButton.click()
	}
	else
	{
		studentRegistrationPage.otherRadioButton.click()
	}
	datasets.gender = option
})

When('fill mobile {string}', function(userNumber){
    studentRegistrationPage.userNumber.setValue(userNumber)
    datasets.userNumber = userNumber
})

When('fill date of birth', function(){
	studentRegistrationPage.dateOfBirth.click()
	studentRegistrationPage.date.click()
    studentRegistrationPage.dateOfBirth.keys('Enter')
    datasets.dob = studentRegistrationPage.dateOfBirth.getValue()
})

When('fill subjects {string}', function(subjects){
    studentRegistrationPage.subjects.setValue(subjects)
    studentRegistrationPage.subjects.keys('Enter')
    datasets.subject = subjects
})

When('check hobbies {string}', function(option){
	if(option == 'Sports'){
		studentRegistrationPage.sportsCheckbox.click()
	}
	else if(option == 'Reading'){
		studentRegistrationPage.readingCheckbox.click()
	}
	else
	{
		studentRegistrationPage.musicCheckbox.click()
	}
	datasets.hobby = option
})

When('upload document', function(){
    studentRegistrationPage.uploadFile()
});

When('fill address {string}', function(userAddress){
    studentRegistrationPage.currentAddress.setValue(userAddress)
    datasets.address = userAddress
})

When('choose state {string}', function(state){
	studentRegistrationPage.state.click()
    studentRegistrationPage.stateField.setValue(state)
    studentRegistrationPage.state.keys('Enter')
    datasets.state = state
})

When('choose city {string}', function(city){
	studentRegistrationPage.city.click()
    studentRegistrationPage.cityField.setValue(city)
    studentRegistrationPage.state.keys('Enter')
    datasets.city = city
})

When('click submit', function() {
    studentRegistrationPage.submitButton.click()
})

When('verify the data', function(){
	expect(studentRegistrationPage.submittedStudentName.getText()).to.equals(datasets.firstName + ' ' + datasets.lastName)
	expect(studentRegistrationPage.submittedStudentEmail.getText()).to.equals(datasets.email)
	expect(studentRegistrationPage.submittedGender.getText()).to.equals(datasets.gender)
	expect(studentRegistrationPage.submittedMobile.getText()).to.equals(datasets.userNumber)
	expect(studentRegistrationPage.submittedSubject.getText()).to.contain(datasets.subject)
	expect(studentRegistrationPage.submittedHobby.getText()).to.contain(datasets.hobby)
	expect(studentRegistrationPage.submittedAddress.getText()).to.equals(datasets.address)
	expect(studentRegistrationPage.submittedStateAndCity.getText()).to.equals(datasets.state + ' ' + datasets.city)
})

When('screenshot submitted form', function() {
    studentRegistrationPage.screenshotSubmittedForm()
})