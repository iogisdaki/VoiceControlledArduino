const five = require("johnny-five");
const board = new five.Board();

const express = require('express');
const app = express();

board.on("ready", function () {

    //Initialize the RGB LED
    var led = new five.Led.RGB({
        //change the pins to correspond to your configuration
        pins: {
            red: 11,
            green: 10,
            blue: 9
        },
        //change to false if your led is a cathode
        isAnode: true
    });

    let colour;

    app.listen(3000, () => console.log('listening at port 3000'));
    app.use(express.static('public'))
    app.use(express.text());

    //getting a post request from the client
    app.post('/api', (request, response) => {
        console.log(request.body);
        colour = request.body;
        response.end();
    });

    //wait one tenth of a second and then change colour of rgb according to the data sent from the sound classifier app
    board.loop(10, () => {
        if (colour == 'red') {
            led.color('#FF0000');
        } else if (colour == 'green') {
            led.color('#00FF00');
        } else if (colour == 'blue') {
            led.color('#0000FF');
        } else if (colour == 'white') {
            led.color('#FFFFFF');
        } else if (colour == 'cyan') {
            led.color('#00FFFF');
        } else if (colour == 'purple') {
            led.color('#FF00FF');
        } else if (colour == 'yellow') {
            led.color('#FFA500');
        }
    })
});