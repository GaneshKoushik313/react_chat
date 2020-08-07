import React,{useState,useEffect} from "react"
import axios from "axios";
import ".././css/animation.css"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function CreateGroup(props){
    const [user, setUser] = useState("")
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('store_user')))
    }, [])
    const [grpImage,setImage] = useState({preview:'/images/group.png',raw:''})
    const [group, setGroup] = useState({
        name: '',
        status: '',
    })
    let groups = {
        group_pic: grpImage.preview,
        name: group.name,
        status: group.status,
        members: props.members,
        created_by: user.user_name
    }
    let photoUpload = async (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            setImage({
                preview: reader.result,
                raw: file
            });
        }
        reader.readAsDataURL(file);
    }
    let saveGroup = async () => {
        try {
            const {
                data
            } = await axios({
                method: 'post', //you can set what request you want to be
                url: `chat/group/create`,
                data: groups,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            props.onCloseGroup();
            // run some validation before returning
            return data;
        } catch (e) {
            console.log(e);
            return console.log('Error')
        }
    }
    return(
        <div>
            <Modal open={props.openGroup} classNames={{animationIn: 'customEnterAnimation',animationOut: 'customLeaveAnimation'}}animationDuration={500} center>
                <div className="modal-title">
                    <div>
                        <h5>Create Group</h5>
                        <span onClick={props.onCloseGroup}>
                            <i className="icon icon-close-outline pointer"></i>
                        </span>
                    </div>
                </div>
                <div className="modal-body">
                    <form>
                        <div dir="ltr" className="mt-5 d-flex justify-content-center">
                            <label htmlFor="photo-upload" className="custom-file-upload fas">
                                <div className="img-wrap img-upload" >
                                    <img alt="" htmlFor="photo-upload" src={grpImage.preview}/>
                                    <i className = "icon icon-camera"></i>
                                </div>
                                <input id="photo-upload" type="file" onChange={photoUpload}/> 
                            </label>
                        </div>
                        <div className="col-lg-12 mb-4">
                            <div className="form-group mb-1 pt-0">
                                <label className="text-left d-block fs-14">Group Name</label>
                                <input className="form-control" value={group.name} onChange={e => setGroup({...group,name: e.target.value })} placeholder="Enter Group Name" type="text" />
                            </div>
                        </div>
                        <div className="col-lg-12 mb-4 mt-0">
                            <div className="form-group mb-1 pt-0">
                                <label className="text-left d-block fs-14">Group Status</label>
                                <textarea className="form-control" value={group.status} onChange={e => setGroup({...group,status: e.target.value })} placeholder="Enter Group Status" />
                            </div>
                        </div>
                        <div className="footer-actions mt-4 d-block mb-5">
                            <button type="button" className="btn btn-success btn-smm ml-4" onClick={saveGroup}>CREATE</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default CreateGroup