// function say(filename, cb) {
//     //async reading file
//     return fs.readFile(filename, function (err, contents) {
//         if(err) {
//             cb(err)
//         } else {
//             setTimeout(function () {
//                 cb(null, contents)
//             }, 1000)
//         }
//     });
// }
//
// var fs = require('fs');
// module.exports.say = say;

function readFile(filename, cb) {
    var sq = ASQ();
    fs.readFile(filename, sq.errfcb());
    return sq;
}

function delayMsg(done, contents) {
    setTimeout(function () {
        done(contents)
    }, 1000)
}

function say(filename) {
    //async reading file
    return readFile(filename)
        .then(delayMsg)
}

var fs = require('fs');
var ASQ = require('asynquence')
require('asynquence-contrib')
module.exports.say = say;