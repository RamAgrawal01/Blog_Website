import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
 
const Pagination = () => {

    const {page,handlerPageChange , totalPages} = useContext(AppContext);

    return(
        <div className='border border-[#d6d3d1] border-x-0 w-full py-3  fixed bottom-0 bg-white pagination'>
           <div className='flex items-center gap-x-3 mx-auto  w-11/12 max-w-[620px]'>
            { page>1 &&
                (<button className='rounded-md border px-3 py-1'
                    onClick={()=>handlerPageChange(page-1)}>
                    Previous Page
                </button>)
            }

            { page < totalPages &&
                (<button className='rounded-md border px-3 py-1'
                 onClick={()=>handlerPageChange(page+1)}>
                    Next Page
                </button>)
            }
            <p className='font-bold text-sm ml-auto'>
                page{" "}{page} of {totalPages}
            </p>

           </div>

        </div>
    )
}
export default Pagination;