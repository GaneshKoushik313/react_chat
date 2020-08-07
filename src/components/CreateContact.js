import React,{useState} from "react"
import Select from 'react-select'
import axios from "axios";
import countryList from 'react-select-country-list'
import ".././css/animation.css"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function CreateContact(props){
    const [country, setCountry] = useState()
    const [contact, setContact] = useState({
        name: '',
        phone: 0,
        email: '',
        country: country
    })
    let saveContact = async () => {
        try {
            const {
                data
            } = await axios({
                method: 'post', //you can set what request you want to be
                url: `chat/contact/create`,
                data: contact,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            props.onCloseModal();
            // run some validation before returning
            return data;
        } catch (e) {
            console.log(e);
            return console.log('Error')
        }
    }

    let countries = countryList().getData()
    let country_name = ''
    let changeCountry = value => {
        setCountry(value)
        country_name = value
        setContact({ ...contact, country:country_name.label})
    }
    return(
        <div>
            <Modal open={props.open} classNames={{animationIn: 'customEnterAnimation',animationOut: 'customLeaveAnimation'}}animationDuration={500} center>
                <div className="modal-title">
                    <div>
                        <h5>Create Contact</h5>
                        <span onClick={props.onCloseModal}>
                            <i className="icon icon-close-outline pointer"></i>
                        </span>
                    </div>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="col-lg-12">
                            <div className="form-group mb-1 pt-0">
                                <label className="text-left d-block fs-14">Name</label>
                                <input value={contact.name} onChange={e => setContact({...contact,name: e.target.value })} className="form-control" placeholder="Enter Name" type="text" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group mb-1">
                                <label className="text-left d-block fs-14">Mobile No</label>
                                <input value={contact.phone} onChange={e => setContact({...contact,phone: e.target.value })} className="form-control" placeholder="Enter Mobile Number" type="number" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group mb-1">
                                <label className="text-left d-block fs-14">Email Address</label>
                                <input value={contact.email} onChange={e => setContact({...contact,email: e.target.value })} className="form-control" placeholder="Enter Email Address" type="text" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group mb-4">
                                <label className="text-left d-block fs-14">Country</label>
                                <Select options={countries} value={country} onChange={changeCountry} placeholder="Select Country"/>
                            </div>    
                        </div>
                        <div className="footer-actions mt-4 d-block mb-4">
                            <button onClick={saveContact} type="button" className="btn btn-success btn-smm ml-4">SAVE</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default CreateContact