//breedFetcher.js

const fetchBreedDescription = function(breedName, callback) {
  const request = require('request');
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  if (!breedName) {
    callback(new Error(`Please input the breed name you are searching for.`));
  }
  request(url, (err,response,body)=>{
    if (err) { //Invalid URL, return error
      callback(new Error(`Invalid URL: ${url}`));
    }
  
    const data = JSON.parse(body);
    if (data.length > 0) {
      data.forEach(element => {
        callback(null, element.description);
      });
    } else { //if not found
      callback(new Error(`breed name ${breedName} not found`));
    }
 
  });



};


module.exports = { fetchBreedDescription };