import {Layout,Statistic ,Icon,  Row, Col,Card} from "antd"
import React, {Component} from 'react'
import { withConfigConsumer } from "antd/lib/config-provider/context"
import { withRouter } from "react-router-dom"
import MostAlerted from "./MostAlerted"
import { Chart,
  Geom,
  Axis,
  Tooltip, } from "bizcharts";
  const {Content} = Layout
const data = [
  {
    time: "8 am",
    alert: 0
  },
  {
    time: "9 am",
    alert: 0
  },
  {
    time: "10 am",
    alert: 36
  },
  {
    time: "11 am",
    alert: 56
  },
  {
    time: "12 pm",
    alert: 53
  },
  {
    time: "1 pm",
    visitor: 62
  },
  {
    time: "2 pm",
    visitor: 75
  },
  {
    time: "3 pm",
    visitor: 95
  },
  {
    time: "4 pm",
    visitor: 125
  },
  {
    time: "5 pm",
    visitor: 175
  },
];

class DataAnalyticRow extends Component {
    constructor() {
      super();
      this.state = {};
  
    }
  
    render() {
      return(
        <Layout >
          <Row gutter={18}>
            <Col lg={10} md={12} sm={24}>
              <Card bordered={false} >
                    <MostAlerted/>
              </Card>
            </Col>
            <Col lg={10} md={12} sm={24}>
              <Card bordered={false} >
              <Content>
        
        
        <Statistic title="Visits (August)" value="13" />
        <div >
          <p>Compared to last month: <span>100%</span> <Icon  type={"caret-up"} /></p>
        </div>
        <div >
          <p> <span></span> </p>
        </div>
        
      </Content>

              </Card>
            </Col>
            {/* <Col lg={6} md={12} sm={24}>
              <Card bordered={false}>
                <h3>month</h3>
              </Card>
            </Col>
            <Col lg={6} md={12} sm={24}>
              <Card bordered={false}>
                <h3>month</h3>
              </Card>
            </Col> */}
          </Row>
        </Layout>
      );
    }
  }
  export default DataAnalyticRow