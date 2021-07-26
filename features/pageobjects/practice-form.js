const {datasets} = require ('/home/dafa/wdio-playground/features/helper/datasets')
class practiceForm {

    get firstName() {return $('#firstName')}
    get lastName() {return $('#lastName')}
    get email() {return $('#userEmail')}
    get genderMale() {return $('[for="gender-radio-1"]')}
    get btnMale(){return $('[id="gender-radio-1"]')}
    get genderFemale() {return $('[for="gender-radio-2"]')}
    get btnFemale(){return $('[id="gender-radio-2"]')}
    get genderOther() {return $('[for="gender-radio-3"]')}
    get btnOther(){return $('[id="gender-radio-3"]')}
    get mobileNumber() {return $('#userNumber')}
    get fieldDateBirth() {return $('#dateOfBirthInput')}
    get subjectField() {return $('[id="subjectsContainer"]')}
    get valueSubject() {return $('.subjects-auto-complete__multi-value__label')}
    get autoCompleteList() {return $('[class="subjects-auto-complete_menu"]')}
    get hobiSport() {return $('[for="hobbies-checkbox-1"]')}
    get hobiReading() {return $('[for="hobbies-checkbox-2"]')}
    get hobiMusic() {return $('[for="hobbies-checkbox-3"]')}
    get uploadPic() {return $('#uploadPicture')}
    get address() {return $('#currentAddress')}
    get selectState() {return $('#state')}
    get stateNCR() {return $('#react-select-3-option-0')}
    get stateUttar() {return $('#react-select-3-option-1')}
    get stateHaryana() {return $('#react-select-3-option-2')}
    get stateRajasthan() {return $('#react-select-3-option-3')}
    get selectCity() {return $('#city')}
    get delhiCity() {return $('#react-select-4-option-0=Delhi')}
    get gurgaonCity() {return $('#react-select-4-option-1=Gurgaon')}
    get noidaCity() {return $('#react-select-4-option-2=Noida')}
    get agraCity() {return $('#react-select-4-option-0=Agra')}
    get lucknowCity() {return $('#react-select-4-option-1=Lucknow')}
    get merrutCity() {return $('#react-select-4-option-2=Merrut')}
    get karnalCity() {return $('#react-select-4-option-0=Karnal')}
    get panipatCity() {return $('#react-select-4-option-1=Parnipat')}
    get jaipurCity() {return $('#react-select-4-option-0=Jaipur')}
    get jaiselmerCity() {return $('#react-select-4-option-1=Jaiselmer')}
    get submitBtn() {return $('#submit')}
    get headerTable () {return $('.modal-header')}
    get tableAssert() {return $('.table')}
    get studentName() {return $('.table').$('<tbody>').$$('tr')[0].$(`td=${datasets.firstName} ${datasets.lastName}`)}
    get studentEmail() {return $('.table').$('<tbody>').$$('tr')[1].$(`td=${datasets.email}`)}
    get studentGenders() {return $('.table').$('<tbody>').$$('tr')[2].$(`td=${datasets.gender}`)}
    get studentNumber() {return $('.table').$('<tbody>').$$('tr')[3].$(`td=${datasets.mobileNumber}`)}
    get studentbirth() {return $('.table').$('<tbody>').$$('tr')[4].$(`td=${datasets.dateBirth}`)}
    get studentSubject() {return $('.table').$('<tbody>').$$('tr')[5].$(`td=${datasets.subjects}`)}
    get studentHobbie() {return $('.table').$('<tbody>').$$('tr')[6].$(`td=${datasets.hobbies}`)}
    get studentImage() {return $('.table').$('<tbody>').$$('tr')[7].$(`td=${datasets.pathImage}`)}
    get studentAddress() {return $('.table').$('<tbody>').$$('tr')[8].$(`td=${datasets.address}`)}
    get studentStateCity() {return $('.table').$('<tbody>').$$('tr')[9].$(`td=${datasets.state} ${datasets.city}`)}
    get closeBtn () {return $('#closeLargeModal')}

