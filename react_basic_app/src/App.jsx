

// import React,{useEffect,useState} from 'react';
// import React from "react";
// import Button from "./assets/components/Ui/Buttons/index.jsx";
// import Images from "./assets/index.jsx";
// const App = () =>{
//   return(
//     <div >
      
//       <img src={Images.P1} alt="Hero" height={250} width={250}/>
//       <Button 
//       name={"Hello All "}
//       onClick={()=>alert("Button is clicked")}/>
//       <h1>This is an image </h1> 


// </div>
//   );
// }
// export default App;



////////////////////////////////////////////////////////////////////////

// using api fetching the the data and applying css on it 

import React,{useEffect,useState} from 'react';
// import React from "react";
// import Button from "./assets/components/Ui/Buttons/index.jsx";
// import Images from "./assets/index.jsx";
const App = () =>{
 // const [counter,setCount]= useState(0);
  const [data, setData]= useState([]);
  useEffect(()=>{
    const fetchData = async () =>{
      const response= await fetch("https://jsonplaceholder.typicode.com/users");
      const data= await response.json();
      setData(data);
    }
    fetchData();
  },[])
  console.log(data,"data");
  return(
    <div >
      {data?.map((item,key)=>{
        return(
          <div className='box' key= {key}> 
          <h2>{item.name}</h2>
          <p>{item.email}</p>
          <p>{item.username}</p>
          <p>{item.address.street}</p>
          <p>{item.address.suite}</p>
          <p>{item.address.city}</p>
          <p>{item.address.zipcode}</p>
          <p>{item.address.geo.lat}</p>
          <p>{item.address.geo.lng}</p>
          </div>
        )
      }
      )}
    </div>
  );
}
export default App;

