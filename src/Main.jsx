import React from "react";
import Sidebar from './/SideBar'

class Main extends React.Component {

    render() {
        return <>
            <main style={{padding:this.props.isOpen ? '0px' : '0px 0px 0px 200px' }}>
        <Sidebar isOpen={this.props.isOpen}/>
               <div className="container">
               <h1>Hi, I am <span>Hafiz Abdullah</span></h1>
                <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations</p>
                <div className="icon">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <a target="_blank" href="https://github.com/hafizabdullah1">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
               </div>
            </main>
        </>
    }
}

export default Main;