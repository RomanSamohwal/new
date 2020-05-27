import React from 'react';
import Message from "./Task_1/Message/Message";
import load from "./assests/loading.gif"
import style from "./Wednesday.module.css"
import Cloud from "./Tuesday/Cloud";


class Wednesday extends React.Component {
   state = {
       flag : false,
       date: ""
   };

   onChangeFlag=()=>{
    this.setState({flag : true})

   };

   offChangeFlag=()=>{
       this.setState({flag : false})

   };
    fullTime;
   onClickState=()=>{
       this.setState({date: this.fullTime})
   };

   render = () => {
    let day = new Date().getDate();
    let month= new Date().getMonth();
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();

   this.fullTime =`${day}:${month}:${year}   ${hour}:${minute}:${second}`;

        return (
            <div onMouseOut={this.offChangeFlag} className={style.Wednesday}>
               {/* {`create: ${this.fullTime}`}
                <button onClick={this.onClickState}>ADD</button>

                {this.state.date}*/}
                <div  className={style.box}>
                   <div onMouseOver={this.onChangeFlag}>x</div>{this.state.flag? <div  className={style.cloud}><Cloud/></div> : ""}
                </div>
            </div>
        );
    }
}

export default Wednesday;
