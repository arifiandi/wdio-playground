const {datasets} = require ('../helpers/datasetsTest')

class textBox {
    get firstName() {return $('#firstName')}
    get lastName() {return $('#lastName')}
    get userEmail() {return $('#userEmail')}
    get genderMale() {return $('[for="gender-radio-1"]')}
    get btnMale(){return $('[id="gender-radio-1"]')}
    get genderFemale() {return $('[for="gender-radio-2"]')}
    get btnFemale(){return $('[id="gender-radio-2"]')}
    get genderOther() {return $('[for="gender-radio-3"]')}
    get btnOther(){return $('[id="gender-radio-3"]')}
    get mobileNumber() {return $('#userNumber')}
    get fieldDateOfBirth() {return $('#dateOfBirthInput')}
    get subjectField() {return $('[id="subjectsContainer"]')}
    get valueSubject() {return $('.subjects-auto-complete__multi-value__label')}
    get autoCompleteList() {return $('[class="subjects-auto-complete_menu"]')}
    get hobbySport() {return $('[for="hobbies-checkbox-1"]')}
    get hobbyReading() {return $('[for="hobbies-checkbox-2"]')}
    get hobbyMusic() {return $('[for="hobbies-checkbox-3"]')}
    get uploadPicture() {return $('#uploadPicture')}
    get currentAddress() {return $('#currentAddress')}
    get selectState() {return $('#state')}
    get stateNCR() {return $('#react-select-3-option-0')}
    get stateUttarPradesh() {return $('#react-select-3-option-1')}
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
    get outputTable() {return $('.table')}
    get studentName() {return $('.table').$('<tbody>').$$('tr')[0].$$(`td`)[1]}
    get studentEmail() {return $('.table').$('<tbody>').$$('tr')[1].$$(`td`)[1]}
    get studentGenders() {return $('.table').$('<tbody>').$$('tr')[2].$$(`td`)[1]}
    get studentNumber() {return $('.table').$('<tbody>').$$('tr')[3].$$(`td`)[1]}
    get studentBirth() {return $('.table').$('<tbody>').$$('tr')[4].$$(`td`)[1]}
    get studentSubject() {return $('.table').$('<tbody>').$$('tr')[5].$$(`td`)[1]}
    get studentHobbie() {return $('.table').$('<tbody>').$$('tr')[6].$$(`td`)[1]}
    get studentImage() {return $('.table').$('<tbody>').$$('tr')[7].$$(`td`)[1]}
    get studentAddress() {return $('.table').$('<tbody>').$$('tr')[8].$$(`td`)[1]}
    get studentStateCity() {return $('.table').$('<tbody>').$$('tr')[9].$$(`td`)[1]}
    get closeBtn () {return $('#closeLargeModal')}
}

module.exports = new textBox;
