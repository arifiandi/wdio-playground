Feature: Web Automation Test

    @web-test
    Scenario: Practice Form Page
        Given go to "https://demoqa.com/automation-practice-form"
        Then fill first name "Joycelind" and last name "Chow"
        And fill email "jchow@cermati.com"
        Then select gender
        Then enter mobile number "6212345678"
        And select subject "Computer Science"
        Then select hobbies
        And upload picture
        Then fill current address "Plaza Bank Index"
        Then select state and city

    @web-test2
    Scenario:
        Given go to "https://demoqa.com/automation-practice-form"
        Then select date of birth