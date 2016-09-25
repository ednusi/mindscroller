
var socket = io.connect('http://localhost:8080');

var enabledCharts = {};

/**
 * Connection states received by the socket
 */
// socket.on('muse_connected', function(data){

// });

// socket.on('muse_uncertain', function(){

// });

// socket.on('muse_disconnected', function(){

// })

// socket.on('disconnect', function(){

// });

// socket.on('connected', function (data) {

// 	}
// });

/**
 * Specific data received by the socket
 */

// Get the battery value
// socket.on('/muse/batt', function(data){

// });

// Get EEG values
// socket.on('/muse/eeg', function(data){


// });

// Get ACC values
socket.on('/muse/acc', function(data){

    // setTableValue(data.path, {
    //     'Accelerometer: Forward and backward position' : data.values[0],
    //     'Accelerometer: Up and down position' : data.values[1],
    //     'Accelerometer: Left and right position' : data.values[2],
    // })
   var numBlinks = parseInt(document.getElementById('Blinker_Count').innerHTML);
   if (numBlinks==0)
   {
     document.getElementById('initDuck').innerHTML=data.values[1].toString(); 
   }
   else{
     var initDuck=parseInt(document.getElementById('initDuck').innerHTML);
     if ((initDuck-100)>data.values[1]){
        document.getElementById('Ducker').innerHTML='1';
     }
     else{
        document.getElementById('Ducker').innerHTML='0';
     }
   }
    
});

socket.on('/muse/elements/blink', function(data){

    document.getElementById('Blinker').innerHTML=data.values.toString();
    var numBlinks = parseInt(document.getElementById('Blinker_Count').innerHTML);
    if (data.values.toString()=='1'){
        numBlinks++;
    }
    document.getElementById('Blinker_Count').innerHTML=numBlinks.toString();

});

// socket.on('/muse/elements/jaw_clench', function(data){


// });

// socket.on('/muse/elements/low_freqs_absolute', function(data){


// });

// socket.on('/muse/elements/delta_absolute', function(data){


// });

// socket.on('/muse/elements/theta_absolute', function(data){


// });

// socket.on('/muse/elements/alpha_absolute', function(data){


// });

//  socket.on('/muse/elements/beta_absolute', function(data){

//  });

// socket.on('/muse/elements/gamma_absolute', function(data){


// });

// socket.on('/muse/elements/delta_relative', function(data){


// });

// socket.on('/muse/elements/theta_relative', function(data){


// });

// socket.on('/muse/elements/alpha_relative', function(data){

// });

// socket.on('/muse/elements/beta_relative', function(data){


// });

// socket.on('/muse/elements/gamma_relative', function(data){


// });

// socket.on('/muse/elements/delta_session_score', function(data){

// });

// socket.on('/muse/elements/theta_session_score', function(data){

// });

// socket.on('/muse/elements/alpha_session_score', function(data){


// });

// socket.on('/muse/elements/beta_session_score', function(data){


// });

// socket.on('/muse/elements/gamma_session_score', function(data){


// });

// Now ask for all the data

socket.emit('setPaths',
    [
    	'/muse/acc',
        // '/muse/eeg',
        // '/muse/batt',
        // '/muse/elements/horseshoe',
         '/muse/elements/blink',
        // '/muse/elements/jaw_clench',
        // '/muse/elements/low_freqs_absolute',
        // '/muse/elements/delta_absolute',
        // '/muse/elements/theta_absolute',
        // '/muse/elements/alpha_absolute',
        //  '/muse/elements/beta_absolute',
        // '/muse/elements/gamma_absolute',
        // '/muse/elements/delta_relative',
        // '/muse/elements/theta_relative',
        // '/muse/elements/alpha_relative',
        // '/muse/elements/beta_relative',
        // '/muse/elements/gamma_relative',
        // '/muse/elements/delta_session_score',
        // '/muse/elements/theta_session_score',
        // '/muse/elements/alpha_session_score',
        // '/muse/elements/beta_session_score',
        // '/muse/elements/gamma_session_score'
    ]
);