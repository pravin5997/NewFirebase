import React, { Component } from 'react'
import {Button,Form, Row,Col} from 'react-bootstrap'
import fire from './config/Fire'
import { Multiselect } from 'multiselect-react-dropdown';

export default class AddAdmin extends Component {
    constructor(props){
        super(props)
        this.state = {
            dropDown:"",
            AddAdminData:[],
            allData:[],
            AddAdminAllData:[]
        }

    }
    onChangeHandle = (event) =>{
        this.setState({[event.target.name]:event.target.value})
    }
    componentDidMount () {
        const userRef = fire.database().ref("user");
      userRef.on("value",(snapshot)=>{
        let users = snapshot.val()
        
        const finaldata = []
        const myAllData=[]
        for (let i in users){
            finaldata.push(users[i].firstName)
            myAllData.push(users[i])
        }
        this.setState({AddAdminData:finaldata,allData:myAllData})
    });
}
    multiChange = (selectedData) =>{
       this.setState({AddAdminAllData: selectedData})
    }
    onClickAdd = () =>{
        const AdminRef = fire.database().ref("AddAdmin")
        const data = this.state.AddAdminAllData
        AdminRef.set(data)
    }
    render() {
      console.log(this.state.AddAdminAllData)
        return (
            
            <div className="auth-inner" style={{minHeight:"200px",width:"25%"}} >   
                <Form>
                <Form.Group>
                    <Form.Label>Add Admin</Form.Label>
                    {/* <Form.Control as="select" value={this.state.dropDown} name="dropDown" onChange={this.onChangeHandle}>
                    <option>---Select---</option> 
                    {this.state.AddAdminData.map((item,index)=>(
                        <option key={index}>{item}</option>
                    ))}
                    </Form.Control> */}
                     <Multiselect
                        options={this.state.allData}
                        onSelect = {this.multiChange}
                        displayValue="firstName"
                       
                    />
                </Form.Group>
               
                <Button type="button" style={{float:"right"}} onClick={this.onClickAdd}>Add</Button>
                </Form>
                
            </div>
            
        )
    }
}
