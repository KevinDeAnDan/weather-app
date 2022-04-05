var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var time = document.querySelector('.time')
var value = document.querySelector('.value')
var derc = document.querySelector('.derc')
var eye = document.querySelector('.eye span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var body = document.querySelector('body')

async function changeWeather(){
    let local = search.value.trim()
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=1b78e2df51a06b01f448d6dfa1a0e611`  
    let data = await fetch(apiURL).then(res=> res.json())
    console.log(data);
    if(data.cod == 200){
        city.innerText = data.name
        country.innerText = data.sys.country
        let temp = Math.round(data.main.temp - 273.15)
        value.innerText = temp
        derc.innerText = data.weather[0].main
        eye.innerText = data.visibility + '(m)'
        wind.innerText = data.wind.speed + '(m/s)'
        sun.innerText = data.wind.gust + '(%)'
        time.innerText = new Date().toLocaleString('vi')


        body.setAttribute('class', 'hot')
        if(temp > 23){
            body.setAttribute('class', 'hot')
        }


        if(temp <= 23){
            body.setAttribute('class', 'cold')
        }
    }

    

    
}
search.addEventListener('keypress', function(e){
    if(e.code === 'Enter'){
        changeWeather();
    }
})




    
    