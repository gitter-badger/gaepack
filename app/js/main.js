(function () {
    'use strict';
    require("bootstrap-sass-official");

    var Hello = require('hello');
    var hello = new Hello();

    console.log(hello.message);

})();
require("ie10-viewport-bug-workaround");
