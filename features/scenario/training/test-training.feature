Feature: testing Training Feature

@testing1
Scenario: Fill all practice form
    Given Go to website "https://demoqa.com/automation-practice-form"
    And User Input first name "Dafa"
    And User input last name "Fadhil"
    And User input email "dafarahman@mail.com"
    And User choose gender "male"
    And User input mobile number "1234567890"
    And User fill date of birth "30 maret 1991"
    And User fill subject "biology"
    And User choose hobbie "sport"
    And User upload picture
    And User fill address "Jalan Sudirman Raya"
    And User choose "ncr" and "delhi"
    And User click submit button
    Then Checking the value of table
    