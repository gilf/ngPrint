ngPrint
==============

AngularJS directive for browser printing.

Copyright (C) 2014, 2015, 2016 Gil Fink <gil@sparxys.com>

Installation
------------

You can choose your preferred method of installation:
* Download from github: [ngPrint.min.js](https://github.com/gilf/ngPrint/blob/master/ngPrint.min.js)

Usage
-----
Include both **ngPrint.js** and **ngPrint.css** in your application.

```html
<link href="components/ngPrint/ngPrint.css">
<script src="components/ngPrint/ngPrint.js"></script>
```

Add the module `ngPrint` as a dependency to your app module:

```js
var myapp = angular.module('myapp', ['ngPrint']);
```

### ng-print directive
Use the `ng-print` directive on a button to indicate that it is a print button.
Use the `print-element-id` attribute to indicate the id of the element you want to print.
For example, if you want to print the whole page you can wrap it in an element with the id of myPage and set the `print-element-id` attribute to myPage.

```html
<button class="btn btn-primary" ng-print print-element-id="printThisElement"><i class="fa fa-print"></i> Print</button>
```

As shown in the Following Post:
-----
http://blogs.microsoft.co.il/gilf/2014/08/09/building-a-simple-angularjs-print-directive/

A working plnkr
-----
http://plnkr.co/edit/HkTTHfeLM8buwbWqHuOm?p=preview

License
----

Released under the terms of the [MIT License](LICENSE).