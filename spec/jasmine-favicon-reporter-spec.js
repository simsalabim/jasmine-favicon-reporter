describe("New JasmineFaviconReporter", function() {
  var jsApiReporter;
  var jasmineFaviconReporter;

  describe("when Favico is present on page", function() {

    beforeEach(function() {
      Favico = (function() {
        var badge = function() { return true; };
        return { badge: badge };
      });
      jsApiReporter = new j$.JsApiReporter({});
      jasmineFaviconReporter = new JasmineFaviconReporter({ jsApiReporter: jsApiReporter });
    });

    it("shows count of failed tests in favicon", function() {
      spyOn(jasmineFaviconReporter.favicon(), 'badge');

      jsApiReporter.suiteStarted({
        id: 1,
        description: "A Suite",
        fullName: "A Suite"
      });

      specResult = {
        id: 123,
        description: "with a failing spec",
        fullName: "A Suite inner with a failing spec",
        status: "failed",
        failedExpectations: []
      };

      jsApiReporter.specDone(specResult);
      jsApiReporter.jasmineDone({});
      jasmineFaviconReporter.jasmineDone({});
      expect(jasmineFaviconReporter.favicon().badge).toHaveBeenCalledWith(1);
    });

    it("does not change favicon if all tests passed successfully", function() {
      spyOn(jasmineFaviconReporter.favicon(), 'badge');

      jsApiReporter.suiteStarted({
        id: 1,
        description: "A Suite",
        fullName: "A Suite"
      });

      specResult = {
        id: 123,
        description: "with a failing spec",
        fullName: "A Suite inner with a failing spec",
        status: "passed",
        failedExpectations: []
      };

      jsApiReporter.specDone(specResult);
      jsApiReporter.jasmineDone({});
      jasmineFaviconReporter.jasmineDone({});
      expect(jasmineFaviconReporter.favicon().badge).not.toHaveBeenCalled();
    });
  });

  describe("when Favico is not present on page", function() {

    beforeEach(function() {
      window.Favico = null;
      jsApiReporter = new j$.JsApiReporter({});
      jasmineFaviconReporter = new JasmineFaviconReporter({ jsApiReporter: jsApiReporter });
    });

    it("does not try to change favicon even if some tests failed", function() {
      spyOn(jasmineFaviconReporter, 'changeFavicon');

      jsApiReporter.suiteStarted({
        id: 1,
        description: "A Suite",
        fullName: "A Suite"
      });

      specResult = {
        id: 123,
        description: "with a failing spec",
        fullName: "A Suite inner with a failing spec",
        status: "failed",
        failedExpectations: []
      };

      jsApiReporter.specDone(specResult);
      jsApiReporter.jasmineDone({});
      jasmineFaviconReporter.jasmineDone({});
      expect(jasmineFaviconReporter.changeFavicon).not.toHaveBeenCalled();
    });
  });
});
