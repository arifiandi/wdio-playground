class uploadPage {
	get uploadDocuments() {return $('#uploadFile')}
	get uploadedFilePath() {return $('#uploadedFilePath')}

	uploadFile(){
		const filePath = '/home/andrehalim/wdio-playground/features/pageobjects/KTP_ACCEPTED.jpg'
		const remoteFilePath = browser.uploadFile(filePath)

		this.uploadDocuments.setValue(remoteFilePath)
	}
}

module.exports = new uploadPage