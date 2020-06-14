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
import {connect} from "react-redux";
import {changeLoadinAC} from "./redux/reducerTwist";

class App extends React.Component {
   state = {
       isHidden: false,
   };

    componentDidMount() {
        setTimeout(() => {
            this.props.changeLoading()
        }, 3000)
    }


    render = () => {
       return (
            <HashRouter>
                <div className={s.App+" " + this.props.style}>
                    <div>  {!this.state.isHidden && <div>< Navbar/></div>}
                        {!this.state.isHidden && <span onClick={() => this.setState({isHidden: true})}>Hide</span>}
                        {this.state.isHidden && <span onClick={() => this.setState({isHidden: false})}>Show</span>}
                    </div>
                    {this.props.loading?<img src={load} />:  <div><Route path="/monday" render={() => <Monday/>}/>
                        <Route path="/tuesday" render={() => <Tuesday/>}/>
                        <Route path="/wednesday" render={() => <Wednesday/>}/>
                    </div>}

                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.twist.loading,
    style: state.settings.style     });

const mapDispatchToProps = (dispatch)=>{
    return { changeLoading: ()=>{
          dispatch(changeLoadinAC())
        }}
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
