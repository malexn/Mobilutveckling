// Create an empty sensor object as a global 
var sensor = {};
var sensor2 = {};

// Where the sensor data is stored
var mSensorDataURL = 'http://80.69.174.27:8080/output/';

// A subscriber's key (other keys are available at http://80.69.174.27:8080/streams/)
sensor.key = "GqXO9z3ae9tODKPPPO2YHxw39By";
sensor2.key = "dPjyGN0bx0IDgO000D4lI6leJGK";

// A bitmap image describing where the sensor is located
sensor.image = "https://evothings.com/demos/dome_pics/IMG_1758.JPG";


// Function to retrieve data, placing it in a "response" object
function getJSON() 
    {
    if (window.cordova) 
        {
            console.log('Using Apache Cordova HTTP GET function');
            cordovaHTTP.get(
                mSensorDataURL + sensor.key + '.json?gt[timestamp]=now-1day&page=1',
            
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
        }
}


function printData() {
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ["Temp", "Time"],
                datasets: [{
                    label: "Sensor 1",
                    borderColor: '#ff6384',
                    data: [Date(sensor.data.timestamp), sensor.data.t]
                }]
            },

            // Configuration options go here
            options: {}
        });
}