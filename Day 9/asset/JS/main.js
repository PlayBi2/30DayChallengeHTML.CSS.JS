var api = 'https://api.openweathermap.org/data/2.5/weather?lat=Ha noi &lon=Viet Nam &appid={2ea214ac1571625286cc623fc76ef963}';

fetch(api)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })