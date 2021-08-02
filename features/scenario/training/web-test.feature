Feature: Web Test Feature


@testweb
Scenario: test fill form
    Given go to "https://demoqa.com/automation-practice-form"
    When fill first name 
    And fill last name
    And fill email
    And fill gender
    And fill mobile
    And fill date
    And fill subjects
    And fill hobbies
    And upload picture
    And fill currentAddress
    And fill state
    And fill city
    Then click submit