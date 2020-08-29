
import { AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import React, {Component, Fragment} from "react"
import {  Form, Input, Icon,  Button, Checkbox, Select, Tabs }  from'antd'
import RegisteredScan from "./RegisteredScan"
import {withRouter} from "react-router-dom" 
import Scan from "../scan/Scan"
const {Item} = Form
const {TabPane} = Tabs
 
class Login extends Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this)
        
    }
    onClick(){
        this.props.history.push('/camera');
        
    }
    render(){
     
        const { getFieldDecorator } = this.props.form;

        return (
           
              <Tabs defaultActiveKey="1" style = {{marginLeft: 200}}>
                  
      
                 
                  <TabPane tab="Unregistered Visitor" key="1">
                      <Scan/>
                  </TabPane>
                  <TabPane tab="Registered Visitor" key="2">
                      <RegisteredScan/>
                  </TabPane>
              </Tabs>

           
            
            
          
        )
    }
}
export default Form.create({ name: 'normal_login' }) (withRouter(Login));