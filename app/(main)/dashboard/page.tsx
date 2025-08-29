import React from "react";

export default async function Dashboard() {
  return (
    <main className="flex-grow md:overflow-y-auto">

      <section className="flex flex-col space-y-4 md:space-y-0 md:flex-row space-x-4 py-4 md:py-8">
        <div className="w-full md:w-[60%] glass-thin h-100 md:h-90">

        </div>

        <div className="flex flex-col space-y-4 md:w-[40%]">
          <div className="glass-thin h-50 md:h-1/2">

          </div>
          <div className="glass-thin h-50 md:h-1/2">

          </div>
        </div>
      </section>

      <section className="py-8 w-full glass-thin h-90">

      </section>

      <section className="transactions"></section>
    </main>
  );
}
