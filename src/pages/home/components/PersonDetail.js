import React, {Component, Fragment} from "react"
import {Button, Drawer, Avatar} from "antd"
import {withRouter} from "react-router-dom"
class PersonDetail extends Component{
    constructor(props){
      super(props);
      this.state = {
        userInput: "",
      
        
        // defaultMapSize: { lat: -33.797, lng: 151.1 }, 
        // windowSize:10, 
        emask_data: [], 
        // visible: false
        
      }
    }
    componentDidMount(){
     
        fetch("https://fhrs5atn73.execute-api.ap-southeast-2.amazonaws.com/dev")
          .then(response => response.json())
          .then(data => {
            this.setState({emask_data:data});}
            )
    }
    showDrawer = () => {
        this.setState({visible:true});
      };
    
      onClose = () => {
        this.setState({visible:false});
      };
    render(){
        return (
            <div>
            {this.state.emask_data.map((item, index)=>{
                if (this.props.clickable === true){
                  
                  if (this.state.emask_data[index].name == this.props.clickedInput.replace(/\s/g, '')){
                    
                    return(
                      <Fragment >
                          <div style = {{display:"inline-flex",flexDirection: "row"}}>
                          <Avatar icon= "user" size={150} />
                            <div style = {{marginLeft: 100}} >
                                <p><b>Name:</b> {item.name}</p> 
                                <p><b>Phone number:</b> {item.phone}</p>
                                <p><b>Status:</b> {item.type}</p>
                                <p><b>Number of Non-mask wearers:</b> {item.count_alerted}</p>
                                <p><b>Number of visits:</b> {item.count_visited}</p>
                            
                            </div>
                          </div>
                        {/* <Button type="primary" style= {{marginLeft:400}} onClick={this.showDrawer}>
                          View User Detail
                        </Button>
                        <Drawer
                          title={"Name: "+item.name}
                          placement="right"
                          closable={false}
                          onClose={this.onClose}
                          visible={this.state.visible}
                        >
                        
                          
                          <p><b>Phone number:</b> {item.phone}</p>
                          <p><b>Status:</b> {item.type}</p>
                          <p><b>Number of time the person doesn't wear mask:</b> {item.count_alerted}</p>
                          <p><b>Number of visits:</b> {item.count_visited}</p>
                        </Drawer>*/}
                        </Fragment> 
                    )
                    }
                }
            }
        )
    }
        </div>
            
        
    )
}

}
export default  withRouter(PersonDetail)