// API
// ===

var weather = require('./weather');

module.exports.api = function (server, schema) {

    // Sample Rest Call

    server.get('/hello', function (req, res) {
        res.send('<h1>Hello World!</h1>');
    });

    server.get('/weather/current', function (req, res) {

        weather.getCurrent({
            success: function (response) {
                console.log('yay!!');
                res.setHeader("Content-Type", "application/json");
                res.send(response)
            },
            error: function (response) {
                console.log('bummer');
            }
        });


    });

}
