
/**
 * #!/usr/bin/env node
 * with the above line,
 * you have now turned this file into an executable script no need to use node
  run
   chmod 700 1.js
  ./1.js --name=jack
 */
// write some node code finally!

/**
 * Run node 1.js to see the log stmt below in the CLI
 * both statements below are same
 * process is a global variable in node(similar to c++ used
 * for std in and std  out)
 */

//console.log('Hello World!')
//process.stdout.write('Hello World')

/**
 * ACCEPTING INPUT
 * node 1.js world
 * Hello world
 */

// var name = process.argv[2]; //get argument 2
// console.log('Hello ' + name);


/**
 * ACCEPTING INPUT
 * node 1.js --name=world
 * Hello world
 */
// var args = require('minimist')(process.argv.slice(2), {string: 'name'})
// var name = args.name; //get name prop from args
// console.log('Hello ' + name);


/**
 * ADDING HELP
 * node 1.js --help
 1.js (c) Kyle Simpson

 usage:
 --help             print this help
 --name             say hello to {NAME}

 * node 1.js --name=world
 * Hello world
 */

// function printHelp() {
//     console.log('1.js (c) Kyle Simpson')
//     console.log('')
//     console.log('usage:')
//     console.log('--help             print this help')
//     console.log('--name             say hello to {NAME}')
//     console.log('')
// }
//
// var args = require('minimist')(process.argv.slice(2), {string: 'name'})
//
// if(args.help || !args.name) {
//     printHelp()
//     process.exit(1) //immediately terminate the process for us
// }
// var name = args.name; //get name prop from args
// console.log('Hello ' + name);


/**
 * 2.js
 * run
 * node 1.js --file=test.txt
 */

// function printHelp() {
//     console.log('1.js (c) Kyle Simpson')
//     console.log('')
//     console.log('usage:')
//     console.log('--help             print this help')
//     console.log('--file={NAME}      read the file of {NAME} amd output')
//     console.log('')
// }
//
// var args = require('minimist')(process.argv.slice(2), {string: 'name'})
//
// if(args.help || !args.file) {
//     printHelp()
//     process.exit(1) //immediately terminate the process for us
// }
//
// var hello = require('./helloworld.js')
//
// var contents = hello.say(args.file, function(err, contents) {//error first style, used in node
//     if(err) {
//         console.error(err, ": error")
//     } else {
//         console.log(contents.toString())
//     }
// })

/*
function printHelp() {
    console.log('1.js (c) Kyle Simpson')
    console.log('')
    console.log('usage:')
    console.log('--help             print this help')
    console.log('--file={NAME}      read the file of {NAME} amd output')
    console.log('')
}

var args = require('minimist')(process.argv.slice(2), {string: 'name'})

if(args.help || !args.file) {
    printHelp()
    process.exit(1) //immediately terminate the process for us
}

var hello = require('./helloworld.js')

hello.say(args.file)
.val(function (contents) {
    console.log(contents.toString())
})
.or(function (err) {
    console.error(err)
})*/

/**
 * 3.js
 */

function printHelp() {
    console.log('1.js (c) Kyle Simpson')
    console.log('')
    console.log('usage:')
    console.log('--help             print this help')
    console.log('--file={NAME}      read the file of {NAME} amd output')
    console.log('')
}

var args = require('minimist')(process.argv.slice(2), {string: 'name'})

if(args.help || !args.file) {
    printHelp()
    process.exit(1) //immediately terminate the process for us
}

var hello = require('./helloworld.js')

hello.say(args.file)
    .val(function (contents) {
        console.log(contents.toString())
    })
    .or(function (err) {
        console.error(err)
    })