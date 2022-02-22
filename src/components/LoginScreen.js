import React from 'react'
import { useState } from 'react'
import './LoginScreen.css';

function LoginScreen() {

    const [username, setUsername] = useState();
    const [password, setpassword] = useState();

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setpassword(e.target.value)
    }

    const submitValue = () => {

    }

    return (
        <div className="">
            <div className="container">
                <div className="form">
                    <form>
                        <div className="input-container">
                            <label>Username </label>
                            <input type="text" onChange={(e) => { handleUsername(e) }} />
                        </div>
                        <div className="input-container">
                            <label>Password </label>
                            <input type="text" onChange={(e) => { handlePassword(e) }} />
                        </div>
                        <button className='greenButton' onClick={submitValue}>submit</button>
                    </form>
                </div>
            </div>


            <h1> the username is {username} and password is {password}</h1>
        </div>

    )
}

export default LoginScreen
