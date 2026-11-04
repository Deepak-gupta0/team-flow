import { Form } from "./Form";
export default function RegisterPage() {
  const points = [
    "Boards, lists & timelines in one place",
    "Free for teams up to 10",
    "Set up in under 2 minutes",
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F4F5F8] p-4 sm:p-8">
      <div className="grid w-full max-w-275 overflow-hidden rounded-4xl bg-white shadow-[0_30px_80px_-24px_rgba(91,77,240,0.25)] md:grid-cols-[43fr_57fr]">
        {/* Left brand panel */}
        <aside className="hidden flex-col justify-between bg-linear-to-b from-[#1F1B4D] via-[#362D96] to-[#5B4DF0] p-10 text-white md:flex">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/20">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </span>
            <span className="text-xl font-semibold">TeamFlow</span>
          </div>

          <div className="py-16">
            <h2 className="max-w-sm text-[32px] font-semibold leading-tight">
              Ship projects faster, with less chaos.
            </h2>
            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-[17px] text-white/90">
                  <span className="h-5 w-5 shrink-0 rounded-full bg-white/20" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-white/60">Trusted by 12,000+ teams</p>
        </aside>

        {/* Right form panel */}
        <section className="flex flex-col justify-center px-6 py-10 sm:px-12 sm:py-14">
          <div className="mx-auto w-full max-w-140">
            <h1 className="text-[30px] font-bold tracking-tight text-slate-900">
              Create your account
            </h1>
            <Form />

            <p className="mt-6 text-center text-[15px] text-slate-500">
              Already have an account?{" "}
              <a href="/login" className="font-semibold text-[#5B4DF0] hover:underline">
                Log in
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}