import React, { Component } from 'react'
import Cookies from 'js-cookie';
import{
  Link,
  // Redirect,
} from 'react-router-dom';
import base64 from 'base-64';
// import { BASE_URL } from './Keys';
// import axios from 'axios';
// import { compareSync } from 'bcryptjs';
// import solveLogo from '../landingDashboard/solve.png'
// import personImage24 from '../landingDashboard/person-24px@2x.png'
// import notificationImage24 from '../landingDashboard/notifications-24px@2x.png';
// import profilephoto from '../landingDashboard/pexels-photo-3184642.png';
import "../styles/Style.css";
// import createInstitutePic from '../landingDashboard/bank (1)@2x.png';
// import joinInstitutePic from '../landingDashboard/bank (3)@2x.png';
// import createClassPic from '../landingDashboard/teamwork@2x.png';
// import earingpic from '../landingDashboard/elearning@2x.png';
// import logoutLogo from '../landingDashboard/power_settings_new-24px.png';
import Classes from './Classes';
import NavTop from './NavTop';
import NavLeft from './NavLeft';
import NoticeBoard from './NoticeBoard';

class Index extends Component {

  state = {
    isAuth: false,
    passedProps: this.props.location.regdata,
    data: this.props.location.data,
    cookie: Cookies.get('SSID'),
    showData: [],
  }


  componentDidMount() {
    // let config = {
    //   headers: {
    //     authToken: Cookies.get('SSID'),
    //   }
    // }
    if(Cookies.get('oauth2') && Cookies.get('SSID') && Cookies.get('NETID') && Cookies.get('APISID')){
      this.setState({
        isAuth: true,
      })
      // let userType = base64.decode(Cookies.get('NETID'));
      // let userId = base64.decode(Cookies.get('oauth2'));
      // let userMobile = base64.decode(Cookies.get('APISID'));
      // if(userType === 'student'){
      //   axios.post(`${BASE_URL}/api/v1/institute/getAllClassesStudent/`, {
      //     studentId: userId
      //   }, config)
      //   .then(res => {
      //     this.setState({
      //       isLoading: false,
      //       showData: res.data["data"]
      //     })
      //     console.log(this.state)
      //     var i
      //     for( i = 0; i<this.state.showData.length; i++){
      //       const k = this.state.showData[i].Institute
      //       console.log(k)
      //     }
      //   })
      //   .catch(err => console.log(err))
      // }
    }
  else if(this.state.data){
    console.log('HI from data')
    const userType = base64.encode(`${this.state.data.userData.type}`)
    const userName = base64.encode(`${this.state.data.userData.name}`)
    const userId = base64.encode(`${this.state.data.userData.userId}`)
    console.log(userType)
    console.log(userName)
    console.log(userId)
    Cookies.set('NETID', userType, {expires: new Date(Date.now()+259200000)})
    Cookies.set('srftoken', userName, {expires: new Date(Date.now()+259200000)})
    Cookies.set('oauth2', userId, {expires: new Date(Date.now()+259200000)})
    this.setState({
      isAuth: true,
    })
  }else if(this.state.passedProps){
    console.log('HI from passedprops')
    const userType = base64.encode(`${this.state.passedProps.userName}`)
    const userName = base64.encode(`${this.state.passedProps.userType}`)
    const userId = base64.encode(`${this.state.passedProps.userEmail}`)
    const userMobile = base64.encode(`${this.state.passedProps.userMobile}`)
    console.log(userType)
    console.log(userName)
    console.log(userId)
    Cookies.set('NETID', userType, {expires: new Date(Date.now()+259200000)})
    Cookies.set('srftoken', userName, {expires: new Date(Date.now()+259200000)})
    Cookies.set('oauth2', userId, {expires: new Date(Date.now()+259200000)})
    Cookies.set('APISID', userMobile, {expires: new Date(Date.now()+259200000)})
    this.setState({
      isAuth: true,
    })
  }
  else{
    console.log("nodata")
  }
 }

  handliclick = () => {
    console.log(this.state)
  }



  render() {

      if(this.state.isAuth){
        return (
          <div>  
            <NavTop />

            <div className="conatiner">
              <div className="row" style={{ marginRight: "0px", marginLeft:"0px", }}>
                <NavLeft />
                <Classes />
                <NoticeBoard />
              </div>
            </div>
          
          </div>
        )
      }else{
          return (
            <h1>Sorry not allowed please <Link to={{pathname: "/"}}>log in</Link> to continue</h1>
          )
      }
  }
}

export default Index
