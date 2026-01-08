import React, { useState } from 'react';
import { ChevronDown, Star, Target, BarChart3, Plus, FileText, Settings } from 'lucide-react';

const Sidebar = ({ collapsed, toggleCollapse }) => {
  const [codenameOpen, setCodenameOpen] = useState(true);
  const [reportsOpen, setReportsOpen] = useState({
    shared: false,
    myReports: true
  });

  return (
    <aside className={`${collapsed ? 'w-16' : 'w-64'} bg-white border-r border-gray-200 flex flex-col transition-all duration-300 flex-shrink-0 relative shadow-dashboard-sidebar`}>
      {/* Logo Section */}
      <div className="h-16 px-4 flex items-center justify-between border-b border-gray-100">
        {!collapsed && (
          <>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="font-semibold text-gray-900 text-[14px] tracking-tight">Codename.com</span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </>
        )}
        {collapsed && (
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-sm">C</span>
          </div>
        )}
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="absolute -right-3 top-6 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center lg:hidden shadow-md hover:bg-gray-900 transition-colors z-10"
        onClick={toggleCollapse}
      >
        {collapsed ? '→' : '←'}
      </button>

      {/* Navigation Items */}
      <nav className="flex-1 px-3 py-6 overflow-y-auto custom-scrollbar">
        {/* Quick Access */}
        <div className="mb-8">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors group">
            <Star className="w-4 h-4 flex-shrink-0 text-gray-500 group-hover:text-gray-700" />
            {!collapsed && <span className="font-medium text-[14px]">Starred</span>}
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors group">
            <Target className="w-4 h-4 flex-shrink-0 text-gray-500 group-hover:text-gray-700" />
            {!collapsed && <span className="font-medium text-[14px]">Recent</span>}
          </button>
        </div>

        {/* Sales Section */}
        {!collapsed && (
          <>
            <div className="mb-4">
              <div className="px-3 py-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Sales list</div>
              <div className="px-3 py-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Goals</div>
            </div>

            {/* Active Dashboard Button */}
            <button className="w-full flex items-center gap-3 px-3 py-3 mb-8 text-sm font-medium bg-pink-500 text-white rounded-dashboard-sm shadow-sm hover:bg-pink-600 transition-all duration-200 hover-lift">
              <BarChart3 className="w-4 h-4" />
              <span className="text-[14px] font-semibold">Dashboard</span>
            </button>

            {/* Codename Section */}
            <div className="mb-8">
              <div className="px-3 py-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Codename</div>
              <button 
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-dashboard-sm transition-colors group"
                onClick={() => setCodenameOpen(!codenameOpen)}
              >
                <span className="text-[14px] font-medium">Shared with me</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${codenameOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {codenameOpen && (
                <div className="ml-6 mt-2 space-y-1">
                  <button className="w-full text-left px-3 py-2 text-[14px] text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors">Cargo2go</button>
                  <button className="w-full flex items-center justify-between px-3 py-2 text-[14px] text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors">
                    <span>Cloudz3r</span>
                    <span className="w-5 h-5 bg-pink-500 rounded text-white text-xs flex items-center justify-center font-semibold">2</span>
                  </button>
                  <button className="w-full text-left px-3 py-2 text-[14px] text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors">Idioma</button>
                  <button className="w-full text-left px-3 py-2 text-[14px] text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors">Syllables</button>
                  <button className="w-full text-left px-3 py-2 text-[14px] text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors">x-0b</button>
                </div>
              )}
            </div>

            {/* Reports Section */}
            <div>
              <div className="flex items-center justify-between px-3 py-2 mb-2">
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Reports</span>
                <Plus className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors icon-hover" />
              </div>
              
              <button 
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-dashboard-sm transition-colors group"
                onClick={() => setReportsOpen({...reportsOpen, shared: !reportsOpen.shared})}
              >
                <span className="text-[14px] font-medium">Share with me</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${reportsOpen.shared ? 'rotate-180' : ''}`} />
              </button>
              
              {reportsOpen.shared && (
                <div className="ml-6 mt-2 space-y-1">
                  <button className="w-full text-left px-3 py-2 text-[14px] text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors">Deals by user</button>
                  <button className="w-full text-left px-3 py-2 text-[14px] text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors">Deal duration</button>
                </div>
              )}

              <button 
                className="w-full flex items-center justify-between px-3 py-2.5 mt-3 text-sm text-gray-700 hover:bg-gray-50 rounded-dashboard-sm transition-colors group"
                onClick={() => setReportsOpen({...reportsOpen, myReports: !reportsOpen.myReports})}
              >
                <span className="text-[14px] font-medium">My reports</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${reportsOpen.myReports ? 'rotate-180' : ''}`} />
              </button>
              
              {reportsOpen.myReports && (
                <div className="ml-6 mt-2 space-y-1">
                  <button className="w-full text-left px-3 py-2 text-[14px] text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors">Emails received</button>
                  <button className="w-full text-left px-3 py-2 text-[14px] text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors">Deal duration</button>
                  <button className="w-full text-left px-3 py-2 text-[14px] text-pink-500 font-semibold hover:bg-gray-50 rounded-dashboard-sm transition-colors">New report</button>
                  <button className="w-full flex items-center justify-between px-3 py-2 text-[14px] text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors">
                    <span>Analytics</span>
                    <span className="w-5 h-5 bg-pink-500 rounded text-white text-xs flex items-center justify-center font-semibold">2</span>
                  </button>
                </div>
              )}

              <button className="w-full flex items-center gap-3 px-3 py-2.5 mt-6 text-sm text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors group">
                <FileText className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                <span className="text-[14px] font-medium">Manage folders</span>
              </button>
            </div>
          </>
        )}
      </nav>

      {/* Bottom Action Icons */}
      <div className="h-20 border-t border-gray-100 flex items-center justify-center gap-3 px-4">
        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors icon-hover">
          <Target className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors icon-hover">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;