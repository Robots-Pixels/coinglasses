import { auth } from "@/auth";
import GeneralOverview from "@/components/dashboard/GeneralOverview";
import { redirect } from "next/navigation";
import React from "react";

export default async function Dashboard() {

  const session = await auth();  
  if (!session?.user) return null;
  const user = session?.user;

  return (
    <main className="flex-grow md:overflow-y-auto">
      <section className="flex flex-col space-y-4 md:space-y-0 md:flex-row space-x-4 py-4 md:py-8">

        <GeneralOverview user={user}/>

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
