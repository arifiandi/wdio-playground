const { datasets } = require("../../helpers/student")

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
        get stateList() { return $('#state') }
        get cityList() { return $('#city') }
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
                        datasets.gender = this.genderMale.getValue()

                } else if (gender === 'Female') {
                        this.genderFemale.click()
                        datasets.gender = this.genderFemale.getValue()

                } else if (gender === 'Other') {
                        this.genderOther.click()
                        datasets.gender = this.genderOther.getValue()

                }
        }

        selectHobbies(hobby) {
                if (hobby === 'Sports') {
                        this.sportHobbies.waitForClickable()
                        this.sportHobbies.click()
                        datasets.hobbies = this.sportHobbies.getValue()
                } else if (hobby === 'Reading') {
                        this.readingHobbies.waitForClickable()
                        this.readingHobbies.click()
                        datasets.hobbies = this.readingHobbies.getValue()
                } else if (hobby === 'Music') {
                        this.musicHobbies.waitForClickable()
                        this.musicHobbies.click()
                        datasets.hobbies = this.musicHobbies.getValue()
                }
        }

        selectStateAndCity() {
                this.stateList.click()
                browser.keys('Enter')
                this.cityList.waitForClickable()
                this.cityList.click()
                browser.keys('Enter')
        }
}

module.exports = new practiceForm