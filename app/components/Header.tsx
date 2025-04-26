import { NavLink } from "react-router";
import LoginButton from "./ButtonWithIcon/LoginButton";
import { ButtonWithIcon } from "./ButtonWithIcon/ButtonWithIcon";
import { useNavigate } from "react-router";

export default function Header() {
  let loggedIn = false;
  if (typeof window !== "undefined") {
    loggedIn = localStorage.getItem("isLoggedIn") === "true";
    console.log("loggedIn", loggedIn);
  }
  let navigate = useNavigate();

  return (
    <div className="flex justify-between items-center p-8">
      <NavLink to={"/"} className={"flex items-center space-x-2"}>
        <h1 className="font-bold text-2xl ">RIKSTEAM</h1>
      </NavLink>
      <div className="flex space-x-8 items-center">
        <NavLink to="/company-ads">
          <a className="hover:underline">Oppdrag</a>
        </NavLink>
        <NavLink to="/personal-ads">
          <a className="hover:underline">Fagpersoner</a>
        </NavLink>
        {loggedIn ? (
          <ButtonWithIcon text="Profil" onClick={() => navigate("/profil")} />
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
}
