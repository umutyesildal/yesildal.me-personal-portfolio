import ImagePreview from "components/visual/AppPreview";
import { useState, useEffect, useRef } from "react";

/**
 *
 * Home of the app. First page you see 
 *
 * @param {String} title - Title of the component.
 * @param {String} subtitle - Subtitle of the component.
 *
 */

export default function Home() {
  const [texts] = useState({
    title: "Umut Yunus Yeşildal",
    subtitle:
      "I am a Software Developer focused on drifting with the wind of newly developed tech.<br/><br/> Jack of all trades, master of none, but oftentimes better than a master of one.",
  });
  return (
    <>
      <div className={`intro`}>
        <div className="content">
          <h1>{texts.title}</h1>
          <p
            style={{ opacity: 0 }}
            dangerouslySetInnerHTML={{ __html: texts.subtitle }}
          ></p>
        </div>
        <div className={`preview-container ${"shown-preview"}`}>
          <div className="preview-inner">
            <ImagePreview />
          </div>
        </div>
      </div>

      <style jsx>{`
        .intro {
          position: relative;
          display: flex;
          padding: 12.235vw 12.103vw 10.978vw;
          background: #2d3436;
          padding-right: 0;
        }

        .intro .content {
          color: white;
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }

        .intro .content h1 {
          opacity: 0;
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 500;
          font-size: clamp(5.0264vw, 5.0264vw, 154.5px);
          line-height: 115%;
          color: color(display-p3 0.549 0.929 0.996);
          width: clamp(32vw, 32vw, 991.92px);
          margin-bottom: 1.435vw;
          animation: fadeIn 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          animation-delay: 1.5s;
        }

        .intro .content p {
          opacity: 0;
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: clamp(1.521164vw, 1.521164vw, 46.76px);
          line-height: 128%;
          width: clamp(32vw, 32vw, 890.43px);
          margin-bottom: 2.248vw;
          animation: fadeIn 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          animation-delay: 1.8s;
        }

        .preview-container {
          flex-grow: 1;
          z-index: 0;
          opacity: 0;
          transform: translateY(8vh);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 1s ease;
        }

        .shown-preview {
          opacity: 1;
          transform: translateY(-46vh);
          position: relative;
          top: calc(var(--scroll-page) * -250px);
        }

        @media screen AND (min-width: 992px) {
          .preview-container {
            transform: translateY(3vh);
          }
          .shown-preview {
            transform: translateY(0);
            top: calc(var(--scroll-page) * -100px);
          }

          .intro {
            overflow: hidden;
          }
        }

        @media screen and (max-width: 992px) {
          .intro {
            padding: 23px 22px;
            height: 101vh !important;
            border-radius: 0 !important;
            animation: none;
            flex-direction: column;
          }
          .intro .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: stretch;
            margin-left: auto;
            margin-right: auto;
            padding-top: 64px;
            min-height: 92vh;
          }

          .intro .content h1 {
            font-size: 9vw;
            width: 100%;
            line-height: 120%;
            font-weight: 500;
            text-align: center;
            text-shadow: 0 0 24px #1e4b6b88;
            margin-bottom: 16px;
          }

          .intro .content p {
            font-size: 3.5vw;
            line-height: 128%;
            width: 100%;
            padding: 0 15px;
            font-weight: 300;
            text-align: center;
          }

          .preview-inner {
            max-width: 75%;
            border-radius: 10vw;
          }
        }


        @media screen AND (min-width: 1921px) {
          .intro .content h1 {
            font-size: 4vw;
            width: 25.807vw;
          }

          .intro .content p {
            font-size: 1.197vw;
            width: 23.177vw;
          }
        }

        @media screen AND (max-width: 526px) {

          .intro {
            padding-left: 4vw;
            padding-right: 4vw;
            flex-direction: column;
          }

          .intro .content h1 {
            font-size: 12vw;
            width: 100%;
            line-height: 120%;
            font-weight: 500;
            text-align: center;
            text-shadow: 0 0 24px #1e4b6b88;
            margin-bottom: 16px;
          }

          .intro .content p {
            font-size: 4vw;
            line-height: 128%;
            width: 100%;
            padding: 0 15px;
            font-weight: 300;
            text-align: center;
          }
        }
      `}</style>
      <style jsx global>{`
        .intro .content .action span strong {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 400;
          font-size: clamp(1.25661vw, 1.25661vw, 38.63px);
          line-height: 128%;
          color: #fdbab2;
        }

        @media screen and (max-width: 992px) {
          .intro .content .action span strong {
            font-size: 15.6443px;
            line-height: 128%;
          }
        }

        @media screen AND (min-width: 526px) AND (max-width: 992px) {
          .intro .content .action span strong {
            font-size: 20px;
          }
        }

        @media screen AND (min-width: 1921px) {
          .intro .content .action span strong {
            font-size: 1vw;
          }
        }
      `}</style>
    </>
  );
}
