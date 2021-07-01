Feature: Web Training Feature

@training1
Scenario: Go to certain website
    Given go to website

@training2
Scenario: Fill simple form
    Given go to webToolsQA
    When fill fullName
    And fill email
    And fill currentAddress
    And fill permanentAddress
    Then click submit