class practiceForm{

	get firstName() {return $('#firstName')}
	get lastName() {return $('#lastName')}
	get email() {return $('#userEmail')}
	get genderMale() {return $('#gender-radio-1')}
	get genderFemale() {return $('#gender-radio-2')}
	get genderOther() {return $('#gender-radio-3')}
	get mobile() {return $('#userNumber')}
	get dob() {return $('#dateOfBirthInput')}
	get subjects() {return $('#subjectsInput')}
	get hobbySports() {return $('#hobbies-checkbox-1')}
	get hobbyReading() {return $('#hobbies-checkbox-2')}
	get hobbyMusic() {return $('#hobbies-checkbox-3')}
	get uploadPicture() {return $('#uploadPicture')}
	
	uploadFile(){
		const filePath = 'test.jpg'
		const remoteFilePath = browser.uploadFile(filePath)

		this.uploadDocuments.setValue(remoteFilePath)
	}
	
	get currentAddress() {return $('#currentAddress')}
	get dropdownState() {return $('#react-select-3-input')}	
	get dropdownCity() {return $('#react-select-4-input')}
	get submit() {return $('#submit')}

	get assertName() {return $('//td[text()="Student Name"]/following::td[1]')}
	get assertEmail() {return $('//td[text()="Student Email"]/following::td[1]')}
	get assertGender() {return $('//td[text()="Gender"]/following::td[1]')}
	get assertMobile() {return $('//td[text()="Mobile"]/following::td[1]')}
	get assertDob() {return $('//td[text()="Date of Birth"]/following::td[1]')}
	get assertSubjects() {return $('//td[text()="Subjects"]/following::td[1]')}
	get assertHobby() {return $('//td[text()="Hobbies"]/following::td[1]')}
	get assertPicture() {return $('//td[text()="Picture"]/following::td[1]')}
	get assertAddress() {return $('//td[text()="Address"]/following::td[1]')}
	get assertState() {return $('//td[text()="State and City"]/following::td[1]')}
	

}
module.exports = new practiceForm