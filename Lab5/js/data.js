// Create an empty sensor object as a global 
var sensor = {};
var sensor2 = {};
var day = 1;

// Where the sensor data is stored
var mSensorDataURL = 'http://80.69.174.27:8080/output/';

// A subscriber's key (other keys are available at http://80.69.174.27:8080/streams/)
sensor.key = "GqXO9z3ae9tODKPPPO2YHxw39By";
sensor2.key = "dPjyGN0bx0IDgO000D4lI6leJGK";

// A bitmap image describing where the sensor is located
sensor.image = "https://evothings.com/demos/dome_pics/IMG_1758.JPG";

function minusClick() {
    if (this.day > 1 ){
        this.day - 1;
    }
}

function plusClick() {
    this.day +1;
}
console.log(day);
// Function to retrieve data, placing it in a "response" object
function getJSON() 
    {
    if (window.cordova) 
        {
            console.log('Using Apache Cordova HTTP GET function');
            cordovaHTTP.get(
                mSensorDataURL + sensor.key + '.json?gt[timestamp]=now-' + day + 'day&page=1',
                
                function (response) 
                    {
                        if (response) 
                            {
                                sensor.data = JSON.parse(response.data)[0];
                                sensor.fullData = JSON.parse(response.data);
                                printData();
                            }
                    },
                function (error) 
                    {
                    console.log(JSON.stringify(error));
                    });

            console.log('Using Apache Cordova HTTP GET function');
            cordovaHTTP.get(
                mSensorDataURL + sensor2.key + '.json?gt[timestamp]=now-1day&page=1',
                
                function (response) 
                    {
                        if (response) 
                            {
                                sensor2.data = JSON.parse(response.data)[0];
                                sensor2.fullData = JSON.parse(response.data);
                                printData();
                            }
                    },
                function (error) 
                    {
                    console.log(JSON.stringify(error));
                    });
        }    
    else 
        {
            console.log('Not using Cordova, fallback to AJAX via jquery');
            $.ajax({
                    url: mSensorDataURL + sensor.key + ".json?gt[timestamp]=now-1day",
                    jsonp: "callback",
                    cache: true,
                    dataType: "jsonp",
                    data: 
                        {
                            page: 1
                        },
                    success: function(response) 
                        {
                            if (response && response[0]) 
                                {
                                    sensor.data = response[0];
                                    sensor.fullData = response;
                                    printData();
                                }
                        }
                });
            console.log('Not using Cordova, fallback to AJAX via jquery');
            $.ajax({
                    url: mSensorDataURL + sensor2.key + ".json?gt[timestamp]=now-1day",
                    jsonp: "callback",
                    cache: true,
                    dataType: "jsonp",
                    data: 
                        {
                            page: 1
                        },
                    success: function(response) 
                        {
                            if (response && response[0]) 
                                {
                                    sensor2.data = response[0];
                                    sensor2.fullData = response;
                                    printData();
                                }
                        }
                });
        }
}


function printData() {
        var temp = document.getElementById('temp').getContext('2d');
        var lum = document.getElementById('lum').getContext('2d');
        var hum = document.getElementById('hum').getContext('2d');
        var carbon = document.getElementById('carbon').getContext('2d');
        var baro = document.getElementById('baro').getContext('2d');
        var move = document.getElementById('movement').getContext('2d');

        var chart = new Chart(temp, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: ["Temperature (°C)"],
                datasets: [{
                    label: "Office",
                    borderWidth: 2,
                    borderColor: '#ff6384',
                    data: [sensor.data.t]
                },{
                    label: "Recreational..",
                    borderWidth: 2,
                    borderColor: '#36a2eb',
                    data: [sensor2.data.t]
                }]
            },

            // Configuration options go here
            options: {}
        });

        var chart = new Chart(lum, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: ["Lumination (lux)"],
                datasets: [{
                    label: "Office",
                    borderWidth: 2,
                    borderColor: '#ff6384',
                    data: [sensor.data.l]
                },{
                    label: "Recreational..",
                    borderWidth: 2,
                    borderColor: '#36a2eb',
                    data: [sensor2.data.l]
                }]
            },

            // Configuration options go here
            options: {}
        });

        var chart = new Chart(hum, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: ["Humidity (%)"],
                datasets: [{
                    label: "Office",
                    borderWidth: 2,
                    borderColor: '#ff6384',
                    data: [sensor.data.h]
                },{
                    label: "Recreational..",
                    borderWidth: 2,
                    borderColor: '#36a2eb',
                    data: [sensor2.data.h]
                }]
            },

            // Configuration options go here
            options: {}
        });

        var chart = new Chart(carbon, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: ["Carbon dioxide (ppm)"],
                datasets: [{
                    label: "Office",
                    borderWidth: 2,
                    borderColor: '#ff6384',
                    data: [sensor.data.c]
                },{
                    label: "Recreational..",
                    borderWidth: 2,
                    borderColor: '#36a2eb',
                    data: [sensor2.data.c]
                }]
            },

            // Configuration options go here
            options: {}
        });

        var chart = new Chart(baro, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: ["Barometric (Pa)"],
                datasets: [{
                    label: "Office",
                    borderWidth: 2,
                    borderColor: '#ff6384',
                    data: [sensor.data.p]
                },{
                    label: "Recreational..",
                    borderWidth: 2,
                    borderColor: '#36a2eb',
                    data: [sensor2.data.p]
                }]
            },

            // Configuration options go here
            options: {}
        });

        var chart = new Chart(move, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: ["Reg. movement"],
                datasets: [{
                    label: "Office",
                    borderWidth: 2,
                    borderColor: '#ff6384',
                    data: [sensor.data.pp]
                },{
                    label: "Recreational..",
                    borderWidth: 2,
                    borderColor: '#36a2eb',
                    data: [sensor2.data.pp]
                }]
            },

            // Configuration options go here
            options: {}
        });
}