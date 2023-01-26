import { useState } from "react";

type ProjectsDesktopPanelProps = {
  title: string;
  subtitle: string;
  imageLink: string;
  buttonTitle: string;
  buttonLink: string;
};

/**
 *
 * Shared Hero Component of the website
 *
 * @param {String} title - Title of the Project.
 * @param {String} subtitle - Subtitle of the Project.
 * @param {String} imageLink - Image link of the hero Project.
 * @param {String} buttonTitle - Button title of the Project.
 * @param {String} buttonLink - Button link of the Project.
 *
 */

export default function ProjectsDesktopPanel(props: ProjectsDesktopPanelProps) {
  const [texts] = useState({
    title: props.title,
    subtitle: props.subtitle,
    imageLink: props.imageLink,
    buttonTitle: props.buttonTitle,
    buttonLink: props.buttonLink,
  });
  return (
    <>
      <div style={{backgroundColor: "#dadad9"}} className="panel">
        <div className="item">
          <h1
            dangerouslySetInnerHTML={{
              __html: texts.title,
            }}
          ></h1>
          <p>{texts.subtitle}</p>
          <div className="box">
            <a href={texts.buttonLink}>
              {" "}
              <button>
                <span>{texts.buttonTitle}</span>
              </button>
            </a>
          </div>
        </div>
        <img src={texts.imageLink} alt="DanceFlavors App" />
      </div>
      <style jsx>{`
        .panel {
          padding: 12.235vw 12.103vw 10.978vw;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          box-sizing: border-box;
          padding: 10px;
        }


        .panel.description {
          padding-bottom: 60px;
        }

        .panel .item {
          position: relative;
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: left;
        }
        .panel .item h1 {
          width: clamp(32vw, 32vw, 991.92px);
          textalign: left;
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        font-style: normal;
        font-weight: 300;
        font-size: 3.43391vw;
        line-height: 122%;
        margin-bottom: 2.513vw;
        line-height: 115%;
        max-width: 800px;
        }

        .panel .item p {
          width: clamp(32vw, 32vw, 991.92px);
          textalign: left;
          color: #2d3436;
          line-height: 128%;
          max-width: 800px;

        }

        .panel .item .box {
          padding-top: 30px;
          width: clamp(32vw, 32vw, 890.43px);
          display: flex;
          flex-direction: row;
        }

        .panel .item .box button {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 400;
          font-size: 0.8em;
          line-height: 122%;
          margin-bottom: 2.513vw;
          line-height: 115%;
          display: inline-block;
          border-radius: 4px;
          border: none;
          width: 10vw;
          height: 3vw;
          text-align: center;
          transition: all 0.5s;
          cursor: pointer;
          margin-right: 15px;
        }

        .panel .item .box button span {
          cursor: pointer;
          display: inline-block;
          position: relative;
          transition: 0.5s;
        }

        .panel .item .box button span:after {
          item: "►";
          position: absolute;
          opacity: 0;
          top: 0;
          right: -20px;
          transition: 0.5s;
        }

        .panel .item .box button:hover span {
          padding-right: 25px;
        }

        .panel .item .box button:hover span:after {
          opacity: 1;
          right: 0;
        }

        .panel img {
          object-fit: cover;
          width: 35%;
        }
      `}</style>
    </>
  );
}
