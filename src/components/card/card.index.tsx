import { BsGithub, BsLinkedin } from "react-icons/bs";
import { CardStyle } from "./card.style";
import { MdCardTravel } from "react-icons/md";

interface iUserCardProp {
  name: string;
  role: string;
  description: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

export const UserCard = ({
  name,
  description,
  github,
  linkedin,
  role,
  portfolio,
}: iUserCardProp) => {
  return (
    <CardStyle>
      <div>
        <h6 className="user-name">{name}</h6>
        <span className="role">{role}</span>
        <p>{description}.</p>
        <div>
          {github && (
            <a className="tech-redirect" href={github} target="_blank">
              <BsGithub size={36} color="white" />
            </a>
          )}

          {linkedin && (
            <a className="tech-redirect" href={linkedin} target="_blank">
              <BsLinkedin size={36} color="white" />
            </a>
          )}
          {portfolio && (
            <a className="tech-redirect" href={portfolio} target="_blank">
              <MdCardTravel color="white" size={36} />
            </a>
          )}
        </div>
      </div>
    </CardStyle>
  );
};
