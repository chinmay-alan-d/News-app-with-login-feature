import React from 'react'
import Navbar from '../Navigation/Navbar'
import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../helper/AuthContext'

const home ={
  color : 'purple'
}

const stime={
  position : 'absolute',
  top : '70px',
  right : '10px'
}

const btn ={
  position : 'absolute',
  top : '70px',
  left : '650px'
}

const weatherStyle={
  left : '340px'
}


function Home() {
  const [time,setTime] = useState('');
  const [weather,setWeather] = useState('');
  const [news,getNews] = useState([]);
  const auth = useAuth();

  function handleTime(){
    var now = new Date().toLocaleTimeString();
    setTime(now);
  }
  setInterval(handleTime,1000)

  function handleClick(){
    navigator.geolocation.getCurrentPosition(function(position) {
    // console.log("Latitude is :", position.coords.latitude);
    // console.log("Longitude is :", position.coord;s.longitude);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=5609480c65631384cff8ad6d53dfbe3d').then(response=>{
        // console.log(response.data.main.temp);
        const city = response.data.name;
        let temp = response.data.main.temp-273;
        temp=temp.toFixed(1);
        setWeather('In '+city+' temprature is '+temp+'°C');
      })
      });
    }

  function handleClickNews(){
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e612a9aa12644059baa366a743de93a8').then(response=>{
        // console.log(response.data.articles);
        const articles = response.data.articles;
        getNews(articles);
        console.log(articles);
    })
  }

  return (
    <div>
        <Navbar />
        <h1 style={home}>Hello, {auth.name}</h1>
        <span className="badge badge-pill badge-primary">Primary</span>
        <h4 style={stime}>{time}</h4>
        <div style={btn} className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary" onClick={handleClick}>Get Weather</button>
          <button type="button" className="btn btn-secondary" onClick={handleClickNews}>Get News</button>
        </div>
        <h3 style={weatherStyle}>{weather}</h3>
        <div className="container">
          <div className="row">
            {
              news.map((value)=>{
              return(
                <div  className="card" style={{width: "18rem"}} key={value.url}>
                  <img className="card-img-top" src={value.urlToImage} alt="image__"></img>
                  <h5 className="card-title">{value.title}</h5>
                  <div className="card-body">
                    <p className="card-text">{value.description}</p>
                  </div>
                </div>
            )
          })
        }
        </div>
        </div>
    </div>
  )
}

export default Home