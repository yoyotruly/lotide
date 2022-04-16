const { expect } = require("chai");

const findKeyByValue = require("../findKeyByValue");

describe("findKeyByValue()", () => {

  const bestTVShowsByGenre = {
    scifi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it("should return drama when passed bestTVShowsByGenre and The Wire", () => {
    expect(findKeyByValue(bestTVShowsByGenre, "The Wire"))
      .to.equal("drama");
  });

  it("should return undefined when passed Bob's Burger", () => {
    expect(findKeyByValue(bestTVShowsByGenre, "Bob's Burger"))
      .to.equal(undefined);
  });
  
});