Feature: Web Training Feature

@training1
Scenario: Go to certain website
    Given go to website

@training2
Scenario: fill form
    Given go to 'https://demoqa.com/text-box'
    When input name
    And input email
    And input current address
    And input permanent address
    Then click submit

@training3
Scenario: Upload document
    Given go to 'https://demoqa.com/upload-download'
    When upload document
    Then file uploaded
