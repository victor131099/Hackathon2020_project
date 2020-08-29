import {Layout, Row, Col,Card } from "antd"
import React, {Component} from 'react'
import moment, { months } from "moment"
import { Chart,
    Geom,
    Axis,
    Tooltip, Legend} from "bizcharts";
  
 const {Content} = Layout 
class MaskChart extends Component{
    constructor(props){
        super(props);
        this.state= {
            emask_data:[],
            month_data:[]
        }
    }
    componentDidMount () {
        
          fetch("https://fhrs5atn73.execute-api.ap-southeast-2.amazonaws.com/dev")
        .then(response => response.json())
        .then(data => this.setState({emask_data:data}))
       
      };
      extract_month(){
          var months_data = [
            {
                month: "Jan",
                count:0,
                
            },
            {
                month: "Feb",
                count:0,
                
            },
            {
                month: "Mar",
                count:0,
                
            },
            {
                month: "Apr",
                count:0,
                
            }, 
            {
                month: "May",
                count:0,
               
            },
            {
                month: "Jun",
                count:0,
                
            },
            {
                month: "Jul",
                count:0,
               
            },
            {
                month: "Aug",
                count:0,
               
            },
            {
                month: "Sep",
                count:0,
                
            },
            {
                month: "Oct",
                count:0,
                
            }, 
            {
                month: "Nov",
                count:0,
                
            }, 
            {
                month: "Dec",
                count:0,
                
            }
        ];
          
          for(var i =0; i < this.state.emask_data.length; i++){
            for(var j=0; j < months_data.length; j++){
                var mon= j+1;
                if(this.state.emask_data[i].status ==="ALERTED"){
                    if(parseInt(moment(this.state.emask_data[i].date).format("MM")) == mon ){
                    
                        months_data[j].count = months_data[j].count+1
                        break;
                    }
                }
            }
          }
          return months_data;

      }
    
    render(){
        var month_data = this.extract_month()
        
        const getTooltipData = (month, count) => {
            return {
                name: "the number of alerted",
                value: count
               
            };
        }
        
        return(
            <Content>
                <Card>
                    <h2 style= {{textAlign:"center"}}> The number of Non-mask wearers by months </h2>
                <Chart data={month_data} height={200} forceFit={true}>
        <Legend />
        <Axis name='month'         label={{
            textStyle: {
                fill: 'red',  // colour
                textBaseline: 'top'  // Align the baseline
            },
            
        }}/>
        <Axis name='count' />
        <Tooltip         crosshairs={{
            type: "y" 
        }} />
        <Geom type='interval' position='month*count'                style={{ cursor: 'pointer' }} // When the mouse hover goes up, it shows the little hand, free to send
        active={[
            true,
            {
                style: {
                    fill: 'black',  // pillar color, continue to mourn
                    shadowColor: 'red',  // overall shadow color, including edges
                    shadowBlur: 1,  // shadow transparency
                    opacity: 0 // pillar color transparency
                }
            }
        ]}        tooltip={["month*count", getTooltipData]} adjust={[{ type: 'dodge', marginRatio: 1 / 32 }]} />
      </Chart>
                </Card>
            </Content>
        )
    }
}
export default MaskChart;