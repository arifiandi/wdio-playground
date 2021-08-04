Feature: Web Training Feature

@training1
Scenario: Go to certain website
    Given go to website

@training2
Scenario: Fill simple form
    Given open "https://demoqa.com/text-box"
    When input Full Name
    And input Email
    And input Currect Address
    And input Permanent Address
    Then click Submit

@training3
Scenario: Upload Document
    Given open "https://demoqa.com/upload-download"
    When upload document
    Then file uploaded