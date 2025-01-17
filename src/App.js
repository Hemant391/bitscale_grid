import React from 'react';
import Topbar from './component/Topbar';
import Sidebar from './component/Sidebar';
import Filtersections from './component/Filtersections';
import Grid from './component/grid';

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <Topbar filename={"Name of the file"} />
      <div className="flex flex-grow">
        <div className="h-full w-16 bg-red-200 flex flex-col">
          <Sidebar />
        </div>
        <div className="flex-grow bg-gray-100 flex flex-col ">
          <Filtersections />
          <div className="flex-grow overflow-auto">
            <Grid />
          </div>
        </div>
      </div>
    </div>
  );
}
