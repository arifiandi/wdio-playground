const { stateAndCity } = require("../../helpers/state-city")

class stateCity {
    get stateList() { return $('#state') }
    get cityList() { return $('#city') }
    get stateNCR() { return $('#react-select-3-option-0') }
    get stateUttar() { return $('#react-select-3-option-1') }
    get stateHaryana() { return $('#react-select-3-option-2') }
    get stateRajasthan() { return $('#react-select-3-option-3') }
    get cityDelhi() { return $('#react-select-4-option-0=Delhi') }
    get cityGurgeon() { return $('#react-select-4-option-1=Gurgeon') }
    get cityNoida() { return $('#react-select-4-option-2=Noida') }
    get cityAgra() { return $('#react-select-4-option-0=Agra') }
    get cityLucknow() { return $('#react-select-4-option-1=Lucknow') }
    get cityMerrut() { return $('#react-select-4-option-2=Merrut') }
    get cityKarnal() { return $('#react-select-4-option-0=Karnal') }
    get cityPanipat() { return $('#react-select-4-option-1=Panipat') }
    get cityJaipur() { return $('#react-select-4-option-0=Jaipur') }
    get cityJaiselmer() { return $('#react-select-4-option-1=Jaiselmer') }


    randomState(state, city) {
        this.stateList.click()

        const arrayStateNCR = [this.cityDelhi, this.cityGurgeon, this.cityNoida]
        const arrayStateUttar = [this.cityAgra, this.cityLucknow, this.cityMerrut]
        const arrayStateHaryana = [this.cityKarnal, this.cityPanipat]
        const arrayStateRajasthan = [this.cityJaipur, this.cityJaiselmer]

        if (state === 'NCR') {
            this.stateNCR.click()
            stateAndCity.state = state
            this.cityList.waitForClickable()
            this.cityList.click()
            for (let i = 0; i < arrayStateNCR.length; i++) {
                if (city === arrayStateNCR[i].getText()) {
                    stateAndCity.city = arrayStateNCR[i].getText()
                    console.log("Get City Name: " + arrayStateNCR[i].getText())
                    return arrayStateNCR[i].click()
                }
            }
        } else if (state === 'Uttar') {
            this.stateUttar.click()
            stateAndCity.state = state
            this.cityList.waitForClickable()
            this.cityList.click()
            for (let i = 0; i < arrayStateUttar.length; i++) {
                if (city === arrayStateUttar[i].getText()) {
                    stateAndCity.city = arrayStateUttar[i].getText()
                    console.log("Get City Name: " + arrayStateUttar[i].getText())
                    return arrayStateUttar[i].click()
                }
            }
        } else if (state === 'Haryana') {
            this.stateHaryana.click()
            stateAndCity.state = state
            this.cityList.waitForClickable()
            this.cityList.click()
            for (let i = 0; i < arrayStateHaryana.length; i++) {
                if (city === arrayStateHaryana[i].getText()) {
                    stateAndCity.city = arrayStateHaryana[i].getText()
                    console.log("Get City Name: " + arrayStateHaryana[i].getText())
                    return arrayStateHaryana[i].click()
                }
            }
        } else if (state === 'Rajastha') {
            this.stateRajasthan.click()
            stateAndCity.state = state
            this.cityList.waitForClickable()
            this.cityList.click()
            for (let i = 0; i < arrayStateRajasthan.length; i++) {
                if (city === arrayStateRajasthan[i].getText()) {
                    stateAndCity.city = arrayStateRajasthan[i].getText()
                    console.log("Get City Name: " + arrayStateRajasthan[i].getText())
                    return arrayStateRajasthan[i].click()
                }
            }
        }
    }
}

module.exports = new stateCity