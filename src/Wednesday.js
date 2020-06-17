import React from 'react';
import style from "./Wednesday.module.css"
import {connect} from "react-redux";
import {setStyleAC} from "./redux/settingReducer";

import { responseMessage} from "./redux/reducerTwist";




class Wednesday extends React.Component {

    state = {
        success: false,
        message: "",
        disable: false,
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

    setValueSuccess = () => {
        if (this.state.success) {
            this.setState({success: false})
        } else {
            this.setState({success: true})
        }
    };

    sendRequest = () => {
        debugger;
        this.props.responseMessage(this.state.success)
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
                        <button onClick={this.sendRequest} disabled={this.state.disable}>SEND</button>
                        <div>answer : {this.props.message}</div>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>  ( {style: state.settings.style}, {message: state.twist.message});
const mapDispatchToProps = (dispatch) => {
    return {
        setStyle: (style) => {
            dispatch(setStyleAC(style))
        },
     /*   changeLoading: (loading) => {
            dispatch(changeLoadinAC(loading))
        },*/
    }
};

export default connect(mapStateToProps, {responseMessage, setStyle: setStyleAC})(Wednesday);
