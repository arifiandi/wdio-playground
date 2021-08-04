Feature: Test Practice Form

@test-practiceform
Scenario: input practice form
    Given open "https://demoqa.com/automation-practice-form"
    When input first name "Andre"
    And input last name "Halim"
    And input email "andre.halim@indodana.com"
    And choose gender "Male"
    And input phone number "1234567890"
    And input dob "12 Oct 2000"
    And input subjects "Maths"
    And choose hobby "Music"
    And upload picture
    And input currect address "Jalan alamat testing 123"
    And choose state "Haryana"
    And choose city "Karnal"
    Then click submit
    Then verify data