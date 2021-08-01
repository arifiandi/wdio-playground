Feature: Web Training Feature

@training1
Scenario: Go to certain website
    Given go to website

@training2
Scenario: Fill form
    Given go to "https://demoqa.com/text-box"
    When fill username
    And fill email
    And set current address
    And set permanent address
    Then click submit button

@training3
Scenario: Upload document
    Given go to "https://demoqa.com/upload-download"
    When upload document
    Then file uploaded

@test_training
Scenario: Student Registration form
    Given go to "https://demoqa.com/automation-practice-form"
    When fill first name
    And fill last name
    And fill email
    And select gender
    And fill mobile
    And select DOB
    And fill subjects
    And select hobbies
    And upload picture
    And set current address
    And select state
    And select city
    And click submit button
    Then form submitted