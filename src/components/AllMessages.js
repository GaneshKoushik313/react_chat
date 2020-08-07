import React from "react"
import ".././css/allmessages.css"

function AllMessages(){
    return(
        <div className="messages-list">
            <div className="search-heading">
                <div className="ml-3 mr-3 pb-1 mb-4 form-group">
                    <span className="search-magnify">
                        <i className="icon icon-magnify"></i>
                    </span>
                    <input className="search-bar" type="text" placeholder="Search ...." />
                </div>
            </div>
            <div className="p-r" style={{top: 72 + 'px'}}>
                <div className="previous-messages">
                    <div className="d-flex align-items-center ml-3 mt-3">
                        <div className="d-flex align-items-center mt-1">
                            <img alt="" src="/images/person.svg" className="message-contact" />
                            <div className="col text-left">
                                <div className="font-weight-bold">Ganesh Koushik</div>
                                <div>8892770540</div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>   
        </div>
    )
}
export default AllMessages