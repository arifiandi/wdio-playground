class formPage {
    get firstName() { return $('#firstName') }
    get lastName() { return $('#lastName') }
    get userEmail() { return $('#userEmail') }
    get optionMale() { return $$('.custom-control.custom-radio.custom-control-inline')[0] }
    get optionFemale() { return $$('.custom-control.custom-radio.custom-control-inline')[1] }
    get optionOther() { return $$('.custom-control.custom-radio.custom-control-inline')[2] }
    get phoneNumber() { return $('#userNumber') }
    get dob() { return $('#dateOfBirthInput') }
    get month() { return $('.react-datepicker__month-select')}
    get year() { return $('.react-datepicker__year-select')}
    get date () { return $('.react-datepicker__day.react-datepicker__day--008') } //For the date just change the number 001 to 031
    get dateWeekend () { return $('.react-datepicker__day.react-datepicker__day--012.react-datepicker__day--weekend')} //For the date just change the number 001 to 031
    get subject() { return $('#subjectsInput') }
    get sportHobbies() { return $$('.custom-control.custom-checkbox.custom-control-inline')[0] }
    get readingHobbies() { return $$('.custom-control.custom-checkbox.custom-control-inline')[1] }
    get musicHobbies() { return $$('.custom-control.custom-checkbox.custom-control-inline')[2] }
    get uploadPicture() { return $('#uploadPicture') }
    get currAddress() { return $('#currentAddress') }
    get state() { return $('#state') }
    get stateOption() { return $('#react-select-3-option-2')}
    get city() { return $('#city') }
    get cityOption() {return  $('#react-select-4-option-0')}
    get submitButton() { return $('#submit') }
    get submitForm() { return $('.modal-body')}

    uploadFile() {
        const filePath = 'DarkseidRender.png'
        const remoteFilePath = browser.uploadFile(filePath)

        this.uploadPicture.setValue(remoteFilePath)
    }
}

module.exports = new formPage