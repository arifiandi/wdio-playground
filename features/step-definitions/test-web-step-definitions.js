require('app-module-path').addPath(process.cwd());

const {Given, Then, When} = require('@cucumber/cucumber')
const {expect} = require('chai')
const objects = require('../pageobjects/test-practicepage')
const {dataset} = require('../helpers/testdata')

Given('open {string}', function (url) {
    browser.url(url)
    driver.pause(5000)
  });

When('input first name {string}', function (firstname) {
  objects.firstName.setValue(firstname)
  dataset.firstName = firstname
  driver.pause(500)
});

When('input last name {string}', function (lastname) {
  objects.lastName.setValue(lastname)
  dataset.lastName = lastname
  driver.pause(500)
});
       
When('input email {string}', function (email) {
  objects.email.setValue(email)
  dataset.email = email
  driver.pause(500)
});
       
When('choose gender {string}', function (gender) {
  if(gender.equalsIgnoreCase('male')){
    objects.genderMale.click()
  }else if(gender.equalsIgnoreCase('female')){
    objects.genderFemale.click()
  }else if(gender.equalsIgnoreCase('other')){
    objects.genderOther.click()
  }

  dataset.gender = gender

  driver.pause(500)
});
       
When('input phone number {string}', function (phonenumber) {
  objects.mobile.setValue(phonenumber)
  driver.pause(500)
});
       
When('input dob {string}', function (dob) {
  objects.dob.setValue(dob)
  objects.dob.keys('Enter')

  dataset.dob = dob

  driver.pause(500)
});
       
When('input subjects {string}', function (subject) {
  objects.subjects.setValue(subject)
  objects.subjects.keys('Enter')

  dataset.subjects = subject

  driver.pause(500)
});
       
When('choose hobby {string}', function (hobby) {
  if(hobby.equalsIgnoreCase('sports')){
    objects.hobbySports.click()
  }else if(hobby.equalsIgnoreCase('reading')){
    objects.hobbyReading.click()
  }else if(hobby.equalsIgnoreCase('music')){
    objects.hobbyMusic.click()
  }

  dataset.hobby = hobby

  driver.pause(500)
});

When('upload picture', function () {
  objects.uploadFile()
  driver.pause(500)
});
       
When('input currect address {string}', function (address) {
  objects.currentAddress.setValue(address)

  dataset.currentAddress = address

  driver.pause(500)
});
       
When('choose state {string}', function (state) {
  objects.dropdownState.setValue(state)
  objects.dropdownState.keys('Enter')
  
  dataset.state = state

  driver.pause(500)
});
       
When('choose city {string}', function (city) {
  objects.dropdownCity.setValue(city)
  objects.dropdownCity.keys('Enter')
  
  dataset.city = city

  driver.pause(500)
});
       
Then('click submit', function () {
  objects.submit.click()
});

Then('verify data', function () {
  expect(objects.assertName).to.exist
  expect(objects.assertName.getText()).to.include(dataset.firstName + ' ' + dataset.lastName)

  expect(objects.assertEmail).to.exist
  expect(objects.assertEmail.getText()).to.include(dataset.email)

  expect(objects.assertGender).to.exist
  expect(objects.assertGender.getText()).to.include(dataset.gender)

  expect(objects.assertMobile).to.exist
  expect(objects.assertMobile.getText()).to.include(dataset.mobile)

  expect(objects.assertDob).to.exist
  expect(objects.assertDob.getText()).to.include(dataset.dob)

  expect(objects.assertSubjects).to.exist
  expect(objects.assertSubjects.getText()).to.include(dataset.subjects)

  expect(objects.assertHobby).to.exist
  expect(objects.assertHobby.getText()).to.include(dataset.hobby)

  expect(objects.assertPicture).to.exist
  expect(objects.assertPicture.getText()).to.include(dataset.picture)

  expect(objects.assertAddress).to.exist
  expect(objects.assertAddress.getText()).to.include(dataset.currentAddress)

  expect(objects.assertState).to.exist
  expect(objects.assertState.getText()).to.include(dataset.state + ' ' + dataset.city)
});