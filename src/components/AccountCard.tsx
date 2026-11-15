import {
  User,
  Settings,
  CreditCard,
  ChevronRight,
  LogOut,
  Sun,
  Moon,
  Monitor,
  Command,
  Code,
} from "lucide-react";

const statuses = [
  { label: "Online", dot: "bg-emerald-500", active: true },
  { label: "Away", dot: "bg-zinc-600", active: false },
  { label: "DND", dot: "bg-zinc-600", active: false },
];

const themes = [
  { icon: Sun, active: false },
  { icon: Moon, active: false },
  { icon: Monitor, active: true },
];

const row = "flex items-center gap-1 py-2.5 text-[15px] text-zinc-200 gap-1 cursor-pointer";

export default function AccountCard() {
  return (
    <div className="w-inherit rounded-2xl border-zinc-800 py-2 text-zinc-400 ">
      {/* Menu items */}
      <div>
        <div className={row}>
          <User size={16} className="text-slate-600 cursor-pointer" />
          <span className="text-slate-600 text-xs cursor-pointer">Profile</span>
        </div>

        <div className={row}>
          <Settings size={16} className="text-slate-600 cursor-pointer" />
          <span className="flex-1 text-slate-600 text-xs cursor-pointer">Settings</span>
          <span className="flex items-center text-slate-600">
            <Command size={16} className="cursor-pointer"/>
            <span className="text-xs">,</span>
          </span>
        </div>
      </div>

      <div className="my-1 border-t border-slate-200" />

      <div className={row}>
        <LogOut size={16} className="text-slate-600" />
        <span className="flex-1 text-slate-600 text-xs">Sign out</span>
        <span className="text-xs text-slate-600 ">Hold</span>
      </div>

      <div className="my-1 border-t border-slate-200" />

      {/* Theme */}
      <div className="mt-2 flex items-center justify-between w-full rounded-xl">
        <div className="w-full flex justify-between items-center p-1">
          {themes.map(({ icon: Icon, active }, i) => (
            <span
              key={i}
              className={`flex h-8 w-15 items-center justify-center rounded-lg cursor-pointer hover:bg-slate-700/20 ${
                active ? "bg-zinc-700/70 text-white" : "text-slate-600"
              }`}
            >
              <Icon size={16} />
            </span>
          ))}
        </div>
      </div>

      <div className="my-1 border-t border-slate-400" />

      {/* Avatar + plan */}
      <div className="mt-3 flex items-start justify-between align-middle gap-1 rounded-xl border-2">
        <div className="flex gap-3">
          <div className="relative">
            <div className="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-zinc-100 text-xs text-zinc-900">
              MO
            </div>
          </div>

          {/* Name + email */}
          <div className="py-1 text-slate-600">
            <p className="text-sm font-semibold text-black">Maya Ortega</p>
            <p className="text-xs text-slate-600">d9111pak@gmail.com</p>
          </div>
        </div>

        <div className="h-full mt-4 flex-1 ml-4"><Code className="rotate-90" size={16}/></div>
      </div>
    </div>
  );
}
