
export const GetDate = (date) => {
    var today = new Date(date);
    var month = today.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var day = today.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    var year = today.getFullYear();
    return day + "/" + month + "/" + year;
}