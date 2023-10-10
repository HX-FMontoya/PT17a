const { checkSeatStatus, getRowNumber, book } = require("../homework");

describe("test from checkSeatStatus", () => {
  it("checkSeatStatus must be a function", () => {
    expect(typeof checkSeatStatus).toBe("function");
  });

  it("checkSeatStatus must recived a string in the first parameter", () => {
    // En que momento necesito yo ejecutar una cb en el test? se resolvio en vivo
    expect(() => checkSeatStatus(98)).toThrow(
      new TypeError("First parameter is not a string")
    );
  });

  it("checkSeatStatus should throw a TypeError if second parameter is not a number", () => {
    expect(() => checkSeatStatus("A", "2")).toThrow(
      new TypeError("Second parameter is not a number")
    );
  });

  it("shloud return false for checkSeatStatus ejected with A1", () => {
    expect(checkSeatStatus("A", 1)).toBe(false);
  });
});

describe("test from getRowNumber", () => {
  it("getRowNumber should returned 0 if is called with A", () => {
    expect(getRowNumber("A")).toBe(0);
  });
  it("getRowNumber should returned 2 if is called with C", () => {
    expect(getRowNumber("C")).toBe(2);
  });
});

describe("test from book", () => {
  it("If book is called with A1, should returned: 'Seat in A1 is already booked'", () => {
    expect(book("A", 1)).toBe("Seat in A1 is already booked");
  });
  it("If book is called with B0, should returned: 'Seat in B0 successfully booked'", () => {
    expect(book("B", 0)).toBe("Seat in B0 successfully booked");
  });
});
