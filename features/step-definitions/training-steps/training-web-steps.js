const {Given, When, Then} = require('@cucumber/cucumber')

// Given('go to website', function () {
//     // Write code here that turns the phrase above into concrete actions
//     // return 'pending';
//     browser.url('http://www.google.com')
//     driver.pause(5000)
//   });

  Given('go to {string}', function (web) {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    browser.url(web)
  });

  // Given('go to form page', function () {
  //   browser.url('https://demoqa.com/text-box')
  // });

  When('fill username', function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    const fullName = $('#userName')
    fullName.setValue('Ridwan Arifiandi')
    driver.pause(5000)

  });

  When('fill email', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('set current address', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('set fixed address', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('click submit button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('set status to {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    if(string !== page.status.getText()){
      link.click()
    }
    
  });