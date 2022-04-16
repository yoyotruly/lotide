const { expect } = require("chai");

const takeUntil = require("../takeUntil");

describe("takeUntil()", () => {

  it("should return [1, 2] when passed [1, 2, -3, 4, -5] and callback x => x < 0", () => {
    expect(takeUntil([1, 2, -3, 4, -5], x => x < 0))
      .to.deep.equal([1, 2]);
  });

  it("should return ['hello', 'world'] when passed ['hello', 'world', '!'] and callback x => x === '!'", () => {
    expect(takeUntil(["hello", "world", "!"], x => x === "!"))
      .to.deep.equal(["hello", "world"]);
  });

});