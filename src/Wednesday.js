import React from 'react';
import load from "./assests/loading.gif"
import style from "./Wednesday.module.css"
import {connect} from "react-redux";
import {setStyleAC} from "./redux/settingReducer";
import axios from "axios";



class Wednesday extends React.Component {

    state = {
        success: false

    };

    onChangeStyle = (color) => {
        let styleColor;
        switch (color) {
            case 'green':
                styleColor = style.green;
                break;
            case 'black':
                styleColor = style.black;
                break;
            case 'brown':
                styleColor = style.brown;
                break;
        }
        this.props.setStyle(styleColor);
    };

    sendRequest=()=>{
      axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: this.state.success})
          .then(res=>{
              console.log(res.data);
          })
    };

    tryCatch = async (f)=>{
        try {
            const response = await f();
            console.log('answer: ', response.data);
            return response;
        } catch (e) {
            console.log('error: ', {e});
            return 'error';
        }
    };


    setValueSuccess = () => {
        if (this.state.success) {
            this.setState({success: false})
        } else {
            this.setState({success: true})
        }
    };

    render = () => {
        return (
            <div className={style.Wednesday + " " + this.props.style}>
                <div className={style.box}>
                  <div>
                      <p>SETTINGS :</p>
                      <p><input type="radio" name="color" onClick={() => this.onChangeStyle('green')}/>Green</p>
                      <p><input type="radio" name="color" onClick={() => this.onChangeStyle('black')}/>Black</p>
                      <p><input type="radio" name="color" onClick={() => this.onChangeStyle('brown')}/>Brown</p>
                  </div>
                    <div>
                         <p>SEND REQUEST</p>
                        <div><input type="checkbox" onClick={this.setValueSuccess}/></div>
                        <button onClick={()=>this.tryCatch(this.sendRequest)}>SEND</button>
                    </div>
                </div>


            </div>
        );
    }
}

const mapStateToProps = (state) => ({style: state.settings.style});
const mapDispatchToProps = (dispatch) => {
    return {
        setStyle: (style) => {
            dispatch(setStyleAC(style))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Wednesday);
