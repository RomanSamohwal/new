import React from 'react';
import s from "./App.module.css"
import Monday from "./Monday";
import Navbar from "./Navbar/Navbar";
import Tuesday from "./Tuesday/Tuesday";
import Route from "react-router-dom/es/Route";
import {HashRouter} from "react-router-dom";
import Wednesday from "./Wednesday";
import {saveState} from "./storage";
import load from "./assests/loading.gif"

class App extends React.Component {
   state = {
       isHidden: false,
       loading: false
   };

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false})
        }, 3000)
    }


    render = () => {
          /*  let imgShow = this.state.loading? <img src={load}/>:"";*/
       return (
            <HashRouter>
                <div className={s.App}>
                    <div>  {!this.state.isHidden && <div>< Navbar/></div>}
                        {!this.state.isHidden && <span onClick={() => this.setState({isHidden: true})}>Hide</span>}
                        {this.state.isHidden && <span onClick={() => this.setState({isHidden: false})}>Show</span>}
                    </div>
                    {this.state.loading?<img src={load} />:  <div><Route path="/monday" render={() => <Monday/>}/>
                        <Route path="/tuesday" render={() => <Tuesday/>}/>
                        <Route path="/wednesday" render={() => <Wednesday/>}/>
                    </div>}

                </div>
            </HashRouter>
        );
    }
}

export default App;
