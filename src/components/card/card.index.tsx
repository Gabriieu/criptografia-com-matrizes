import { BsGithub, BsLinkedin } from "react-icons/bs";
import { CardStyle } from "./card.style";

interface iUserCardProp {
  name: string;
  description: string;
  linkedin: string;
  github: string;
}
export const UserCard = ({
  name,
  description,
  github,
  linkedin,
}: iUserCardProp) => {
  return (
    <CardStyle>
      <div>
        <h6 id="user-name">{name}</h6>
        <p>{description}.</p>
        <div>
          <a href={github} target="_blank">
            <BsGithub size={36} color="white" />
          </a>

          <a href={linkedin} target="_blank">
            <BsLinkedin size={36} color="white" />
          </a>
        </div>
      </div>
    </CardStyle>
  );
};
