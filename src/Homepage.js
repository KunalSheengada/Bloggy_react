import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Bloglist from "./Bloglist";

function Homepage() {
	const [blogs, setBlog] = useState([]);
	const [search, setSearch] = useState("");
	const getBlogRequest = async () => {
        
		const url = `http://127.0.0.1:3000/blogs`;
		const response = await fetch(url);
		const responseJson = await response.json();
		if (responseJson) {
			setBlog(responseJson);
		}
	};

	useEffect(() => {
		getBlogRequest();
        console.log(blogs);
	}, []);
	let  handleClick = async () => { 
		var ss = document.getElementById('search').value;
		setSearch(ss);
		const url = `http://127.0.0.1:3000/blogs/search/${ss}`
		const response = await fetch(url);
		const responseJson = await response.json();
		
		if (response.ok) {
			setBlog(responseJson);
			console.log(blogs);
		}
		document.getElementById('search').value='';
	}
    return (
        <>
            <nav className="Navbaritems">
                <h1 className="navbar-logo">
                    <i className="fa-solid fa-blog"></i>BLOGGY
                </h1>
                <div className="nav-menu">
                    <i
                        className="fas fa-times"
                    ></i>
                </div>
                <Link className="nav-links" to={`/Addblog`}>
                    <button className="btn btn-outline-danger" id="add">
                        Add
                    </button>
                </Link>
                <Link className="nav-links" to={`/Login`}>
                    <button className="btn btn-outline-danger" id="add">
                        Login
                    </button>
                </Link>
                <Link className="nav-links" to={`/Signup`}>
                    <button className="btn btn-outline-danger" id="add">
                        Sign up
                    </button>
                </Link>
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="text"
                        id="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button
                        type="button"
                        className="btn btn-outline-danger nav-links"
                        onClick={handleClick}
                    >
                        Search
                    </button>
                </form>
            </nav>
            
            <Bloglist blogs={blogs} />
        </>
    );
}
export default Homepage;
