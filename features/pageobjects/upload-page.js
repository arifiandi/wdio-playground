class uploadPage {

    get uploadDocuments() {return $('#uploadPicture')}
    get uploadedFilePath() {return $('#uploadedFilePath')}

    uploadFile(){
        const filePath = 'NPWP.jpg'
        const remoteFilePath = browser.uploadFile(filePath)

        this.uploadDocuments.setValue(remoteFilePath)
    }
}

module.exports = new uploadPage