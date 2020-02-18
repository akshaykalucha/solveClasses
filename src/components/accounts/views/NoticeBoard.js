import React, { Component } from 'react';
import Cookies from 'js-cookie';
import{
    Link,
    // Redirect,
  } from 'react-router-dom';
  import base64 from 'base-64';
  import noticeImage from '../landingDashboard/post_add-24px.png';




export class NoticeBoard extends Component {


    state ={
        isAuth: false,
        dataFetched: false,
        noticeData: [],
    }

    componentDidMount() {
        let config = {
            headers: {
              authToken: Cookies.get('SSID'),
            }
        }
        if(Cookies.get('oauth2') && Cookies.get('SSID') && Cookies.get('NETID') && Cookies.get('APISID')){
            this.setState({
                isAuth: true
            })
            let userType = base64.decode(Cookies.get('NETID'));
            let userId = base64.decode(Cookies.get('oauth2'));
            let userMobile = base64.decode(Cookies.get('APISID'));
            
        }

    }


    render() {
        return (
        <div>
            <div className="column-right">
                <div className="notice-board" style={{ marginLeft: "1061px" }}>
                    <p style= {{ marginTop: "16px", marginLeft: "16px", fontSize: "27px", fontFamily: "Segoe UI, Regular", textAlign: "left", color: "#000000", opacity: "1", }}>Noticeboard</p>
                    <Link>
                        <a href="#">
                            <img src={noticeImage} style= {{ marginTop: "-101px", marginLeft: "219px", }} />
                            <p style={{ marginLeft: "71%", marginTop: "-51px", position: "absolute" }}>add notice</p>
                        </a>
                    </Link>
                </div>
                    <br></br>
                <div className="green-board" style={{ marginLeft: "1061px" }}>
                    <br></br>
                        <div className="subject">
                            <p style={{ marginTop: "6px", marginLeft: "13px", fontSize: "17px", position: "absolute", color: "#000000", textAlign: "left", }}>Mechanics Notice</p>
                        </div>
                        <div className="notice">
                            <p style={{ marginTop: "24px", position: "absolute", fontSize: "17px", marginLeft: "11px" }}><b>Mechanics Class</b><br></br>Rescheduled to<br></br>11:00am - 01: 00pm<br></br></p>
                            <p style= {{marginTop: "109px", marginLeft: "73px", fontSize: "small", position: "absolute", color: "#707070", }}>06:47 pm, 27th Jan. 2020</p>
                        </div>
                        <br /><br />
                        <div className="subject">
                            <p style={{ marginTop: "6px", marginLeft: "13px", fontSize: "17px", position: "absolute", color: "#000000", textAlign: "left", }}>Mechanics Notice</p>
                        </div>
                        <div className="notice">
                            <p style={{ marginTop: "24px", position: "absolute", fontSize: "17px", marginLeft: "11px" }}><b>Mechanics Class</b><br></br>Rescheduled to<br></br>11:00am - 01: 00pm<br></br></p>
                            <p style= {{marginTop: "109px", marginLeft: "73px", fontSize: "small", position: "absolute", color: "#707070", }}>06:47 pm, 27th Jan. 2020</p>
                        </div>
                        
                </div>
            </div>
        </div>
        )
    }
}

export default NoticeBoard
