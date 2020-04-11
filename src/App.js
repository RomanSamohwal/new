import React from 'react';
import './App.css';
import s from "./App.module.css"
import Monday from "./Monday";
import Navbar from "./Navbar/Navbar";
import Tuesday from "./Tuesday";
import Route from "react-router-dom/es/Route";
import {HashRouter} from "react-router-dom";
import Wednesday from "./Wednesday";

class App extends React.Component {
   state = {
       isHidden: false
   };



    render = () => {
        return (
           <HashRouter >
               <div className={s.App}>
                 <div>  {!this.state.isHidden&&<div>< Navbar/></div>}
                   {!this.state.isHidden&&<span onClick={()=>this.setState({isHidden:true})} >Hide</span>}
                   {this.state.isHidden&&<span onClick={()=>this.setState({isHidden:false})}>Show</span>}
                      </div>
                   <div><Route path="/monday" render={() => <Monday/>}/>
                       <Route path="/tuesday" render={() => <Tuesday/>}/>
                       <Route path="/wednesday" render={() => <Wednesday/>}/></div>
                     </div>
           </HashRouter>
        );
    }
}

export default App;
