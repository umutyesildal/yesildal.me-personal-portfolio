import CommonFooter from "../components/CommonFooter";
import { useEffect, useState } from "react";
import CommonHead from "../components/shared/commonHead";
import ua from 'express-useragent';
import CookieConsent from "components/CookieConsent";
import Work from "components/home/Work";
import Home from "components/home/Home";
import Expertise from "components/home/Expertise";
import parse from "node-html-parser";
import Navigation from "components/Navigation";
import Experience from "components/home/Experience";
import Contact from "components/home/Contact";


export default function Index({
  cookie,
  qrLink,
  isMobile
}) {
  const [texts] = useState({
    title: `Boost Your Crypto Earnings | Unbanked future`,
    description: `The effortless way of investing with crypto. Boost your crypto earnings with competitive DeFi-backed interest rates while investing in the future of finance.`,
    head: null,
  });

  const headElements = () => {
    if(texts.head) {
      try {
        return parse(texts.head);
      } catch (error) { 
        return null;
      }
    } else {
      return null;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    });
    observer.observe(document.querySelector("#section1"));
    observer.observe(document.querySelector("#section2"));
    setTimeout(function () {
      document.querySelector(".vl-leaderboard") &&
        (document.querySelector<HTMLElement>(".vl-leaderboard").style.display = "none");
    }, 50);
  });

 
  return (
    <>
      <CommonHead>
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-KMD99G5"></script>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Metavest | {texts.title}</title>
        <meta
          name="description"
          content={texts.description}
        />
        <link rel="icon" href="/favicon.ico" />
        {headElements()}
      </CommonHead>

      <Navigation />
      <main>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Home/>
            <Expertise/>
            <Work/>
            <Experience/>
            <Contact/>
          </div>
        </div>
      </main>
      <CommonFooter />
      <CookieConsent {...cookie} />
      <div
        id="popup-trigger"
        data-vl-widget="popupTrigger"
        style={{ opacity: 0 }}
      ></div>
    </>
  );
}

