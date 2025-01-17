import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { FaUserCircle } from "react-icons/fa";

export default function Topbar({ filename }) {
  return (
    <div className="w-full flex flex-wrap justify-between text-lg items-center px-4 py-2 border-b-2">
      <div className="flex gap-4 items-center flex-wrap">
        <IoMdArrowRoundBack className="text-xl" />
        <span className="truncate">{filename}</span>
      </div>
      <div className="flex gap-4 items-center">
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Label"
          className="whitespace-nowrap"
        />
        <span className="cursor-pointer">
          <FaUserCircle style={{ width: "30px", height: "30px" }} />
        </span>
      </div>
    </div>
  );
}
