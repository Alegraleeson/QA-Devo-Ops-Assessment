const {shuffleArray} = require('./utils')



describe('shuffleArray tests', () => {
    let testArr = ['a','b','c']
    test("shuffleArray should return an array the same length", () => {
        
      
        expect(shuffleArray(testArr).length).toEqual(testArr.length);
      });

      test("shuffleArray should return same elements as passed in array", () => {
      
        expect(shuffleArray(testArr)).toEqual(expect.arrayContaining(testArr));
      });
    
})

