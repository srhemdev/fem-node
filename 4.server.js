/**
 * Learning node from networking perspective
 * like a socket server
 * 4.server.js
 */
/*
function handleHTTP(req, res) {
    if(req.method === 'GET') {
        if(req.url === '/') {
            res.writeHead(200, {'Content-type':'text/plain'})
            res.write('Hello World')
            res.end('Hello World:' + Math.random())
        } else {
            res.writeHead(403)
            res.end('Get outta here!')
        }

    } else {
        res.writeHead(403)
        res.end('Get outta here!')
    }

}

var http = require('http');
var host = 'localhost';
var port = 8006;

var http_serv = http.createServer(handleHTTP).listen(port, host)

*/

/**
 * 5.sever.js
 */

/*
var ASQ = require('asynquence')

function handleHTTP(req, res) {
    if(req.method === 'GET') {
        if(req.url === '/') {
            res.writeHead(200, {'Content-type':'text/plain'})

            // var sq = ASQ();
            // fs.readFile(filename, sq.errfcb());
            // return sq;

            ASQ(function (done) {
                setTimeout(function () {
                    done(Math.random())
                }, 1000)
            }).then(function (done, num) {
                setTimeout(function () {
                    done('Hello World: ' + num)
                },1000)
            }).val(function(msg){
                res.end(msg)
            })

            // setTimeout(function () {
            //     var num = Math.random()
            //     setTimeout(function () {
            //         res.end('Hello World:' + num)
            //     }, 1000)
            // }, 1000)
        } else {
            res.writeHead(403)
            res.end('Get outta here!')
        }

    } else {
        res.writeHead(403)
        res.end('Get outta here!')
    }

}


var http = require('http');
var host = 'localhost';
var port = 8006;

var http_serv = http.createServer(handleHTTP).listen(port, host)
 */

/**
 * Serving static files
 */
/*
var ASQ = require('asynquence')
var node_static = require('node-static')
var static_files = new node_static.Server(__dirname)

function handleHTTP(req, res) {
    if(req.method === 'GET') {
        //show an html file
        if (/^\/\d+(?=$|[\/?#])/.test(req.url)) {
            req.addListener("end",function(){
                req.url = req.url.replace(/^\/(\d+).*$/,"/$1.html");
                static_files.serve(req,res);
            });
            req.resume();
        } else {
            res.writeHead(403)
            res.end('Get outta here!')
        }

    } else {
        res.writeHead(403)
        res.end('Get outta here!')
    }

}


var http = require('http');
var host = 'localhost';
var port = 8006;

var http_serv = http.createServer(handleHTTP).listen(port, host)*/

/**
 * Socket IO
 */
var ASQ = require('asynquence')
var node_static = require('node-static')
var static_files = new node_static.Server(__dirname)
var http = require('http');
var host = 'localhost';
var port = 8006;

var http_serv = http.createServer(handleHTTP).listen(port, host)
var io = require('socket.io').listen(http_serv) //listens for incoming requests, http_server is http server

io.on('connection', handleIO)

function handleIO(socket) {
    function disconnect() {
        clearInterval(intv)
        console.log('client disconnected')
    }
    console.log('client connected')
    socket.on('disconnect', disconnect)

    socket.on('typeit', function(msg) {
        socket.broadcast.emit('messages', msg)
    })

    var intv = setInterval(function () {
        socket.emit('hello', Math.random())
    }, 1000)
}

function handleHTTP(req, res) {
    if(req.method === 'GET') {
        //show an html file
        if (/^\/\d+(?=$|[\/?#])/.test(req.url)) {
            req.addListener("end",function(){
                req.url = req.url.replace(/^\/(\d+).*$/,"/$1.html");
                static_files.serve(req,res);
            });
            req.resume();
        } else {
            res.writeHead(403)
            res.end('Get outta here!')
        }

    } else {
        res.writeHead(403)
        res.end('Get outta here!')
    }

}

// configure socket.io
io.configure(function(){
    io.enable("browser client minification"); // send minified client
    io.enable("browser client etag"); // apply etag caching logic based on version number
    io.set("log level", 1); // reduce logging
    io.set("transports", [
        "websocket",
        "xhr-polling",
        "jsonp-polling"
    ]);
});


