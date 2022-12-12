import { useState } from "react";

export default function Section3() {
  const [texts] = useState({
    title: `Security is tight here`,
    subtitle:
`Your money is protected with the most advanced tech around.`,
    item1:
      `<strong>Battle-tested Architecture</strong><p>MPC-powered custody solution partners</p>`,
    item2:
      `<strong>Data Protection</strong> <p> Granular access control with leakproof security infrastructure </p>`,
    item3:
      `<strong>Secure by Design</strong> <p> Bio-protection and 2FA to tighten up your account's security </p>`,
    item4:
      `<strong>Continuous Monitoring </strong> <p> Built-in anomaly detection algorithms for the system security </p>`,
  });

  return (
    <>
      <section id="section3">
        <div className="content">
          <div className="head">
            <h2 className="animation-element" dangerouslySetInnerHTML={{ __html: texts.title }}></h2>
            <p className="animation-element" dangerouslySetInnerHTML={{ __html: texts.subtitle }}></p>
          </div>
          <div className="bottom">
            <ul>
              <li className="animation-element">
                <img
                  width="32"
                  height="32"
                  src="/security_icon_1.svg"
                  alt="Battle-tested Architecture"
                />
                <div dangerouslySetInnerHTML={{ __html: texts.item1 }}></div>
              </li>
              <li className="animation-element">
                <img
                  width="32"
                  height="32"
                  src="/security_icon_2.svg"
                  alt="icon Data Protection"
                />
                <div dangerouslySetInnerHTML={{ __html: texts.item2 }}></div>
              </li>
              <li className="animation-element">
                <img
                  width="32"
                  height="32"
                  src="/security_icon_3.svg"
                  alt="icon Secure by Design"
                />
                <div dangerouslySetInnerHTML={{ __html: texts.item3 }}></div>
              </li>
              <li className="animation-element">
                <img
                  width="32"
                  height="32"
                  src="/security_icon_4.svg"
                  alt="icon"
                />
                <div dangerouslySetInnerHTML={{ __html: texts.item4 }}></div>
              </li>
            </ul>
          </div>
          <img className="media" src="/img_4.png" alt="section 4 image" />
        </div>
      </section>
      <style jsx>{`
        section {
          position: relative;
          display: flex;
          flex-direction: row;
          justify-content: center;
          padding: 2vw 12.103vw 2vw 10.317vw;
          margin-top: 183px;
          background: linear-gradient(
              to top,
              #ecf6f8 0%,
              #ecf6f8 20%,
              #ffffff 20%
            )
            no-repeat;
          background-position: top;
        }

        section .content {
          position: relative;
          display: flex;
          flex-direction: column;
          border: 1px solid #8cedfe;
          box-sizing: border-box;
          border-radius: 3.968vw;
          padding: 4.431vw 3.571vw;
          width: 75.79365vw;
          background: white;
          filter: drop-shadow(0px 0.264vw 0.727vw rgba(140, 237, 254, 0.33));
        }

        section .content .head {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        section .content .head h2 {
          opacity: 0;
          font-family: TWK Everett, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 500;
          font-size: 3.10846vw;
          line-height: 100%;
          color: var(--title-color);
          width: 18.25396vw;
          margin-right: 3.306vw;
          animation-delay: 0s;
        }

        section.fade-in h2.animation-element,
        section.fade-in p.animation-element {
          animation: onlyfadeIn 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        section .content .head p {
          opacity: 0;
          font-family: TWK Everett, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.45502vw;
          line-height: 130%;
          color: #32bdd3;
          width: 19.57671vw;
          animation-delay: 0s;
        }

        section .content .bottom {
          margin-top: 7.275vw;
          display: flex;
          flex-direction: row;
        }

        section .content ul {
          display: flex;
          flex-direction: row;
          margin-right: 0;
          justify-content: space-between;
        }

        section .content ul li {
          opacity: 0;
          display: flex;
          flex-direction: column;
          width: 23%;
          font-family: TWK Everett, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.0582vw;
          line-height: 163%;
          color: #234d63;
        }

        section.fade-in .content ul li {
          animation: slideUpFadeIn 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        section .content ul li:nth-child(1) {
          animation-delay: 0.6s;
        }

        section .content ul li:nth-child(2) {
          animation-delay: 0.9s;
        }

        section .content ul li:nth-child(3) {
          animation-delay: 1.2s;
        }

        section .content ul li:nth-child(4) {
          animation-delay: 1.5s;
        }

        section .content ul li img {
          margin-bottom: 0.396vw;
        }

        section .content .media {
          position: absolute;
          width: 8.994vw;
          height: 7.796vw;
          top: 2.645vw;
          right: 2.645vw;
          object-fit: cover;
        }

        @media screen and (max-width: 1200px) {
          section {
            padding: 35px 22px;
            margin-top: 51px;
          }

          section .content {
            width: 100%;
            padding: 45px 33px;
          }

          section .content .head {
            flex-direction: column;
            align-items: flex-start;
          }

          section .content .head h2 {
            width: 75%;
            font-size: 7.2vw;
            line-height: 1.2;;
            margin-right: 0;
            margin-bottom: 20px;
            z-index: 1;
          }

          section .content .head p {
            width: 100%;
            font-size: 14px;
            line-height: 18px;
          }

          section .content .bottom {
            flex-direction: column;
            margin-top: 40px;
          }

          section .content .bottom ul {
            flex-direction: column;
          }

          section .content .bottom ul li {
            width: 100%;
            display: flex;
            flex-direction: row;
            margin-bottom: 16px;
            font-size: 13.5054px;
            line-height: 18px;
          }

          section .content .bottom ul li img {
            margin-right: 16px;
          }

          section .content .media {
            width: 80px;
            height: auto;
            top: 18px;
            right: 18px;
          }
        }

        @media screen AND (min-width: 526px) AND (max-width: 1199px) {
          section .content .head h2 {
            font-size: 35px;
          }

          section.fade-in .content .head p {
            font-size: 20px;
            line-height: 30px;
          }

          section .content .media {
            width: 135px;
          }

          section .content .bottom ul li {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 16px;
          }

          section .content .bottom ul li img {
            margin-right: 16px;
          }

          section .content .bottom ul li div {
            display: flex;
            flex-direction: column;
          }

        }
      `}</style>
      <style jsx global>{`
        #section3 .content ul li strong {
          font-weight: 500;
        }


        @media screen AND (min-width: 526px) AND (max-width: 1199px) {
          #section3 .content .bottom ul li div strong{
            font-size: 18px;
            line-height: 1.2;
          }
        }
      `}</style>
    </>
  );
}
