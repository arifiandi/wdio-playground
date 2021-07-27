class uploadPicture {

    get uploadPicture() {return $('#uploadPicture')}
    
    uploadFile() {
        const filePath = 'image.png'
        const remoteFilePath = browser.uploadFile(filePath)

        this.uploadPicture.setValue(remoteFilePath)
    }
}

module.exports = new uploadPicture