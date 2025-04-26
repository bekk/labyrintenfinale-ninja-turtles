import { NavLink } from "react-router";
import LoginButton from "./ButtonWithIcon/LoginButton";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-8">
      <NavLink to={"/"} className={"flex items-center space-x-2"}>
        <h1 className="font-bold text-2xl ">RIKSTEAM</h1>
      </NavLink>
      <div className="flex space-x-4 items-center">
        <NavLink to="/advertisements">
          <a className="underline ">Annonser</a>
        </NavLink>
        <NavLink to="/chat">
          <a className="underline ">Chat</a>
        </NavLink>
        <LoginButton />
      </div>
    </div>
  );
}
