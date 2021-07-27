class formPage {

    get fullName() {return $('#userName')}
    get emailField() {return $('#userEmail')}
    get currentAddress() {return $('#currentAddress')}
    get permanentAddress() {return $('#permanentAddress')}
    get submitBtn() {return $('#submit')}
    get firstName() {return $('#firstName')}
    get lastName() {return $('#lastName')}
    get gender() {return $('#gender-radio-2')}
    get mobile() {return $('#userNumber')}
    get dateOfBirthField() {return $('#dateOfBirthInput')}
    get yearOfBirth() {return $('.react-datepicker__year-select')}
    get year() {return $('option[value="1994"]')}
    get monthOfBirth() {return $('.react-datepicker__month-select')}
    get month() {return $('option[value="11"]')}
    get dateOfBirth() {return $('div[aria-label="Choose Monday, December 26th, 1994"]')}
    get subjects() {return $('#subjectsInput')}
    get selectedSubjects() {return $('#react-select-2-option-0')}
    get hobbies() {return $('#hobbies-checkbox-3')}
    get currentAddress() {return $('#currentAddress')}
    get state() {return $('#state')}
    get selectedState() {return $('#react-select-3-option-0')}
    get city() {return $('#city')}
    get selectedCity() {return $('#react-select-4-option-0')}

}

module.exports = new formPage