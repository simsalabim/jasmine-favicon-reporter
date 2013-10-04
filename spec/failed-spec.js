describe("New JasmineFaviconReporter", function() {
  var jasmineFaviconReporter;

  beforeEach(function() {
    jasmine.createSpyObj('Favico', ['badge']);
    jasmineFaviconReporter = new JasmineFaviconReporter();
  });

  it("fails for demo purposes, see the favicon changed", function() {
    spyOn(jasmineFaviconReporter.favicon(), 'badge');

    specResult = {
      id: 123,
      description: "with a failing spec",
      fullName: "A Suite inner with a failing spec",
      status: "failed",
      failedExpectations: []
    };

    jasmineFaviconReporter.specDone(specResult);
    expect(jasmineFaviconReporter.favicon().badge).toHaveBeenCalledWith("fails for demo purposes, see the favicon changed");
  });
});
