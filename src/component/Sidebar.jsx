import React from 'react';
import { FaCircleRadiation } from "react-icons/fa6";
import { HiPuzzle } from "react-icons/hi";
import { IoMdGrid } from "react-icons/io";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="h-full w-16 flex flex-col justify-between  items-center text-3xl py-3 border-r-2">
      <div className="flex flex-col gap-4">
        <span className='cursor-pointer hover:scale-105'><FaCircleRadiation /></span>
        <span className='cursor-pointer hover:scale-105'><HiPuzzle /></span>
        <span className='cursor-pointer hover:scale-105'><IoMdGrid /></span>
      </div>
      <div className="flex flex-col gap-4">
      <span className='cursor-pointer hover:scale-105'><FaRegCreditCard /></span>
      <span className='cursor-pointer hover:scale-105'> <FaDatabase /></span>
      </div>
    </div>
  );
}
