class uploadPicture {
    get uploadImage () {return $('#uploadPicture')}

    uploadFile () {
        const filePath = "sampleFile.jpeg"
        const remoteFilePath = browser.uploadFile(filePath)

        this.uploadImage.setValue(remoteFilePath)
        // this.uploadImage.scrollIntoView()
    }
}

module.exports = new uploadPicture