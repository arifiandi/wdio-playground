const { Given, Then, When } = require('@cucumber/cucumber')

Given('go to website', function () {
  // Write code here that turns the phrase above into concrete actions
  // return 'pending';
  browser.url('https://www.google.com')
  driver.pause(5000)
});

Given('go to form page', function () {
  // Write code here that turns the phrase above into concrete actions
  browser.url('https://demoqa.com/text-box')
});

When('fill username', function () {
  // Write code here that turns the phrase above into concrete actions
  const fullName = $('#userName')
  fullName.setValue('Joycelind')
});

When('fill enail', function () {
  // Write code here that turns the phrase above into concrete actions
  const email = $('#userEmail')
  email.setValue('joy@test.com')
});

When('set current address', function () {
  // Write code here that turns the phrase above into concrete actions
  const currentAddress = $('#currentAddress')
  currentAddress.setValue('Plaza Bank Index')
});

When('set permanent address', function () {
  // Write code here that turns the phrase above into concrete actions
  const permanentAddress = $('#permanentAddress')
  permanentAddress.setValue('Pantai Indah Kapuk')
});

Then('click submit button', function () {
  // Write code here that turns the phrase above into concrete actions
  const submitButton = $('#submit')
  submitButton.click()
});