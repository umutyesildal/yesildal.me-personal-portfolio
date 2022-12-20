import { useState } from "react";

export default function Section6() {
  const [texts] = useState({
    informationBoxText:
      ` <span>For detailed information</span> <strong>Whitepaper Presentation 1.0</strong> `,
    informationBoxLink:
      `https://mvst-public.s3.eu-central-1.amazonaws.com/docs/Whitepaper.pdf`,
    partnersTitleText: 'Partners',
  });
  return (
    <>
      <section id="section6">
        <div className="content">
          <h2>{texts.partnersTitleText}</h2>
          <ul>
            <li>
              <img src="https://mvst-public.s3.eu-central-1.amazonaws.com/landing/partners/bilira.png" alt="bilira" />
            </li>
            <li>
              <img src="https://mvst-public.s3.eu-central-1.amazonaws.com/landing/partners/transfero.png" alt="transfero" />
            </li>
            <li>
              <img src="https://mvst-public.s3.eu-central-1.amazonaws.com/landing/partners/brztoken.png" alt="brztoken" />
            </li>
            <li>
              <img src="https://mvst-public.s3.eu-central-1.amazonaws.com/landing/partners/fireblocks.png" alt="fireblocks" />
            </li>
            <li>
              <img src="https://mvst-public.s3.eu-central-1.amazonaws.com/landing/partners/sumsub.png" alt="sumsub" />
            </li>
            <li>
              <img src="https://mvst-public.s3.eu-central-1.amazonaws.com/landing/partners/credix.png" alt="credix" />
            </li>
            <li>
              <img src="https://mvst-public.s3.eu-central-1.amazonaws.com/landing/partners/floatcapital.png" alt="floatcapital" />
            </li>
            <li>
              <img src="https://mvst-public.s3.eu-central-1.amazonaws.com/landing/partners/saxecap.png" alt="saxecap" />
            </li>
            <li>
              <img src="https://mvst-public.s3.eu-central-1.amazonaws.com/landing/partners/gsr.png" alt="gsr" />
            </li>
          </ul>
          <div className="information-box">
            <div
              className="holder"
              onClick={() => window.open(texts.informationBoxLink)}
            >
              <img className="preview" src="/informationbox_image.png" alt="" />
              <div
                className="text"
                dangerouslySetInnerHTML={{ __html: texts.informationBoxText }}
              ></div>
              <img className="icon" src="./link_icon.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        section {
          padding: 5.687vw 0 0 0;
        }

        section .content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        section .content h2 {
          font-family: Visby, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.85185vw;
          line-height: 135%;
          color: #fe696f;
          margin-bottom: 2.777vw;
        }

        section .content ul {
          width: 85%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
        }

        section .content ul li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 20%;
          max-width: 16.005vw;
          height: 19vh;
          max-height: 7.738vw;
          margin-bottom: 0.859vw;
          background: #f9f9fb;
          border: 0.132vw solid white;
          border-radius: 0.661vw;
          padding: 0;
          margin-right: 0.79365vw;
        }

        section .content ul li img {
          width: 100%;
        }

        section .content .information-box {
          width: 80%;
          margin: 4.166vw 0 0 0;
          padding: 3.835vw 0;
          border-top: 0.066vw solid #8cedfe;
          justify-content: center;
          display: flex;
        }

        section .content .information-box .holder {
          display: flex;
          flex-direction: row;
          border: 0.066vw solid #eeeef2;
          box-sizing: border-box;
          border-radius: 0.661;
          padding: 1.19vw 0 0.793vw 1.19vw;
          min-width: 20.80333vw;
          position: relative;
          transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
          cursor: pointer;
        }

        section .content .information-box .holder:hover {
          border: 0.066vw solid #fe696f;
        }

        section .content .information-box .holder img.preview {
          margin-right: 1.785vw;
          position: relative;
          top: -2.6455vw;
          width: 3.96vw;
          margin-bottom: -2.6455vw;
        }

        section .content .information-box .holder img.icon {
          position: absolute;
          right: 0.529vw;
          top: 0.529vw;
          width: 0.595vw;
        }

        section .content .information-box .holder .text {
          justify-content: flex-start;
          display: flex;
          flex-direction: column;
        }

        @media screen and (max-width: 992px) {
          section {
            padding-top: 20px;
          }

          section .content h2 {
            font-size: 28px;
            line-height: 37px;
            margin-bottom: 30px;
          }

          section .content ul {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
          }

          section .content ul li {
            width: 50%;
            flex: 1 1;
            min-width: 45%;
            padding: 0;
            position: relative;
            margin-bottom: 6vh;
          }

          section .content ul li img {
            width: 100%;
          }

          section .content .information-box {
            margin-top: 47px;
            padding: 40px 0;
            width: 90%;
            max-width: 290px;
          }

          section .content .information-box .holder {
            width: 100%;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          section .content .information-box .holder img.preview {
            top: -20px;
            height: 80px;
            width: auto;
            object-fit: contain;
            margin-right: 20px;
          }
        }

        @media screen AND (min-width: 526px) AND (max-width: 992px) {
          section .content ul li {
            width: 32%;
            min-width: 32%;
            margin-bottom: 6vh;
          }
          section .content .information-box {
            max-width: none;
            padding: 70px 0 40px;
          }
          section .content .information-box .holder {
            max-width: 415px;
            height: 95px;
          }

          section .content .information-box .holder img.preview {
            top: -45px;
            height: 105px;
          }

          section .content .information-box .holder .text span {
            font-size: 16px;
          }

          section .content .information-box .holder .text strong {
            font-size: 18px;
          }
        }

        @media screen AND (min-width: 992px) AND (max-width: 1199px) {
          section .content .information-box {
            padding: 4.125vw 0;
          }
          section .content .information-box .holder {
            padding: 1.19vw;
          }
          section .content .information-box .holder img.preview {
            width: 5.96vw;
          }
          section .content .information-box .holder img.icon {
            width: 0.895vw;
          }
        }
      `}</style>
      <style jsx global>{`
        #section6 .content .information-box .holder .text span {
          font-size: 0.79365vw;
          line-height: 140%;
          font-weight: 300;
          color: #fe696f;
        }

        #section6 .content .information-box .holder .text strong {
          font-weight: 300;
          font-size: 0.992vw;
          line-height: 140%;
          color: #234d63;
          margin-right: 0.661vw;
        }
        @media screen and (max-width: 992px) {
          #section6 .content .information-box .holder .text span {
            font-size: 12px;
          }

          #section6 .content .information-box .holder .text strong {
            font-size: 13px;
          }
        }

        @media screen AND (min-width: 992px) AND (max-width: 1199px) {
          #section6 .content .information-box .holder .text span {
            font-size: 16px;
          }
          #section6 .content .information-box .holder .text strong {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}
