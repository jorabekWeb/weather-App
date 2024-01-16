const KEY = '96b947a45d33d7dc1c49af3203966408'

// request get data
const getData = async (city)=>{
const baseLink = 'https://api.openweathermap.org/data/2.5/weather'
const jonatishJoyi = `?q=${city}&units=metric&appid=${KEY}`
// loading
loadingUse(true)
// hidden
if(!hiddenCard.classList.contains('hidden')){
    hiddenCard.classList.add('hidden') 
    hiddenImg.classList.add('hidden')
}
error(false)
const request = await fetch(baseLink+jonatishJoyi)
// error
if(!request.status == 200){
    throw new Error
}
const data = await request.json()

loadingUse(false)

return data
}