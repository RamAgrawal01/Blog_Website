import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useState } from "react";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Header from "../components/Header";
import Card from "../components/Card";

const BlogPage = () =>{
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog ,setBlog] = useState(null);
    const [relatedblog ,setRelatedblog ] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {loading , setLoading} = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedblog(data.relatedBlogs);
        }
        catch(error){
            console.log("Error caught");
            setBlog(null);
            setRelatedblog([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname])

    return(
        <div className="w-full h-full flex flex-col justify-center items-center gap-y-3  ">
            <Header/>
            <div className='flex flex-col gap-x-4 max-w-[620px] w-11/12 mt-24 z-10' >

            <div>
                <button onClick={()=>navigation(-1)}
                  className="bg-slate-800 text-white px-4 py-2  rounded">
                    Back
                </button>
            </div>
            {loading ? (
            <Spinner />) : 
            blog ? (
            <div className="mt-8" >
              <Card post={blog} />
              <h2 className="mt-12 text-[2rem] font-semibold">Releated Blogs</h2>
              <div>
                {relatedblog.map((post) => (
                  <div key={post.id} >
                    <Card post={post} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>No Blog Found !!</p>
          )}

        </div>

            </div>

            

            
    )
}
export default BlogPage;