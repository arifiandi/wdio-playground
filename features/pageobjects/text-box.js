class textBoxPage {

    get fullName() {return $('#userName')}
    get emailField() {return $('#userEmail')}
    get currentAddress() {return $('#currentAddress')}
    get permanentAddress() {return $('#permanentAddress')}
    get submitBtn() {return $('.btn.btn-primary')}
}
module.exports = new textBoxPage