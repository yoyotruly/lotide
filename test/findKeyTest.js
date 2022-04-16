const { expect } = require("chai");

const findKey = require("../findKey");

describe("findKey()", () => {

  it("should return Blue Hill when passed ratings object and callback function x => x.stars === 1", () => {
    const ratings = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 1 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };

    expect(findKey(ratings, x => x.stars === 1))
      .to.equal("Blue Hill");
  });

});