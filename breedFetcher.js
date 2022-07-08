const request = require('request');

const args = process.argv;
const catName = args[2];
let url = `https://api.thecatapi.com/v1/breeds/search?q=${catName}`;


request(url, function(error, response, body) {
  if (error) {
    console.log("error");
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.error('do not have this breed');
      } else {
      console.log(data[0].description);
      }
    }
  });