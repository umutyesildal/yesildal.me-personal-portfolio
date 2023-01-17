import React, { useState } from "react";

/**
 *
 * Projects Column from the Work section. Only for mobile
 *
 * @param {Array} projects - All the projects person has done. It has 6 attributes: backgroundColor for background color of the bubble. Type for type of the projects. Title and subtitle of the project. Techs the technologies projects has used. Links is a json with 2 attributes github and website.
 * 
 *
 */
function ProjectsColumn() {
  const [texts] = useState({
    projects: [
      {
        backgroundColor: `#dfe6e940`,
        type: `Mobile App`,
        title: `<strong>Danceflavors</strong>`,
        subtitle:
          "Worked on Danceflavors app for a year, created frontend for the app, took a part in designing and implementing the architecture of the backend. Mainly used Flutter and Dart programming language, Hive and SQFLite for database, BLoC for state management.",
        techs: "Flutter SQL NoSQL BloC",
        links: {
          github: "",
          website: "https://www.danceflavors.com/",
        },
      },
      {
        backgroundColor: `#E4FAFE`,
        type: `Website`,
        title: `<strong>Metavest</strong>`,
        subtitle:
          "Worked on metavest.app website, created bunch of pages and components with the care of responsive design. Mainly used Reactjs and Nextjs along with CSS and HTML, used Strapi for CMS and localization.",
        techs: "Reactjs Nextjs Strapi CSS HTML",
        links: {
          github: "",
          website: "https://metavest.app/",
        },
      },
      {
        backgroundColor: `#CCFAED`,
        type: `Mobile App`,
        title: `<strong>DaiDay</strong>`,
        subtitle:
          "Created my first solo Mobile app and published it on Google Play Store, even though it is not perfect i am proud of my work and that i learned it all by myself during University. Mainly used Flutter and Dart programming language, Hive and SQFLite for database, BLoC for state management.",
        techs: "Flutter SQL NoSQL BloC",
        links: {
          github: "https://github.com/umutyesildal/daiday",
          website:
            "https://play.google.com/store/apps/details?id=com.greendal.daiday",
        },
      },
      {
        backgroundColor: `#D5EAFF`,
        type: `Mobile App`,
        title: `<strong>Mercedes Assistify</strong>`,
        subtitle:
          "At the last year of my Bachelor, University arranged a joint lecture with Mercedes Turkey. I had the chance to meet with executives of Mercedes Turkey and find a solution to a problem Mercedes is having. Assistify is focused on solving Mercedes car users problems via Mobile App. Mainly used Flutter and Dart programming language, Hive and SQFLite for database, BLoC for state management.",
        techs: "Flutter SQL NoSQL BloC",
        links: {
          github: "https://github.com/umutyesildal/mercedes-assistify",
          website: "",
        },
      },
    ],
  });

  /// Returns the items from the projects array.
  return (
    <>
      <div className="column">
        {texts.projects.map((item, i) => {
          return (
            <div
              className="item"
              style={{ backgroundColor: item.backgroundColor }}
            >
              <h1
                dangerouslySetInnerHTML={{
                  __html: item.type,
                }}
              ></h1>
              <h2
                dangerouslySetInnerHTML={{
                  __html: item.title,
                }}
              ></h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: item.subtitle,
                }}
              ></p>
              <span
                dangerouslySetInnerHTML={{
                  __html: item.techs,
                }}
              ></span>
              <div className="row-of-logos">
                {item.links.github != "" ? (
                  <a href="">
                    <img src="/logos/github-mark.png" alt="" />
                  </a>
                ) : null}
                {item.links.website != "" ? (
                  <a href="">
                    <img src="/logos/website.png" alt="" />
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .column {
          display: flex;
          flex-direction: column;
          margin-top: 16px;
        }
        h1 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 20px;
          margin-bottom: 5px;
        }
        h2 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 25px;
        }

        p {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 15px;
          line-height: 20px;
          color: #61616a;
          margin-bottom: 25px;
        }
        .item {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 4vw;
          border-radius: 2vw;
          margin-bottom: 25px;
        }
        .item .row-of-logos {
          display: flex;
          flex-direction: row;
          margin-top: 25px;
        }
        .item .row-of-logos img {
          width: 40px;
          height: 25px;
          object-fit: contain;
        }
      `}</style>
    </>
  );
}

export default ProjectsColumn;
