import type { Route } from "../../routes/+types/home";
import { ButtonWithIcon } from "~/components/ButtonWithIcon/ButtonWithIcon";
import { useNavigate } from "react-router";
import ProfileIcon from "~/icons/ProfileIcon";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Login" }];
}

export default function LoginButton() {
  let navigate = useNavigate();

  return (
    <ButtonWithIcon
      text="Logg inn"
      onClick={() => navigate("/login")}
      icon={<ProfileIcon />}
      className="bg-[#1767CE] text-white hover:bg-blue-600"
    />
  );
}
