Feature: Web Training Feature

@training1
Scenario: fill student registration form
    Given go to "https://demoqa.com/automation-practice-form"
    When fill first name "Leo"
    And fill last name "Simatupang"
    And fill email "leotest@gmail.com"
    And choose gender "Male"
    And fill mobile "0822082212"
    And fill date of birth
    And fill subjects "English"
    And fill subjects "Chemistry"
    And check hobbies "Sports"
    And check hobbies "Reading"
    And check hobbies "Music"
    And upload document
    And fill address "Jl. Kemayoran 2 No. 11 Jakarta Selatan"
    And choose state "Haryana"
    And choose city "Karnal"
    And click submit
    And verify the data
    Then screenshot submitted form