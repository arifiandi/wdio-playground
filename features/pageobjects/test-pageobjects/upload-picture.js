const { datasets } = require("../../helpers/student")

class uploadPicture {
    get uploadImage () {return $('#uploadPicture')}

    uploadFile () {
        const filePath = "sampleFile.jpeg"
        const remoteFilePath = browser.uploadFile(filePath)

        this.uploadImage.setValue(remoteFilePath)
        datasets.picture = filePath
    }
}

module.exports = new uploadPicture