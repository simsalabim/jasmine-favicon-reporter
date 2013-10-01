# Jasmine Favicon Reporter

Jasmine reporter that shows count of *RED* tests in favicon.

# How to use

Include `favico.js` and the reporter prior to `boot.js`
```html
<!-- SpecRuner.html -->
<script type="text/javascript" src="vendor/favico.js"></script>
<script type="text/javascript" src="jasmine-favicon-reporter.js"></script>
<script type="text/javascript" src="vendor/jasmine-2.0.0-rc2/boot.js"></script>
```

and specify to use it in `boot.js`
```javascript
// vendor/jasmine/boot.js
env.addReporter(new JasmineFaviconReporter(jasmineInterface.jsApiReporter));
```

That's it.

Author: Alexander Kaupanin