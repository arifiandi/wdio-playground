class textField {
    get firstName() {return $('#firstName')} 
    get lastName() {return $('#lastName')}
    get userEmail() {return $('#userEmail')}
    get userNumber() {return $('#userNumber')}
    get currentAddress() {return $('#currentAddress')}
    get subject() {return $('.subjects-auto-complete__value-container')}
}
module.exports = new textField