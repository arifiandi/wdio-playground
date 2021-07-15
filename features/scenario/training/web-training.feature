Feature: Web Training Feature

@training1
Scenario: Go to certain website
    Given go to website

@training2
Scenario: Fill simple form
    Given go to "https://demoqa.com/text-box"
    When fill fullName
    And fill email
    And fill currentAddress
    And fill permanentAddress
    Then click submit

@training3
Scenario: fill simple form
    Given go to "https://demoqa.com/upload-download"
    When upload document
    Then file uploaded
