import React, {Component, Fragment} from "react"
import {  Form, Input, Button, Checkbox, Select }  from'antd'
import moment from "moment"
import {withRouter} from "react-router-dom"
import QRCode from 'qrcode.react'

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
class Scan extends Component{
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
        count_alerted:"1", 
        count_visited: "1",
        emask_data:[]

      }
    };
    this.onChange= this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }
 
  componentDidMount(){
    
    fetch("https://fhrs5atn73.execute-api.ap-southeast-2.amazonaws.com/dev")
        .then(response => response.json())
        .then(data => this.setState({emask_data:data}))
  }
  onChange = (e) =>{
    let new_item = this.state.item
    new_item.type =   e;
    this.setState({
      item: new_item
    })
  }
  onNameChange = e =>{
    
    let new_item = this.state.item
    new_item.name =   e.currentTarget.value;
    new_item.key= (this.state.emask_data.length+1).toString()
    this.setState({
      item: new_item
    })
  }
  onAddressChange = e =>{
    let new_item = this.state.item
    new_item.address =   e.currentTarget.value;
    this.setState({
      item: new_item
    })
  }
  onPhoneChange = e =>{
    let new_item = this.state.item
    new_item.phone =   e.currentTarget.value;
    this.setState({
      item: new_item
    })
  }
  onEmailChange = e =>{
    let new_item = this.state.item
    new_item.email =   e.currentTarget.value;
    this.setState({
      item: new_item
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
    // axios.post(
    //   "https://fhrs5atn73.execute-api.ap-southeast-2.amazonaws.com/dev",
    //   {
    //     key5: `${this.state.item.date}`,
    //     key2: `${this.state.item.address}`,
    //     key3: `${this.state.item.email}`,
    //     key4: `${this.state.item.isMapOpen}`,
    //     key1: `${this.state.item.key}`,
    //     key6: `${this.state.item.name}`,
    //     key7: `${this.state.item.phone}`,
    //     key8: `${this.state.item.status}`,
    //     key9: `${this.state.item.type}`
    //   }
    
    // ).then(res =>{console.log(res)})
    
    
    this.props.history.push({pathname: "/camera",state:{ item:this.state.item, register: false}})
    window.location.reload(false);
    
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
              label="Phone number"
              name="Phone number"
              
            >
               {getFieldDecorator('phone', {
                 initialValue: this.state.item.phone,
                rules: [{ required: false, message: 'Please input your phone number!' }],
              })(
              <Input  placeholder = "Optional" onChange = {this.onPhoneChange}/>
              )}          
              </Item>
              <Item
              label="Email"
              name="email"
              >
              {getFieldDecorator('email', {
                initialValue: this.state.item.email,
                rules: [{ required: false, message: 'Please input your email!' }],
              })(
              <Input  placeholder = "Optional" onChange = {this.onEmailChange}/>
              )}
              
              </Item>
            <Item
              label="status"
              name="type"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ]}

            >
              <Select
                value={this.state.item.type}
                
                onChange={this.onChange}
                
              >
                <Option value="Employee">Employee</Option>
                <Option value="Non-Employee">Non-Employee</Option>
              </Select>
            </Item>
      
            
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
export default Form.create({ name: 'normal_login' })(withRouter(Scan));