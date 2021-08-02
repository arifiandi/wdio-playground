class practiceForm {
    get firstNameField() { return $('#firstName') }
    get lastNameField() { return $('#lastName') }
    get userEmailField() { return $('#userEmail') }
    get genderRadioButton() { return $$('.custom-control.custom-radio.custom-control-inline')[1] }
    get mobileNumberField() { return $('#userNumber') }
    get subjectInput() { return $('#subjectsInput') }
    get sportHobbies() { return $$('.custom-control.custom-checkbox.custom-control-inline')[0] }
    get readingHobbies() { return $$('.custom-control.custom-checkbox.custom-control-inline')[1] }
    get musicHobbies() { return $$('.custom-control.custom-checkbox.custom-control-inline')[2] }
    get currentAddressField() { return $('#currentAddress') }
    get stateList() { return $('#state') }
    get cityList() { return $('#city') }

    enterSubject() {
            this.subjectInput.waitForDisplayed()
            browser.keys('ArrowDown')
            browser.keys('Enter')
            this.subjectInput.scrollIntoView()
    }

    selectHobbies() {
            this.sportHobbies.waitForClickable()
            this.sportHobbies.click()
            // this.readingHobbies.waitForClickable()
            // this.readingHobbies.click()
            // this.musicHobbies.waitForClickable()
            // this.musicHobbies.click()
    }

    selectStateAndCity() {
            this.stateList.click()
            browser.keys('ArrowDown')
            browser.keys('Enter')
            this.cityList.waitForClickable()
            this.cityList.click()
            browser.keys('ArrowDown')
            browser.keys('Enter')
    }
}

module.exports = new practiceForm