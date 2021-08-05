Feature: Web Training Feature

@training1
Scenario: Go to certain website
    Given go to website

@training2
Scenario: fill simple form
    Given go to form page
    When fill first name
    And fill last name
    And fill email
    And select gender
    And fill mobile number
    And set date of birth
    And fill subjects
    And select Hobbies
    # And upload picture
    And set current address
    # And set state and city
    Then click submit button