import React, { Component } from 'react'
import {Table,Card, Row, Col} from 'react-bootstrap'

export default class UserTable extends Component {
    render() {
        return (
            <div className ="App" style={{marginTop:"20px"}}>
                <Row style={{margin:"0px"}}>
                    <Col>
                <Card>
                <Table  responsive striped bordered hover variant="dark">
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
                </Card>
                </Col>
                </Row>
            </div>
        )
    }
}
