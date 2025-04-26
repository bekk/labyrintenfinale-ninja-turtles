import { NavLink, useNavigate } from "react-router";
import GitHubIcon from "~/icons/GitHubIcon";

export function Footer() {
  return (
      <footer className="fixed bottom-0 w-full bg-[#D9E9FF] p-12 border-t">
        <div className="flex flex-row items-center justify-center w-full">
          <p className="uppercase text-lg font-bold">RIKSTEAM</p>
          <div className="ml-auto flex justify-center gap-4">
          <NavLink to="/vårt-formål" className="ml-auto flex justify-center">
            Vårt formål
          </NavLink>
          <NavLink to="/om-oss" className="ml-auto flex justify-center">
            Om oss
          </NavLink>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-row items-center justify-center w-full mt-10 gap-2">
            <NavLink to="https://github.com/bekk/labyrintenfinale-ninja-turtles">
              <GitHubIcon/>
            </NavLink>
            <p>Laget av Ninja Turtles 🐢 Mille, Karolina, Johanne og Henrik</p>
          </div>
          © {new Date().getFullYear()} RIKSTEAM. All rights not reserved.
        </div>
      </footer>
  );
}