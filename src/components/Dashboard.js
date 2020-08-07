import React,{useState} from "react"
import { connect } from 'react-redux'
import ActionSidebar from "./ActionSidebar"
import ".././css/dashboard.css"
import AllMessages from "./AllMessages"
import Contacts from "./Contacts"
import Groups from "./Groups"
import Conversation from "./Conversation"
import CreateContact from "./CreateContact"
import GroupParticipants from "./GroupParticipants"
import CreateGroup from "./CreateGroup"
import UserInfo from "./UserInfo"

function Dashboard(){
    const [isMessages, setMessages] = useState(true)
    const [isContacts, setContacts] = useState(false)
    const [isGroups, setGroups] = useState(false)
    const [isParticipants, setParticipants] = useState(false)
    const [open, setOpen] = useState(false)
    const [openGroup, setOpenGroup] = useState(false)
    const [userInfo, setUserInfo] = useState(false)
    const [list, setList] = useState([])

    let messageVisibility = async (e) => {
        setMessages(true);
        setContacts(false);
        setGroups(false);
        setParticipants(false);
        setUserInfo(false);
    }
    let contactVisibility = async (e) => {
        setContacts(true);
        setMessages(false);
        setGroups(false);
        setParticipants(false);
        setUserInfo(false);
    }
    let groupVisibility = async (e) => {
        setGroups(true);
        setMessages(false);
        setContacts(false);
        setParticipants(false);
        setUserInfo(false);
    }
    let createContact = async (e) => {
        setOpen(true);
    }
    let addParticipants = async (e) => {
        setParticipants(true);
        setGroups(false);
        setMessages(false);
        setContacts(false);
        setUserInfo(false);
    }
    let onCloseModal = async (e) => {
        setOpen(false);
    }
    let NewGroup = async (members) => {
        console.log(members)
        setList(members)
        setOpenGroup(true);
    }
    let infoUser = async (e) => {
        setUserInfo(true);
        setParticipants(false);
        setGroups(false);
        setMessages(false);
        setContacts(false);
    }
    let onCloseGroup = async (e) => {
        setOpenGroup(false);
    }
    
    return(
        <div className="wrapper d-flex h-100">
            <ActionSidebar infoUser={infoUser} addMembers={addParticipants} createContact={createContact} messageVisibility={messageVisibility} contactVisibility={contactVisibility} groupVisibility={groupVisibility}></ActionSidebar>
            <div className="w-100 d-flex">
                {
                    isMessages ? < AllMessages /> : null
                }
                {
                    isContacts ? < Contacts /> : null
                }
                {
                    isGroups ? < Groups /> : null
                }
                {
                    isParticipants ? < GroupParticipants NewGroup={NewGroup} /> : null
                }
                {
                    userInfo ? <UserInfo /> : null
                }
                <Conversation></Conversation>
            </div>
            {
                open ? <CreateContact onCloseModal={onCloseModal} open={open} /> : null
            }
            {
                openGroup ? <CreateGroup onCloseGroup={onCloseGroup} members={list}  openGroup={openGroup} /> : null
            }    
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         showContact: state.side.showContact
//     }
// }

// export default connect(mapStateToProps)(Dashboard)
export default Dashboard