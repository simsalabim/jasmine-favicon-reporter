JasmineFaviconReporter = function() {
  this.failedCount = 0;

  this.specDone = function(result) {
    if (result.status == "failed") {
      this.changeFavicon(++this.failedCount);
    }
  };

  this.changeFavicon = function(count) {
    this.favicon().badge(count);
  };

  this.favicon = function() {
    this.cachedFavicon = this.cachedFavicon || new Favico({ bgColor: "#E5F3E3", textColor: "#D00" });
    return this.cachedFavicon;
  };
};
