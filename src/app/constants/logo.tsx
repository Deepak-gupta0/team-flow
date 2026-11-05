export const BRAND = "#5b4df0";
export const LOGO = () => {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="flex h-8 w-8 items-center justify-center rounded-[10px]"
        style={{ backgroundColor: BRAND }}
      >
        <BoltIcon />
      </div>
      <span className="text-[19px] font-semibold text-[#1b1b2f]">TeamFlow</span>
    </div>
  );
};

export function BoltIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}
