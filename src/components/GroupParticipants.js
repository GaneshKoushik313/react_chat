import React,{useState,useEffect} from "react"
import ".././css/allmessages.css"
import axios from "axios";

function GroupParticipants(props){

    const [persons, setPersons] = useState()
    const [search, setSearch] = useState()
    const [members, setMembers] = useState([])


    useEffect(() => {
        saveContact()
    }, [])

    let saveContact = async () => {
        try {
            axios.get(`chat/contacts`)
                .then(res => {
                    setPersons(res.data);
                    console.log(persons)
                })
        } catch (e) {
            console.log(e);
            return console.log('Error')
        }
    }

    let searchContact = async (value) => {
        setSearch(value)
        saveContact(value)
    }

    let selectContact = async (event) => {
        if(members.find(x => x === event.target.value)){
            let participant = event.target.value
            setMembers(members.filter((event) => (event !== participant)))
            console.log('splice', members)
        }
        else{
            let participant = event.target.value
            setMembers([...members, participant]);
            console.log('insert', members)
        }
    }

    let createGroup = async (e) => {
        props.NewGroup(members)
    }

    return(
        <div className="messages-list">
            <div className="search-heading">
                <div className="ml-3 mr-3 pb-1 mb-4 form-group">
                    <span className="search-magnify">
                        <i className="icon icon-magnify"></i>
                    </span>
                    <input className="search-bar" type="text" placeholder="Search Participants ...." />
                </div>
            </div>
            <div className="p-r" style={{top: 72 + 'px'}}>
                {
                    persons && persons.map((person, index) => {
                        return  <div className = "previous-messages" key = {index}>
                                    <div className="d-flex justify-content-between align-items-center ml-3 mt-3 mr-3">
                                        <div className="d-flex mb-4 align-items-center">
                                            <img alt="" src="/images/person.svg" className="message-contact" />
                                            <div onClick={props.NewGroup} className="col text-left">
                                                <div className="font-weight-bold">{person.name}</div>
                                                <div>{person.phone}</div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="form-check-label p-r mb-4">
                                                <input value={person._id} onChange={(e) => selectContact(e)} type="checkbox" className="form-check-input" /> 
                                                <span className="checkbox-icon mt-1"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>  
                    })
                }                    
            </div> 
            {
                members.length>0 && 
                <div className="check-group" onClick={createGroup}>
                    <i className="icon icon-check-circle"></i>
                </div>
            }   
        </div>
    )
}
export default GroupParticipants