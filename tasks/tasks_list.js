/*
 * grunt-tasks-list
 * https://github.com/ryansylvestre/grunt-tasks-list
 *
 * Copyright (c) 2013 Ryan Sylvestre
 * Licensed under the MIT license.
 */

'use strict';
module.exports = function(grunt) {
    var colLen = 0;
    var setColLen = function(str){
        colLen = Math.max(colLen, str.length);
    };
    var parseTask = function(name, infoOverride){
        var task = grunt.task._tasks[name];
        var info = infoOverride || task.info;

        if (!task){
            grunt.log.error('Missing ' + name + ' task');
            return;
        }

        setColLen(task.name);
        if (task.multi) { info += ' *'; }
        return { name: task.name, info: info};
    };

    var getAllTasks = function(){
        var tasks = [];
        Object.keys(grunt.task._tasks).forEach(function(name) {
            tasks.push(parseTask(name));
        });
        return tasks;
    };

    grunt.registerMultiTask('tasks_list', 'Your task description goes here.', function() {
        var tasks = [];
        var options = this.options({
            tasks: []
        });
        grunt.task.init([], {help: true});

        if (!options.tasks){
            tasks = getAllTasks();
        } else {
            options.tasks.forEach(function(task){
                if (grunt.util.kindOf(task) === 'string'){
                    tasks.push(parseTask(task));
                } else {
                    tasks.push(parseTask(task.name, task.info));
                }
            });
        }

        grunt.log.writeln().writelns(
            'Tasks run in the order specified. Arguments may be passed to tasks that ' +
                'accept them by using colons, like "lint:files". Tasks marked with * are ' +
                '"multi tasks" and will iterate over all sub-targets if no argument is ' +
                'specified.\n'
        );

        tasks.forEach(function(task){
            if (task){
                grunt.log.writetableln([1, colLen, 2, 76 - colLen], ['', grunt.util._.pad(task.name, colLen), '', task.info]);
            }
        });

    });
};
