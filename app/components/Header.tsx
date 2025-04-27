import { NavLink } from "react-router";
import LoginButton from "./ButtonWithIcon/LoginButton";
import { ButtonWithIcon } from "./ButtonWithIcon/ButtonWithIcon";
import { useNavigate } from "react-router";

export default function Header() {
  let loggedIn = false;
  let isCompany = false;
  let className = "";

  if (typeof window !== "undefined") {
    loggedIn = localStorage.getItem("isLoggedIn") === "true";
    isCompany = localStorage.getItem("isCompany") === "true";
    console.log("loggedIn", loggedIn);
    const path = window.location.pathname;

    if (path === "/") {
      className = "absolute";
    }
  }
  let navigate = useNavigate();

  return (
    <div
      className={`flex w-full justify-between items-center p-8 bg-transparent  z-10 ${className}`}
    >
      <div className="flex items-center space-x-4">
        <NavLink to={"/"}>
          <p className="font-bold text-4xl">RIKSTEAM</p>
        </NavLink>
        {loggedIn &&
          (isCompany ? <p>Bedriftskonto</p> : <p>Enkeltpersonskonto</p>)}
      </div>
      <div className="flex space-x-8 items-center font-medium text-xl">
        <NavLink to="/company-ads">
          <a className="hover:underline">Oppdrag</a>
        </NavLink>
        <NavLink to="/personal-ads">
          <a className="hover:underline">Fagpersoner</a>
        </NavLink>
        <NavLink to="/equipment-ads">
          <a className="hover:underline">Utstyr</a>
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
