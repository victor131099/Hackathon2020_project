import React, {Component} from 'react'
import { Layout, Tabs,  Breadcrumb} from "antd"
import {withRouter} from "react-router-dom"
import SupervisedTable from './components/SupervisedTable'
import DataAnalyticsRow from './components/DataAnalytics'
import  MaskChart from "./components/MaskChart"
const {Content} = Layout;
const {BreadcrumbItem} = Breadcrumb;
  
class Customer extends Component{
    
    render(){
        return(
            <Layout>
                <Content>
                <h3>Customer</h3>
                <DataAnalyticsRow/>
                <MaskChart/>
            <SupervisedTable/>
                </Content>
            </Layout>
            
        )
    }
}
export default withRouter(Customer);