class uploadPicture {
    get uploadImage () {return $('#uploadPicture')}

    uploadFile () {
        const filePath = "sampleFile.jpeg"
        const remoteFilePath = browser.uploadFile(filePath)

        this.uploadImage.setValue(remoteFilePath)
    }
}

module.exports = new uploadPicture