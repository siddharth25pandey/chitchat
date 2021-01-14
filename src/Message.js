import { CardContent, Typography,Card} from '@material-ui/core';
import React from 'react';
import './Message.css';
function Message({message,username}) {
    const isUser = username === message.username;
    return ( 
        <Card  className={`message ${isUser && "message_user"}`}>
            <CardContent className={isUser ? "message_user_card":"message_guest_card"}>
                <Typography
                    color="white"
                    variant="h5"
                    component="h2">
                        {!isUser && `${message.username}:`} {message.message}
                </Typography> 
            </CardContent>
        </Card>
        
        
    )
}

export default Message