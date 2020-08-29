import React, {Component, Fragment} from "react"
import {  Form, Input, Button, Checkbox, Select, notification }  from'antd'
import moment from "moment"
import {withRouter} from "react-router-dom"
// import QRCode from 'qrcode.react'
import axios from"axios"
const {Item} = Form
const {Option} = Select
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
class RegisteredScan extends Component{
  constructor(props){
    super(props);
    this.state = {
   
      item : {
        date: moment().format('YYYY-MM-DD hh:mm:ss'),
        address: "",
        email: "",
        isMapOpen: true,
        key: "",
        name: "",
        phone: "",
        status: "ALERTED",
        type: "",
        count_visited:"0",
        count_alerted:"0",
        emask_data:[]

      }
    };
    // this.onChange= this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }
 
  componentDidMount(){
    
   
  }
//   onChange = (e) =>{
//     let new_item = this.state.item
//     new_item.type =   e;
//     this.setState({
//       item: new_item
//     })
//   }
  onNameChange = e =>{
    
  
    this.setState({
      name: e.currentTarget.value
    })
  }
//   onAddressChange = e =>{
//     let new_item = this.state.item
//     new_item.address =   e.currentTarget.value;
//     this.setState({
//       item: new_item
//     })
//   }
//   onPhoneChange = e =>{
//     let new_item = this.state.item
//     new_item.phone =   e.currentTarget.value;
//     this.setState({
//       item: new_item
//     })
//   }
  onEmailChange = e =>{
    this.setState({
        email:e.currentTarget.value
    })
  }
  onClick(){
  
    
    // const data= {
    //   key5: `${this.state.item.date}`,
    //   key2: `${this.state.item.address}`,
    //   key3: `${this.state.item.email}`,
    //   key4: `${this.state.item.isMapOpen}`,
    //   key1: `${this.state.item.key}`,
    //   key6: `${this.state.item.name}`,
    //   key7: `${this.state.item.phone}`,
    //   key8: `${this.state.item.status}`,
    //   key9: `${this.state.item.type}`
    // };
    axios.post(
      "https://fhrs5atn73.execute-api.ap-southeast-2.amazonaws.com/dev",{

       
        email: `${this.state.email}`,
      
        name: `${this.state.name}`,
        
      }
    
    
    ).then(res =>{if(res.data.length==0){
        notification.open({
            message: 'Login Error',
            description:
              'Username or Email is incorrect',
          });
    }else{
        this.setState({
            item: res.data[0]
        })
        console.log(this.state.item);
        // this.props.history.push({pathname: "/camera",state:{ item:this.state.item, register: true}})

    }})
    
    
    //     // window.location.reload(false);
    
  }
    render(){
      const { getFieldDecorator } = this.props.form;
       return (
         <Fragment>
          <Form
            {...layout}
            name="basic"
            
          >
            <Item
              label="Name"
              name="name"
              >
              {getFieldDecorator('userName', {
                initialValue: this.state.item.name,
                rules: [{ required: true, message: 'Please input your name!' }],
              })(
              <Input   onChange = {this.onNameChange}/>
              )}
              
              </Item>
      
            <Item
              label="Email"
              name="Email"
             
            >
               {getFieldDecorator('email', {
                 initialValue: this.state.item.address,
                rules: [{ required: true, message: 'Please input your email!' }],
              })(
              <Input  onChange = {this.onEmailChange}/>
              )}  </Item>
                   
            
         
             
      
            
            <Item {...tailLayout}>
              <Button type="primary" htmlType="submit" onClick = {this.onClick}>
                Submit
              </Button>
            </Item>
          </Form>
          {/* <QRCode value="http://facebook.github.io/react/" /> */}
          </Fragment>
        );
  }
}
export default Form.create({ name: 'normal_login' })(withRouter(RegisteredScan));