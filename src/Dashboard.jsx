import React, { useState, useEffect } from 'react';
import { Search, Plus, Menu, Share2, Download, Share, ChevronDown, Star, TrendingUp, TrendingDown, Filter, BarChart3 } from 'lucide-react';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false); // Start expanded on mobile
  const [activeTab, setActiveTab] = useState('revenue');
  const [timeframeActive, setTimeframeActive] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar Component - Show on mobile when not collapsed */}
      {(!isMobile || !sidebarCollapsed) && (
        <Sidebar 
          collapsed={isMobile ? false : sidebarCollapsed} 
          toggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          isMobile={isMobile}
        />
      )}

      {/* Overlay for mobile when sidebar is open */}
      {isMobile && !sidebarCollapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarCollapsed(true)}
        />
      )}

      {/* ========== MAIN CONTENT ========== */}
      <main className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Top Header - ALWAYS show hamburger on mobile */}
        <header className="h-16 bg-white border-b border-gray-100 px-4 lg:px-6 flex items-center justify-between flex-shrink-0 shadow-dashboard-header">
          <div className="flex items-center gap-3 lg:gap-4 flex-1">
            {/* Mobile Menu Button - ALWAYS show on mobile */}
            <button 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
              {sidebarCollapsed ? (
                <Menu className="w-5 h-5 text-gray-600" /> // Hamburger icon when collapsed
              ) : (
                <Menu className="w-5 h-5 text-gray-600 rotate-90" /> // Different icon when open
              )}
            </button>
            
            {/* Search Bar */}
            <div className="relative flex-1 lg:w-96 max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder='Try searching "insights"'
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent input-focus"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {!isMobile && (
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors icon-hover">
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
            )}
            <div className="w-8 h-8 rounded-full gradient-orange-pink"></div>
            <button className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors shadow-md icon-hover">
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Team Members Bar */}
        <div className="bg-white border-b border-gray-100 px-4 lg:px-6 py-3 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3 overflow-x-auto lg:overflow-visible">
            {/* Add Member Button */}
            <button className="w-8 h-8 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors flex-shrink-0">
              <Plus className="w-4 h-4 text-gray-400" />
            </button>

            {/* Team Members */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <img src="https://i.pravatar.cc/150?img=1" alt="Armin A." className="w-8 h-8 rounded-full object-cover avatar-border" />
              <span className="text-sm text-gray-700 font-medium">Armin A.</span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <img src="https://i.pravatar.cc/150?img=2" alt="Eren Y." className="w-8 h-8 rounded-full object-cover avatar-border" />
              <span className="text-sm text-gray-700 font-medium">Eren Y.</span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-semibold avatar-border">M</div>
              <span className="text-sm text-gray-700 font-medium">Mikasa A.</span>
            </div>
            <button className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors avatar-border flex-shrink-0">
              <span className="text-white text-xs font-bold">C</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors icon-hover">
              <Share2 className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors icon-hover">
              <Download className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors icon-hover">
              <Share className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-4 lg:p-6">
            {/* Page Title and Controls */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 gap-4">
              <h1 className="text-2xl lg:text-3xl font-light text-gray-300 tracking-tight">New report</h1>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                {/* Toggle Switch */}
                <div className="flex items-center gap-3">
                  <div 
                    className={`dashboard-toggle ${timeframeActive ? 'active' : ''}`}
                    onClick={() => setTimeframeActive(!timeframeActive)}
                  />
                  <span className="text-sm font-medium text-gray-700">Timeframe</span>
                </div>

                {/* Date Range Selector */}
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  Sep 1 - Nov 30, 2023
                  <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                </button>
              </div>
            </div>

            {/* ========== REVENUE SECTION ========== */}
            <div className="bg-white rounded-dashboard shadow-dashboard-card p-4 lg:p-6 mb-6">
              {/* Revenue Header with Stats Cards */}
              <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-6 lg:mb-8">
                {/* Revenue Info */}
                <div className="flex-1 mb-6 lg:mb-0">
                  <h2 className="text-sm text-gray-500 font-medium mb-3">Revenue</h2>
                  <div className="flex flex-wrap items-baseline gap-2 mb-2">
                    <span className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">$528,976</span>
                    <span className="text-3xl lg:text-4xl font-light text-gray-400 tracking-tight">.82</span>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2.5 py-1.5 bg-red-50 text-red-600 text-xs font-semibold rounded border border-red-100">-7.9%</span>
                      <span className="px-2.5 py-1.5 bg-red-500 text-white text-xs font-semibold rounded">-$27,935.04</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    vs prev. $501,641.73 Jun 1 - Aug 31, 2023
                    <ChevronDown className="w-3 h-3 text-gray-400" />
                  </p>
                </div>

                {/* Stats Cards Grid */}
                <div className="grid grid-cols-2 lg:flex lg:flex-nowrap gap-3 lg:gap-4 w-full lg:w-auto">
                  {/* Top Sales Card */}
                  <div className="bg-white border border-gray-200 rounded-dashboard p-4 hover-lift min-w-[140px]">
                    <div className="text-xs text-gray-500 mb-3">Top sales</div>
                    <div className="text-2xl font-bold text-gray-900 mb-4">72</div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-semibold">M</div>
                      <span className="text-sm text-gray-700 flex-1">Mikasa</span>
                      <ChevronDown className="w-3 h-3 text-gray-400 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Best Deal Card */}
                  <div className="bg-gray-900 text-white rounded-dashboard p-4 hover-lift min-w-[140px]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-300">Best deal</span>
                      <Star className="w-4 h-4 fill-white text-white" />
                    </div>
                    <div className="text-lg font-semibold mb-3">$44,142</div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Rolf Inc.</span>
                      <button className="w-5 h-5 bg-white rounded flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <ChevronDown className="w-3 h-3 text-gray-900" />
                      </button>
                    </div>
                  </div>

                  {/* Deals Card */}
                  <div className="bg-white border border-gray-200 rounded-dashboard p-4 hover-lift min-w-[120px]">
                    <div className="text-xs text-gray-500 mb-2">Deals</div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">439</div>
                    <div className="flex items-center gap-1 text-xs text-red-500 font-medium">
                      <TrendingDown className="w-3 h-3" />
                      <span>5</span>
                    </div>
                  </div>

                  {/* Value Card */}
                  <div className="bg-white border border-gray-200 rounded-dashboard p-4 hover-lift min-w-[120px]">
                    <div className="text-xs text-gray-500 mb-2">Value</div>
                    <div className="text-lg font-bold text-pink-500 mb-2">$288k</div>
                    <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                      <TrendingUp className="w-3 h-3" />
                      <span>7.9%</span>
                    </div>
                  </div>

                  {/* Win Rate Card */}
                  <div className="bg-white border border-gray-200 rounded-dashboard p-4 hover-lift min-w-[120px]">
                    <div className="text-xs text-gray-500 mb-2">Win rate</div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">64%</div>
                    <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                      <TrendingUp className="w-3 h-3" />
                      <span>1.2%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Performance Stats */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 mb-6 lg:mb-8 pb-6 lg:pb-8 border-b border-gray-200">
                <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-4 lg:gap-8 w-full lg:w-auto">
                  <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/150?img=1" alt="" className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm" />
                    <div>
                      <div className="text-lg font-semibold text-gray-900">$209,633</div>
                      <div className="text-xs text-gray-500">39.63%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-semibold border-2 border-white shadow-sm">M</div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">$156,841</div>
                      <div className="text-xs text-gray-500">29.65%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/150?img=2" alt="" className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm" />
                    <div>
                      <div className="text-lg font-semibold text-gray-900">$117,115</div>
                      <div className="text-xs text-gray-500">22.14%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-sm">C</div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">$45,386</div>
                      <div className="text-xs text-gray-500">8.58%</div>
                    </div>
                  </div>
                </div>
                <button className="px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-sm hover-lift w-full lg:w-auto mt-4 lg:mt-0 lg:ml-auto">
                  Details
                </button>
              </div>

              {/* Filters and Platform List */}
              <div>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 lg:mb-6 gap-3">
                  <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors icon-hover">
                      <Menu className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 font-medium hover:bg-gray-100 rounded-lg transition-colors">
                      Filters
                      <Filter className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 font-medium hover:bg-gray-100 rounded-lg transition-colors">
                      <BarChart3 className="w-4 h-4" />
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 font-medium hover:bg-gray-100 rounded-lg transition-colors">
                      Filters
                      <Filter className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Platform Revenue List */}
                <div className="space-y-2">
                  {[
                    { name: 'Dribbble', icon: 'D', bg: 'bg-pink-100', text: 'text-pink-500', amount: '$227,459', percent: '43%' },
                    { name: 'Instagram', icon: '📷', bg: 'bg-pink-100', text: 'text-pink-500', amount: '$142,823', percent: '27%' },
                    { name: 'Behance', icon: 'Be', bg: 'bg-blue-100', text: 'text-blue-500', amount: '$89,935', percent: '11%' },
                    { name: 'Google', icon: 'G', bg: 'bg-red-100', text: 'text-red-500', amount: '$37,028', percent: '7%' }
                  ].map((platform, index) => (
                    <div key={index} className="flex items-center p-3 lg:p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer hover-lift">
                      <div className="flex items-center gap-3 flex-1">
                        <div className={`w-8 h-8 rounded-full ${platform.bg} flex items-center justify-center border border-gray-100`}>
                          <span className={`${platform.text} font-bold text-sm`}>{platform.icon}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{platform.name}</span>
                      </div>
                      <div className="flex items-center gap-8">
                        <span className="text-sm font-semibold text-gray-900">{platform.amount}</span>
                        <span className="text-sm text-gray-500 font-medium w-12 text-right">{platform.percent}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ========== BOTTOM GRID SECTION ========== */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              {/* Platform Value Card - Dribbble */}
              <div className="bg-white rounded-dashboard shadow-dashboard-card p-4 lg:p-6">
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center border border-pink-200">
                      <span className="text-pink-500 font-bold text-sm">D</span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Platform value</div>
                      <div className="text-sm font-semibold text-gray-900">Dribbble</div>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>

                {/* Gradient Stats Card */}
                <div className="gradient-pink-dark rounded-dashboard p-4 lg:p-6 text-white mb-4 lg:mb-6 hover-lift">
                  <div className="space-y-4 lg:space-y-6">
                    <div>
                      <div className="text-xs opacity-90 mb-2">Revenue</div>
                      <div className="text-2xl font-bold">$18,552</div>
                    </div>
                    <div>
                      <div className="text-xs opacity-90 mb-2">Leads</div>
                      <div className="text-lg font-semibold">373 <span className="text-sm opacity-75">87/276</span></div>
                    </div>
                    <div>
                      <div className="text-xs opacity-90 mb-2">Win rate</div>
                      <div className="text-lg font-semibold">18% <span className="text-sm opacity-75">51/318</span></div>
                    </div>
                  </div>
                </div>

                {/* Chart Section */}
                <div>
                  <div className="flex items-center gap-2 mb-4 lg:mb-6">
                    <button 
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${activeTab === 'revenue' ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                      onClick={() => setActiveTab('revenue')}
                    >
                      Revenue
                    </button>
                    <button 
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${activeTab === 'leads' ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                      onClick={() => setActiveTab('leads')}
                    >
                      Leads
                    </button>
                    <button 
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${activeTab === 'wl' ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                      onClick={() => setActiveTab('wl')}
                    >
                      W/L
                    </button>
                  </div>

                  {/* Bar Chart */}
                  <div className="relative h-32 lg:h-40 mb-2 lg:mb-4">
                    <div className="absolute inset-0 flex items-end justify-between gap-1 lg:gap-2">
                      {[65, 42, 72, 58, 68, 50, 45].map((height, i) => (
                        <div key={i} className="flex-1 relative group">
                          <div 
                            className={`w-full rounded-t ${i === 3 || i === 4 ? 'chart-bar-active' : 'chart-bar-inactive'} transition-all duration-200 hover:opacity-90`}
                            style={{ height: `${height}%` }}
                          >
                            {i === 3 && (
                              <div className="tooltip-pink px-3 py-2 absolute -top-12 left-1/2 -translate-x-1/2 hidden lg:block">
                                $11,635
                              </div>
                            )}
                            {i === 4 && (
                              <div className="tooltip-pink px-3 py-2 absolute -top-12 left-1/2 -translate-x-1/2 hidden lg:block">
                                $9,801
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Month Labels */}
                  <div className="flex justify-between text-xs text-gray-400 mb-4 lg:mb-6">
                    {['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'].map((month) => (
                      <span key={month} className="font-medium">{month}</span>
                    ))}
                  </div>

                  {/* Team Avatars */}
                  <div className="flex justify-center gap-1">
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <img key={i} src={`https://i.pravatar.cc/150?img=${i}`} alt="" className="w-6 h-6 rounded-full border-2 border-white shadow-sm object-cover" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Deals Amount Card */}
              <div className="bg-white rounded-dashboard shadow-dashboard-card p-4 lg:p-6">
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center border border-blue-200">
                      <span className="text-blue-500 font-bold text-xs">Be</span>
                    </div>
                    <div className="w-8 h-8 rounded bg-pink-100 flex items-center justify-center border border-pink-200">
                      <span className="text-pink-500 font-bold text-xs">D</span>
                    </div>
                    <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center border border-gray-200">
                      <span className="text-gray-600 font-bold text-xs">G</span>
                    </div>
                    <div className="w-8 h-8 rounded bg-pink-100 flex items-center justify-center border border-pink-200">
                      <span className="text-pink-500 font-bold text-xs">📷</span>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>

                <div className="mb-6 lg:mb-8">
                  <div className="text-xs text-gray-500 mb-2">Deals amount</div>
                  <div className="text-sm font-semibold text-gray-900">by referrer category</div>
                </div>

                <div className="text-center py-6 lg:py-8">
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 lg:mb-3">45.3%</div>
                  <div className="text-xl lg:text-2xl font-light text-gray-400">$71,048</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
