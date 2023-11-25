import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSidebarOpen: false,
        };
    }

    toggleSidebar = () => {
        this.setState((prevState) => ({
            isSidebarOpen: !prevState.isSidebarOpen,
        }));
    };

    render() {
        return <>
            <div className="main">
                <NavBar handleSide={this.toggleSidebar} />
                <Main isOpen={this.state.isSidebarOpen} />
            </div>
        </>
    }
}
export default Layout;