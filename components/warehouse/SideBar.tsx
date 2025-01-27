// SideBar.tsx
import React from 'react';

export const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-50">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-300 mb-4">Dashboard</h2>
        <ol className="space-y-4">
          <li>
            <button className="w-full text-white bg-yellow-500 border-0 py-3 px-6 focus:outline-none hover:bg-yellow-600 rounded-lg text-lg">
              Dashboard
            </button>
          </li>
          <li>
            <button className="w-full text-white bg-yellow-500 border-0 py-3 px-6 focus:outline-none hover:bg-yellow-600 rounded-lg text-lg">
              Rent History
            </button>
          </li>
          <li>
            <button className="w-full text-white bg-yellow-500 border-0 py-3 px-6 focus:outline-none hover:bg-yellow-600 rounded-lg text-lg">
              Requests
            </button>
          </li>
          <li>
            <button className="w-full text-white bg-yellow-500 border-0 py-3 px-6 focus:outline-none hover:bg-yellow-600 rounded-lg text-lg">
              Modify
            </button>
          </li>
          <li>
            <button className="w-full text-white bg-yellow-500 border-0 py-3 px-6 focus:outline-none hover:bg-yellow-600 rounded-lg text-lg">
              Signout
            </button>
          </li>
        </ol>
      </div>
    </div>
  );
};
