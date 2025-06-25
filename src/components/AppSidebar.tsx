
import React from 'react';
import { 
  ChevronDown, 
  ChevronRight,
  Search,
  Settings,
  FileText,
  BarChart3,
  Archive,
  FlaskConical,
  Stethoscope,
  Activity
} from 'lucide-react';

const AppSidebar = () => {
  return (
    <div className="w-64 bg-slate-800 text-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-black px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">✓</span>
          </div>
          <span className="text-white font-medium">CrelioHealth</span>
        </div>
      </div>

      {/* User Info */}
      <div className="px-4 py-3 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-xs font-medium text-gray-700">
            LH
          </div>
          <div className="flex-1">
            <div className="text-sm text-white">Hello LH - Husain (43)</div>
            <div className="text-xs text-gray-400">#1000942 - Augustus L...</div>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Search */}
      <div className="px-4 py-3 border-b border-slate-700">
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Navigation Search"
            className="w-full bg-slate-700 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded text-sm focus:outline-none focus:bg-slate-600"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">⌘ K</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 py-2">
        <nav className="space-y-1">
          <div className="px-4 py-2 hover:bg-slate-700 cursor-pointer">
            <div className="flex items-center gap-3">
              <Activity className="w-4 h-4 text-blue-400" />
              <span className="text-sm">Operation</span>
              <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
            </div>
          </div>
          
          <div className="px-4 py-2 hover:bg-slate-700 cursor-pointer">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-4 h-4 text-blue-400" />
              <span className="text-sm">Operations Dashboard</span>
            </div>
          </div>

          <div className="px-4 py-2 hover:bg-slate-700 cursor-pointer">
            <div className="flex items-center gap-3">
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-sm">Pending Log</span>
              <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
            </div>
          </div>

          <div className="px-4 py-2 hover:bg-slate-700 cursor-pointer">
            <div className="flex items-center gap-3">
              <Archive className="w-4 h-4 text-blue-400" />
              <span className="text-sm">Archives</span>
            </div>
          </div>

          <div className="px-4 py-2 hover:bg-slate-700 cursor-pointer">
            <div className="flex items-center gap-3">
              <Stethoscope className="w-4 h-4 text-blue-400" />
              <span className="text-sm">Operation / Service Status</span>
            </div>
          </div>

          <div className="px-4 py-2 hover:bg-slate-700 cursor-pointer">
            <div className="flex items-center gap-3">
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-sm">Report Prints</span>
              <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
            </div>
          </div>

          <div className="px-4 py-2 hover:bg-slate-700 cursor-pointer">
            <div className="flex items-center gap-3">
              <Archive className="w-4 h-4 text-blue-400" />
              <span className="text-sm">Inventory Management</span>
            </div>
          </div>

          <div className="px-4 py-2 hover:bg-slate-700 cursor-pointer">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-4 h-4 text-blue-400" />
              <span className="text-sm">TAT Analytics</span>
              <span className="bg-blue-500 text-xs px-1 rounded text-white ml-2">New</span>
            </div>
          </div>

          {/* Quality Control - Active Section */}
          <div className="bg-blue-900/50 border-r-2 border-blue-400">
            <div className="px-4 py-2 cursor-pointer">
              <div className="flex items-center gap-3">
                <FlaskConical className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300 font-medium">Quality Control</span>
              </div>
            </div>
            
            {/* Submenu */}
            <div className="pl-11 pb-2 space-y-1">
              <div className="py-1 text-sm text-gray-300 hover:text-white cursor-pointer">
                QC Dashboard <span className="bg-blue-500 text-xs px-1 rounded text-white ml-2">New</span>
              </div>
              <div className="py-1 text-sm text-blue-300 font-medium cursor-pointer bg-blue-800/30 -ml-4 pl-4 rounded-r">
                QC List
              </div>
              <div className="py-1 text-sm text-gray-300 hover:text-white cursor-pointer">
                LJ Chart
              </div>
              <div className="py-1 text-sm text-gray-300 hover:text-white cursor-pointer">
                QC Bulk Edit
              </div>
              <div className="py-1 text-sm text-gray-300 hover:text-white cursor-pointer">
                QC Settings
              </div>
            </div>
          </div>

          <div className="px-4 py-2 hover:bg-slate-700 cursor-pointer">
            <div className="flex items-center gap-3">
              <Settings className="w-4 h-4 text-blue-400" />
              <span className="text-sm">Drug Master / Panel Master</span>
              <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
            </div>
          </div>

          <div className="px-4 py-2 hover:bg-slate-700 cursor-pointer">
            <div className="flex items-center gap-3">
              <Settings className="w-4 h-4 text-blue-400" />
              <span className="text-sm">Instrument Management</span>
            </div>
          </div>

          <div className="px-4 py-2 hover:bg-slate-700 cursor-pointer">
            <div className="flex items-center gap-3">
              <Search className="w-4 h-4 text-blue-400" />
              <span className="text-sm">Advanced Search</span>
            </div>
          </div>
        </nav>

        {/* Footer */}
        <div className="mt-8 px-4 text-xs text-gray-400 space-y-2">
          <div className="font-medium text-gray-300">MORE INFO</div>
          <div className="cursor-pointer hover:text-white">Updates</div>
          <div className="cursor-pointer hover:text-white">Video Tutorial</div>
          <div className="cursor-pointer hover:text-white">Support</div>
        </div>
      </div>

      {/* Collapse Button */}
      <div className="px-4 py-3 border-t border-slate-700">
        <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
          <ChevronRight className="w-4 h-4 rotate-180" />
          <span>Collapse</span>
        </button>
      </div>
    </div>
  );
};

export default AppSidebar;
