var nodeMuse = require("node-muse");

var Muse = nodeMuse.Muse;
var OSC = nodeMuse.OSC;

// Opens a muse server and waits for the muse to interact with it.
// Optionally it's possible to use the parameters connect( [HOST] , [PORT] );
// These default to 127.0.0.1 , 5000
var Muse = nodeMuse.connect().Muse;

Muse.on('connected', function(){
   console.log('Connected!');
});

Muse.on('uncertain', function(){
    console.log('Waiting for signals...');
})

Muse.on('disconnected', function(){
    console.log('Disconnected');
});

