const apiKey = `82b9a8e5c699734b960087d32d318d3b`;

const searchTemprature = () => {
    const cityName = document.getElementById("search-input").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemparetureInfo(data))

}

const setInputValue = (id, textValue) => {
    document.getElementById(id).innerText = textValue;

}

const displayTemparetureInfo = (temparature) => {
    setInputValue("city-name", temparature.name); 
    setInputValue("temprature", temparature.main.temp); 
    setInputValue("weather-condition", temparature.weather[0].main); 
    
    const imgUrl = `http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById("weather-image");
    imageIcon.setAttribute("src", imgUrl);
    const haze = "Haze";
    const cloud = "Clouds"
    const clear = "Clear";
    const conditionNow = document.getElementById("weather-condition");
    if(conditionNow.innerText === haze){
        document.body.style.backgroundImage ="url('images/picture (1).jpg')";
    }
    else if(conditionNow.innerText === cloud){
        document.body.style.backgroundImage ="url('images/picture (2).jpg')";
    }
    else if(conditionNow.innerText === clear){
        document.body.style.backgroundImage ="url('images/picture (3).jpg')";
    }
    else{
        document.body.style.backgroundImage ="url('images/picture (4).jpg')";
    }
    // const button = document.getElementById("search-button");
    // if(conditionNow.innerText === Haze)
    // button.addEventListener("click", () =>{
    // document.body.style.backgroundImage ="url('images/picture (1).jpg')";
    // })

    // const backgroundImg = `https://cartzilla.createx.studio/img/home/hero-slider/01.jpg`;
    // const imageBack = document.getElementById("weather-image");
    // imageIcon.setAttribute("src", imgUrl);


}

// const button = document.getElementById("search-button");
//     if()
//     button.addEventListener("click", () =>{
//     document.body.style.backgroundImage ="url('images/picture (1).jpg')";
// })