var Amadeus = require("amadeus");
const readline = require("readline");

var amadeus = new Amadeus({
  clientId: "HRRgFa8o9rFWCOEgKAHYVoXZ8TfIGGpa",
  clientSecret: "Q6tA45nGUlAvyzSv",
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Please enter the city code. We can search the hotel list for you! : ",
  (answer) => {
    let modifyAnswer = answer.toUpperCase();

    amadeus.referenceData.locations.hotels.byCity
      .get({
        cityCode: modifyAnswer,
      })
      .then(function (response) {
        let numberOfHotel = response.data;
        console.log("===================================================");
        console.log(`Total number of hotels is : ${numberOfHotel.length}`);
        response.data.forEach((element) => {
          console.log("===================================================");
          console.log(element.name);
          console.log(element.geoCode);
        });
      })
      .catch(function (response) {
        console.error(response);
      });
  }
);
