import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
import { ThemeContext, ThemeProvider } from '../context/ThemeContext';

const CategoryPage = () => {
    const theme = useContext(ThemeContext);
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-y-3">
            
            <Header />
                 <div className='flex gap-x-4 max-w-[620px] w-11/12 mt-24 z-10'>
                <div>
                    <button   onClick={() => navigation(-1)} 
                    className="bg-slate-800 text-white px-4 py-2  rounded">
                        Back</button>
                </div>
                <h2 className='text-[24px] font-bold'>
                    Blogs On <span>{category}</span>
                </h2>
            </div>

            <div className="-my-[50px]">
            <Blogs/>
            </div>
           
            <Pagination />
        </div>
    )
}

export default CategoryPage;