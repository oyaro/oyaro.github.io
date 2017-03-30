// genPages.js
// by oyaro06

function getWeather(parent)
{
        var URL = "http://api.openweathermap.org/data/2.5/weather?id=";
        var API_KEY = "04d92298c1985b8c8feb3dafc7defae9";
        //var KEY = "d75da5829ee2244d5a25bbb10c1a7318";
        var ID = "707471"
        var FULL_URL = URL + ID + "&APPID=" + API_KEY;

        var XHR = new XMLHttpRequest();
        XHR.open("GET", FULL_URL, true);
        XHR.send();

    XHR.onreadystatechange = function() 
    {
        if ((XHR.readyState === 4) && (XHR.status === 200)) 
        {
            parent.innerHTML = "";
            var data = JSON.parse(XHR.responseText);

            var div = document.createElement("div");
            div.innerHTML = "<span>Temperature: " + (data.main.temp - 273.15) + "<sup>o</sup>C</span>";
            parent.appendChild(div);

            var div = document.createElement("div");
            div.innerHTML = "<span>Humidity: " + data.main.humidity + "%</span>";
            parent.appendChild(div);
        }
            
    };

    return;
}
