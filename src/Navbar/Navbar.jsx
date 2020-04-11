import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"


class Navbar extends React.Component {

    render = () =>
     <div className={s.navbar}>
         <NavLink to="/monday" activeClassName={s.active}>Понедельник</NavLink>
         <NavLink to="/tuesday" activeClassName={s.active}>Вторник</NavLink>
         <NavLink to="/wednesday" activeClassName={s.active}>Среда</NavLink>
     </div>

}

export default Navbar;