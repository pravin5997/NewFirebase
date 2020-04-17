import React, { Component } from 'react'
import {Table,Card, Row, Col,Button} from 'react-bootstrap'
import fire from './config/Fire'

export default class AdminTable extends Component {
    constructor(props){
        super(props)
        this.state = {
                UserTableData : []
        }
    }
    componentDidMount (){
        
       fire.database().ref("userTableData").once("value")
       .then((snapshot) =>{
         const userObect = snapshot.val()
         const myTableData = []
        for (let i in userObect){
            
            for (let j in userObect[i]){
                myTableData.push( userObect[i][j])
            }
            this.setState({UserTableData:myTableData})
        }
         
       })
    }

    render() {
        console.log(this.state.UserTableData)
        return (
            <div className="container">
                <Row style={{margin:"0px"}}>
                    <Col md={12} style={{}}>
                <Card style={{padding:"0px",border:"none",backgroundColor:"transparent"}}>
                <Card.Body>
                <Table  responsive style={{boxShadow:"1px 2px 3px rgba(0, 0, 0, 0.125)"}}>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Leave Type</th>
                                <th>Number Of Leave</th>
                                <th>Leave Apply Date</th>
                                <th>Leave Start Date</th>
                                <th>Leave End Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody> 
                        {this.state.UserTableData.map((item,index)=>(
                                
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.userName}</td>
                                        <td>{item.leave_type}</td>
                                        <td>{item.numberOfLeaves}</td>
                                        <td>{item.applyDate}</td>
                                        <td>{item.fromDate}</td>
                                        <td>{item.toDate}</td>
                                        <td>
                                            <Button variant="info" type="button" style={{marginRight:"10px"}}>Accept</Button>
                                            <Button variant="danger" type="button">Reject</Button>
                                        </td>
                                    </tr>
                                )
                            )}
                          
                        </tbody>
                </Table>
                </Card.Body>
                </Card>
                </Col>
                </Row>
            </div>
        )
    }
}
