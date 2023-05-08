// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns a string description for invalid/non-existent breed, via callback', (done) => {
    fetchBreedDescription('XXXX', (err, desc) => {
      // we expect no desc for this scenario
      assert.ifError(desc); //check if desc is falsy (null, undefined, 0, '', false, NaN)
      assert.ok(err instanceof Error);//check is there an error
      done();
    });
  });
});