import { useState, useEffect } from "react";
import Image from 'next/image'

export default function Section5({
  isMobile
}) {
  const [texts] = useState({
    title: `The core of <br className="mobile" /> our financial metaverse`,
    bigText: `MVST <br className="mobile" />Community`,
    item1: `<strong>AMAs and Q&As</strong> <p> Deep insights from the most influencing people in the DeFi scene with regularly held AMA and Q&A sessions. </p>`,
    item2: `<strong>Top Crypto Content</strong> <p> Get involved with the top crypto content creators and join conversation at live events. </p>`,
    item3: `<strong>MVST Summit</strong> <p> MVST Summit is a key part of our annual schedule as we believe the crypto banking is a business built on community. </p>`,
    textAfterDiamond: `The best is yet to come...`,
    item1AfterDiamond: `<span> <strong>Q2 2022</strong>Private sale </span> <p> Technical implementations for coin listings, brokerage features and gamification </p>`,
    item2AfterDiamond: `<span> <strong>Q3 2022</strong>Getting ready to scale </span> <p> Getting our infrastructure ready to scale and enhancing and maintaining of the security protocols against fraud </p>`,
    item3AfterDiamond: `<span> <strong>Q4 2022</strong>Credit card </span> <p> Offering personalized credit cards and integrations of international card networks </p>`,
    callToActionTitle: `Join the waitlist for private beta`,
    callToActionSubtitle: `The bank for growing your crypto-assets is in the making. Be a part of this journey. <strong>Book your spot in the front row.</strong>`,
    callToactionButtonText: `Join the waitlist →`,
  });

  if(typeof window !== 'undefined' && !isMobile){
    document.querySelector<HTMLElement>("#primary").style.visibility = "hidden";
  }

  let platform = "";

  useEffect(() => {
    if(typeof window !== 'undefined'){
      platform = window.navigator.platform.toLocaleLowerCase();
      if (platform.includes("win") || platform.includes("iphone") || platform.includes("ipad") || platform.includes("linux")) {
        document.querySelector<HTMLElement>("#section5 .container").style.background =
          "rgb(40, 76, 100)";
      } else {
        document.querySelector<HTMLElement>("#section5 .container").style.background =
          "rgb(44, 86, 111)";
      }
    }
  });

  return (
    <>
      <section id="section5" className="join-the-waitlist">
        <div className="container">
          <div className="top-image">
            <Image src="/img_6.svg" alt="section 6 image top" layout="responsive" width="528" height="161"></Image>
          </div>
          <div className="bottom-image">
            <Image src="/img_10.png" alt="section 6 image bottom" layout="responsive" width="1139" height="569"></Image>
          </div>
          <div className="content1">
            <span className="animation-element" dangerouslySetInnerHTML={{__html: texts.title}}></span>
            <h2 className="animation-element" dangerouslySetInnerHTML={{__html: texts.bigText}}></h2>
            <ul>
              <li className="animation-element" dangerouslySetInnerHTML={{__html: texts.item1}}></li>
              <li className="animation-element" dangerouslySetInnerHTML={{__html: texts.item2}}></li>
              <li className="animation-element" dangerouslySetInnerHTML={{__html: texts.item3}}></li>
            </ul>
          </div>
          <div className="content2">
            <video
              id="drop-video"
              className="media animation-element"
              loop
              autoPlay
              muted
            >
              <source src="./videos/drop.mp4" type="video/mp4" />
            </video>
            <span className="animation-element" dangerouslySetInnerHTML={{__html: texts.textAfterDiamond}}></span>
            <ul>
              <li className="animation-element" dangerouslySetInnerHTML={{__html: texts.item1AfterDiamond}}></li>
              <li className="animation-element" dangerouslySetInnerHTML={{__html: texts.item2AfterDiamond}}></li>
              <li className="animation-element" dangerouslySetInnerHTML={{__html: texts.item3AfterDiamond}}></li>
            </ul>
          </div>
          <hr className="mobile"/>
          <div id="join-the-waitlist"></div>
          <div className="content3">
            <div className="text">
              <h2 className="animation-element" dangerouslySetInnerHTML={{__html: texts.callToActionTitle}}></h2>
              <p className="animation-element" dangerouslySetInnerHTML={{__html: texts.callToActionSubtitle}}></p>
              <a className="primary-button animation-element" href="https://metave.st/download" id="primary" dangerouslySetInnerHTML={{__html: texts.callToactionButtonText}}></a>
            </div>
            <img
              className="preview-image animation-element"
              src="/img/image-preview.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 148px 2.44vw 0 2.44vw;
          background: linear-gradient(
              to bottom,
              #ecf6f8 0%,
              #ecf6f8 12%,
              #ffffff 12%
            )
            no-repeat;
          background-position: top;
        }

        section .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #284c64;
          width: 100%;
          box-shadow: 0px 0.264vw 0.727vw rgba(140, 237, 254, 0.33);
          border-radius: 1.653vw;
          overflow: hidden;
          position: relative;
          padding-bottom: 10.582vw;
          transition: 0.3 ease-in background;
        }

        section .container .top-image {
          top: 0;
          left: 0;
          position: absolute;
          width: 36vw;
          height: auto;
          object-fit: cover;
        }

        section .container .bottom-image {
          bottom: 0;
          right: 0;
          position: absolute;
          width: 75vw;
          max-width: 33.068vw;
          height: auto;
          object-fit: cover;
        }

        section .container .content1 {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5.224vw 0 0 0;
          width: 100%;
          overflow: hidden;
        }

        section .container .content1 span {
          opacity: 0;
          font-family: Visby, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.85185vw;
          line-height: 130%;
          text-align: center;
          color: #ffffff;
          display: block;
          margin-bottom: 2.248vw;
          animation-delay: 0s;
        }

        section .container .content1 h2 {
          opacity: 0;
          font-family: Visby, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: normal;
          font-size: 10.85vw;
          font-size: 8.85vw;
          line-height: 14.219vw;
          text-align: center;
          position: relative;
          left: -0.4vw;
          color: var(--title-color);
          white-space: nowrap;
          margin-bottom: 3.505vw;
          animation-delay: 0.3s;
        }

        section .container .content1 ul {
          display: flex;
          flex-direction: row;
          padding: 0 14.682vw;
        }

        section .container .content1 ul li {
          opacity: 0;
          display: flex;
          flex-direction: column;
          margin-right: 5.026vw;
        }

        section .content1 ul li:nth-child(1) {
          animation-delay: 0.6s;
        }

        section .content1 ul li:nth-child(2) {
          animation-delay: 0.8s;
        }

        section .content1 ul li:nth-child(3) {
          animation-delay: 1s;
        }

        section .container .content1 ul li:last-child {
          margin-right: 0;
        }

        section .container .content2 {
          font-family: Visby, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: normal;
          font-size: 1.190vw;
          line-height: 1.587vw;
          text-align: center;
          color: #ffffff;
          margin-top: 7.341vw;
        }

        section .container .content2 .media {
          opacity: 0;
          width: 5.62169vw;
          height: 8.20105vw;
          object-fit: contain;
          margin-bottom: 3.240vw;
          animation-delay: 0s;
        }

        section .container .content2.fade-in .media.animation-element {
          animation: scaleInFadeIn 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        section .container .content2 > span {
          opacity: 0;
          font-family: Visby, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.85185vw;
          line-height: 132%;
          text-align: center;
          color: #ffffff;
          display: flex;
          justify-content: center;
          margin-bottom: 3.240vw;
          animation-delay: 0.3s;
        }

        section .container .content2 ul {
          display: flex;
          flex-direction: row;
          padding: 0 11.970vw;
          justify-content: space-between;
        }

        section .container .content2 ul li {
          opacity: 0;
          display: flex;
          flex-direction: column;
          width: 27%;
        }

        section .content2 ul li:nth-child(1) {
          animation-delay: 0.6s;
        }

        section .content2 ul li:nth-child(2) {
          animation-delay: 0.9s;
        }

        section .content2 ul li:nth-child(3) {
          animation-delay: 1.2s;
        }

        section .container .content2 ul li:last-child {
          margin-right: 0;
        }

        section .container .content3 {
          margin-top: 10.052vw;
          padding: 2.744vw 0;
          display: flex;
          flex-direction: row;
          position: relative;
          z-index: 1;
        }

        section .container .content3 .text {
        }

        section .container .content3 .text h2 {
          opacity: 0;
          font-family: Visby, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: bold;
          font-size: 2.44708vw;
          line-height: 132%;
          color: var(--title-color);
          width: 38.75661vw;
          margin-bottom: 2.116vw;
          animation-delay: 0s;
        }

        section .container .content3 .text p {
          opacity: 0;
          font-family: Visby, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.65343vw;
          line-height: 132%;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          width: 35.25132vw;
          margin-bottom: 2.116vw;
          animation-delay: 0.3s;
        }

        section .content3 .primary-button {
          opacity: 0;
          width: 14.28571vw;
          animation-delay: 0.6s;
        }

        section .container .content3 .preview-image {
          opacity: 0;
          margin-left: 7.870vw;
          animation-delay: 0.9s;
          width: 25vw;
          position: relative;
          top: -5vw;
        }

        @media screen and (max-width: 1200px) {
          section {
            padding: 35px 22px;
          }

          section .container {
          }

          section .container .top-image {
            width: 75vw;
          }

          section .container .bottom-image {
            width: 120vw;
            right: -20vw;
          }

          section .container .content1 {
            position: relative;
            z-index: 1;
            max-width: 400px;
            padding-top: 48px;
            overflow: visible;
          }

          section .container .content1 span {
            font-size: 18px;
            line-height: 24px;
            font-weight: 500;
            margin-bottom: 32px;
          }

          section .container .content1 h2 {
            font-size: 8.5vw;
            line-height: 80%;
            left:0;
            margin-bottom: 32px;
          }

          section .container .content1 ul {
            flex-direction: column;
            justify-content: center;
            padding: 0 57px;
          }

          section .container .content1 ul li {
            margin-right: 0;
            margin-bottom: 46px;
          }

          section .container .content1 ul li:last-child {
            margin-right: 0;
            margin-bottom: 0;
          }



          section .container .content2 {
            margin-top: 40px;
            max-width: 400px;
          }

          section .container .content2 .media {
            width: 70px;
            height: auto;
            margin-bottom: 32px;
          }

          section .container .content2 span {
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 32px;
            margin-left: 16px;
            margin-right: 16px;
          }

          section .container .content2 ul {
            flex-direction: column;
            padding: 0 57px;
            width: 100%;
          }

          section .container .content2 ul li {
            width: 100%;
            margin-bottom: 32px;
          }

          section .container .content2 ul li:last-child {
            margin-bottom: 0;
          }

          section .container hr {
            margin-top: 62px;
            width: 80%;
            height: 1px;
            border: none;
            background: linear-gradient(to right, #a0e2e0, #ffffff, #ed406a);
          }

          section .container .content3 {
            padding: 37px 26px;
            margin: 0;
            width: 100%;
            max-width: 330px;
          }

          section .container .content3 .text {
          }

          section .container .content3 .preview-image {
            display: none;
          }

          section .container .content3 .text h2 {
            font-size: 27.833px;
            line-height: 110%;
            width: 100%;
            text-align: center;
            margin-bottom:16px;
          }

          section .container .content3 .text p {
            font-size: 18.8061px;
            line-height: 25px;
            width: 100%;
            text-align: center;
            margin-bottom:32px;
          }

          section .container .content3 .text .primary-button {
            margin: 0;
            width: 100%;
            font-size: 15.5682px;
            line-height: 21px;
            justify-content: center;
          }
        }

        @media screen AND (min-width: 526px) AND (max-width: 1199px) {
          section .container .content1 span {
            font-size: 24px;
            line-height: 30px;
          }

          section .container .content1 h2 {
            font-size: min(65px, 9vw);
            line-height: 80%;
          }



          section .container .content2 span {
            font-size: 24px;
            line-height: 30px;
          }

          section .container .content3 {
            padding-top: 80px;
          }
        }
      `}</style>
      <style jsx global>{` 
      #section5 .container .content1 ul li strong {
          font-family: Visby, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: bold;
          font-size: 1.19047vw;
          line-height: 135%;
          text-align: center;
          color: #ffffff;
          margin-bottom: 1.388vw;
        }

        #section5 .container .content1 ul li p {
          font-family: Visby, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.19047vw;
          line-height: 135%;
          text-align: center;
          color: #ffffff;
        }  
        #section5 .container .content2 ul li span {
          font-family: Visby, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.19047vw;
          line-height: 135%;
          text-align: center;
          color: var(--title-color);
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-bottom: 1.587vw;
          opacity: 1;
        }

        #section5 .container .content2 ul li span strong {
          font-weight: 500;
        }

        #section5 .container .content2 ul li p {
          font-family: Visby, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.19047vw;
          line-height: 135%;
          text-align: center;
          color: #ffffff;
        }

        #section5 .container .content3 .text p strong {
          color: #8cedfe;
          color: color(display-p3 0.549 0.929 0.996);
          font-weight: 300;
        }


        @media screen and (max-width: 1200px) { 
          #section5 .container .content1 ul li strong {
            font-size: 14px;
            line-height: 18px;
            font-weight: 500;
          }

          #section5 .container .content1 ul li p {
            font-size: 14px;
            line-height: 18px;
          }
          #section5 .container .content2 ul li span {
            font-size: 14px;
            line-height: 18px;
            margin-bottom: 11px;
          }

          #section5 .container .content2 ul li p {
            font-size: 14px;
            line-height: 18px;
          }
        }
        @media screen AND (min-width: 526px) AND (max-width: 1199px) {
          #section5  .container .content1 ul li strong {
            font-size: 20px;
            line-height: 30px;
          }

          #section5  .container .content1 ul li p {
            font-size: 20px;
            line-height: 30px;
          }
          #section5 .container .content2 ul li span {
            font-size: 20px;
            line-height: 30px;
          }

          #section5 .container .content2 ul li p {
            font-size: 20px;
            line-height: 30px;
          }
        }
      `}</style>
    </>
  );
}
