import { NavLink } from "react-router";
import LoginButton from "./ButtonWithIcon/LoginButton";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-8">
      <h1 className="font-bold text-2xl ">RIKSTEAM</h1>
      <div className="flex space-x-4 items-center">
        <NavLink to="/adds">
          <a className="underline ">Annonser</a>
        </NavLink>
        <LoginButton />
      </div>
    </div>
  );
}
