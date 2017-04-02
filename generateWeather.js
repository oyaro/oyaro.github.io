// genPages.js
// By oyaro

function getData(parent, city)
{
        console.log(parent)
        console.log(city)
    
        var URL = "http://api.openweathermap.org/data/2.5/weather?id=";
        var API_KEY = "04d92298c1985b8c8feb3dafc7defae9";
        var FULL_URL = URL + city + "&APPID=" + API_KEY; var XHR = new XMLHttpRequest();

        console.log(FULL_URL);

        XHR.open("GET", FULL_URL, true);
        XHR.send();

        XHR.onreadystatechange = function() 
        {
            if ((XHR.readyState === 4) && (XHR.status === 200)) 
            {
                var data = JSON.parse(XHR.responseText);

                var div = document.createElement("div");
                div.innerHTML = "<span class=\"name\">" + data.name + "</span>";
                parent.appendChild(div);

                var div = document.createElement("div");
                div.innerHTML = "<span class=\"temp\">Температура: " + (data.main.temp - 273.15).toFixed(1) + "<sup>o</sup>C</span>";
                parent.appendChild(div);

                var div = document.createElement("div");
                div.innerHTML = "<span class=\"humidity\">Вологість: " + data.main.humidity + "%</span>";
                parent.appendChild(div);
            }
        };
        
        console.log("********************************************************");

    return;
}
