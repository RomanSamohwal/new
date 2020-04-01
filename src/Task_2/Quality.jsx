import React from 'react';
import s from "./Quality.module.css";

function Quality() {
    let array = ["рационалист", "пофигист", "максималист", "перфекционист"];
    let newArray = array.map((num, i) => {
        if (i === 1) {
            return <div className={s.quality} key={num.toString()}>{num}</div>;
        } else {
            return <div className={s.qualityAll} key={num.toString()}>{num}</div>
        }
    });
    return (
        <div>
            {newArray}
        </div>
    );
}

export default Quality;