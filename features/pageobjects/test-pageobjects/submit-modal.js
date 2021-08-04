class submitModal {
    get modalContent() {return $('.modal-content')}
    get modalText() { return $('#example-modal-sizes-title-lg')}
    get closeModalButton () {return $('#closeLargeModal')}
    get modalTable() {return $('.table')}
    get studentName() {return $("//*/table/tbody").$$(".tr[0]/td[1]")}
    get studentEmail () {return $("//*/table/tbody").$$(".tr[1]/td[1]")}
    get studentGender () {return $('.table').$('<tbody>').$$('tr')[2].$$('td')[1]}
    get studentMobileNumber () {return $("//*/table/tbody").$$(".tr[3]/td[1]")}
    get studentDOB () {return $("//*/table/tbody").$$(".tr[4]/td[1]")}
    get studentSubjects () {return $("//*/table/tbody").$$(".tr[5]/td[1]")}
    get studentHobbies () {return $("//*/table/tbody").$$(".tr[6]/td[1]")}
    get studentPicture () {return $("//*/table/tbody").$$(".tr[7]/td[1]")}
    get studentAddress () {return $("//*/table/tbody").$$(".tr[8]/td[1]")}
    get studentStateAndCity () {return $("//*/table/tbody").$$(".tr[9]/td[1]")}
}

module.exports = new submitModal