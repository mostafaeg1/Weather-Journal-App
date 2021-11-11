/* Global Variables */
const apikey="f6dee47ddf4ffcf0e637bc43a6c088ac";

let baseUrl=`https://api.openweathermap.org/data/2.5/weather?zip=`;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const postData = async ( url = '', data = {}) => {
  const response = await fetch(url, { 
          method: 'POST',
          credentials: 'same-origin', 
          headers: { 'Content-Type': 'application/json', }, 
          body: JSON.stringify({
            date: data.date,
            temp: data.temp,
            content: data.content
          }) // body data type must match "Content-Type" header 
      }); 
      try { 
       // console.log(response);  

          const newData = await response.json();
          
         // console.log(response);  
          return newData; 
      }catch(error) { 
          console.log("error", error); 
      }
  }

const getWeather = async (baseURL,zip, key)=>{
    const res = await fetch(`${baseURL}${zip},us&appid=${key}`)
    try {
      const data = await res.json();
      return data;
    } 
     catch(error) { 
       console.log("error", error);
      // appropriately handle the error
    }
    
  }
  
  const retrieveData = async (url='') =>{ 
    const request = await fetch(url);
    try {
    // Transform into JSON
    const allData = await request.json();
    return allData;
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  };
 



  let zip=document.getElementById("zip");
  let btn=document.getElementById("generate");

  btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const newZip = document.getElementById('zip').value;
    const content = document.getElementById('feelings').value;
   getWeather(baseUrl,newZip,apikey).then(
    function(userData){

      if(userData.cod === 200)
      postData('/',{date: newDate, temp: userData.main.temp, content });
    else
       alert("please enter a valid zip");
    }).then( (newData) => {
      updateUI();
    }).catch((error)=>console.log(error))
  })
  

   const updateUI = async () => {
    const request = await fetch('/data');
    try {
      const allData = await request.json()
      // show icons on the page
      // icons.forEach(icon => icon.style.opacity = '1');
      // update new entry values
     // console.log( document.getElementById('temp'));
      document.getElementById('date').innerHTML = `date: ${allData.date}`;
      document.getElementById('temp').innerHTML = `temp: ${allData.temp}`;
      document.getElementById('content').innerHTML = `content: ${allData.content}` ;

    }
    catch (error) {
      console.log("error", error);
    }
  };
  
 // retrieveData('/all');
//  postData('/',  {"data": "123"});
//  retrieveData('/data').then(data => console.log(data))
