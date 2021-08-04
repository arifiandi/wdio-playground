class uploadPage {

    get uploadDocuments() {return $('#uploadFile')}
    get uploadedFilePath() {return $('#uploadedFilePath')}
    
    uploadFile() {
        const filePath = 'image.png'
        const remoteFilePath = browser.uploadFile(filePath)

        this.uploadDocuments.setValue(remoteFilePath)
    }
}

module.exports = new uploadPage