import React, { Component } from 'react'
// import Cookies from 'js-cookie';
import{
  Link,
//   Redirect,
} from 'react-router-dom';
// import base64 from 'base-64';
// import { BASE_URL } from './Keys';
// import axios from 'axios';
// import { compareSync } from 'bcryptjs';
// import solveLogo from '../landingDashboard/solve.png'
// import personImage24 from '../landingDashboard/person-24px@2x.png'
// import notificationImage24 from '../landingDashboard/notifications-24px@2x.png';
// import profilephoto from '../landingDashboard/pexels-photo-3184642.png';
import "../styles/Style.css";
import createInstitutePic from '../landingDashboard/bank (1)@2x.png';
import joinInstitutePic from '../landingDashboard/bank (3)@2x.png';
import createClassPic from '../landingDashboard/teamwork@2x.png';
import earingpic from '../landingDashboard/elearning@2x.png';
import logoutLogo from '../landingDashboard/power_settings_new-24px.png';

/*

<div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="row">
                  <div className="col-lg-12 col-md-8 box">
                    <ul className="nav bg-dark">
                      <li className="nav-item sidebar1 mt-5">
                        <Link>
                          <a className="nav-link text-white" style={{ color:"black !important" }} href="#">Classes</a>
                        </Link>
                      </li>
                      <li className="nav-item sidebar">
                        <Link>
                          <a className="nav-link text-white" href="#" style={{ width:"114%", margin:"0 0 0 -10px", padding:"18px 0 0 26px", height:"62px" }}>Quiz Maker</a>
                        </Link> 
                      </li>
                      <li className="nav-item sidebar">
                        <Link>
                          <a className="nav-link text-white" href="#" style={{ width:"114%", margin:"0 0 0 -10px", padding:"18px 0 0 26px", height:"62px" }}>Archieved Class</a>
                        </Link>
                      </li>
                      <li className="nav-item sidebar" style={{ visibility:"hidden" }}>
                        <Link>
                          <a class="nav-link" href="">blank</a>
                        </Link>
                      </li>
                      <li className="nav-item sidebar" style={{ visibility:"hidden" }}>
                        <Link>
                          <a class="nav-link" href="">blank</a>
                        </Link>
                      </li>
                      <li className="nav-item sidebar" style={{ visibility:"hidden" }}>
                        <Link>
                          <a class="nav-link" href="">blank</a>
                        </Link>
                      </li>
                      <li className="nav-item sidebar">
                        <Link>  
                          <a className="nav-link text-white logout" href="#" style={{ borderTopRightRadius:"43px", borderBottomRightRadius:"43px", paddingLeft:"45px", }}>Log Out</a>
                          </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 py-4">
                  <div className="row">
                    <div className="col-lg-12 col-md-10 navigationhead">
                      <br/>
                      <a href="#" style={{ color:"black" }}>
                        <img className="img" src="" />
                        <p style={{ margin:"3rem 0 0 12px" }}>Join Class</p>
                      </a>
                      <br/>
                      <a href="#" style={{ color:"black" }}>
                        <img className="img" src="" />
                        <p className="navtext" style={{ margin:"3rem 0 0 -1px" }}>Create New Class</p>
                      </a>
                      <br/>
                      <a href="#" style={{ color:"black" }}>
                        <img className="img" src="" />
                        <p style={{ margin:"3rem 0 0 -7px" }}>Create Institute</p>
                      </a>
                      <br/>
                      <a href="#" style={{ color:"black" }}>
                        <img className="img" src="" />
                        <p style={{ margin:"3rem 0 0 -3px" }}>Join Institute</p>
                      </a>
                      <br/>
                    </div>
                    <div className="col-lg-2 col-md-1"></div>
                  </div>
                </div>
              </div>
            </div>

*/

export class NavLeft extends Component {
    render() {
        return (
          <div>
            <div className="column-left">
            <div className="box">
              <br></br>

              <div className="classes" style={{ width:"291px" }}>
                <br></br>
                <Link>
                  <a href="#" style={{ color: "black", textDecoration: "none", width: "70px", fontSize: "22px", marginLeft: "36px", marginTop: "-7px", position: "absolute", fontFamily: "Segoe UI, Regualar",  }}> Classes</a>
                </Link>
                <div className="classes1" style={{ left: "195px", top:"21px", height: "476px", borderBottomRightRadius: "10px", }}>
                  <br></br>
                  <Link>
                    <a href="#" style={{ color: "black", }}><img src={earingpic} alt="join" width="32px" height="32px" style={{ marginLeft: "-34px", }} />
                      <p style={{ marginLeft: "27px" }}>Join Class</p>
                    </a>
                  </Link>
                  <br></br>
                  <br></br>
                  <Link>
                  <a href="#" style={{ color: "black", }}><img src={createClassPic} alt="join" width="32px" height="32px" style={{ marginLeft: "-34px", }} /><br></br>
                    <p style={{ marginLeft: "", }}>Create New Class</p>
                  </a>
                </Link>
                <br></br>
                <br></br>
                <Link>
                <a href="#" style={{ color: "black", }}>
                  <img src={createInstitutePic} alt="join" width="32px" height="32px" style={{ marginLeft: "-32px", }} /><br></br>
                  <p style={{ marginLeft: "" }}>Create Institute</p>
                </a>
                </Link>
                <br></br>
                <br/>
                <Link>
                <a href="#" style={{ color: "black", }}><img src={joinInstitutePic} alt="join" width="32px" height="32px" style={{ marginLeft: "-34px", }} /><br></br>
                  <p style={{ marginLeft: "13px" }}>Join Institute</p>
                </a>
              </Link>
                </div>
              </div>
            </div>

            <div className="quiz_maker">
              <br></br>
              <Link>
                <a href="#" style={{color: "white", textDecoration: "none", fontSize: "22px", marginLeft: "52px", marginTop: "0px", position: "absolute", fontFamily: "Segoe UI, Regualar", }}>Quiz Maker</a>
              </Link>
            </div>
            <div className="archieved">
            <br></br>
              <Link>
                <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "22px", marginLeft: "22px", marginTop: "-7px", position: "absolute", fontFamily: "Segoe UI, Regualar", }}>Archieved Class</a>
              </Link>
            </div>
            <div className="log_out">
              <br></br>
              <Link>
              <a href="#">
                <p style={{ color: "#FFFFFF", position: "absolute", marginLeft: "61px", marginTop: "132px", fontSize: "19px", }}>Log Out</p>
                <img src={logoutLogo} width="25px" height="25px" style={{ marginLeft: "133px", marginTop: "134px", }}></img>
              </a>
              </Link>
            </div>
          </div>
            </div>
            
        )
    }
}

export default NavLeft
