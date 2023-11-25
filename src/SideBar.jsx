import React from "react";

class SideBar extends React.Component{



    render(){
        
        const sidebarStyle = {
            transform: this.props.isOpen ? 'translateX(-250px)' : 'translateX(0)',
        };

        return <>
           <aside style={{left: this.props.isOpen ? '-250px' : '0'} }>
            <div className="user">
                <div className="round">
                </div>
            </div>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>resume</li>
                <li>portfolios</li>
                <li>blogs</li>
                <li>contact</li>
            </ul>
            <footer>
                <h4>© 2023 Abdullah</h4>
            </footer>
           </aside>
        </>
    }
}
export default SideBar;

// gest
//jss
//emotiion
//redmium
//chakra UI
//npm yarn pnpn  these are pkg
//react query,  redux query, redux toolkit RTK, 
//firebase
//HOC
//bit bucket, jeera
//run stage production
//sonarcube tester gest mocha chai 
//mobex 
//saga


//nest lest next typeScript
//cloud navy for picture upload k liye 
