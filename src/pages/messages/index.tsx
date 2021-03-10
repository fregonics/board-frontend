import React, { useEffect, useState } from 'react'
import { History, Location } from 'history'
import apiConnection from '../../api/apiConnection'
import MsgBox from '../../components/MsgBox'

type User = {
    id: number;
    email: string;
    created_at: string;
    updated_at: string;
}

type Message = {
    id: number,
    user_id: number,
    content: string;
    created_at: Date;
    updated_at: Date;
}

type Props = {
    history: History;
    location: any;
}

const Messages: React.FC<Props> = ({history, location}) => {
    
    const [user, setUser] = useState<User>()
    const [userEmail, setUserEmail] = useState<string>('')
    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        const u: User = location.state
        setUser(u)

        loadMessages()

        getUserEmail()
    })

    function getUserEmail() {
        if (!user) return setUserEmail('no user found')
        else return setUserEmail(user.email)
    }

    async function loadMessages() {
        const response = await apiConnection.get('/message')
        const msgsResult: Message[] = response.data
        setMessages(msgsResult)
    }

    return (
        <div className="panel">
            <h1>msgBoard</h1>
            <div className="messages-container">
                {messages.map((msg) => {
                    return (<MsgBox content={msg.content} 
                                    createdAt={msg.created_at} /> )
                })}
            </div>
        </div>
        
    );
}

export default Messages;