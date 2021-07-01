const {Given} = require('@cucumber/cucumber')
const {When} = require('@cucumber/cucumber')
const {Then} = require('@cucumber/cucumber')



Given('go to website', function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    browser.url('http://www.google.com')
    driver.pause(5000)
  });

Given('go to webToolsQA', function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    browser.url('https://demoqa.com/text-box')
  });

When('fill fullName', function () {
      // Write code here that turns the phrase above into concrete actions
      //return 'pending';
    const fullName = $('#userName')
    fullName.setValue('Tomy Gunawan')
    //driver.pause(5000)
    });

When('fill email', function () {
      // Write code here that turns the phrase above into concrete actions
      //return 'pending';
      const userEmail = $('#userEmail')
      userEmail.setValue('Test@test.com')
      //driver.pause(5000)
    });

When('fill currentAddress', function () {
      // Write code here that turns the phrase above into concrete actions
      //return 'pending';
      const currentAddress = $('#currentAddress')
      currentAddress.setValue('Alamat test no.2')
      //driver.pause(5000)
    });

When('fill permanentAddress', function () {
      // Write code here that turns the phrase above into concrete actions
      //return 'pending';
      const permanentAddress = $('#permanentAddress')
      permanentAddress.setValue('Alamat permanent test no.1')
      //driver.pause(5000)
    });

Then('click submit', function () {
      // Write code here that turns the phrase above into concrete actions
      //return 'pending';
      const submitButton = $('#submit')
      submitButton.click()
      driver.pause(2000)
    });

