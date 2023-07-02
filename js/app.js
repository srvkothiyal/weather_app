const form=document.querySelector('form')

const updateUI=(data)=>{
    const{cityDets,weatherDets}=data
    console.log(cityDets, weatherDets);

    let details=
    `<h3>${cityDets.EnglishName}</h3>
    <h3>${weatherDets.WeatherText}</h3>
    <span>${weatherDets.Temperature.Metric.Value}</span>
    <span>&deg;C</span>`

document.querySelector(".details").innerHTML=details

if(weatherDets.IsDayTime){
    document.querySelector(".time").src='icons/day.svg'
}
else{
    document.querySelector(".time").src= 'icons/night.svg';
}
   
document.querySelector('.icon img').src=`icons/${weatherDets.WeatherIcon}.svg`

if(document.querySelector('.card').classList.contains('d-none')){
    document.querySelector('.card').classList.remove('d-none')
}
}


const getData=async(city)=>{
    const cityDets =await getCity(city)
    const weatherDets=await getWeather(cityDets.Key)
    return {cityDets,weatherDets}
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const city=form.city.value

    console.log(city);
    form.reset()
    getData(city)
    .then((data)=>{
      updateUI(data);
    })
    .catch((err)=>console.log(err))
})