const stringLength = require("../task1")

    test('check if the string is at least 1 character long and not longer than 10 characters', () => {
        expect(stringLength(" ")).toEqual("Please enter at least 1 character and not longer than 10");
      });

    test('Check the string not longer than 10 characters', () => {
        expect(stringLength("azer")).toBe(4);
      });
