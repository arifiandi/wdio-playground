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
    get state() {return $('#state')}
    get city() {return $('#city')}

    // Button
    get submitBtn() {return $('#submit')}
    get closeModal() {return $('#closeLargeModal')}

    // Results Modal
    get display() {return $('.modal-content')}
    get title() {return $('#example-modal-sizes-title-lg')}
    get tableData() {return $('.table-responsive')}
}

module.exports = new formPage