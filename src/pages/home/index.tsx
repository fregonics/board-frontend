import React, { useEffect, useState } from 'react'
import apiConnection from '../../api/apiConnection'
import './styles.css'
import { History } from 'history'

interface User {
    id: number;
    email: string;
    created_at: string;
    updated_at: string;
}

type Props = {
    history: History;
}

const Home: React.FC<Props> = ({history}) => {

    const [input, setInput] = useState<string>()
    const [user, setUser] = useState<User>()

    async function logInUser() {
        const response = await apiConnection.post('/user', {email: input})
        const data = response.data
        history.push("/messages",data) 
    }

    function enterButtonClick() {
        logInUser()
    }

    return (
        <div className="container">
            <h1>msgBoard</h1>
            <div className="content">
                <input 
                    type="email" 
                    name="email" 
                    id="email-field"
                    onChange={e => {setInput(e.target.value)}}/>
                <button onClick={enterButtonClick}>Entrar</button>
            </div>
        </div>
    )
}

export default Home;