
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
        this.props.history.push('/home');
        
    }
    render(){
        const layout = {
            labelCol: {
              span: 8,
              offset:0
            },
            wrapperCol: {
              span: 8,
              offset:0
            },
          };
          const tailLayout = {
            wrapperCol: {
              offset: 8,
              span: 16,
            },
          };
        const { getFieldDecorator } = this.props.form;

        return (
           
              
                  <Form
            {...layout}
            name="basic"
            
          >
            <Item
              label="Name"
              name="name"
              >
              {getFieldDecorator('userName', {
                initialValue: "",
                rules: [{ required: true, message: 'Please input your name!' }],
              })(
              <Input   onChange = {this.onNameChange}/>
              )}
              
              </Item>
      
            <Item
              label="Password"
              name="password"
             
            >
               {getFieldDecorator('password', {
                 initialValue:"",
                rules: [{ required: true, message: 'Please input your password!' }],
              })(
              <Input type = "password" onChange = {this.onAddressChange}/>
              )}  </Item>
                   
            
         
             
      
            
            <Item {...tailLayout}>
              <Button type="primary" htmlType="submit" onClick = {this.onClick}>
                Submit
              </Button>
            </Item>
          </Form>
      
                  
           
            
            
          
        )
    }
}
export default Form.create({ name: 'normal_login' }) (withRouter(Login));