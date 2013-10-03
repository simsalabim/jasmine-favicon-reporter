describe("New JasmineFaviconReporter", function() {
  var jasmineFaviconReporter;

  beforeEach(function() {
    jasmine.createSpyObj('Favico', ['badge']);
    jasmineFaviconReporter = new JasmineFaviconReporter();
  });

  it("shows count of failed tests in favicon", function() {
    spyOn(jasmineFaviconReporter.favicon(), 'badge');

    specResult = {
      id: 123,
      description: "with a failing spec",
      fullName: "A Suite inner with a failing spec",
      status: "failed",
      failedExpectations: []
    };

    jasmineFaviconReporter.specDone(specResult);
    expect(jasmineFaviconReporter.favicon().badge).toHaveBeenCalledWith(1);
  });

  it("does not change favicon if all tests passed successfully", function() {
    spyOn(jasmineFaviconReporter.favicon(), 'badge');

    specResult = {
      id: 123,
      description: "with a failing spec",
      fullName: "A Suite inner with a failing spec",
      status: "passed",
      failedExpectations: []
    };

    jasmineFaviconReporter.specDone(specResult);
    expect(jasmineFaviconReporter.favicon().badge).not.toHaveBeenCalled();
  });
});
