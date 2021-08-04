
class studentRegistPage {

    get firstName() {return $('#firstName')}
    get lastName() {return $('#lastName')}
    get email() {return $('#userEmail')}
    get gender() {return $('label[for=gender-radio-2]')}
    get mobileNumber() {return $('#userNumber')}
    get DoB() {return $('#dateOfBirthInput')}
    get subject() {return $('#subjectsInput')}
    get hobbies1() {return $('label[for=hobbies-checkbox-1]')}
    get hobbies2() {return $('label[for=hobbies-checkbox-2]')}
    get uploadPicture() {return $('#uploadPicture')}
    uploadFile(browser){
        const filePath = '/home/ayynurp/wdio-playground/langit.jpeg'
        const remoteFilePath = browser.uploadFile(filePath)    
        }
    get currentAddress() {return $('#currentAddress')}
    get state() {return $('#react-select-3-input')}
    get city() {return $('#react-select-4-input')}
    get submitButton() {return $ ('#submit')}
    get modal() {return $('.modal-dialog')}
    get closeButton() {return $('#closeLargeModal')}
}
module.exports = new studentRegistPage