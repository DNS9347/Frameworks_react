"use client";
import React from "react";
import Image from "next/image";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import AppsIcon from '@mui/icons-material/Apps';
import GroupsIcon from '@mui/icons-material/Groups';
import Link from 'next/link';


function Dashboard() {

  return (
    <header>
      <nav className="w-full h-[70px] bg-light-100 flex justify-evenly items-center shadow-md">
        <AppsIcon style={{ fontSize: 26, color: 'blue' }} />

        <div className=" flex w-[200px] h-[50px]  items-center">
          <Image src="/Image/2.webp" alt="logo" width={400} height={400}/>
        </div>

        <div className="w-[800px] h-fit flex justify-end gap-x-3 text-sm">

        <Link href="/Dashboard">
          <div className="flex  p-1 items-center justify-center text-sm">
            <p>Home</p> 
          </div>
          </Link>
          
          <Link href="/Leads">
          <div className="flex  p-1 items-center justify-center text-sm">
             <p> Leads</p>
              <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </div>
          </Link>

          <Link href="/Oppurtunites">
          <div className="flex  p-1 items-center justify-center text-sm">
              <p>Oppurtunities</p>
              <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </div>
          </Link>



          <Link href="/Learners">
          <div className="flex  p-1 items-center justify-center text-sm">
              <p>Learners</p>
              <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </div>
          </Link>

      <Link href="Courses">
          <div className="flex  p-1 items-center justify-center text-sm">
              <p>Courses</p>
              <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </div>
          </Link>


          <Link href="Activites">
          <div className="flex  p-1 items-center justify-center text-sm">
              <p>Activites</p>
              <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </div>
          </Link>

          <Link href="Analytics">
          <div className="flex  p-1 items-center justify-center text-sm">
              <p>Analytics</p>
              <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </div>
          </Link>


          <div className="flex items-center justify-end gap-x-3 text-slate-500">
            <a href="#"><FontAwesomeIcon icon={faStar} size="1x" /></a>
            <a href="#"> <FontAwesomeIcon icon={faBell} size="1x" /></a>
            <a href="#"> <FontAwesomeIcon icon={faUser} size="1x" /></a>
          </div>
        </div>
      </nav>

      <section>
        <div className="flex items-center gap-2 w-full h-[100px] bg-light-100 rounded-sm justify-evenly py-5">

          <div className=" flex w-fit h-fit border-2  text-sm shadow-xl items-center p-2 rounded">

            <div className=" flex w-[40px] h-[40px] bg-gray-200  items-center justify-center rounded-full">
              <GroupsIcon style={{ fontSize: 25, color: 'blue' }} />
            </div>

            <div className="grid px-5">
              <h4 className="text-sm text-slate-600">Not Contacted</h4>
              <p className="px-3 text-lg text-orange-300">5</p>
            </div>

          </div>

          <div className=" flex w-fit h-fit border-2  text-sm shadow-lg items-center  p-2 rounded">

            <div className=" flex w-[40px] h-[40px] bg-gray-200  items-center justify-center rounded-full">
              <GroupsIcon style={{ fontSize: 26, color: 'blue' }} />
            </div>

            <div className="grid px-5">
              <h4 className="text-sm text-slate-600">Not Contacted</h4>
              <p className="px-3 text-lg text-orange-300">11</p>
            </div>

          </div>

          <div className=" flex w-fit h-fit border-2  text-sm shadow-lg items-center  p-2 rounded">

            <div className=" flex w-[40px] h-[40px] bg-gray-200  items-center justify-center rounded-full">
              <GroupsIcon style={{ fontSize: 26, color: 'blue' }} />
            </div>

            <div className="grid px-5">
              <h4 className="text-sm text-slate-600">Not Contacted</h4>
              <p className="px-3 text-lg text-orange-300">16</p>
            </div>

          </div>

          <div className=" flex w-fit h-fit border-2  text-sm shadow-lg items-center  p-2 rounded">

            <div className=" flex w-[40px] h-[40px] bg-gray-200  items-center justify-center rounded-full">
              <GroupsIcon style={{ fontSize: 26, color: 'blue' }} />
            </div>

            <div className="grid px-5">
              <h4 className="text-sm text-slate-600">Not Contacted</h4>
              <p className="px-3 text-lg text-orange-300">14</p>
            </div>

          </div>

          <div className=" flex w-fit h-fit border-2  text-sm shadow-lg items-center  p-2 rounded">

            <div className=" flex w-[40px] h-[40px] bg-gray-200  items-center justify-center rounded-full">
              <GroupsIcon style={{ fontSize: 26, color: 'blue' }} />
            </div>

            <div className="grid px-5">
              <h4 className="text-sm text-slate-600">Not Contacted</h4>
              <p className="px-3 text-lg text-orange-300">58</p>
            </div>

          </div>

          <div className=" flex w-fit h-fit border-2  text-sm shadow-lg shadow-slate-200 items-center p-2 rounded">

            <div className=" flex w-[40px] h-[40px] bg-gray-200  items-center justify-center rounded-full">
              <GroupsIcon style={{ fontSize: 26, color: 'blue' }} />
            </div>

            <div className="grid px-5">
              <h4 className="text-sm text-slate-600">Not Contacted</h4>
              <p className="px-3 text-lg text-orange-300">55</p>
            </div>

          </div>

        </div>
      </section>


    </header>

  )

};
export default Dashboard;


