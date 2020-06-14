import React from 'react';
import load from "./assests/loading.gif"
import style from "./Wednesday.module.css"
import {connect} from "react-redux";
import {setStyleAC} from "./redux/settingReducer";



class Wednesday extends React.Component {
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

   render = () => {
        return (
            <div className={style.Wednesday + " " + this.props.style}>
                <div className={style.box}>
                    <p><input type="radio" name="color" onClick={() => this.onChangeStyle('green')}/>Green</p>
                    <p><input type="radio" name="color" onClick={() => this.onChangeStyle('black')}/>Black</p>
                    <p><input type="radio" name="color" onClick={() => this.onChangeStyle('brown')}/>Brown</p>
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
