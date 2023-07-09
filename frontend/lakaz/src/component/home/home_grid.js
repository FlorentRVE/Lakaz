import React from "react";
import {Link} from "react-router-dom";

const HomeGrid = () => {

    return (
        <div className="flex flex-wrap bg-green-200 rounded-2xl gap-4 p-8 mx-auto w-5/6 justify-center my-3">

            <Link to={`/recipe/pain_bouchon`} className="bg-slate-500 p-3 rounded-2xl">

                <img src="https://placehold.co/300x300" alt="imgTest" className="rounded-2xl"></img>
                <p className="text-center my-2">Lorem ipsum dolor sit amet</p>

            </Link>

            
            <Link to={`/recipe/beignet_crevette`} className="bg-slate-500 p-3 rounded-2xl">

                <img src="https://placehold.co/300x300" alt="imgTest" className="rounded-2xl"></img>
                <p className="text-center my-2">Lorem ipsum dolor sit amet</p>

            </Link>

            <Link to={`/recipe/tomate`} className="bg-slate-500 p-3 rounded-2xl">

                <img src="https://placehold.co/300x300" alt="imgTest" className="rounded-2xl"></img>
                <p className="text-center my-2">Lorem ipsum dolor sit amet</p>

            </Link>

            <Link to={`/recipe/shop_shuey`} className="bg-slate-500 p-3 rounded-2xl">

                <img src="https://placehold.co/300x300" alt="imgTest" className="rounded-2xl"></img>
                <p className="text-center my-2">Lorem ipsum dolor sit amet</p>

            </Link>

            


        </div>
    )
    
}

export default HomeGrid;