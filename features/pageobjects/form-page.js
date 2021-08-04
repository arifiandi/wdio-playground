const { datasets } = require('/home/ariny/wdio-playground/features/helpers/datasets');

class formPage {

    // Fields
    get fullName() {return $('#userName')}
    get emailField() {return $('#userEmail')}
    get currentAddress() {return $('#currentAddress')}
    get permanentAddress() {return $('#permanentAddress')}
    get firstName() {return $('#firstName')}
    get lastName() {return $('#lastName')}
    get mobile() {return $('#userNumber')}
    get dateOfBirthField() {return $('#dateOfBirthInput')}
    get yearOfBirth() {return $('.react-datepicker__year-select')}
    get monthOfBirth() {return $('.react-datepicker__month-select')}
    get subjects() {return $('#subjectsInput')}

    // Radio Button
    get genderMale() {return $$('.custom-control.custom-radio.custom-control-inline')[0]}
    get genderFemale() {return $$('.custom-control.custom-radio.custom-control-inline')[1]}
    get genderOther() {return $$('.custom-control.custom-radio.custom-control-inline')[2]}

    selectGender(gender) {
        if (gender === 'Male') {
            this.genderMale.click();
            datasets.gender = this.genderMale.getValue()
        } else if (gender === 'Female') {
            this.genderFemale.click();
            datasets.gender = this.genderFemale.getValue()
        } else if (gender === 'Other') {
            this.genderOther.click();
            datasets.gender = this.genderOther.getValue()
        }
    }

    // Checkbox
    get hobbySports() {return $('label[for="hobbies-checkbox-1"]')}
    get hobbyReading() {return $('label[for="hobbies-checkbox-2"]')}
    get hobbyMusic() {return $('label[for="hobbies-checkbox-3"]')}

    selectHobbies(hobbies) {
        if (hobbies === 'Sports') {
            this.hobbySports.click();
            datasets.hobbies = this.hobbySports.getText()
        } else if (hobbies === 'Reading') {
            this.hobbyReading.click();
            datasets.hobbies = this.hobbyReading.getText()
        } else if (hobbies === 'Music') {
            this.hobbyMusic.click();
            datasets.hobbies = this.hobbyMusic.getText()
        }
    }

    // Upload Picture
    get uploadPicture() {return $('#uploadPicture')}
    
    uploadFile(filePath) {
        const remoteFilePath = browser.uploadFile(filePath)
        this.uploadPicture.setValue(remoteFilePath)
    }

    // State and City
    get state() {return $('#state')}
    get stateNCR() {return $('#react-select-3-option-0')}
    get stateUttarPradesh() {return $('#react-select-3-option-1')}
    get stateHaryana() {return $('#react-select-3-option-2')}
    get stateRajasthan() {return $('#react-select-3-option-3')}
    
    get city() {return $('#city')}
    get cityDelhi() {return $('#react-select-4-option-0')}
    get cityGurgaon() {return $('#react-select-4-option-1')}
    get cityNoida() {return $('#react-select-4-option-2')}
    get cityAgra() {return $('#react-select-4-option-0')}
    get cityLucknow() {return $('#react-select-4-option-1')}
    get cityMerrut() {return $('#react-select-4-option-2')}
    get cityKarnal() {return $('#react-select-4-option-0')}
    get cityPanipat() {return $('#react-select-4-option-1')}
    get cityJaipur() {return $('#react-select-4-option-0')}
    get cityJaiselmer() {return $('#react-select-4-option-1')}

    selectStateAndCity(state,city) {
        const cityNCR = [this.cityDelhi,this.cityGurgaon,this.cityNoida]
        const cityUttarPradesh = [this.cityAgra,this.cityLucknow,this.cityMerrut]
        const cityHaryana = [this.cityKarnal,this.cityPanipat]
        const cityRajasthan = [this.cityJaipur,this.cityJaiselmer]

        if (state === 'NCR') {
            datasets.state = this.stateNCR.getText()
            this.stateNCR.click()
            this.city.waitForEnabled()
            this.city.click()

            for (var i = 0; i < cityNCR.length; i++) {
                if (city === cityNCR[i].getText()) {
                    datasets.city = cityNCR[i].getText()
                    return cityNCR[i].click()
                }   
            }
        }
        
        else if (state === 'Uttar Pradesh') {
            datasets.state = this.stateUttarPradesh.getText()
            this.stateUttarPradesh.click()
            this.city.waitForEnabled()
            this.city.click()
            
            for (var i = 0; i < cityUttarPradesh.length; i++) {
                if (city === cityUttarPradesh[i].getText()) {
                    datasets.city = cityUttarPradesh[i].getText()
                    return cityUttarPradesh[i].click()
                }   
            }
        }

        else if (state === 'Haryana') {
            datasets.state = this.stateHaryana.getText()
            this.stateHaryana.click()
            this.city.waitForEnabled()
            this.city.click()
            
            for (var i = 0; i < cityHaryana.length; i++) {
                if (city === cityHaryana[i].getText()) {
                    datasets.city = cityHaryana[i].getText()
                    return cityHaryana[i].click()
                }   
            }
        }

        else if (state === 'Rajasthan') {
            datasets.state = this.stateRajasthan.getText()
            this.stateRajasthan.click()
            this.city.waitForEnabled()
            this.city.click()
            
            for (var i = 0; i < cityRajasthan.length; i++) {
                if (city === cityRajasthan[i].getText()) {
                    datasets.city = cityRajasthan[i].getText()
                    return cityRajasthan[i].click()
                }   
            }
        }
    }
    
    // Button
    get submitBtn() {return $('#submit')}
    get closeModal() {return $('#closeLargeModal')}

    // Results Modal
    get display() {return $('.modal-content')}
    get title() {return $('#example-modal-sizes-title-lg')}
    get tableData() {return $('.table-responsive')}
    get studentNameValue() {return $('.table').$('<tbody>').$$('tr')[0].$$(`td`)[1]}
    get studentEmailValue() {return $('.table').$('<tbody>').$$('tr')[1].$$(`td`)[1]}
    get genderValue() {return $('.table').$('<tbody>').$$('tr')[2].$$(`td`)[1]}
    get mobileValue() {return $('.table').$('<tbody>').$$('tr')[3].$$(`td`)[1]}
    get dateOfBirthValue() {return $('.table').$('<tbody>').$$('tr')[4].$$(`td`)[1]}
    get subjectsValue() {return $('.table').$('<tbody>').$$('tr')[5].$$(`td`)[1]}
    get hobbiesValue() {return $('.table').$('<tbody>').$$('tr')[6].$$(`td`)[1]}
    get pictureValue() {return $('.table').$('<tbody>').$$('tr')[7].$$(`td`)[1]}
    get addressValue() {return $('.table').$('<tbody>').$$('tr')[8].$$(`td`)[1]}
    get stateAndCityValue() {return $('.table').$('<tbody>').$$('tr')[9].$$(`td`)[1]}
}

module.exports = new formPage