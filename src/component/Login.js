import React from 'react';
import axios from "axios"
import { Button ,} from 'reactstrap';
import { Col,Form, FormGroup, Label, Input, } from 'reactstrap';
import { BrowserRouter as Router, Redirect } from "react-router-dom";

export default class Login extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            redirect: false
        }
    }

    handleChange = (e) =>{
        let target =e.target;
        let value = target.value;
        let name = target.name;
   
        this.setState({
            [name]:value
        })
    }
 
    handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.set("email",this.state.email)
        formData.set("password",this.state.password)
        axios({
            method:'POST',
            url:"http://localhost:5000/api/v1/users/login",
            data:formData,
            config: {headers : {'Content-Type':'multipart/form-data'}}
        }).then(result=>{
            if(result.data.status){
                console.log(result);
                localStorage.setItem("jwt-token",result.data.access_token)
                this.setState({redirect:true})
            }
        })
    }


    render(){
        if(this.state.redirect){
            return(
                <Redirect to="/"/>
            )
        }
        return(
            <div class="signup">
        
        <Form onSubmit={this.handleSubmit} class="">
            <h2 class="signup-text">Log In</h2>
        
            <FormGroup class="testing">
            <Col sm={20}>
            <Label>Email</Label>
            <Input name="email" type="email" placeholder="Email" onChange={this.handleChange}></Input>
            </Col>
            </FormGroup>

            <FormGroup class="testing">
            <Col sm={20}>
            <Label>Password</Label>
            <Input name="password" type="password" placeholder="Password" onChange={this.handleChange}></Input>
            </Col>
            </FormGroup>

            <FormGroup check row >
            <Col sm={{ size: 10, offset: 3 }}>
            { this.state.email && this.state.password ?
            <Button type="submit">Sign In</Button>:
            <Button type="submit" disabled>Sign In</Button>
            }
            </Col>
            </FormGroup>
            <Col sm={{ size: 40, offset: 0 }}>
            <Router>
            <a href="/signup">Dont Have An Account?  Click Here</a>
            </Router>
            </Col>
        </Form>
    </div>
        )
    }
    
}