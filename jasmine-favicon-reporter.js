JasmineFaviconReporter = function(options) {
  options = options || {};

  var jsApiReporter = options.jsApiReporter || window.jsApiReporter;

  this.jasmineDone = function() {
    if (this.failedCount() > 0 && typeof Favico === "function") {
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
    failedCount = 0;
    jsApiReporter.specs().forEach(function(spec){
      if (spec.status == "failed") {
        failedCount++;
      }
    });
    this.cachedFailedCount = this.cachedFailedCount || failedCount;
    return this.cachedFailedCount;
  }
};
