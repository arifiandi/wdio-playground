class testingPage {

    get firstName() {return $('#firstName')}
    get lastName() {return $('#lastName')}
    get emailField() {return $('#userEmail')}
    get maleRadio() {return $('.custom-control-label=Male')}
    get cekRadio() {return $('#gender-radio-1')}
    get femaleRadio() {return $('.custom-control-label=Female')}
    get otherRadio() {return $('.custom-control-label=Other')}
    get userNumber() {return $('#userNumber')}
    get dateClick () {return $('#dateOfBirthInput')}
    get selectYear () {return $('.react-datepicker__year-select')}
    get selectMonth () {return $('.react-datepicker__month-select')}
    get selectDate () {return $('.react-datepicker__week')}
    get subject () {return $('#subjectsInput')}
    get hobbiesOne () {return $('.custom-control-label=Sports')}
    get cekHobi1 () {return $('#hobbies-checkbox-1')}
    get hobbiesTwo () {return $('.custom-control-label=Reading')}
    get hobbiesThree () {return $('.custom-control-label=Music')}
    get currentAddress() {return $('#currentAddress')}
    get state () {return $('#react-select-3-input')}
    get city () {return $('#react-select-4-input')}
    get modal () {return $('.modal-dialog modal-lg')}    
    get submitBtn() {return $('#submit')}
}
module.exports = new testingPage


