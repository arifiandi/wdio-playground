const {Given} = require('@cucumber/cucumber')

Given('go to website', function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    browser.url('http://www.google.com')
    driver.pause(5000)
  });