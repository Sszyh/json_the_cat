const { fetchBreedDescription } = require('./breedFetcher');
const args = process.argv;
const breedName = args[2];
fetchBreedDescription(breedName, (error, desc) => {
  //if statement handle error like wrong breed name
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});