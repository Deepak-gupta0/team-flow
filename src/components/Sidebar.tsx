"use client"

import {
  Zap,
  PanelLeftClose,
  House,
  CircleCheckBig,
  Inbox,
  Plus,
  Star,
  Menu,
} from "lucide-react";
import AccountCard from "./AccountCard";

export default function Sidebar() {

  return (
    <aside className="flex flex-col justify-between min-h-screen w-67.5 shrink-0 md:rounded-[28px] bg-white  shadow-sm">
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center justify-between px-2 pb-6 pt-2">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <Zap size={16} />
            </div>
            <span className="text-md font-semibold text-slate-900">
              TeamFlow
            </span>
          </div>
          <button  className="text-slate-400 hover:text-slate-600">
            <PanelLeftClose size={18} />
          </button>
        </div>

        {/* Main nav */}
        <nav className="space-y-0">
          <a
            href="#"
            className="flex items-center gap-2 text-xs rounded-xl bg-indigo-100 px-4 py-2 font-small text-indigo-600"
          >
            <House size={18} />
            Home
          </a>

          <a
            href="#"
            className="flex items-center gap-2 text-xs rounded-xl px-4 py-2 font-medium text-slate-600 hover:bg-white "
          >
            <CircleCheckBig size={18} />
            Projects
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-xs rounded-xl px-4 py-2 font-medium text-slate-600 hover:bg-white "
          >
            <CircleCheckBig size={18} />
            My Tasks
          </a>

          <a
            href="#"
            className="flex items-center gap-2 text-xs rounded-xl px-4 py-2 font-medium text-slate-600 hover:bg-white"
          >
            <Inbox size={18} />
            <span className="flex-1">Inbox</span>
            <span className="flex h-4 max-w-4 items-center justify-center rounded-full bg-rose-500 px-1.5 text-xs font-semibold text-white">
              4
            </span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 text-xs rounded-xl px-4 py-2 font-medium text-slate-600 hover:bg-white "
          >
            <CircleCheckBig size={18} />
            Settings
          </a>
        </nav>
      </div>
      
      <div className="shadow-inner py-2 px-4 rounderd-xl shadow-slate-200">
        <AccountCard />
      </div>
    </aside>
  );
}
