import React from "react";
import logo from "./img/reactLogo.png";

class NavBar extends React.Component {
    render() {

        return <>
            <nav>
                <i className="fa-solid fa-bars" onClick={this.props.handleSide}></i>
                <img src={logo} alt="userImg" />
            </nav>
        </>
    }
}
export default NavBar;