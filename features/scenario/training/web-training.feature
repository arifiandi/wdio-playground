Feature: Web Training Feature

@test1
Scenario: Fill practice form
    Given go to "https://demoqa.com/automation-practice-form"
    When fill first name with "Kevin"
    And fill last name with "Basuki"
    And fill email with "kevinbasuki@mail.com"
    And choose gender as "Male"
    And fill mobile number with "1234567890"
    And fill date of birth with "31 Jul 2021"
    And fill subjects with "Maths"
    And fill subjects with "Chemistry"
    And choose Hobbies as "Sports"
    And choose Hobbies as "Reading"
    And upload picture "test.jpg"
    And fill current address with "Jalan Thamrin"
    And select state "NCR"
    And select city "Delhi"
    And click submit button
    Then form submitted