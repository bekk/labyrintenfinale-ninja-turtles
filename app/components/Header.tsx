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
      <NavLink to={"/"}>
        <h1 className="font-bold text-2xl ">RIKSTEAM</h1>
      </NavLink>
      <div className="flex space-x-4 items-center">
        <NavLink to="/advertisements">
          <a className="underline ">Annonser</a>
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
