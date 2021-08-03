const dateFormat = {
    
    addZero(str, max) {
        str = str.getDate();
        return str.length < max ? addZero("0" + str, max) : str;
    },

    months(val) {
        let month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]
        return month[val.getMonth()]; 
    }
}
module.exports = dateFormat;
