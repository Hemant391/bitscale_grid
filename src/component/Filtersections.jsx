import React from 'react';
import { FaShareAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdTableRows } from "react-icons/md";
import { CiViewColumn } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import { BiSortAlt2 } from "react-icons/bi";
import { BsStars } from "react-icons/bs";

export default function Filtersections() {
  return (
    <div className='flex flex-wrap justify-between px-3 py-2 border-b-2'>
      <div className='flex flex-wrap items-center gap-4'>
        <input className='p-1 px-2 rounded w-full md:w-auto' type="text" placeholder='Search' />
        <span className='flex items-center text-sm cursor-pointer hover:scale-105'>
          <MdTableRows /> 1/1 Row
        </span>
        <span className='flex items-center text-sm cursor-pointer hover:scale-105'>
          <CiViewColumn /> 3/3 Column
        </span>
        <span className='flex items-center text-sm cursor-pointer hover:scale-105'>
          <FaFilter /> 0 Filter
        </span>
        <span className='flex items-center text-sm cursor-pointer hover:scale-105'>
          <BiSortAlt2 /> Sort
        </span>
      </div>
      <div className='flex flex-wrap items-center gap-3 text-lg mt-3 md:mt-0'>
        <span className='flex gap-2 items-center bg-gray-600 text-white py-1 rounded-lg px-4 cursor-pointer hover:bg-slate-700'>
          <BsStars /> Enrich
        </span>
        <span className='cursor-pointer hover:scale-105'>
          <FaShareAlt />
        </span>
        <span className='cursor-pointer hover:scale-105'>
          <IoMdDownload />
        </span>
        <span className='cursor-pointer hover:scale-105 text-red-500'>
          <RiDeleteBin6Fill />
        </span>
      </div>
    </div>
  );
}
