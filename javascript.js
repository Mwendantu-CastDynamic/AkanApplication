function akanFunction() {
  let name = "";
  let weekday = "";
  let gender = document.getElementById("gender").elements[0].value;
  let date = document.getElementById("date").elements[1].value;
  let month = document.getElementById("month").elements[2].value;
  let year = document.getElementById("year").elements[3].value;
  let dob = month + '/' + date + '/' + year;
  let date2 = new Date(dob);
  let day = date2.getDay();
 let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  if ((date > 0 && date <= 31) && (month > 0 && month <= 12) &&( year>1900 && year <=2100)) {

      if (day == 0) {
          weekday = weekDays[0]
      }
      else if (day == 1) {
          weekday = weekDays[1]

      }
      else if (day == 2) {
          weekday = weekDays[2]

      }
      else if (day == 3) {
          weekday = weekDays[3]

      }
      else if (day == 4) {
          weekday = weekDays[4]

      }
      else if (day == 5) {
          weekday = weekDays[5]

      }
      else if (day == 6) {
          weekday = weekDays[6]

      }

  }    

      if (gender == "male") {
          if (weekday == "Sunday") {
              name = "Kwasi";

          }
          else if (weekday == "Monday") {
              name = "Kwadwo";
          }
          else if (weekday == "Tuesday") {
              name = "Kwabena";
          }
          else if (weekday == "Wednesday") {
              name = "Kwaku";
          }
          else if (weekday == "Thursday") {
              name = "Yaw";
          }
          else if (weekday == "Friday") {
              name = "Kofi";
          }
          else if (weekday == "Saturday") {
              name = "Kwame";
          }

      }
      else if (gender == "female") {
          if (weekday == "Sunday") {
              name = "Akosua";
          }
          else if (weekday == "Monday") {
              name = "Adwoa";
          }
          else if (weekday == "Tuesday") {
              name = "Abenaa";
          }
          else if (weekday == "Wednesday") {
              name = "Akua";
          }
          else if (weekday == "Thursday") {
              name = "Yaa";
          }
          else if (weekday == "Friday") {
              name = "Afua";
          }
          else if (weekday == "Saturday") {
              name = "Ama";
          }
      }
      else{
      
        alert("Enter a valid date format");
  }
  {
  alert("Your Akan name is " + name)
  console.log('date is ' + day);
  console.log('date2 is ' + date2)
  console.log(gender);
  console.log(date);
  }