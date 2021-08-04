Feature: Training Test

@testForm1
Scenario: Training Test Form
    Given User go to website "https://demoqa.com/automation-practice-form"
    When User input first name "Rasyadan"
    And User input last name "Farouq"
    And User input email address "rasyadanfarouq@indodana.com"
    And User select gender "Male"
    And User input mobile phone number "0812345678"
    And User input date of birth "24 Nov 1996"
    And User input subject "English"
    And User select hobby "Reading"
    And User upload picture
    And User input current address "Jalan Jalan Dulu Kita No. 123"
    And User select "Uttar Pradesh" and "Agra"
    And User click submit button
    Then Validate the output