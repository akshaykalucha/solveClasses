import React, { Component } from 'react'
import Cookies from 'js-cookie';
import{
  Link,
//   Redirect,
} from 'react-router-dom';
import base64 from 'base-64';
import { BASE_URL } from './Keys';
import axios from 'axios';
// import { compareSync } from 'bcryptjs';
import solveLogo from '../landingDashboard/solve.png'
import personImage24 from '../landingDashboard/person-24px@2x.png'
import notificationImage24 from '../landingDashboard/notifications-24px@2x.png';
import profilephoto from '../landingDashboard/pexels-photo-3184642.png';
import "../styles/Style.css";



export class NavTop extends Component {

    state ={
        userData: "",
        userName: "",
    }

    componentDidMount(){
        let config = {
            headers: {
              authToken: Cookies.get('SSID'),
            }
          }
        let userType = base64.decode(Cookies.get('NETID'));
        let userId = base64.decode(Cookies.get('oauth2'));
        let userMobile = base64.decode(Cookies.get('APISID'));
        const userName = base64.decode(Cookies.get('srftoken'))
        this.setState({
            userName: userName,
        })
    }

    render() {
        return (
            <div>
                <div className="navbar navbar-fixed-top">
                    <div className="container-fluid">
                        <Link>
                        <a className="navbar-brand">
                            <img src={solveLogo} width="85px" />
                        </a>
                        </Link>
                        <div className="col-container" id="navbar">
                            <ul className="nav navbar-nav navbar-right" style={{ paddingRight: "20px", paddingTop: "10px" }}>
                                <li>
                                    <Link>
                                        <a href="#">
                                            <img src={personImage24} width="40px" height="40px" style={{ marginLeft: "-137px", position: "absolute", background: "transparent 0% 0% no-repeat padding-box" }} />
                                        </a>
                                    </Link>
                                    <Link>
                                        <a href="#">
                                            <img src={notificationImage24} width="28px" height="33px" style={{ marginLeft: "-73px", marginTop: "4px", position: "absolute",  }} />
                                        </a>
                                    </Link>
                                        <img src={profilephoto} width="50px" height="57px" style={{marginLeft: "6px", marginTop: "-7px", background: "transparent url('img/notifications-24px.png') 0% 0% no-repeat padding-box;"}} /><u>{this.state.userName}</u>
                                    <Link>
                                        <a href="#">
                                            <i className="fa fa-sort-down" style={{fontSize:"24px",}}></i>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavTop
