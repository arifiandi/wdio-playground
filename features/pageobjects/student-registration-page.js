
class studentRegistrationPage {

	get firstName() {return $('#firstName')}
	get lastName() {return $('#lastName')}
	get userEmail() {return $('#userEmail')}
	get maleRadioButton() {return $('/html/body/div[2]/div/div/div[2]/div[2]/div[1]/form/div[3]/div[2]/div[1]/label')}
	get femaleRadioButton() {return $('/html/body/div[2]/div/div/div[2]/div[2]/div[1]/form/div[3]/div[2]/div[2]/label')}
	get otherRadioButton() {return $('/html/body/div[2]/div/div/div[2]/div[2]/div[1]/form/div[3]/div[2]/div[3]/label')}
	get userNumber() {return $('#userNumber')}
	get dateOfBirth() {return $('#dateOfBirthInput')}
	get date() {return $('/html/body/div[2]/div/div/div[2]/div[2]/div[1]/form/div[5]/div[2]/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div[3]')}
	get subjects() {return $('#subjectsInput')}
	get sportsCheckbox() {return $('/html/body/div[2]/div/div/div[2]/div[2]/div[1]/form/div[7]/div[2]/div[1]/label')}
	get readingCheckbox() {return $('/html/body/div[2]/div/div/div[2]/div[2]/div[1]/form/div[7]/div[2]/div[2]/label')}
	get musicCheckbox() {return $('/html/body/div[2]/div/div/div[2]/div[2]/div[1]/form/div[7]/div[2]/div[3]/label')}
	get browsePicture() {return $('#uploadPicture')}
	uploadFile(){
		const filePath = 'test.jpg'
		const remoteFilePath = browser.uploadFile(filePath)
		this.browsePicture.setValue(remoteFilePath)
	}
	get currentAddress() {return $('#currentAddress')}
	get state() {return $('#state')}
	get stateField() {return $('#react-select-3-input')}
	get city() {return $('#city')}
	get cityField() {return $('#react-select-4-input')}
	get submitButton() {return $('#submit')}
	screenshotSubmittedForm(){
		const filePath = 'test-result.png'
		browser.saveScreenshot(filePath)
	}
	get submittedStudentName() {return $('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[1]/td[2]')}
	get submittedStudentEmail() {return $('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[2]/td[2]')}
	get submittedGender() {return $('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[3]/td[2]')}
	get submittedMobile() {return $('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[4]/td[2]')}
	get submittedDateOfBirth() {return $('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[5]/td[2]')}
	get submittedSubject() {return $('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[6]/td[2]')}
	get submittedHobby() {return $('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[7]/td[2]')}
	get submittedPicture() {return $('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[8]/td[2]')}
	get submittedAddress() {return $('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[9]/td[2]')}
	get submittedStateAndCity() {return $('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[10]/td[2]')}
}

module.exports = new studentRegistrationPage();