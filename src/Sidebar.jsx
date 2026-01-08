import React, { useState } from 'react';
import { ChevronDown, Star, Target, BarChart3, Plus, FileText, Settings } from 'lucide-react';

const Sidebar = ({ collapsed, toggleCollapse, isMobile }) => {
  const [codenameOpen, setCodenameOpen] = useState(!isMobile);
  const [reportsOpen, setReportsOpen] = useState({
    shared: false,
    myReports: !isMobile
  });

  // Close sidebar when clicking outside on mobile
  const handleBackdropClick = (e) => {
    if (isMobile && e.target === e.currentTarget) {
      toggleCollapse();
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobile && !collapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleCollapse}
        />
      )}

      <aside 
        className={`
          ${collapsed && !isMobile ? 'w-16' : 'w-64'} 
          ${isMobile ? 'fixed inset-y-0 left-0 z-50 w-64 mobile-slide-in' : 'relative'}
          bg-white border-r border-gray-200 flex flex-col transition-all duration-300 
          flex-shrink-0 h-full shadow-dashboard-sidebar
          ${isMobile && collapsed ? '-translate-x-full' : 'translate-x-0'}
        `}
        onClick={handleBackdropClick}
      >
        {/* Logo Section */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-gray-100">
          {!collapsed && (
            <>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="font-semibold text-gray-900 text-sm hidden sm:block">Codename.com</span>
                <span className="font-semibold text-gray-900 text-sm sm:hidden">Codename</span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </>
          )}
          {collapsed && !isMobile && (
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-sm">C</span>
            </div>
          )}
        </div>

        {/* Mobile Close Button */}
        {isMobile && !collapsed && (
          <button
            className="absolute -right-3 top-6 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-900 transition-colors z-10"
            onClick={toggleCollapse}
          >
            ✕
          </button>
        )}

        {/* Navigation Items */}
        <nav className="flex-1 px-3 py-4 lg:py-6 overflow-y-auto custom-scrollbar">
          {/* Quick Access */}
          <div className="mb-6 lg:mb-8">
            <button className="w-full flex items-center gap-3 px-3 py-3 lg:py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors group mobile-touch-target">
              <Star className="w-5 h-5 lg:w-4 lg:h-4 flex-shrink-0 text-gray-500 group-hover:text-gray-700" />
              {!collapsed && <span className="font-medium text-sm">Starred</span>}
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-3 lg:py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors group mobile-touch-target">
              <Target className="w-5 h-5 lg:w-4 lg:h-4 flex-shrink-0 text-gray-500 group-hover:text-gray-700" />
              {!collapsed && <span className="font-medium text-sm">Recent</span>}
            </button>
          </div>

          {/* Sales Section */}
          {!collapsed && (
            <>
              <div className="mb-4">
                <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Sales list</div>
                <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Goals</div>
              </div>

              {/* Active Dashboard Button */}
              <button className="w-full flex items-center gap-3 px-3 py-3 lg:py-3 mb-6 lg:mb-8 text-sm font-medium bg-pink-500 text-white rounded-dashboard-sm shadow-sm hover:bg-pink-600 transition-all duration-200 hover-lift mobile-touch-target">
                <BarChart3 className="w-5 h-5 lg:w-4 lg:h-4" />
                <span className="text-sm font-semibold">Dashboard</span>
              </button>

              {/* Codename Section */}
              <div className="mb-6 lg:mb-8">
                <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Codename</div>
                <button 
                  className="w-full flex items-center justify-between px-3 py-3 lg:py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-dashboard-sm transition-colors group mobile-touch-target"
                  onClick={() => setCodenameOpen(!codenameOpen)}
                >
                  <span className="text-sm font-medium">Shared with me</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${codenameOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {codenameOpen && (
                  <div className="ml-6 mt-2 space-y-1">
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors mobile-touch-target">Cargo2go</button>
                    <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors mobile-touch-target">
                      <span>Cloudz3r</span>
                      <span className="w-5 h-5 bg-pink-500 rounded text-white text-xs flex items-center justify-center font-semibold">2</span>
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors mobile-touch-target">Idioma</button>
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors mobile-touch-target">Syllables</button>
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors mobile-touch-target">x-0b</button>
                  </div>
                )}
              </div>

              {/* Reports Section */}
              <div>
                <div className="flex items-center justify-between px-3 py-2 mb-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Reports</span>
                  <Plus className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors icon-hover" />
                </div>
                
                <button 
                  className="w-full flex items-center justify-between px-3 py-3 lg:py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-dashboard-sm transition-colors group mobile-touch-target"
                  onClick={() => setReportsOpen({...reportsOpen, shared: !reportsOpen.shared})}
                >
                  <span className="text-sm font-medium">Share with me</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${reportsOpen.shared ? 'rotate-180' : ''}`} />
                </button>
                
                {reportsOpen.shared && (
                  <div className="ml-6 mt-2 space-y-1">
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors mobile-touch-target">Deals by user</button>
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors mobile-touch-target">Deal duration</button>
                  </div>
                )}

                <button 
                  className="w-full flex items-center justify-between px-3 py-3 lg:py-2.5 mt-3 text-sm text-gray-700 hover:bg-gray-50 rounded-dashboard-sm transition-colors group mobile-touch-target"
                  onClick={() => setReportsOpen({...reportsOpen, myReports: !reportsOpen.myReports})}
                >
                  <span className="text-sm font-medium">My reports</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${reportsOpen.myReports ? 'rotate-180' : ''}`} />
                </button>
                
                {reportsOpen.myReports && (
                  <div className="ml-6 mt-2 space-y-1">
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors mobile-touch-target">Emails received</button>
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors mobile-touch-target">Deal duration</button>
                    <button className="w-full text-left px-3 py-2 text-sm text-pink-500 font-semibold hover:bg-gray-50 rounded-dashboard-sm transition-colors mobile-touch-target">New report</button>
                    <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors mobile-touch-target">
                      <span>Analytics</span>
                      <span className="w-5 h-5 bg-pink-500 rounded text-white text-xs flex items-center justify-center font-semibold">2</span>
                    </button>
                  </div>
                )}

                <button className="w-full flex items-center gap-3 px-3 py-3 lg:py-2.5 mt-6 text-sm text-gray-600 hover:bg-gray-50 rounded-dashboard-sm transition-colors group mobile-touch-target">
                  <FileText className="w-5 h-5 lg:w-4 lg:h-4 text-gray-500 group-hover:text-gray-700" />
                  <span className="text-sm font-medium">Manage folders</span>
                </button>
              </div>
            </>
          )}
        </nav>

        {/* Bottom Action Icons */}
        <div className="h-20 border-t border-gray-100 flex items-center justify-center gap-3 px-4">
          <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors icon-hover mobile-touch-target">
            <Target className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors icon-hover mobile-touch-target">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
