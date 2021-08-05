class uploadPage {

    get uploadDocuments() { return $('#uploadeFile') }

    uploadFile(){
        const filePath = 'Gambar.png'
        const remoteFilePath = browser.uploadFile(filePath)
        this.uploadDocuments.setValue(remoteFilePath)
    }
}
module.exports = new uploadPage
