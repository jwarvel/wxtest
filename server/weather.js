/**
 * Created with JetBrains WebStorm.
 * User: jill
 * Date: 4/21/14
 * Time: 12:32 AM
 * To change this template use File | Settings | File Templates.
 */

// test hitting external API


//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
    host: 'www.random.org',
    path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
};


options = {
    host: 'api.openweathermap.org',
    path: '/data/2.5/weather?q=Indianapolis'
}


handleResponse = function (response) {
    var str = '';

    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
        str += chunk;
        console.log('curr:  ' + str);
    });

    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
        console.log(str);
    });
}

module.exports = {

    getCurrent: function (callback) {
        // callback for http.request - creates a function that handles
        // response 'data' event and calls our callback
        var callback2 = function (callback) {
            return function (response) {
                response.on('data', function (str) {
                    console.log('curr:  ' + str);
                    callback.success(str);
                });
            }

        }
        http.get(options, callback2(callback) ).on('error',function(e){
            console.log('error getting weather');
            callback.error()
        })
    }
}

