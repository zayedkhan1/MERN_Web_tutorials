import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBM,handleReadingTime}) => {
    const [blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    console.log(blogs)
    
    return (
        <div className="md:w-2/3">
            <h2 className="text-3xl" >This is my bolgs: {blogs.length} </h2>
            {
                blogs.map(blog=><Blog
                key={blog.id}
                blog={blog}
                handleAddToBM={handleAddToBM}
                handleReadingTime={handleReadingTime}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;