import type { Route } from "../../routes/+types/home";
import { ButtonWithIcon } from "~/components/ButtonWithIcon/ButtonWithIcon";
import { useNavigate } from "react-router";
import ProfileIcon from "~/icons/ProfileIcon";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Login" }];
}

export default function RegisterButton() {
  let navigate = useNavigate();

  return (
    <ButtonWithIcon
      text="Lag bruker &#8250;"
      onClick={() => navigate("/register")}
      className="bg-black text-white opacity-60 hover:opacity-100 py-6 px-9 text-xl"
    />
  );
}
