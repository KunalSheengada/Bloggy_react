import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Signup() {
    const [user_email, setUseremail] = useState('');
    const [user_name, setUsername] = useState('');
    const [user_password, setUserpassword] = useState('');
    const navigate = useNavigate();

    let signup=()=>{
        if(user_email !== "" && user_password !== '' && user_name !== ""){
            axios.post("http://127.0.0.1:3000/users/signup",{

                user_name: user_name,
                user_email: user_email,
                user_password: user_password
                
            } ).then(()=>{
            navigate("/");
        })
        }else {
            alert("All fields are required!")
        }
        
    }
    return (
        <>
            <div className="login-form">
            <h2 className="text-center m-2 text-white ">Sign Up Form</h2>
                <div className="login-content">
                    <form>
                    <div className="form-group m-3">
                            <input type="text" onChange={(e) => setUsername(e.target.value)} required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" />
                        </div>
                        <div className="form-group m-3">
                            <input type="email" onChange={(e) => setUseremail(e.target.value)} required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group m-3">
                            <input type="password" className="form-control" required id="exampleInputPassword1" onChange={(e) => setUserpassword(e.target.value)}placeholder="Set Your Password" />
                        </div>
                        <Link className="nav-links" to={`/Login`}>
                        <button type="submit" className="btn btn-primary m-4" onClick={() => signup()}>Sign up</button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Signup