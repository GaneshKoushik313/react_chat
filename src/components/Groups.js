import React,{useState,useEffect} from "react"
import ".././css/allmessages.css"
import axios from "axios";

function Contacts(){
    const [groups, setGroups] = useState("")
    const [users, setUsers] = useState("")

    useEffect(() => {
        getGroups()
        getUsers()
    }, [])

    let getGroups = async () => {
        try {
            axios.get(`chat/groups`)
                .then(res => {
                    setGroups(res.data);
                    console.log(...groups)
                })
        } catch (e) {
            console.log(e);
            return console.log('Error')
        }
    }
    let getUsers = async () => {
        try {
            axios.get(`chat/users`)
                .then(res => {
                    setUsers(res.data);
                    console.log(...users)
                })
        } catch (e) {
            console.log(e);
            return console.log('Error')
        }
    }
    return(
        <div className="messages-list">
            <div className="search-heading">
                <div className="ml-3 mr-3 pb-1 mb-4 form-group">
                    <span className="search-magnify">
                        <i className="icon icon-magnify"></i>
                    </span>
                    <input className="search-bar" type="text" placeholder="Search Groups ...." />
                </div>
            </div>
            <div className="p-r" style={{top: 72 + 'px'}}>
                {
                    groups && groups.map((value, index) => {
                        return  <div className = "previous-messages" key = {index}>
                                    <div className="d-flex align-items-center ml-3 mt-3">
                                        <div className="d-flex align-items-center mt-1">
                                            <img alt="" src={value.group_pic} className="message-contact avatar" />
                                            <div className="col text-left">
                                                <div className="font-weight-bold">{value.name}</div>
                                                <div>Created By {value.created_by}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    })
                }  
            </div>
        </div>
    )
}
export default Contacts