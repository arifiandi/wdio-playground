const { students } = require("../../helpers/student")

class uploadPicture {
    get uploadImage () {return $('#uploadPicture')}

    uploadFile () {
        const filePath = "sampleFile.jpeg"
        const remoteFilePath = browser.uploadFile(filePath)

        this.uploadImage.setValue(remoteFilePath)
        students.picture = filePath
    }
}

module.exports = new uploadPicture