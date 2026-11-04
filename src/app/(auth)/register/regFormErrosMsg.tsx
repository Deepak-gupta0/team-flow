export const RegFormErrosMsg = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <p className="mt-2 flex items-center gap-1.5 text-[13px] text-[#E5365F]">
      <svg
        viewBox="0 0 20 20"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="10" cy="10" r="8" />
        <path d="M10 6v5M10 13.5v.01" strokeLinecap="round" />
      </svg>
      {errorMessage}
    </p>
  );
};
