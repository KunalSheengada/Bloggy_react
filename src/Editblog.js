import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

function Editblog() {
    const params = useParams()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [blogImage, setBlogimage] = useState('');
    const [id, setId] = useState(params.id);
    const [blogs, setBlog] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

    const getBlog = async () => {
        const url = `http://127.0.0.1:3000/blogs/${id}`;
        const response = await fetch(url);
        const responseJson = await response.json();
        if (response.ok) {
            setTitle(responseJson.title);
            setDescription(responseJson.descp);
            setImageUrl(responseJson.image_url)
        }
        else {
            alert("Check")
        }
    };

    useEffect(() => {
        getBlog();
    }, []);

    let update = () => {
        axios.put(`http://127.0.0.1:3000/blogs/Editblog/${id}`, {
            title: title,
            descp: description,
            image_url: imageUrl,
        }).then(() => {
            navigate("/");
        });
    }
    return (
        <>
            <Navbar />
            <h1 className="text-center heading">Edit your Blog</h1>
            <div className="blogdetail container">
                <div className="card mb-3 addBlog">
                    <div className="blog-title">
                        <label>Title</label>
                        <br></br>
                        <input onChange={(e) => setTitle(e.target.value)} value={title} id='blog-title' type="text" className="blog-input" />
                    </div>
                    <div className="blog-descp">
                        <label>Description</label>
                        <br></br>
                        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="desc-text blog-input" id="desc"></textarea>
                    </div>
                    <input onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} placeholder="Enter your image URL" className="form-control update" />
                    {/* //  <input type="file" className="form-control update" id="customFile" /> */}
                    <button type="button" onClick={() => update()} className="btn btn-outline-success m-2">Update Blog</button>
                </div>
            </div>
        </>
    );
}
export default Editblog