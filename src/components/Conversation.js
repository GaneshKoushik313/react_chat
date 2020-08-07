import React from "react"
import ".././css/conversation.css"

function Conversation(){
    return(
        < div className="conversation">
            <header className = "conversation-heading"> Conversation Messages </header>
            <div className="conversation-details p-7">
                <div className="conversation-messages-client row">
                    <div className="client-conversation ml-2">
                        <img alt="" src="/images/person.svg" className="avatar"></img>
                        <span className="ml-2">I’m having breakfast right now, can’t you wait for 10 minutes?</span>
                        <span className="d-block text-right text-light-black fs-12">20 Apr 16 15:14</span>
                    </div>
                </div>
                <div className="conversation-messages-user row">
                    <div className="user-conversation ml-2">
                        <span className="mr-2">I’m having breakfast right now, can’t you wait for 10 minutes?</span>
                        <img alt="" src="/images/person.svg" className="avatar"></img>
                        <span className="d-block text-right text-light-black fs-12">20 Apr 16 15:14</span>
                    </div>
                </div>
            </div>
            <footer className = "conversation-footer d-flex align-items-center pl-4">
                <input type="text" placeholder="Enter Message"></input> 
                <span className="pointer">
                    <i className="icon icon-send ml-3"></i>
                </span>
            </footer>
        </div>
    )
}

export default Conversation