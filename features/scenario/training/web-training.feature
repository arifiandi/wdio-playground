Feature: Web Training Feature

@web-test
Scenario: Student Registration Form
    Given go to student registration form page
    When fill firstname
    When fill lastname
    When fill email
    When choose gender
    When fill mobile number
    When fill DoB
    When fill subjects
    When checklist hobbies1
    When checklist hobbies2
    When upload a picture
    When fill current address
    # When select state
    # When select city
    Then click submit button
    Then data submitted