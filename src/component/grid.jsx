import React from 'react';
import { FaExclamationCircle, FaRegCircle, FaSpinner } from 'react-icons/fa';
import { MdSlowMotionVideo } from "react-icons/md";

export default function Grid() {
  const data = [
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action: "Bitscale Evaluation - Account relevance",
      enrich: "Bitscale Evaluation - Account relevance",
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action: <FaExclamationCircle className="text-red-500" />,
      enrich: "BMW Evaluation - Relevancy check",
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action: (
        <a
          href="https://www.linkedin.com/bitscale"
          className="text-blue-500 underline"
        >
          https://www.linkedin.com/bitscale
        </a>
      ),
      enrich: "Google Evaluation - Lifewancy check",
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action: <FaSpinner className="animate-spin text-gray-500" />,
      enrich: "Apple Evaluation - Olvancy check",
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action:<FaSpinner className="animate-spin text-gray-500" /> ,
      enrich: "Figma Evaluation - Evancy check",
    },

  
  ];

  return (
    <div className="p-4 bg-gray-100 ">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-300 text-left">
            <th className="p-2 border border-gray-300"></th>
            <th className="p-2 border border-gray-300"></th>
            <th className="p-2 border border-gray-300"><span className='bg-black text-white p-1 text-xl mx-2'>A</span>Input Column</th>
            <th className="p-2 border border-gray-300  "><img className='inline mx-2' src="./logo1.png" alt='logo' /><span>Action Column</span></th>
            <th className="p-2 border border-gray-300 w-3/12"><img className='inline mx-2' src="./logo2.png" alt='logo' /><span>Enrich Company</span></th>
            <th className="p-2 border border-gray-300">Add Column</th>
          </tr>
        </thead>
        <tbody className='h-full overflow-y-scroll'>
          {data.map((row, index) => (
            <tr
              key={index}
             
            >
              <td className="p-2 border border-gray-300">{index+1}</td>
              <td className="p-2 border border-gray-300 text-blue-500"><MdSlowMotionVideo/></td>
              <td className="p-2 border border-gray-300">{row.input}</td>
              <td className="p-2 border border-gray-300">{row.action}</td>
              <td className="p-2 border border-gray-300">{row.enrich}</td>
              <td className="p-2 border border-gray-300 text-center">
              </td>
            </tr>
          ))}
          <tr>
            <td
              colSpan="4"
              className="p-2 border border-gray-300 text-center bg-gray-50"
            >
              <button className="text-blue-500 underline">+ Add Row</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
