import type { Route } from "../routes/+types/home";
import { ButtonWithIcon } from "~/components/ButtonWithIcon/ButtonWithIcon";
import { useNavigate } from "react-router";
import ProfileIcon from "~/icons/ProfileIcon";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Login" }];
}

type Props = {
  src: string;
  text: string;
};

export default function Button({ src, text }: Props) {
  let navigate = useNavigate();

  return (
    <ButtonWithIcon
      text={text}
      onClick={() => navigate(src)}
      className="bg-[#1767CE] text-[#F8FBFF] hover:bg-[#0A2343]"
    />
  );
}
