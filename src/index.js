import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Sdata from './Sdata';

console.log("@@@@ : ",Sdata[0]);

function ncard(val){
// console,log("ssss",val);
  return(
    <Card
   imgsrc={val.imgsrc} 
   title= {val.title}
   sname={val.sname}
   link ={val.link}
   />
  );
}

ReactDOM.render( 
  <>
  <h1 className="">List Of Top 5 </h1>
  
  {/*first way*/}
 {/*Sdata.map(ncard)*/}

   {/*second way*/}
 {Sdata.map((val)=>{
  return(
  <Card
  imgsrc={val.imgsrc} 
  title= {val.title}
  sname={val.sname}
  link ={val.link}
  />);
 })}

  </> ,  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
