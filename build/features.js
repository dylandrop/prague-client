(function(){casper.test.begin("completing a valid form",3,function(test){casper.start("file:///Users/dylandrop/Documents/controlShift/donations/client/build/index.html"),casper.then(function(){var nextPageIsVisible,noErrors;this.evaluate(function(){return $(".donation-btn:first").click()}),this.evaluate(function(){return $(".donation-next-btn:visible").click()}),nextPageIsVisible=this.evaluate(function(){return $(".donation-text-field[name='customer.first_name']").is(":visible")}),test.assert(nextPageIsVisible,"Step 2 is visible"),this.fill("form#donation-form",{"customer.first_name":"Foo","customer.last_name":"Bar","customer.email":"foo@bar.com"},!1),this.evaluate(function(){return $(".donation-next-btn:visible").click()}),nextPageIsVisible=this.evaluate(function(){return $("input[type=cc-num]").is(":visible")}),test.assert(nextPageIsVisible,"Step 3 is visible"),this.fill("form#donation-form",{"cc-num":"4242 4242 4242 4242",month:"02",year:""+((new Date).getFullYear()+1),cvc:"4242"},!1),noErrors=this.evaluate(function(){return $(".donation-text-field-error").length}),test.assertEquals(noErrors,0,"No errors are present")}),casper.run(function(){test.done()})})}).call(this);