Feature: Web Training Feature

@training1
Scenario: Go to certain website
    Given go to "http://www.google.com"
    When set status to "Not Connected"

@training2
Scenario: fill simple form
    Given go to "https://demoqa.com/text-box"
    When fill username
    And fill email
    And set current address
    And set fixed address
    Then click submit button

@training3
Scenario: fill simple form
    Given go to "https://demoqa.com/upload-download"
    When upload document
    Then file uploaded
