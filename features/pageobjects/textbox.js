class textBoxPage {
    get fullNameField () {return $('#userName')}
    get emailField () {return $('#userEmail')}
    get currentAddressField () {return $('#currentAddress')}
    get permanentAddressField () {return $('#permanentAddress')}
    get submitButton () {return $('#submit')}
    // or by class
    // get submitButton () {return $('.btn.btn-primary')}
}

module.exports = new textBoxPage