Feature: Web Automation Test

    @web-test
    Scenario: Practice Form Page
        Given go to "https://demoqa.com/automation-practice-form"
        Then fill first name "Joycelind" and last name "Chow"
        Then fill email "joy@test.com"
        Then select gender
        Then enter mobile number "6212345678"
        Then select date of birth
        Then select subject "Computer Science"
        Then select hobbies
        Then upload picture
        Then fill current address "Plaza Bank Index"
        Then select state and city
        Then click submit button in form
        And validate form submitted

    @web-test2
    Scenario: Practice Form Page
        Given go to "https://demoqa.com/automation-practice-form"
        Then fill first name "Joycelind" and last name "Chow"