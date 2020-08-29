import React, {Component, useState, useEffect} from 'react'
import { Layout, Tabs, Menu,Dropdown, Table, Tag, DatePicker} from "antd"
import {withRouter} from "react-router-dom"
import moment from "moment"
import "../style/supervisedTable.css"
// import data from  "../../../data/Data"
const {Content} = Layout;

const {
    TabPane 
  } = Tabs;
  
  const column = [
      {
        title : "Name", 
        dataIndex: "name",
        key : "name", 
        
        sorted: (a,b) => a.name.length -b.name.length,
        sortDirections: ["descend", "ascend"]

      }, 
      {
        title : "Email", 
        dataIndex: "email",
        key : "email",
        sorted: (a,b) => a.email.length- b.email.length,
        sortDirections: ["descend", "ascend"]

      },
      {
        title : "Phone", 
        dataIndex: "phone",
        key : "phone",
        sorted: (a,b) => a.phone- b.phone,
        sortDirections: ["descend", "ascend"]

      },
      {
        title : "Status", 
        dataIndex: "status",
        key : "status", 
        render: status =>{
            let color = "red";
            if (status=== "CONFIRMED"){
                color = "green"
            }else if (status ==="ALERTED"){
                color= "red"
            }
            return (
                <div>
                    <Tag color = {color} >
                        {status}
                    </Tag>
                </div>
            )
        }
      },
      {
        title : "Date", 
        dataIndex: "date",
        key : "date",
        sorted: (a,b) => moment(a.date).isAfter(b.date), 
        sortDirections: ["descend", "ascend"]

      },
      
      

  ];
  

class SupervisedTable extends Component{
    
   state= {
     selectedOption: "1", 
     pickeddate : moment('2020/06/09', 'YYYY/MM/DD'), 
     emask_data:[]
   }
   
    componentDidMount () {
        
        localStorage.setItem('route', this.props.location.pathname);
        fetch("https://fhrs5atn73.execute-api.ap-southeast-2.amazonaws.com/dev")
        .then(response => response.json())
        .then(data => this.setState({emask_data:data}))
       
      };
    render(){
      const dateFormat = 'YYYY/MM/DD';
        const employees = this.state.emask_data.filter(e =>{
          console.log(this.state.pickeddate)
          if(this.state.selectedOption == '1'){
            console.log("hello")
            console.log(moment(e.date, "YYYY/MM/DD"))
            return e.type === "Employee" && moment(e.date).format("YYYY-MM-DD")=== moment(this.state.pickeddate).format("YYYY-MM-DD")
          }else if (this.state.selectedOption === '3'){
            return e.type === "Employee" && moment(e.date, "YYYY/MM/DD").month() === this.state.pickeddate.month() && moment(e.date, "YYYY/MM/DD").year() === this.state.pickeddate.year()
    
          }else if(this.state.selectedOption === '2'){
            return e.type === "Employee" && moment(e.date, "YYYY/MM/DD").month() === this.state.pickeddate.month() && moment(e.date, "YYYY/MM/DD").year() === this.state.pickeddate.year() && moment(e.date, "YYYY/MM/DD").isoWeek() === this.state.pickeddate.isoWeek()
    
          }
             
        }
        );
        const non_employees = this.state.emask_data.filter(e =>{
            return e.type === "Non-Employee"
        }
        );
        const menu = (
          <Menu mode = "horizontal" defaultSelectedKeys = {['1']}>
            <Menu.Item key="1" onClick = {() => {this.setState({selectedOption:'1'})}}>
              All day
            </Menu.Item>
            <Menu.Item key="2" onClick = {() => {this.setState({selectedOption:'2'})}}>
              All week  
            </Menu.Item>
            
            <Menu.Item key="3"onClick = {() => {this.setState({selectedOption:'3'})}} >
              All month
            </Menu.Item>
          </Menu>
        );
        return(
            <Content>
                 <Tabs defaultActiveKey = "1">
                   
                    <TabPane key = "1" tab = "Employees">
                    <div id = "datepicker">
                      <DatePicker defaultValue={moment('2020/06/09', dateFormat)} format={dateFormat} onChange={date => {this.setState({pickeddate : date})}}/>
                    </div>
                    <div id = "dateoption">
                      
                       {menu}
                    
                    </div>
                    
                        <Table dataSource = {employees}  columns = {column} scroll={{ x: 'calc(700px + 50%)', y: 240 }} />
                    </TabPane>
                    <TabPane key = "2" tab = "Non-Enployees">
                    <div id = "datepicker">
                      <DatePicker defaultValue={moment('2020/06/09', dateFormat)} format={dateFormat} onChange={date => {this.setState({pickeddate : date})}}/>
                    </div>
                    <div id = "dateoption">
                      
                       {menu}
                    
                    </div>
                        <Table dataSource = {non_employees}  columns = {column} scroll={{ x: 'calc(700px + 50%)', y: 240 }}/>
                    </TabPane>
                </Tabs>
            </Content>
        )
    }
}
export default withRouter(SupervisedTable);