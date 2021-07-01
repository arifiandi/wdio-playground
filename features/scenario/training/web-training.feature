Feature: Web Training Feature

@training1
Scenario: Go to certain website
    Given go to website

@training2
Scenario: Fill form
    Given go to form page
    When fill username
    And fill enail
    And set current address
    And set permanent address
    Then click submit button