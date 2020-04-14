import React, { Component } from 'react'
import {Button,Form, Row,Col} from 'react-bootstrap'
import fire from './config/Fire'

export default class AddAdmin extends Component {
    constructor(props){
        super(props)
        this.state = {
            dropDown:"",
            AddAdminData:[]
        }

    }
    onChangeHandle = (event) =>{
        this.setState({[event.target.name]:event.target.value})
    }
    componentDidMount () {
        const userRef = fire.database().ref("user");
      userRef.on("value",(snapshot)=>{
        let users = snapshot.val()
        console.log(users)
        let finaldata = []
        for (let i in users){
            finaldata.push(users[i].firstName)

        }
        this.setState({AddAdminData:finaldata})
    });
}
    render() {
      
        return (
            
            <div className="auth-inner" style={{minHeight:"200px",width:"25%"}} >   
                <Form>
                <Form.Group>
                    <Form.Label>Add Admin</Form.Label>
                    <Form.Control as="select" value={this.state.dropDown} name="dropDown" onChange={this.onChangeHandle}>
                    <option>---Select---</option> 
                    {this.state.AddAdminData.map((item,index)=>(
                        <option key={index}>{item}</option>
                    ))}
                    </Form.Control>
                </Form.Group>
                <Button type="button" style={{float:"right"}}>Add</Button>
                </Form>
                
            </div>
            
        )
    }
}
