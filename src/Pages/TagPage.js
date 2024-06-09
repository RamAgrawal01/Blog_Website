import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { ThemeContext } from "../context/ThemeContext";


const TagPage = () =>{
const theme = useContext(ThemeContext);
const navigation = useNavigate();
const location = useLocation();
const tag = location.pathname.split("/").at(-1);

 return(
        <div className="w-full h-full flex flex-col justify-center items-center">
            <Header/>
            <div className='flex gap-x-4 max-w-[620px] w-11/12 mt-24 z-10'>
                
                <button  onClick={()=>navigation(-1)}
                className=  {`${theme==='light' ? 'bg-white text-black' : 'bg-slate-900 text-white' }
                px-4 py-2  rounded `}>
                    Back
                </button>
                <h2 className='text-[24px] font-bold'>
                    Blogs Tagged <span className="text-[18px] text-blue-600">#{tag}</span>
                </h2>
            </div>

            <div className="-my-[50px]">
            <Blogs/>
            </div>
          
            <Pagination/>
        </div>
    )
}
export default TagPage;