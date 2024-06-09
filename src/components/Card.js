import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({post}) =>{
    return(
        <div classname="mt-3 flex flex-col">
            <NavLink to ={`/blog/${post.id}`}>
            <p className="text-[#b91c1c] font-small font-medium">{post.title}</p>
            </NavLink>
        
        <p className="text-[13px]">
            By <span className="italic">{post.author}</span> on {""}

               <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
            <span className="underline font-semibold">{post.category}</span>
            </NavLink>
            
        </p>

        <p className="text-[13px]">Posted on: {post.date}</p>

        <p className="text-[15px] mt-3">{post.content}</p>
        
        <div className="flex flex-wrap gap-x-2 items-center">
                {post.tags.map((tag,index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                        <span className="text-blue-700 font-semibold text-xs underline cursor-pointer"> #{tag}</span>
                    </NavLink>
                ))}
            </div>

    </div>
    )
}
export default Card;