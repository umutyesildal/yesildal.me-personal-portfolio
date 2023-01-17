import ProjectsColumn from "components/projects/ProjectsColumn";
import { useState } from "react";


/**
 *
 * Projects section, only for mobile
 *
 * @param {String} title - Title of the component.
 * @param {String} subtitle - Subtitle of the component.
 *
 */


export default function Projects() {
  const [texts] = useState({
    title: `<strong>Work,</strong> my previous projects.`,
    subtitle: "Here are the projects that I have worked on before.",
  });

  return (
    <>
      <section id="section">
        <div className="heading">
          <h2 dangerouslySetInnerHTML={{ __html: texts.title }}></h2>
          <p dangerouslySetInnerHTML={{ __html: texts.subtitle }}></p>
        </div>
        <div className="projects-column">
          <ProjectsColumn />
        </div>
      </section>
      <style jsx>{`
        section {
          padding: 35px 22px;
        }
        section .heading h2 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 3.43391vw;
          line-height: 122%;
          color: #2d3436;
          margin-bottom: 2.513vw;
          animation-delay: 0s;
          width: 87%;
        }

        section .heading p {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 15px;
          line-height: 20px;
          color: #2d3436;
          margin-bottom: 30px;
          margin-right: 5vw;
        }

        section projects-column {
          padding: ;
        }
        @media screen and (max-width: 992px) {
          section .heading h2 {
            font-size: 29px;
            line-height: 122%;
            width: 87%;
            margin-bottom: 17px;
          }
          section .heading p {
            font-size: 15px;
            line-height: 20px;
            width: 100%;
            margin-bottom: 32px;
          }
        }

        @media screen AND (min-width: 526px) AND (max-width: 992px) {
          section .heading h2 {
            font-size: 35px;
          }

          section .heading p {
            font-size: 20px;
            line-height: 30px;
          }
        }
      `}</style>
    </>
  );
}
