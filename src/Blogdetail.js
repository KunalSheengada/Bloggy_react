import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

function Blogdetail() {
    const params = useParams()
    const [blog, setBlog] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    const [id, setId] = useState(params.id);
    const navigate = useNavigate();

    const deleteBlog = (bid) => {
        console.log(bid);
        axios.delete(`http://127.0.0.1:3000/blogs/Blogdetail/${bid}`, {
            id: bid,
        }).then(() => {
            navigate("/");
        });

    };
    useEffect(() => {
        const getBlog = async () => {
            const response = await fetch(`http://127.0.0.1:3000/blogs/${id}`);
            const result = await response.json();
            console.log(result);
            if (response.ok) {
                setBlog(result);
            } else {
                setErrorMessage(result.message);
            }
        }
        getBlog();
    }, [])
    return (
        <>
            <Navbar />
            {blog &&
                <div className="blogdetail container">
                    <div className="card mb-3">
                        <img className="card-img-top" src={blog.image_url} alt="Card" />
                        <div className="card-body">
                            <h3 className="card-title">{blog.title}</h3>
                            {/* <h5 className="card-title">Author :&nbsp;{blog.title}</h5> */}
                            {/* <h3>Description :</h3> */}
                            <p className="card-title">{blog.descp}</p>
                        </div>
                    </div>
                    <Link to={`/Editblog/${id}`}>
                        <button type="button" className="btn btn-warning m-3">
                            Edit
                        </button>
                    </Link>
                    <button type="button" onClick={() => deleteBlog(blog.id)} className="btn btn-danger">Delete</button>
                </div>
            }
        </>
    )
}
export default Blogdetail;