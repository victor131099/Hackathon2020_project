import React, {Component} from "react"
import data from "../../data/Data"
import moment from "moment"
import {Card, Avatar, Col, Icon } from "antd";
const {Meta} = Card
class History extends Component{
    constructor(props){
        super(props);
        this.state = {
            emask_data: [], 
            count_: 0
        }
    }
    componentDidMount(){
        if(localStorage.getItem("count_data")){
            this.setState({count: localStorage.setItem})
        }
        localStorage.setItem("count_data", 0)
        
        fetch("https://fhrs5atn73.execute-api.ap-southeast-2.amazonaws.com/dev")
        .then(response => response.json())
        .then(data => this.setState({emask_data:data}))
    }
    sortData(){
        let sortedData = this.state.emask_data.sort(function(a, b) {
            
            // Compare the 2 dates
            if (moment(a.date).isBefore(b.date)) return 1;
            if (moment(a.date).isAfter(b.date)) return -1;
            return 0;
        });
          return sortedData
    }
    listDate(){
        let sortedData = this.sortData();
        // console.log(sortedData)
        let list_date = []
        for (let i =0 ; i < sortedData.length; i++){
            
            if (i === 0){
                list_date.push(moment(sortedData[i].date).format("YYYY-MM-DD"))
            }else{
                // console.log(i)
                // console.log(sortedData[i].date)
                if (moment(sortedData[i].date).format("YYYY-MM-DD") !== moment(sortedData[i-1].date).format("YYYY-MM-DD")){
                    list_date.push(moment(sortedData[i].date).format("YYYY-MM-DD"))
                }
            }
        }
        return list_date
    }
    
    render(){
        let sortedData= this.sortData();
        let listDate = this.listDate();
        console.log("list date")
        console.log(listDate)

        return(
            <div>
              {listDate.map((item, index) =>{
                  return(
                      <div>
                      <h3><b>{moment(item).format(("DD-MMMM-YYYY"))} </b></h3>
                      <hr></hr>
                      {sortedData.map((item1, index1) =>{
                          if(moment(item1.date).format("YYYY-MM-DD") === item  ){
                              var colorText = item1.status === "ALERTED"? "red": "green"
                                return(
                                    <Card >
                                        <Col lg={10} md={12} sm={24}>
                                           
                                        <Meta
                                avatar={<Avatar size = {30} icon= {item1.status === "ALERTED"? "alert": "check"}  style= {{color: colorText  , backgroundColor:"white" }} />}
                                title =  {item1.name}
                            /></Col>
                            <Col lg={10} md={12} sm={24}> {moment(item1.date).format("LT")}</Col>
                            </Card>
                                )
                          }
                      })}
                      </div>
                      
                  )
              })}  
            </div>
        )
    }
}
export default History