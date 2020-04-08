import React, { Component } from 'react'
import fire from './config/Fire'
import {Table} from 'react-bootstrap'

export default class Practice extends Component {
    constructor(props){
        super(props)
        this.state ={
            userData:[]
            
        }
    }

    componentDidMount () {
        const userDataref = fire.database().ref("userData");
        userDataref.on("value", (snapshot)=>{
            let userData = snapshot.val();
            
            let myUserData = [];
            for (let myData in userData)
            {
                myUserData.push({
                    id:myData,
                    firstName:userData[myData].firstName,
                    lastName:userData[myData].lastName,
                    emailId:userData[myData].email,
                    password:userData[myData].password
                });
            }
            this.setState({
                userData:myUserData
            });
        });

    }

    render() {
        console.log(this.state.userData)
        return (
            <div>
                
                    <Table striped bordered hover variant="dark">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>EmailId</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.userData.map((item,index) =>(
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.emailId}</td>
                        <td>{item.password}</td>
                      </tr>
                       ))}
                    </tbody>
                  </Table>
                   
               
            </div>
        )
    }
}
