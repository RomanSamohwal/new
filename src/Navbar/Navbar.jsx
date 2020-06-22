import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"


class Navbar extends React.Component {

    render = () =>
     <div className={s.navbar}>
         <NavLink to="/monday" activeClassName={s.active}>Monday</NavLink>
         <NavLink to="/tuesday" activeClassName={s.active}>Tuesday</NavLink>
         <NavLink to="/wednesday" activeClassName={s.active}>Wednesday</NavLink>
         <NavLink to="/test" activeClassName={s.active}>test</NavLink>
    </div>

}

export default Navbar;