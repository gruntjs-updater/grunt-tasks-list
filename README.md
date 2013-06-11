# grunt-tasks-list

> Grunt plugin to get a list of tasks and descriptions of your choosing.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-tasks-list --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-tasks-list');
```

## The "tasks_list" task

### Overview
In your project's Gruntfile, add a section named `tasks_list` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  tasks_list: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  }
})
```

### Options

#### options.tasks
Type: `Array`
Default value: `[]`

An `array` of `string` task names and/or objects with name (`string`) and info (`string` - optional) properties.

### Usage Examples

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  tasks_list: {
    options: {
      tasks: ['jshint', {name: 'nodeunit', info: 'Test nodeunit info'}]
    }
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
- 0.1.0 - Initial Release
