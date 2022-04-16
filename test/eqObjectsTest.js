const { expect } = require("chai");

const eqObjects = require("../eqObjects");

describe("eqObjects()", () => {
  
  it("should return true when passed { a: 1, b: 2 } and { b: 2, a: 1 }", () => {
    const object1 = { a: 1, b: 2 };
    const object2 = { b: 2, a: 1 };

    expect(eqObjects(object1, object2))
      .to.be.true;
  });

  it("should return true when passed { a: 1, b: [2, 3] } and { b: [2, 3], a: 1 }", () => {
    const object1 = { a: 1, b: [2, 3] };
    const object2 = { b: [2, 3], a: 1 };

    expect(eqObjects(object1, object2))
      .to.be.true;
  });

  it("should return false when passed { a: 1, b: [2, 3] } and { b: '3', a: 1 }", () => {
    const object1 = { a: 1, b: [2, 3] };
    const object2 = { b: "3", a: 1 };

    expect(eqObjects(object1, object2))
      .to.be.false;
  });

});
