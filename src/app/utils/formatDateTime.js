function reduceDateTime(date) {
  let dateTime = new Date(date);
  let month = dateTime.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let day = dateTime.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  let year = dateTime.getFullYear();

  return {
    day : day,
    month: month,
    year: year
  }
}

export const GetDate = (date) => {
  const dateTime = reduceDateTime(date)
  return dateTime.month + "/" + dateTime.day + "/" + dateTime.year;
};

export const FormatDateTime = (date) => {
  const dateTime = reduceDateTime(date)
  return dateTime.day + "/" + dateTime.month + "/" + dateTime.year;
};

export const FormatDateInput = (date) => {
  const dateTime = reduceDateTime(date)
  return dateTime.year + "-" + dateTime.month + "-" + dateTime.day;
};

export const FormatHour = (date) => {
  let dateTime = new Date(date);
  let hour = dateTime.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }
  return hour;
};

export const FormatMinutes = (date) => {
  let dateTime = new Date(date);
  let minutes = dateTime.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes;
};

export const NewDateTime = (oldDateTime, hour, minute) => {
  let dateTime = oldDateTime;
  console.log("Old " + oldDateTime);
  let date = GetDate(dateTime);
  console.log("Date " + date);
  let time = dateTime.toLocaleTimeString().toString().split(":");
  time[0] = hour;
  time[1] = minute;
  time = time.join(":");
  dateTime = date + " " + time;
  console.log("New " + new Date(dateTime));
  return new Date(dateTime);
};
