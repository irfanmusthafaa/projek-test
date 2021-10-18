import React, { Component } from 'react'
import axios from 'axios'

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            username: "",
            password:"",
        }
    }

    render() {
        const { email, username, password} = this.state;

        return (
            <header className="App-header">
                <h1>Form Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter your email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}   //untuk class handleInputChange
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="email">Username</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter your username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}   //untuk class handleInputChange
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="email">Password</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}   //untuk class handleInputChange
                    />
                    </div>

                    <button type="submit" onClick={this.onSubmit} href="/login" className="mt-5 mr-5 btn btn-primary">Register</button>
                </form>

                
            </header>
        )

    }

    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit= (e) => {
        e.preventDefault()

        let values = this.state
        console.log(values.email)

    }

    onSubmit=(e)=>{
        e.preventDefault()
        let values = this.state
        console.log(values.email)

        let data ={
          email: this.state.email,
          username: this.state.username,
          password: this.state.password
        }
        axios.post('http://18.139.50.74:8080/register',data)
        .then((res)=>{
            alert("Berhasil Login")
          console.log(res)
        }).catch((err)=>{
          console.log(err)
        })
      }


}
