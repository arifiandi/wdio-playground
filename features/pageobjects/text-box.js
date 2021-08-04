class textBoxPage{

	get fullName() {return $('#userName')}
	get email() {return $('#userEmail')}
	get currentAddress() {return $('#currentAddress')}
	get permanentAddress() {return $('#permanentAddress')}
	get submit() {return $('#submit')}

}
module.exports = new textBoxPage