    fillGender(value) {
        if (value === 'male') {
            this.genderMale.click();
            datasets.gender = this.btnMale.getValue()
        } else if (value === 'female') {
            this.genderFemale.click();
            datasets.gender = this.btnFemale.getValue()
        } else if (value === 'other') {
            this.genderOther.click();
            datasets.gender = this.btnOther.getValue()
        }
    }

    fillAutoComplete(value) {
        browser.keys(value) 
        if (this.autoCompleteList.isDisplayed() === true) {
            browser.keys('Tab')
        }
    }

    clickHobbies(value) {
        let state = value.toLowerCase();
        if (state === 'sport') {
            this.hobiSport.click()
            datasets.hobbies = this.hobiSport.getText()
        } else if (state === 'reading') {
            this.hobiReading.click();
            datasets.hobbies = this.hobiReading.getText()
        } else if (state === 'music') {
            this.hobiMusic.click();
            datasets.hobbies = this.hobiMusic.getText()
        }
    }

    uploadFile() {
        const filePath = '/home/dafa/wdio-playground/features/foto/WhatsApp Image 2021-07-15 at 10.37.03.jpeg'
        const remoteFilePath = browser.uploadFile(filePath)
        this.uploadPic.setValue(remoteFilePath);
        datasets.pathImage = filePath
    }

    chooseStateCity(state,city) {
        var delhi = this.delhiCity
        var gurgaon = this.gurgaonCity
        var noida = this.noidaCity
        var agra = this.agraCity
        var lucknow = this.lucknowCity
        var merrut = this.merrutCity
        var karnal = this.karnalCity
        var panipat = this.panipatCity
        var jaipur = this.jaipurCity
        var jaiselmer = this.jaiselmerCity
        var city1 = [delhi,gurgaon,noida]
        var city2 = [agra,lucknow,merrut]
        var city3 = [karnal,panipat]
        var city4 = [jaipur,jaiselmer]
        var value = state.toLowerCase();
        var citys = city.toLowerCase();
        if (value === 'ncr') {
            this.stateNCR.waitForDisplayed()
            datasets.state = this.stateNCR.getText()
            this.stateNCR.click()
            this.selectCity.waitForEnabled()
            this.selectCity.click()
            for (var index = 0; index < city1.length; index += 1) {
                if (citys === city1[index].getText().toLowerCase()) {
                    datasets.city = city1[index].getText()
                    return city1[index].click()
                }   
            }
        } else if (value === 'uttar') {
            this.stateUttar.waitForDisplayed()
            datasets.state = this.stateUttar.getText()
            this.stateUttar.click()
            this.selectCity.waitForEnabled()
            this.selectCity.click()
            for (var index = 0; index < city2.length; index += 1) {
                if (citys === city2[index].getText().toLowerCase()) {
                    datasets.city = city2[index].getText()
                    return city2[index].click()
                }   
            }
        } else if (value === 'haryana') {
            this.stateHaryana.waitForDisplayed()
            datasets.state = this.stateHaryana.getText()
            this.stateHaryana.click()
            this.selectCity.waitForEnabled()
            this.selectCity.click()
            for (var index = 0; index < city2.length; index += 1) {
                if (citys === city3[index].getText().toLowerCase()) {
                    datasets.city = city3[index].getText()
                    return city3[index].click()
                }   
            }
        } else if (value === 'rajasthan') {
            this.stateRajasthan.waitForDisplayed()
            datasets.state = this.stateRajasthan.getText()
            this.stateRajasthan.click()
            this.selectCity.waitForEnabled()
            this.selectCity.click()
            for (var index = 0; index < city2.length; index += 1) {
                if (citys === city4[index].getText().toLowerCase()) {
                    datasets.city = city4[index].getText()
                    return city4[index].click()
                }   
            }
        }
    } 
}
module.exports = new practiceForm;
