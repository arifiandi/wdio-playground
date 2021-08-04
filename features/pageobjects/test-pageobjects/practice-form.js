const { students } = require("../../helpers/student")

class practiceForm {
        get firstNameField() { return $('#firstName') }
        get lastNameField() { return $('#lastName') }
        get userEmailField() { return $('#userEmail') }
        get genderMale() { return $$('.custom-control.custom-radio.custom-control-inline')[0] }
        get genderFemale() { return $$('.custom-control.custom-radio.custom-control-inline')[1] }
        get genderOther() { return $$('.custom-control.custom-radio.custom-control-inline')[2] }
        get mobileNumberField() { return $('#userNumber') }
        get subjectInput() { return $('#subjectsInput') }
        get sportHobbies() { return $$('.custom-control.custom-checkbox.custom-control-inline')[0] }
        get readingHobbies() { return $$('.custom-control.custom-checkbox.custom-control-inline')[1] }
        get musicHobbies() { return $$('.custom-control.custom-checkbox.custom-control-inline')[2] }
        get currentAddressField() { return $('#currentAddress') }
        get submitButton() { return $('#submit') }

        enterSubject() {
                this.subjectInput.waitForDisplayed()
                browser.keys('ArrowDown')
                browser.keys('Enter')
                this.subjectInput.scrollIntoView()
        }

        selectGender(gender) {
                if (gender === 'Male') {
                        this.genderMale.click()
                        students.gender = this.genderMale.getValue()

                } else if (gender === 'Female') {
                        this.genderFemale.click()
                        students.gender = this.genderFemale.getValue()

                } else if (gender === 'Other') {
                        this.genderOther.click()
                        students.gender = this.genderOther.getValue()

                }
        }

        selectHobbies(hobby) {
                if (hobby === 'Sports') {
                        this.sportHobbies.waitForClickable()
                        this.sportHobbies.click()
                        students.hobbies = this.sportHobbies.getValue()
                } else if (hobby === 'Reading') {
                        this.readingHobbies.waitForClickable()
                        this.readingHobbies.click()
                        students.hobbies = this.readingHobbies.getValue()
                } else if (hobby === 'Music') {
                        this.musicHobbies.waitForClickable()
                        this.musicHobbies.click()
                        students.hobbies = this.musicHobbies.getValue()
                }
        }
}

module.exports = new practiceForm