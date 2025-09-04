"use client";
import { ArrowRight } from "lucide-react";
import { useActionState, useEffect } from "react";
import { signin } from "@/app/actions/auth";
import { useRouter } from "next/navigation";


export default function DirectSignIn() {
  const router = useRouter();
  const [state, action, pending] = useActionState(signin, undefined);

  useEffect(() => {
    if (state?.success){
      router.push("/verifyEmail");
    }
  }, [state, router]);

  return (
    <form action={action} className="flex flex-col space-y-3">
      <div className="flex flex-col">
        <label className="mb-2" htmlFor="email">
          Email *
        </label>

        <input
          type="email"
          className="w-full outline-none h-10 
            rounded-sm glass-normal px-2"
          name="email"
          id="email"
        />
      </div>
      {state?.errors?.email && <p>{state.errors.email}</p>}

      <div className="flex flex-col">
        <label className="mb-2" htmlFor="password">
          Password *
        </label>

        <input
          type="password"
          className="w-full outline-none h-10 
            rounded-sm glass-normal px-2"
          name="password"
          id="password"
        />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must: </p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="py-2 mt-4 md:mt-8 bg-white mb-6 text-back disabled:opacity-70 rounded flex justify-center gap-2"
      >
        {`Let's Start`}
        <ArrowRight />
      </button>

      <hr className="h-1" />
    </form>
  );
}
