'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.simple_rest_server = {
  setUp: function(done) {
    // setup here if necessary
    var Client = require('node-rest-client').Client;   
    this.client = new Client();

    done();
  },
  default_server: function(test) {
    test.expect(2);

    // direct way
    this.client.get("http://127.0.0.1:5000/projects", function(data, response){

      test.equal(response.statusCode, 200);
      test.equal(data.name, "Default Project");
      
      test.done();
    });
  },
  custom_server: function(test) {
    test.expect(2);

    // direct way
    this.client.get("http://127.0.0.1:6000/projects", function(data, response){

      test.equal(response.statusCode, 200);
      test.equal(data.name, "Custom Project");
      
      test.done();
    });
  },
};
