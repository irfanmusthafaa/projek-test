import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password:"",
        }
    }

    render() {
        const { username, password} = this.state;

        return (
            <header className="App-header">
                <h1>Form Login</h1>
                <form onSubmit={this.handleSubmit}>

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

                    <button type="submit" onClick={this.onSubmit} className="mt-5 btn btn-primary">Login</button>
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

        let data ={
          username: this.state.username,
          password: this.state.password
        }
        axios.post('http://18.139.50.74:8080/login',data)
        .then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log(err)
        })
      }


}
