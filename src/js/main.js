const form = document.querySelector('form')
const card = document.querySelector('.card')
const weatherImg = document.querySelector('#img')
const hiddenImg = document.querySelector('.imgContainerr')
 const hiddenCard = document.querySelector('.card')
 const loading = document.querySelector('.loadingg')
 const er = document.querySelector('.err')


// ERROR
const error = (err)  =>{
if(err){
    er.classList.remove('hidden')
    er.innerHTML = "Nimadir xato bo'ldi"
    loadingUse(false)
}else{
    er.classList.add('hidden')
}
} 


// LOADING...
const loadingUse = (state) =>{
    if(state){
        loading.classList.remove('hidden')
    }else{
        loading.classList.add('hidden')
    }
}



// update Ui
const updateUi = (weather) =>{
card.innerHTML = `
<h1 class="text-white text-6xl font-medium my-3">${Math.floor(weather.main.temp)}<span class="text-5xl">&deg;C</span></h1>
<h2 class="cityName text-white text-3xl font-normal mb-10">${weather.name}, ${weather.sys.country}</h2>
<div class="winds flex justify-between text-white ">
    <div class="left items-center  flex ">
    <img src="/img/humidity.png" height="45" width="45" alt="kd" class="mr-2">
        <div class="humidity text-start">
            <h3 class="text-xl font-medium">${weather.main.humidity} <span>%</span></h3>
            <p class="text-xs  text-gray-100">humidity</p>
        </div>
    </div>
    <div class="right flex  items-center">
    <img src="/img/wind-icon.png" alt="" class="mr-2" height="45" width="45">
        <div class="windSpeed text-start">
            <h3 class="text-xl font-medium">${weather.wind.speed} <span>km/h</span></h3>
            <p class="text-xs  text-gray-100 ">Wind Speed</p>
        </div>
    </div>
</div>
`

// hidden
if(hiddenCard.classList.contains('hidden')){
    hiddenCard.classList.remove('hidden') 
    hiddenImg.classList.remove('hidden')
}

// get icon
weatherImg.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

}


// get location
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const cityName = form.city.value.trim()
    form.reset()
   
    getData(cityName).then((data) =>{
        updateUi(data)
    }).catch((err)=>{
        error(err)
    })
  

    

})