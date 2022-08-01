/* eslint-disable @next/next/no-img-element */
import ExtLink from "./ExtLink";
import Image from "next/image";

interface ProjectInterface {
  name: string;
  description: string;
  languages: string[];
  href?: string;
}

const Project = ({ name, description, languages, href }: ProjectInterface) => {
  return (
    <>
      <div className="project">
        <div className="name">
          <h4>{name}</h4>
          <img
            src={`https://skillicons.dev/icons?i=` + languages.join(",")}
            alt="Languages used"
          />
        </div>
        <p>{description}</p>
        {href && (
          <ExtLink href={href}>
            Check out <b>{name}</b>
          </ExtLink>
        )}
      </div>

      <style jsx>{`
        .project {
          border: 2px white solid;
          padding: 12px;
          border-radius: 8px;
          width: min(400px, 100%);
        }
        .name {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        @media (max-width: 600px) {
          .name {
            flex-direction: column;
          }
        }
        .project h4 {
          font-size: 24px;
        }
        .project img {
          height: 24px;
        }
        .project h4,
        .project p {
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default Project;
