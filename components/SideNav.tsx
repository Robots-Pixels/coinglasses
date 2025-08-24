import { LogOut } from "lucide-react"
import NavItems from "./NavItems"
import ToggleModeButton from "./ToggleModeButton"

export default function SideNav() {
  return (
    <aside className="flex-none md:w-60 text-white">
        <div className="h-screen min-h-100 md:pl-24 md:py-5">

          <div className="h-full bg-dark md:py-8 rounded-l-[4rem] rounded-r-xl flex flex-col items-center justify-between ">

            <div className="flex flex-col  items-center w-full space-y-8">
              <h1 className="text-2xl font-semibold h-10">
                  CoinGlasses
              </h1>

              <NavItems/>

            </div>
            
            <div className="flex flex-col items-center space-y-8">

              <ToggleModeButton/>
              
              <form 
              className="h-5"
              action={ async () => {
                "use server";
                console.log("Signed Out!")
              }}>
                <button type="submit">
                  <LogOut/>
                </button>
              </form>

            </div>

          </div>


        </div>
    </aside>
  )
}