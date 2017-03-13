
var builder = require('botbuilder');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
app.get('/', function(req, res){
 res.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket){
 socket.on('chat message', function(msg){
 
 io.emit('chat message', function (msg){
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
var bot = new builder.UniversalBot(connector);
//server.post('/', connector.listen());

//=========================================================
// Bots Dialogs
//=========================================================

bot.dialog('/', function (session) {
    session.send("Hello World");
});
});
 
});
});
http.listen(port, function(){
 console.log('listening on ' + port);
});








