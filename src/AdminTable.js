import React, { Component } from 'react'
import {Table,Card, Row, Col} from 'react-bootstrap'

export default class AdminTable extends Component {
    render() {
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
                            <tr>
                            <td>1</td>
                            <td>Sick Leave</td>
                            <td>05/04/2020</td>
                            <td>hitesh123@gmail.com</td>
                            <td>06/04/2020</td>
                            <td>Pandding</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Casual Leave</td>
                            <td>05/04/2020</td>
                            <td>gunjan12@gmail.com</td>
                            <td>06/04/2020</td>
                            <td>Activated</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Vacation Leave</td>
                            <td>05/04/2020</td>
                            <td>kunal12@gmail.com</td>
                            <td>06/04/2020</td>
                            <td>Pandding</td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>Study Leave</td>
                            <td>05/04/2020</td>
                            <td>jay123@gmail.com</td>
                            <td>06/04/2020</td>
                            <td>Activated</td>
                            </tr>
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