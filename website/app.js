/* Global Variables */
let apikey="f6dee47ddf4ffcf0e637bc43a6c088ac";

let baseUrl=`https://api.openweathermap.org/data/2.5/weather?zip=`;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const postData = async ( url = '', data = {})=>{

  const response = await fetch(url, {
  method: 'POST', 
  credentials: 'same-origin', 
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(data), // body data type must match "Content-Type" header        
});

  try {
    console.log(response);
    const newData = await response.json();
   
    return newData;
  }catch(error) {
   
  console.log("error", error);
  }
};

const getWeather = async (baseURL,zip, key)=>{
    const res = await fetch(`${baseURL}${zip},us&appid=${key}`)
    try {

      const data = await res.json();
      console.log(data);
      return data;
    }  catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }
  
 



  let zip=document.getElementById("zip");
  //console.log(zip.textContent);
  let btn=document.getElementById("generate");

  btn.addEventListener("click",()=>{
    //console.log("mm");
   getWeather(baseUrl,zip.value,apikey).then(
    ()=>postData('/',[1,2,3])
   )
  })
