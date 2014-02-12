(function(){describe("Form validations",function(){return it("should return true for any basic input",function(){return expect($.DonationsInit().validField("fds")).toBeTruthy()}),it("should return true for a valid email",function(){return expect($.DonationsInit().validField("a@b.com","email")).toEqual(!0)}),it("should return false for a valid email",function(){return expect($.DonationsInit().validField("ab.com","email")).toEqual(!1)}),it("should accept a valid cvc",function(){return expect($.DonationsInit().validField("432","cvc")).toEqual(!0)}),it("should reject an invalid cvc",function(){return expect($.DonationsInit().validField("432a","cvc")).toEqual(!1)}),it("should accept a valid credit card #",function(){return expect($.DonationsInit().validField("4242 4242 4242 4242","cc-num")).toEqual(!0)}),it("should reject an invalid credit card #",function(){return expect($.DonationsInit().validField("blahblah","cc-num")).toEqual(!1)}),it("should accept a valid credit card #",function(){return expect($.DonationsInit().validField("4242 4242 4242 4242","cc-num")).toEqual(!0)}),it("should accept a valid date if given a year",function(){return spyOn($.fn,"val").and.returnValue("02"),expect($.DonationsInit().validField("2019","year")).toEqual(!0)})})}).call(this);