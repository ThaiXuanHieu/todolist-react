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
};

export const FormatDateInput = (date) => {
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
  return year + "-" + month + "-" + day;
};

export const FormatHour = (date) => {
  var today = new Date(date);
  var hour = today.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }
  return hour;
};

export const FormatMinutes = (date) => {
  var today = new Date(date);
  var minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes;
};
