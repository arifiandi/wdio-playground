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
    When fill first name "Ariny Haq"
    And fill last name "Hidayati"
    And fill email "ariny@mailinator.com"
    And select gender "Female"
    And fill mobile "0812222222"
    And select DOB "26 December,1994"
    And fill subjects "Computer Science"
    And select hobbies "Music"
    And upload picture "image.png"
    And set current address "Jakarta Selatan"
    And select state "Rajasthan" and city "Jaipur"
    And click submit button
    Then form submitted