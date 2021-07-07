Feature: Web Training Feature

@training1
Scenario: Go to certain website
    Given go to website

@training2
Scenario: Fill form
    Given go to "https://demoqa.com/text-box"
    When fill username
    And fill enail
    And set current address
    And set permanent address
    Then click submit button

@training3
Scenario:
    Given go to "https://demoqa.com/radio-button"
    Then click radio button