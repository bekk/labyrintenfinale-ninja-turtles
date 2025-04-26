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
          <a className="hover:underline">Oppdrag</a>
        </NavLink>
        <NavLink to="/personal-ads">
          <a className="hover:underline">Fagpersoner</a>
        </NavLink>
        <NavLink to="/equipment-ads">
          <a className="hover:underline">Utstyr</a>
        </NavLink>
        <LoginButton />
      </div>
    </div>
  );
}
