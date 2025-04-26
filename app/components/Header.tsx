import { NavLink } from "react-router";
import LoginButton from "./ButtonWithIcon/LoginButton";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-8">
      <NavLink to={"/"}>
        <img
          src="public/logo-transparent.png"
          alt="Riksteam Logo"
          className="h-32 w-32"
        />
      </NavLink>
      <div className="flex space-x-4 items-center">
        <NavLink to="/advertisements">
          <a className="underline ">Annonser</a>
        </NavLink>
        <LoginButton />
      </div>
    </div>
  );
}
