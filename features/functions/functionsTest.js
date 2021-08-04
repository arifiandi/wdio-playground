const {datasets} = require ('../helpers/datasetsTest')
const textBox = require ('/home/raysadanfarouq/wdio-playground/features/pageobjects/textBoxTest.js');

class functionsTest {
    selectGender(value) {
        if (value === 'Male') {
            textBox.genderMale.click();
            datasets.gender = textBox.btnMale.getValue();
        } else if (value === 'Female') {
            textBox.genderFemale.click();
            datasets.gender = textBox.btnFemale.getValue();
        } else if (value === 'Other') {
            textBox.genderOther.click();
            datasets.gender = textBox.btnOther.getValue();
        }
    }
        
    frontNumber(str, max) {
        str = str.getDate();
       ; return str.length < max ? addZero("0" + str, max) : str;
    }

    getMonth(val) {
        const month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]
        return month[val.getMonth()]; 
    }

    autoComplete(value) {
        browser.keys(value) 
        if (textBox.autoCompleteList.isDisplayed() === true) {
            browser.keys('Tab');
        }
    }

    selectHobby(value) {
        const hobby = value;
        if (hobby === 'Sport') {
            textBox.hobbySport.click();
            datasets.hobby = textBox.hobbySport.getText();
        } else if (hobby === 'Reading') {
            textBox.hobbyReading.click();
            datasets.hobby = textBox.hobbyReading.getText();
        } else if (hobby === 'Music') {
            textBox.hobbyMusic.click();
            datasets.hobby = textBox.hobbyMusic.getText();
        }
    }

    uploadFile() {
        const filePath = '/home/raysadanfarouq/wdio-playground/features/picture/pic.jpg';
        const remoteFilePath = browser.uploadFile(filePath);
        textBox.uploadPicture.setValue(remoteFilePath);
        datasets.imagePath = filePath.split(/[\\\/]/).pop();
    }

    selectStateCity(state,city) {
        var delhi = textBox.delhiCity;
        var gurgaon = textBox.gurgaonCity;
        var noida = textBox.noidaCity;
        var agra = textBox.agraCity;
        var lucknow = textBox.lucknowCity;
        var merrut = textBox.merrutCity;
        var karnal = textBox.karnalCity;
        var panipat = textBox.panipatCity;
        var jaipur = textBox.jaipurCity;
        var jaiselmer = textBox.jaiselmerCity;
        var arrayCity1 = [delhi,gurgaon,noida];
        var arrayCity2 = [agra,lucknow,merrut];
        var arrayCity3 = [karnal,panipat];
        var arrayCity4 = [jaipur,jaiselmer];
        var state = state;
        var city = city;

        if (state === 'NCR') {
            datasets.state = textBox.stateNCR.getText()
            textBox.stateNCR.click()
            textBox.selectCity.click()
            for (var index = 0; index < arrayCity1.length; index += 1) {
                if (city === arrayCity1[index].getText()) {
                    datasets.city = arrayCity1[index].getText()
                    return arrayCity1[index].click()
                }   
            }
        } else if (state === 'Uttar Pradesh') {
            datasets.state = textBox.stateUttarPradesh.getText()
            textBox.stateUttarPradesh.click()
            textBox.selectCity.click()
            for (var index = 0; index < arrayCity2.length; index += 1) {
                if (city === arrayCity2[index].getText()) {
                    datasets.city = arrayCity2[index].getText()
                    return arrayCity2[index].click()
                }   
            }
        } else if (state === 'Haryana') {
            datasets.state = textBox.stateHaryana.getText()
            textBox.stateHaryana.click()
            textBox.selectCity.click()
            for (var index = 0; index < arrayCity3.length; index += 1) {
                if (city === arrayCity3[index].getText()) {
                    datasets.city = arrayCity3[index].getText()
                    return arrayCity3[index].click()
                }   
            }
        } else if (state === 'Rajasthan') {
            datasets.state = textBox.stateRajasthan.getText()
            textBox.stateRajasthan.click()
            textBox.selectCity.click()
            for (var index = 0; index < arrayCity4.length; index += 1) {
                if (city === arrayCity4[index].getText()) {
                    datasets.city = arrayCity4[index].getText()
                    return arrayCity4[index].click()
                }   
            }
        }
    } 
}
module.exports = new functionsTest;