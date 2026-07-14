export function HeroComponent(){
  return (
    <div className="bg-white text-gray-800 dark:bg-neutral-950 relative isolate antialiased dark:text-neutral-100 min-h-screen">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="h-[60vh] w-[60vh] rounded-full bg-gradient-to-br absolute -top-32 -left-32 from-indigo-200 via-lime-200 to-purple-300 opacity-20 blur-2xl dark:opacity-0" />
        <div className="h-[40vh] w-[50vh] rounded-full bg-gradient-to-tr absolute -bottom-20 right-10 from-fuchsia-300 via-orange-300 to-rose-200 opacity-40 blur-3xl dark:opacity-0" />
        <div className="h-[35vh] w-[45vh] rounded-full bg-gradient-to-b dark:h-[28vh] absolute top-28 left-1/4 from-orange-300 via-amber-200 to-rose-100 opacity-60 blur-3xl dark:from-orange-600 dark:via-amber-500 dark:to-rose-400 dark:opacity-64" />
      </div>
      <main className="mx-auto px-8 relative z-20 max-w-7xl">
        <div className="lg:grid-cols-2 lg:py-24 items-center py-16 grid gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="items-center px-3 py-1 rounded-full bg-white/70 text-sm dark:bg-white/10 inline-flex gap-2 border border-zinc-300/70 dark:border-white/20">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-700 dark:text-neutral-300">Smart Banking</span>
              </div>
              <p className="text-4xl font-medium leading-tight lg:text-6xl">Simple Digital Banking</p>
              <p className="text-lg text-gray-700/80 dark:text-neutral-300/80 max-w-lg">
                Manage your finances effortlessly with our secure banking platform. Track spending, transfer funds, and grow your savings with intelligent tools designed for your financial success.
              </p>
            </div>
            <div className="sm:flex-row flex flex-col gap-4">
              <button className="inline-flex border border-transparent transition-colors hover:bg-neutral-700 dark:hover:bg-indigo-500 dark:bg-indigo-600 items-center justify-center rounded-md bg-neutral-900 px-8 py-3 font-medium text-neutral-100">Open Account</button>
              <button className="inline-flex border border-zinc-300/70 dark:border-white/20 transition-colors hover:bg-black/5 dark:hover:bg-white/10 dark:bg-white/10 items-center justify-center rounded-md bg-white/70 px-8 py-3 font-medium">Learn More</button>
            </div>
            <div className="items-center pt-8 flex gap-8">
              <div>
                <div className="text-2xl font-semibold">2M+</div>
                <div className="text-sm text-gray-700/80 dark:text-neutral-300/80">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">99.9%</div>
                <div className="text-sm text-gray-700/80 dark:text-neutral-300/80">Security Rating</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">24/7</div>
                <div className="text-sm text-gray-700/80 dark:text-neutral-300/80">Customer Support</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-linear-to-t absolute inset-0 z-10 from-white/50 dark:from-neutral-950/50 to-transparent"></div>
            <div className="rounded-2xl relative overflow-hidden">
              <img alt="" src="https://devwares-pull-zone.b-cdn.net/mockimages/ChatGPT%20Image%20May%209%2C%202025%2C%2001_49_56%20AM.png" className="border border-black/10 dark:hidden rounded-2xl shadow-2xl w-full" />
              <img alt="" src="https://devwares-pull-zone.b-cdn.net/mockimages/ChatGPT%20Image%20May%209%2C%202025%2C%2002_54_42%20AM.png" className="hidden border border-white/15 dark:block rounded-2xl shadow-2xl w-full" />
            </div>
            <div className="bg-white rounded-lg shadow-lg dark:bg-neutral-900 absolute -bottom-4 -left-4 border border-zinc-300/70 dark:border-white/20 p-4">
              <div className="items-center flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-green-500"></div>
                <div>
                  <div className="text-sm font-medium">Transaction Complete</div>
                  <div className="text-xs text-gray-700/80 dark:text-neutral-300/80">2 minutes ago</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg dark:bg-neutral-900 absolute -top-4 -right-4 border border-zinc-300/70 dark:border-white/20 p-4">
              <div className="text-xs text-gray-700/80 mb-1 dark:text-neutral-300/80">Savings Growth</div>
              <div className="text-lg font-semibold text-green-600">+18%</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};