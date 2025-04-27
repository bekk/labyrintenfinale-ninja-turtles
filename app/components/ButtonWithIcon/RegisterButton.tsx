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
      text="Registrer deg her &#8250;"
      onClick={() => navigate("/register")}
      className="text-white opacity-60 hover:opacity-100 text-lg "
    />
  );
}
