import React,{useState,useEffect} from "react"
import ".././css/allmessages.css"
import axios from "axios";

function Contacts(){
    const [persons,setPersons] = useState("")
    const [search,setSearch] = useState()
    

    useEffect(() => {
        saveContact()
    },[])

    let saveContact = async () => {
        try {
            axios.get(`chat/contacts`)
                .then(res => {setPersons(res.data);
                    console.log(persons)
                })
        } catch (e) {
            console.log(e);
            return console.log('Error')
        }
    }

    let searchContact = async (value) => {
        setSearch(value.name)
        saveContact(value.name)
    }
    return(
        <div className="messages-list">
            <div className="search-heading">
                <div className="ml-3 mr-3 pb-1 mb-4 form-group">
                    <span className="search-magnify">
                        <i className="icon icon-magnify"></i>
                    </span>
                    <input className="search-bar" value={search} onInput={searchContact} type="text" placeholder="Search Contacts ...." />
                </div>
            </div>
            <div className="p-r" style={{top: 72 + 'px'}}>
                {
                    persons && persons.map((value, index) => {
                        return  <div className = "previous-messages" key = {index}>
                                    <div className="d-flex align-items-center ml-3 mt-3">
                                        <div className="d-flex align-items-center mt-1">
                                            <img alt="" src="/images/person.svg" className="message-contact" />
                                            <div className="col text-left">
                                                <div className="font-weight-bold">{value.name}</div>
                                                <div>{value.phone}</div>
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