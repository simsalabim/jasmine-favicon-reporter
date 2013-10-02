JasmineFaviconReporter = function(jsApiReporter) {

  this.jasmineDone = function() {
    if (typeof Favico === "function" && this.failedCount() > 0) {
      this.changeFavicon(this.failedCount());
    }
  };

  this.changeFavicon = function(count) {
    this.favicon().badge(count);
  };

  this.favicon = function() {
    this.cachedFavicon = this.cachedFavicon || new Favico({bgColor: "#E5F3E3", textColor: "#D00"});
    return this.cachedFavicon;
  };

  this.failedCount = function() {
    this.cachedFailedCount = this.cachedFailedCount || this.calculateFailedCount();
    return this.cachedFailedCount;
  };

  this.calculateFailedCount = function() {
    failedCount = 0;
    jsApiReporter.specs().forEach(function(spec){
      if (spec.status == "failed") {
        failedCount++;
      }
    });
    return failedCount;
  };
};
