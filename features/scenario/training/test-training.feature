Feature: testing Training Feature

@testing1
Scenario: Go to certain website
    Given Go to website "https://demoqa.com/automation-practice-form"
    And User Input first name "Jumi 1"
    And User input last name "Johan"
    And User input email "johanrumi1@mail.com"
    And User choose gender "female"
    And User input mobile number "1234567890"
    And User fill date of birth "29 maret 1999"
    And User fill subject "biology"
    And User choose hobbie "MUSIC"
    And User upload picture
    And User fill address "Jalan Sudirman Raya"
    And User choose "ncr" and "DELHI"
    And User click submit button
    Then Checking the value of table