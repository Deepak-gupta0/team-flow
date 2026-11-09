"use client";
import { useState } from "react";
import type { ReactNode } from "react";

type NavItem = {
  id: string;
  label: string;
  icon: string; // 24x24 stroke-icon path
};

const TOP_ITEMS: NavItem[] = [
  {
    id: "made-for-you",
    label: "Made for you",
    icon: "M12 3l2.5 5.5L20 9.3l-4 4 1 5.7-5-2.8L7 19l1-5.7-4-4 5.5-.8z",
  },
  {
    id: "custom-templates",
    label: "Custom templates",
    icon: "M4 4h16v6H4zM4 14h7v6H4zM15 14h5v6h-5z",
  },
  {
    id: "import-data",
    label: "Import data",
    icon: "M12 3v12M7 10l5 5 5-5M4 20h16",
  },
];

const CATEGORY_ITEMS: NavItem[] = [
  {
    id: "software-development",
    label: "Software development",
    icon: "M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14",
  },
  {
    id: "service-management",
    label: "Service management",
    icon: "M12 3a9 9 0 100 18 9 9 0 000-18zM12 9a3 3 0 100 6 3 3 0 000-6z",
  },
];

function Icon({ path }: { path: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

type NavButtonProps = {
  item: NavItem;
  active: boolean;
  collapsed: boolean;
  onSelect: (id: string) => void;
};

function NavButton({ item, active, collapsed, onSelect }: NavButtonProps) {
  return (
    <div className="group relative">
      <button
        onClick={() => onSelect(item.id)}
        aria-current={active ? "page" : undefined}
        aria-label={item.label}
        className={`relative flex w-full items-center rounded-lg py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
          collapsed ? "justify-center px-0" : "gap-3 px-3"
        } ${
          active
            ? "bg-indigo-50 text-indigo-700"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }`}
      >
        {/* active indicator */}
        {active && (
          <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-indigo-600" />
        )}
        <Icon path={item.icon} />
        {!collapsed && <span className="truncate">{item.label}</span>}
      </button>

      {/* tooltip, only when collapsed */}
      {collapsed && (
        <span className="pointer-events-none absolute left-full top-1/2 z-50 ml-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          {item.label}
        </span>
      )}
    </div>
  );
}

export default function Sidebar({ children }: { children?: ReactNode }) {
  const [active, setActive] = useState<string>("made-for-you");
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside
        className={`sticky top-0 flex h-screen shrink-0 flex-col border-r border-slate-200 bg-white transition-[width] duration-200 ${
          collapsed ? "w-[72px]" : "w-64"
        }`}
      >
        {/* Header */}
        <div
          className={`flex h-16 items-center ${
            collapsed ? "justify-center" : "justify-between px-4"
          }`}
        >
          {!collapsed && (
            <h2 className="truncate text-lg font-bold text-slate-900">
              Space templates
            </h2>
          )}
          <button
            onClick={() => setCollapsed((c) => !c)}
            className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <Icon path={collapsed ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6"} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-2">
          <div className="space-y-1">
            {TOP_ITEMS.map((item) => (
              <NavButton
                key={item.id}
                item={item}
                active={active === item.id}
                collapsed={collapsed}
                onSelect={setActive}
              />
            ))}
          </div>

          {/* Divider + group label */}
          <div className="my-4 border-t border-slate-200" />
          {!collapsed && (
            <p className="mb-2 px-3 text-xs font-semibold text-slate-500">
              Categories
            </p>
          )}

          <div className="space-y-1">
            {CATEGORY_ITEMS.map((item) => (
              <NavButton
                key={item.id}
                item={item}
                active={active === item.id}
                collapsed={collapsed}
                onSelect={setActive}
              />
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-200 p-3">
          <div
            className={`flex items-center rounded-lg p-2 hover:bg-slate-100 ${
              collapsed ? "justify-center" : "gap-3"
            }`}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
              D
            </div>
            {!collapsed && (
              <span className="truncate text-sm font-medium text-slate-700">
                Deep
              </span>
            )}
          </div>
        </div>
      </aside>

      <main className="min-w-0 flex-1 p-6 lg:p-8">{children}</main>
    </div>
  );
}