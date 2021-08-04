class uploadPage {
    get uploadDocuments() { return $('#uploadFile') }
    get uploadFilePath() { return $('#uploadedFilePath')}

    uploadFile () {
        const filePath = 'image.png'
        const remoteFilePath = browser.uploadFile(filePath)

        // set value
        this.uploadDocuments.setValue(remoteFilePath)
    }
}

module.exports = new uploadPage