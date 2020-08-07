import React,{useEffect,useState} from "react"
import ".././css/allmessages.css"
import axios from "axios";

function UserInfo(){
    const [user,setUser] = useState("")
     const [userImage,setImage] = useState({preview:'/images/person.svg',raw:''})
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('store_user')))
    },[])
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
        try {
            const {
                data
            } = await axios({
                method: 'post', //you can set what request you want to be
                url: `chat/user/profile_pic`,
                data: {
                    user_image: userImage.preview,
                    user_id: user.user_id
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return data;
        } catch (e) {
            console.log(e);
            return console.log('Error')
        }
    }
    return(
        <div className="messages-list">
            <div className="search-heading pt-3 pb-3 pl-3">
                <h5 className="font-weight-bold mt-2">User Profile</h5>
            </div>
            <div className="mt-22">
                <div dir="ltr" className="mt-5 d-flex justify-content-center">
                    <label htmlFor="photo-upload" className="custom-file-upload fas">
                        <div className="img-wrap img-upload" >
                            <img alt="" htmlFor="photo-upload" src={userImage.preview}/>
                            <i className = "icon icon-camera"></i>
                        </div>
                        <input id="photo-upload" type="file" onChange={photoUpload}/> 
                    </label>
                </div>
            </div>
            <hr className="mt-4" />
            <div className="ml-3 mt-3">
                <h6 className="text-left font-weight-bold">Name</h6>
                <div className="text-left">{user.user_name}</div>
            </div>
            <hr />
            <div className="ml-3 mt-3">
                <h6 className="text-left font-weight-bold">Phone Number</h6>
                <div className="text-left">{user.user_phone}</div>
            </div>
            <hr />
        </div>
    )
}
export default UserInfo