import {Avatar, Row, Col, Icon, Statistic, Tooltip,Divider,Layout, Card} from "antd"
import React, {Component,  Fragment} from 'react'
import data from "../../../data/Data"
const {Content} = Layout
const {Grid, Meta} = Card;

class MostAlerted extends Component{
  render(){
    return(
        <Fragment>
            <Content >
       
        <Statistic title="Non-mask wearers (August)" value="3" />
        <div >
          <p>Compared to last month <span>100%</span> <Icon  type={"caret-up"} /></p>
        </div>
        
        
      </Content>

            
            
        </Fragment>
        
    )
  }
}
export default MostAlerted;