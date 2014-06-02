# grunt-simple-rest-server

> Mock REST api server

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-simple-rest-server --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-simple-rest-server');
```

## The "simple_rest_server" task

### Overview
In your project's Gruntfile, add a section named `simple_rest_server` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  simple_rest_server: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.rootPath
Type: `String`
Default value: `'./services'`

A string value that is used to determine the directory where you locate your rest structure.

#### options.port
Type: `Integer`
Default value: `5000`

A integer value that is used to configure the port where de rest will be running. Ex: http://127.0.0.1:5000 .

### Usage Examples

#### Default Options
In this example, the default options are used to run a rest server. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  simple_rest_server: {
    options: {},
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
