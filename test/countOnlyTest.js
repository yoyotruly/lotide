const { expect } = require("chai");

const countOnly = require("../countOnly");

describe("countOnly()", () => {

  it("should return { linda: 2, gene: 1 } when passed ['bob', 'linda', 'gene', 'linda'] and { linda: true, gene: true }", () => {
    const names = ["bob", "linda", "gene", "linda"];
    const condition = { linda: true, gene: true };
    const expectedOutput = { linda: 2, gene: 1 };

    expect(countOnly(names, condition))
      .to.deep.equal(expectedOutput);
  });

});