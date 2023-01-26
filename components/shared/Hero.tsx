
/**
 *
 * Shared Hero Component of the website
 *
 * @param {String} title - Title of the hero component.
 * @param {String} subtitle - Subtitle of the hero component.
 * @param {String} background - Background image of the hero component.
 * @param {String} backgroundStyle - The style of Background of the hero component.
 *
 */

export default function Hero(props) {
  const title = props.title;
  const subtitle = props.subtitle;
  const background = props.background;
  const backgroundStyle = props.backgroundStyle;
  return (
    <>
      <div className="container" style={props?.style}>
        {background && (
          <div className="bg-container">
            <img src={background} style={backgroundStyle} />
          </div>
        )}
        <h2>{title}</h2>
        {subtitle && <h5>{subtitle}</h5>}
      </div>

      <style jsx>{`
        .container {
          width: 100vw;
          height: 48vw;
          padding-top: 8vw;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          position: relative;
        }

        .container h2 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 500;
          line-height: 135%;
          color: var(--title-color);
          margin-bottom: 2.777vw;
          font-size: min(65px, 9vw);
          line-height: 105%;
          z-index: 1;
          width: 60%;
          text-align: center;
        }

        .container h5 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 400;
          color: #2d3436;
          margin-top: 2vw;
          font-size: min(25px, 3.6vw);
          z-index: 1;
          padding-left: 10vw;
          padding-right: 10vw;
          text-align: center;
          width: 80%;
        }

        .container .bg-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 60vw;
          z-index: -1;
          overflow-x: hidden;
        }

        .container .bg-container img {
          width: 100%;
          position: relative;
          height: 100%;
          object-fit: cover;
        }

        @media screen and (max-width: 526px) {
          .container {
            min-height: 40vh;
            max-height: 80vh;
            height: unset;
            padding-top: 40px;
            padding-bottom: 40px;
          }

          .container h2 {
            margin-top: 10vh;
            width: 75%;
          }

          .container .bg-container {
            top: 4vh;
            height: 100%;
          }
        }
      `}</style>
    </>
  );
}
