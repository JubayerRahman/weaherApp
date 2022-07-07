apikey ="85d8ced73595ca5aa16e24120891dcf8"

document.getElementById("result").style.display ="none"

    const button = document.getElementById("button").addEventListener("click", function work(){
        document.getElementById("result").style.display ="block"
    const cityName = document.getElementById("city").value;

    fetch("https://api.openweathermap.org/data/2.5/weather?q="
    +cityName+
    "&units=metric&appid="
    +apikey+"")
    .then(responce=> responce.json())
    .then(data=> weather(data))
    .catch(error=>{
        document.getElementById("outPutCity").innerText= "No city name found";
        document.getElementById("temp").innerHTML= "No temparature found";
        document.getElementById("icon").innerHTML="";
        document.getElementById("description").innerHTML= "😖"; 
    })
})

function weather(data){
    const {name} = data;
    const {temp} = data.main;
    const {description , icon} = data.weather[0];


    document.getElementById("outPutCity").innerText= name;
    document.getElementById("temp").innerHTML= temp + " °C";
    document.getElementById("icon").src="https://openweathermap.org/img/wn/"+icon+".png";
    document.getElementById("description").innerHTML= description;
}
