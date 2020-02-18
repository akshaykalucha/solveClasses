import React, { Component } from 'react'
import Cookies from 'js-cookie';
import { BASE_URL } from './Keys';
import axios from 'axios';
import base64 from 'base-64';
import { Link } from 'react-router-dom';

export class Classes extends Component {
    state = {
        showData: [],
        isAuth: false,
        isLoading: true,
    }

    componentDidMount() {
        let config = {
          headers: {
            authToken: Cookies.get('SSID'),
          }
        }
        if(Cookies.get('oauth2') && Cookies.get('SSID') && Cookies.get('NETID') && Cookies.get('APISID')){
          this.setState({
            isAuth: true,
          })
          let userType = base64.decode(Cookies.get('NETID'));
          let userId = base64.decode(Cookies.get('oauth2'));
          let userMobile = base64.decode(Cookies.get('APISID'));
          if(userType === 'student'){
            axios.post(`${BASE_URL}/api/v1/institute/getAllClassesStudent/`, {
              studentId: userId
            }, config)
            .then(res => {
              console.log(res.data)
              this.setState({
                isLoading: false,
                showData: res.data["data"]
              })
              console.log(this.state)
              var i
              for( i = 0; i<this.state.showData.length; i++){
                const k = this.state.showData[i].Institute
                console.log(k)
              }
            })
            .catch(err => console.log(err))
          } else if(userType){
            axios.post(`${BASE_URL}/api/v1/institute/getAllClassesTeacher/`, {
              teacherId: userId
            }, config)
            .then(res => {
              this.setState({
                isLoading: false,
                showData: res.data["data"]
              })
              console.log(this.state)
              var i
              for( i = 0; i<this.state.showData.length; i++){
                const k = this.state.showData[i].Institute
                console.log(k)
              }
            })
            .catch(err => console.log(err))
          }
        }
    }


    render() {
        const classlist = []
        const classInfo = this.state.showData.map((data) =>
        classlist.push(        
          <div>
            <div className="boxes">
              <Link>
                <a href="#">                                                      
                  <p style={{ color: "white", bottom: "81px", }}>{data.classname}</p>
                </a>
              </Link>
              <br></br>
              <i className="fa fa-ellipsis-h" style={{ fontSize:"24px", color: "rgb(207, 24, 24)" }}></i>
            </div>
              <br></br>
          </div>
        )
      );

      if(this.state.isLoading === true){
        return(
          <div className="column-center" style={{ marginLeft: "342px" }}>
            <div className="box" style={{ height: "auto", }}>
              <br></br>
              <p style={{ marginLeft: "35px", color: "#000000", fontSize: "20px", }}>Loading...</p>
            </div>
          </div>        
        )
      }else if(this.state.isLoading === false){
        return (
          <div>
            <div className="column-center" style={{ marginLeft: "342px" }}>
              <div class="box">
                <br></br>
                <p style={{ marginLeft: "35px", color: "#000000", fontSize: "20px", }}>Classes</p>
                {classlist}
              </div>
            </div>
          </div>
        )
      }
    }
}

export default Classes
