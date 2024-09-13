import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../context/navbarslide';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import TableChartIcon from '@mui/icons-material/TableChart';





const Oppurtunity=()=>{

return(
    <>
    <Navbar/>

<div className="bg-light py-2 border-1"> 

    <div className="w-full h-full border-1 rounded  flex  items-center  justify-between gap-x-2  m-2 p-2">

   <div className="w-fit h-fit flex items-center justify-evenly px-3 gap-7">

    <div  className=" flex bg-blue-600 text-white justify-center items-center w-[30px] h-[20px]">
    <FontAwesomeIcon icon={faIdCard} />
    </div>


    <div className="flex items-center justify-end">
        <p>All Opportunities</p>
        <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" /> 
    </div>

    </div>


    <div className="flex gap-4 items-center">
    <CalendarMonthIcon style={{ fontSize: 26, color: 'black' }} />
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-500 hover:bg-blue-500 hover:text-white">
          Create Oppurtunity
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              License
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>


    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm  font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-500 hover:text-white">
          Actions
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              License
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
    </div>
    </div>


<div className=" flex w-full h-fit border-1  items-center justify-around">

<div className="flex rounded-full">
    <div className="w-fit h-fit border-1 border-slate-600 bg-gray-200 rounded">
    <SearchIcon/>
        <input type="text" placeholder="search" className="border-1 border-slate-600 bg-gray-200 "/>
    </div>
</div>

<div className="flex gap-1 rounded-r-lg">

    <div className="flex items-center justify-between gap-3 border-2  border-slate-100 bg-light  text-sm p-1 rounded-full hover:bg-blue-500 hover:text-white">
        <span>Visiting</span>
        <div className=" flex w-[30px] h-[30px] items-center bg-red-400 justify-center rounded-full ">
            1
        </div>
    </div>

    <div className="flex items-center justify-between gap-3 border-2  border-slate-100 bg-light  text-sm p-1 rounded-full hover:bg-blue-500 hover:text-white">
        <span>Visited</span>
        <div className=" flex w-[30px] h-[30px] items-center bg-red-400 justify-center rounded-full ">
            1
        </div>
    </div>

    <div className="flex items-center justify-between gap-3 border-2  border-slate-100 bg-light  text-sm p-1 rounded-full hover:bg-blue-500 hover:text-white">
        <span>Demo Attended</span>
        <div className=" flex w-[30px] h-[30px] items-center bg-red-400 justify-center rounded-full ">
            1
        </div>
    </div>

    <div className="flex items-center justify-between gap-3 border-2   border-slate-100 bg-light text-sm p-1 rounded-full hover:bg-blue-500 hover:text-white">
        <span>Lost Oppurtunity</span>
        <div className=" flex w-[30px] h-[30px] items-center bg-red-400 justify-center rounded-full ">
            1
        </div>
    </div>

</div>

<div className="flex ">

<div className="flex w-[90px] items-center justify-around gap-1 border-2 bg-light  text-sm p-1 rounded-full hover:bg-blue-500 hover:text-white">
    <TableChartIcon className="w-4 h-4"/>
        <span>table</span>
    </div>

    <div className="flex  w-[90px] items-center justify-between gap-1 border-2 bg-light  text-sm p-1 rounded-full hover:bg-blue-500 hover:text-white">
        <span>kanban</span>
        <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
    </div>
</div>

</div>

<div className="w-full h-max py-2 border-2">
<table className="table-auto border-1">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
</div>

</div>  
    </>
    
)

};
export default Oppurtunity;