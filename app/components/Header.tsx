import { NavLink } from "react-router";
import LoginButton from "./ButtonWithIcon/LoginButton";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-8">
      <NavLink to={"/"}>
        <h1 className="font-bold text-2xl ">RIKSTEAM</h1>
      </NavLink>
      <div className="flex space-x-8 items-center">
        <NavLink to="/company-ads">
          <a className="hover:underline">Finn fagfolk</a>
        </NavLink>
        <NavLink to="/personal-ads">
          <a className="hover:underline">Finn oppdrag</a>
        </NavLink>
        <LoginButton />
      </div>
    </div>
  );
}
