const request = require('request');
const breedName = process.argv[2];
if (!breedName) {
  console.log('Please input the breed name you are searching for.');
  process.exit(1);
}

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (err,response,body)=>{
  if (err) { //Invalid URL, exit
    console.error(`Invalid URL: ${url}`);
    process.exit(1);
  }

  const data = JSON.parse(body);
  if (data.length > 0) {
    data.forEach(element => {
      console.log(`${element.name}: `);
      console.log(element.description);
    });
  } else { //if not found
    console.log(`breed name ${breedName} not found`);
  }


});