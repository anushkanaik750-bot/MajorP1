import React from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#F7F8FA] font-sans antialiased text-gray-900 relative">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        <Navbar />
        <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
