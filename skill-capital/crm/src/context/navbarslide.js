"use client";
import React from "react";
import Image from "next/image";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import AppsIcon from '@mui/icons-material/Apps';
// import GroupsIcon from '@mui/icons-material/Groups';
import Link from 'next/link';




function Navbar(){


return(
      <header>
        <nav className="w-full h-[70px] bg-light-100 flex justify-evenly items-center shadow-md">
          <AppsIcon style={{ fontSize: 26, color: 'blue' }} />
  
          <div className=" flex w-[200px] h-[50px]  items-center">
            <Image src="/Image/2.webp" alt="logo" width={400} height={400}/>
          </div>
  
          <div className="w-[800px] h-fit flex justify-end gap-x-3 text-sm">
  
            <div className="flex  p-1 items-center justify-center text-sm">
              <a href="/Dashboard">Home</a> 
            </div>
  
            <div className="flex  p-1 items-center justify-center text-sm">
                <Link href="/Leads">
                Leads
                </Link>
                <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
            </div>
  
  
            <div className="flex  p-1 items-center justify-center text-sm">
                <a href="/Oppurtunites">Oppurtunities</a>
                <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
            </div>
  
  
  
  
            <div className="flex  p-1 items-center justify-center text-sm">
                <a href="/Learner">Learners</a>
                <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
            </div>
  
  
            <div className="flex  p-1 items-center justify-center text-sm">
                <a href="/Courses">Courses</a>
                <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
            </div>
  
  
            <div className="flex  p-1 items-center justify-center text-sm">
              
                <a href="/Activites">Acitivites</a>
                <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
            </div>
  
            <div className="flex  p-1 items-center justify-center text-sm">
                <a href="/Analytics">Analytics</a>
                <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
            </div>
  
  
            <div className="flex items-center justify-end gap-x-3 text-slate-500">
              <a href="#"><FontAwesomeIcon icon={faStar} size="1x" /></a>
              <a href="#"> <FontAwesomeIcon icon={faBell} size="1x" /></a>
              <a href="#"> <FontAwesomeIcon icon={faUser} size="1x" /></a>
            </div>
          </div>
        </nav>
    </header>
        );
      }
export default  Navbar;