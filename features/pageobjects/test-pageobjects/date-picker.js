class datePicker {
    get dateOfBirthCalendar() { return $('#dateOfBirthInput') }

    get birthMonth() { return $('.react-datepicker__month-select') }
    get birthYear() { return $('.react-datepicker__year-select') }
    get birthDate() { return $('.react-datepicker__day.react-datepicker__day--030') }

    selectDate() {
        this.dateOfBirthCalendar.click()
        this.birthMonth.waitForClickable()
        this.birthMonth.selectByAttribute('value', '8')
        this.birthYear.waitForClickable()
        this.birthYear.selectByAttribute('value', '2000')
        this.birthDate.waitForClickable()
        this.birthDate.click()
    }
}

module.exports = new datePicker

