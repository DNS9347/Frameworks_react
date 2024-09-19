"use client";
import React from "react";
import Image from "next/image";
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import AppsIcon from '@mui/icons-material/Apps';
//  import GroupsIcon from '@mui/icons-material/Groups';
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function NavbarSlide() {
  const pathname = usePathname();
  
  // const getLink = (pathId) => pathname.startsWith(pathId) ? 'active' : ''; // Improved path comparison

  const getLink = (path ) =>{
    return path == pathname
  }

  return (
    <header>
      <nav className="w-full h-[70px] bg-light-100 flex justify-around  ring-1 ring-inset ring-gray-200 py-5 items-center shadow-md">

        <div className=" w-[300px] flex items-center justify-between gap-3">

        <AppsIcon style={{ fontSize: 26, color: 'blue' }} />

        <div className="flex w-[200px] h-[50px] items-center">
          <Image src="/Image/2.webp" alt="Company logo" width={150} height={150} />
        </div>

        </div>



<div className=" flex items-center justify-between gap-3">

        <div className="w-[800px] h-fit flex justify-end gap-2 text-sm">

          {/* Links with active class check */}
          <div className={`flex p-1 items-center justify-center text-sm ${getLink('/Dashboard')}`}>
            <Link href="/Dashboard">Home</Link>
          </div>

          <div className={`flex p-1 items-center justify-center text-sm ${getLink('/Leads')}`}>
            <Link href="/Leads">Leads</Link>
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </div>

          <div className={`flex p-1 items-center justify-center text-sm ${getLink('/Opportunities')}`}>
            <Link href="/Opportunities">Opportunities</Link>
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </div>

          <div className={`flex p-1 items-center justify-center text-sm ${getLink('/Learner')}`}>
            <Link href="/Learner">Learners</Link>
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </div>

          <div className={`flex p-1 items-center justify-center text-sm ${getLink('/Courses')}`}>
            <Link href="/Courses">Courses</Link>
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </div>

          <div className={`flex p-1 items-center justify-center text-sm ${getLink('/Activities')}`}>
            <Link href="/Activities">Activities</Link>
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </div>

          <div className={`flex p-1 items-center justify-center text-sm ${getLink('/Analytics')}`}>
            <Link href="/Analytics">Analytics</Link>
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </div>

        </div>

         <div className=" w-fit flex items-center justify-evenly gap-3 text-slate-500">
            <Link href="#"><FontAwesomeIcon icon={faStar} size="1x" aria-label="Favorites" /></Link>
            <Link href="#"><FontAwesomeIcon icon={faBell} size="1x" aria-label="Notifications" /></Link>
            <Link href="#"><FontAwesomeIcon icon={faUser} size="1x" aria-label="User" /></Link>
        </div>

        </div>
      </nav>
    </header>
  );
}
