Feature: Fill web form exam

@web-exam
Scenario: Fill web form
    Given go to 'https://demoqa.com/automation-practice-form'
    When input full name
    And insert email
    And pick gender
    And input phone number
    And input DoB
    And input subject
    And pick hobbies
    And upload picture
    And input full address
    And click submit button
    Then verify if the information shown is correct
    