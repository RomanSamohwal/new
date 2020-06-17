import React from "react";
import preloader from './loading.gif';


let Preloader =(props)=>{
    return(
        <div>
            <img src={preloader} style={{
                width: '260px',
                height: '200px'
            }}/>
        </div>
    )
};

export default Preloader;