/*
 * grunt-simple-rest-server
 * https://github.com/jvallelunga/grunt-simple-rest-server
 *
 * Copyright (c) 2014 Jeronimo Vallelunga
 * Licensed under the MIT license.
 */

'use strict';

var rest = require("simple-rest-server");

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('simple_rest_server', 'Mock REST api server', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      //rootPath: './services',
      //port: 5000
    });

    rest.init();
  });

};
