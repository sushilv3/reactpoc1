import React, { Component } from 'react';
import Amazon from './Amazon';
import Netflix from './Netflix';


// favOttPlatform Component
const favOttP = 'netflix';

const FavP = ()=>{

    if(favOttP === 'netflix'){
        return <Netflix />;
       
        }else{
            return<Amazon />;
    
    }

}



// App Component
const App = () => (
<>
    <h1 className="">List Of Top 5 </h1>
    <FavP />
</>
    );
export default App;