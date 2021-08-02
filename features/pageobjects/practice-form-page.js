class practiceFormPage {
    get firstName() {return $(`#firstName`)}
    get lastName() {return $(`#lastName`)}
    get email() {return $(`#userEmail`)}
    get genderMale() {return $(`//*[@id="genterWrapper"]/div[2]/div[1]/label`)}
    get genderFemale() {return $(`//*[@id="genterWrapper"]/div[2]/div[2]/label`)}
    get genderOther() {return $(`//*[@id="genterWrapper"]/div[2]/div[3]/label`)}
    get mobileNumber() {return $(`#userNumber`)}
    get dateOfBirth() {return $(`#dateOfBirthInput`)}
    get subjects() {return $(`#subjectsInput`)}
    get subjectsList() {return $(`.subjects-auto-complete__menu`)}
    get hobbiesSports() {return $(`//*[@id="hobbiesWrapper"]/div[2]/div[1]/label`)}
    get hobbiesReading() {return $(`//*[@id="hobbiesWrapper"]/div[2]/div[2]/label`)}
    get hobbiesMusic() {return $(`//*[@id="hobbiesWrapper"]/div[2]/div[3]/label`)}
    get picture() {return $(`#uploadPicture`)}
    get currentAddress() {return $(`#currentAddress`)}
    get state() {return $(`#react-select-3-input`)}
    get stateList() {return $(`.css-26l3qy-menu`)}
    get city() {return $(`#react-select-4-input`)}
    get cityList() {return $(`.css-26l3qy-menu`)}
    get submitButton() {return $(`#submit`)}
    get studentName() {return $(`/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[1]/td[2]`)}
    get studentEmail() {return $(`/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[2]/td[2]`)}
    get studentGender() {return $(`/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[3]/td[2]`)}
    get studentMobile() {return $(`/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[4]/td[2]`)}
    get studentDateOfBirth() {return $(`/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[5]/td[2]`)}
    get studentSubjects() {return $(`/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[6]/td[2]`)}
    get studentHobbies() {return $(`/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[7]/td[2]`)}
    get studentPicture() {return $(`/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[8]/td[2]`)}
    get studentAddress() {return $(`/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[9]/td[2]`)}
    get studentStateAndCity() {return $(`/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[10]/td[2]`)}

    chooseGender(gender) {
        switch(gender) {
            case "Male":
                this.genderMale.click()
                break
            case "Female":
                this.genderFemale.click()
                break
            case "Other":
                this.genderOther.click()
                break
        }
    }

    chooseHobbies(hobbies) {
        switch(hobbies) {
            case "Sports":
                this.hobbiesSports.click()
                break
            case "Reading":
                this.hobbiesReading.click()
                break
            case "Music":
                this.hobbiesMusic.click()
                break
        }
    }

    uploadPicture(fileName) {
        const filePath = "features/pictures/" + fileName
        const remoteFilePath = browser.uploadFile(filePath)
        this.picture.setValue(remoteFilePath)
    }
}
module.exports = new practiceFormPage