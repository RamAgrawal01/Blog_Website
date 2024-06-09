import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import Card from './Card';


 
const Blogs = () => {
    //consume data
    const { posts, loading } = useContext(AppContext);

    return (
        
        <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[85px]">
            {loading ? (
                <Spinner />
            ) : (
                posts.length === 0 ? (
                    <p>No blogs</p>
                ) : (
                    posts.map((post) => (
                        <Card key={post.id} post={post} />
                    ))
                )
            )}
        </div>
    );
}
export default Blogs;