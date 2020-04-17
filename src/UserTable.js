import React, { Component } from 'react'
import {Table,Card, Row, Col} from 'react-bootstrap'
import fire from './config/Fire'

export default class UserTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            userData:[],
            
        }
    }
    componentDidMount (){
        fire.auth().onAuthStateChanged((user)=>{
            const uid = user.uid;
        fire.database().ref("/userData/"+ uid).once("value")
       .then((snapshot) =>{
            const userObject = snapshot.val();
            console.log(userObject)
            const mainData = []
       for (var j in userObject){
           mainData.push(userObject[j])
       }
       this.setState({userData:mainData})
        })
    })
}
    render() {
        console.log(this.state.userData)
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
                                <th>Leave Type</th>
                                <th>Leave Apply Date</th>
                                <th>Approved by</th>
                                <th>Approved Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody> 
                        {this.state.userData.map((item,index)=>(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.leave_type}</td>
                                <td>{item.applyDate}</td>
                                <td>{item.adminEmail}</td>
                                <td>{item.ApprovedDate}</td>
                                <td style={{color:"red"}}>{item.Status}</td>
                            </tr>
                        ))}
                            

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
