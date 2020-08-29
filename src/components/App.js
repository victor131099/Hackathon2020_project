import React, { useState, Component } from 'react';
import './App.css';
import { Badge,Layout, Avatar, Menu, Icon, Breadcrumb, Button } from 'antd';
import {Link, Route, withRouter, BrowserRouter,useLocation,  Switch} from "react-router-dom"
import Home from "../pages/home/Home"
// npm install --save-dev @iconify/react @iconify/icons-ant-design
import History from "../pages/history/History"
import Scan from "../pages/scan/Scan"
import Customer from "../pages/customer/Customer"
import Camera from "../pages/scan/components/Camera"
import Login from "../pages/Login/Login"
import Login1 from "../pages/Login/Login1"
// import Venue from "../pages/venue/Venue"
const { Header, Footer, Sider, Content } = Layout;
// const location = useLocation();
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed:"true", 
      count : 0,
      login : false
    };
  }
  
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  
  componentDidMount(){
    if(localStorage.getItem("count_data")){
      this.setState({count: localStorage.getItem("count_data")})
    }
  }
  render(){
    const {pathname} = this.props.location;
    console.log(pathname)
    if (pathname === "/login1"){
      return(
        <Route path = "/login1" component = {Login1}/>
                
      )
    }
    if(pathname !== "/camera"){
  return (

    <div className="App">
      
      <Layout>
      {/* <Route path = "/camera" component = {Camera}/> */}
                
        <Layout>
       
      
        { pathname !="/"  &&
          <Sider  trigger={null} collapsible collapsed={this.state.collapsed}>
            {/* <Menu
            
              mode="inline"
              theme = "dark"
              
            > */}
            
              <Menu
            
              mode="inline"
              theme = "dark"
              
            >
              <Menu.Item key='/home' >
                <Link to = "/home">
                  <Icon type = "home"/>
                  <span>Home </span>
                </Link>
                
              </Menu.Item>
              
              <Menu.Item key='/customer' >
              <Link to = "/customer">
                  <Icon type = "user"/>
                  <span>Customer </span>
                </Link>
              </Menu.Item>
              <Menu.Item key='/history' >
              <Badge count = {this.state.count}  offset={[10, 10]} >
              <Link to = "/history">
              
                  <Icon type = "history"/>
                  <span>History </span>
                </Link>
                </Badge>
              </Menu.Item>
             
            
            
              {/* <Menu.Item key='/camera' >
                
                <Link to = "/camera">
                    <Icon type = "scan"/>
                    <span>Scan </span>
                </Link> 
                
              </Menu.Item> */}
           
              </Menu>
             
             
            {/* </Menu> */}
          </Sider>
    }
          <Layout>
       
          <Header style={{ paddingLeft:10, backgroundColor: "white" }}>
            <Icon type={this.state.collapsed? "right-circle": "left-circle"} onClick = {this.toggle}  />
            
          </Header>
      
          
            <Content style={{ padding: '0 50px', minHeight:400, backgroundColor: "white" }}>
            <Switch>
                {/* <Route exact path = "/venue"  component = {Venue} /> */}
                <Route exact path = "/"  component = {Login}/>
                <Route path = "/customer" component = {Customer}/>
                <Route path = "/history" ><History count = {this.state.count} onCountChange = {this.onCountChange} setCountZero = {this.setCountZero}/></Route>
                {/* <Route path = "/scan" ><Scan count = {this.state.count} onCountChange = {this.onCountChange} setCountZero = {this.setCountZero}/></Route> */}
                {/* <Route path = "/camera" component = {Camera}/>
                 */}
                <Route path = "/home" component = {Home} />
              </Switch>
              
            
              
            </Content>
            <Footer style={{ textAlign: 'center' }}></Footer>
          </Layout>
        </Layout>
      </Layout>
      
    </div>
  );
}else{
  
    return(
      <Content>
<Route path = "/camera" component = {Camera}/>
      </Content>
       
    )
  }
  }
}

export default  withRouter(App);
