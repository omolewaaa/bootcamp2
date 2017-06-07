var program = require ("commander");
var Weather = require("openweathermap")
var weather = {
	service: "openweathermap",
	key: "b1b15e88fa797225412429c1c50c122a1",
	units: "celcius",
	cache: true,
	ttl: {
		minutes: 27,
		seconds: 45
	}
}
   weather.get([6.6080, 3.6218], function(err,weather) {
	if (err) return console.dir(err);
	console.dir(weather);
})

     weather.get([6.6080, 3.6218], true, function(err, weather){
	if (err) return console.dir(err);
	console.dir(weather);
})
