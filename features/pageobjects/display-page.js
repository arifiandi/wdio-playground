class displayModal {

    get display() {return $('.modal-content')}
    get title() {return $('#example-modal-sizes-title-lg')}
    get tableData() {return $('.table-responsive')}
    get closeModal() {return $('#closeLargeModal')}

}

module.exports = new displayModal