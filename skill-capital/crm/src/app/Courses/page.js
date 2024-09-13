import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../../context/navbarslide';




const Courses=()=>{

return(
    <>
    <Navbar/>
    <div className="w-full h-full border-1 rounded bg-gray-200">
        <FontAwesomeIcon icon="fa-solid fa-id-card" />
        hello boss
    </div>
    </>
    
)

};
export default Courses;