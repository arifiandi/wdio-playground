class datePicker {
    get dateOfBirthCalendar() { return $('#dateOfBirthInput') }

    get birthMonth() { return $('.react-datepicker__month-select') }
    get birthYear() { return $('.react-datepicker__year-select') }
    get birthDate() { return $('.react-datepicker__day.react-datepicker__day--030') }

    async selectDate() {
        const input = await this.dateOfBirthCalendar()

        await input.waitForClickable()
        await input.click()

        const month = await this.birthMonth()
        
        await month.waitForClickable()
        await month.click()

        const year = await this.birthYear()
        
        await year.waitForClickable()
        await year.click()

        const date = await this.birthDate()

        await date.waitForClickable()
        await date.click()

        // this.birthMonth.waitForClickable()
        // this.birthMonth.selectByVisibleText('January')
        // this.birthYear.waitForClickable()
        // this.birthYear.selectByVisibleText('2000')
        // this.birthDate.waitForClickable()
        // this.birthDate.click()
        driver.pause(5000)
    }
}

module.exports = new datePicker

