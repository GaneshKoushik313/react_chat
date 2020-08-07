import React from "react"
// import { connect } from 'react-redux'
// import { sidebar } from '../redux'
import cookie from 'react-cookies'
import ".././css/sidebar.css"

function ActionSidebar(props) {
    let logout = async () => {
        localStorage.removeItem('store_user')
        cookie.remove('Token', { path: '/' })
        window.location.href = "/login" 
    }
    return(
        <aside className="sidebar h-100">
            <div className="dropdown">
                <div className="pt-4" data-toggle="dropdown">
                    <img src="/images/person.svg" alt="" className="w-60 pointer" />
                </div>
                <ul className="dropdown-menu ml-10">
                    <li className="pointer p-3 br-bottom" onClick={props.infoUser}>
                        <span className="whiteSpace">View Profile</span>
                    </li>
                    < li onClick={logout} className = "pointer p-3">
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div onClick={props.messageVisibility} className="mt-12 chat-icons" title="Messages">
                <i className="icon icon-message text-white fs-20"></i>
            </div>
            <div onClick={props.contactVisibility} className="mt-6 chat-icons" title="Contacts">
                <i className="icon icon-contacts text-white fs-20"></i>
            </div>
            <div onClick={props.groupVisibility} className="mt-6 chat-icons" title="Groups">
                <i className="icon icon-people text-white fs-20"></i>
            </div>
            <div onClick={props.createContact} className="mt-6 chat-icons" title="Create Contact">
                <i className="icon icon-plus text-white fs-20"></i>
            </div>
            <div onClick={props.addMembers} className="mt-6 chat-icons" title="New Group">
                <i className="icon icon-group text-white fs-20"></i>
            </div>
        </aside>
    )
}

// const mapStateToProps = state => {
//     return {
//         showContact: state.side.showContact
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         sidebar: () => dispatch(sidebar())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ActionSidebar)
export default ActionSidebar