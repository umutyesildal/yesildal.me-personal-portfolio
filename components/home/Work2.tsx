import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useRef, useEffect, useState } from 'react';
gsap.registerPlugin(ScrollTrigger);

export default function Work2() {
  const [texts] = useState({
    title: `<strong>Work,</strong> my previous projects.`,
    subtitle: 'Here are the projects that i have worked on before.'
  });
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;

    gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + 1080*panels.current.length
      }
    });
  }, []);


  return (
    <>
    <>
      <div className="container" ref={panelsContainer}>
        <div
          className="description panel blue"
          ref={(e) => createPanelsRefs(e, 0)}
        >
          <div className="firstPage">
            <h1 dangerouslySetInnerHTML={{ __html: texts.title }}></h1>
            <p>
              {texts.subtitle}
            </p>
            <div className="scroll-down">
              Scroll down<div className="arrow"></div>
            </div>
          </div>
        </div>
        <section className="panel" ref={(e) => createPanelsRefs(e, 1)}>
        <h1>Danceflavors App</h1>
        <p>Şöyle böyle</p>
        <img src="/illustrations/hello_illustration.png" alt="" />
        </section>
        <section className="panel" ref={(e) => createPanelsRefs(e, 2)}>
        <h1>Metavest Website</h1>
        <p>metavest.app</p>
        <img src="/illustrations/hello_illustration.png" alt="" />

        </section>
        <section className="panel" ref={(e) => createPanelsRefs(e, 3)}>
        <h1>Seppuku NFT</h1>
        <p>Şöyle böyle</p>
        <img src="/illustrations/hello_illustration.png" alt="" />

        </section>
        <section className="panel" ref={(e) => createPanelsRefs(e, 4)}>
        <h1>Mercedes Assistify</h1>
        <p>Şöyle böyle</p>
        <img src="/illustrations/hello_illustration.png" alt="" />
        </section>
        <div
          className="description panel blue"
          ref={(e) => createPanelsRefs(e, 5)}
        >
          <div className="lastPage">
          <h1 dangerouslySetInnerHTML={{ __html: `<strong>Last,</strong> but not least.` }}></h1>
                <div className="wrapper">
                <div className="box a">
                  <h4>Daiday</h4>
                  <p>A simple mood tracker that you can use daily.</p>
                </div>
                <div className="box b">
                <h4>Cointicker</h4>
                  <p>Coin portfolio app that you can track your portfolio worth.</p>
                </div>
                <div className="box c">
                <h4>Sharify</h4>
                  <p>Waste-save app aims to connect people exchange items without fee.</p>
                </div>
                <div className="box d">
                <h4>Crillo</h4>
                  <p>Time tracking app, based on pomodoro technic.</p>
                </div>
                <div className="box e">
                <h4>Jumper</h4>
                  <p>An unfunny game that i made when i was trying out Unity.</p>
                </div>
                <div className="box f">
                <h4>Getir Clone</h4>
                  <p>Self explanatory Getir clone</p>
                </div>
                </div>
          </div>
        </div>
      </div>
    </>
      <style jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      
      .container {
        width: 600%;
        height: 100vh;
        display: flex;
        flex-wrap: nowrap;
      }


      p {
        font-family: Visby, -apple-system, BlinkMacSystemFont,
          "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji";
        font-style: normal;
        font-weight: 300;
        font-size: 1.43391vw;
        line-height: 122%;
        color: #234d63;
        margin-bottom: 2.513vw;
        animation-delay: 0s;
        padding-top: 10px;
      }
      
      .panel.align-top {
        align-items: flex-start;
      }
      
      .panel h1 {
        font-family: Visby, -apple-system, BlinkMacSystemFont,
        "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji";
        font-size: 1.8em;
        color: black;
        font-weight: 300;
        margin: 0 auto;
        color: #234d63;
      }

      .panel img {
        height: 30%;

      }
      .panel.description {
        padding-bottom: 60px;
      }
      .panel li {
        color: black;
        font-weight: 400;
        text-align: left;
        font-size: 0.8em;
        line-height: 1.5em;
        margin: 0.3em 0 1em 0;
      }

      .panel li code {
        background-color: rgba(255, 255, 255, 0.15);
        padding: 2px 4px;
        border-radius: 5px;
      }
      .panel li {
        margin: 0;
      }
      
      html,
      body {
        margin: 0;
        height: 100%;
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
        font-family: "Signika Negative", sans-serif, Arial;
      }
      
      .panel {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-size: 1.5em;
        text-align: center;
        position: relative;
        box-sizing: border-box;
        padding: 10px;
      }
      
      body {
        overflow-x: hidden;
        overflow-y: scroll;
      }
      
      li {
        max-width: 800px;
      }

      .wrapper {
        padding-top: 50px;
        display: grid;
        grid-template-columns: 200px 200px 200px;
        grid-gap: 40px;
        background-color: #fff;
        color: #444;
      }
      
      .box {
        font-family: Visby, -apple-system, BlinkMacSystemFont,
        "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji";
        border-radius: 5px;
        padding: 20px;
        font-size: 150%;
        background-color: #c1f3e7;
      }
      
      .a {
          grid-column-start: 2;
          grid-column-end: 3;
          grid-row-start: 1;
          grid-row-end: 2;
        }
        .b {
          grid-column-start: 2;
          grid-column-end: 3;
          grid-row-start: 2;
          grid-row-end: 3;
        }
        .c {
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 2;
          grid-row-end: 3;
        }
        .d {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 1;
          grid-row-end: 2;
        }
        .e {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 2;
          grid-row-end: 3;
        }
        .f {
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 1;
          grid-row-end: 2;
        }
      
      /* HEADER */
      header {
        position: fixed;
        top: 0px;
        left: 0px;
        padding: 6px 10px 10px 10px;
        border-bottom-right-radius: 26px;
        z-index: 100;
        background-color: rgba(0, 0, 0, 0.5);
      }
      
      /* HEADINGS */
      .header-section {
        padding: 0 15px;
        text-align: center;
        margin: 40vh auto 50vh;
      }
      
      /* SCROLL DOWN */
      .scroll-down {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translate(-50%, 0);
        color: black;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 16px;
        overflow: visible;
      }
      .scroll-down .arrow {
        position: relative;
        top: -4px;
        margin: 0 auto;
        width: 20px;
        height: 20px;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPHBhdGggZmlsbD0iYmxhY2siIGQ9Ik00ODMuMiwxOTIuMmMtMjAuNS0yMC41LTUzLjUtMjAuOC03My43LTAuNkwyNTcsMzQ0LjFMMTA0LjUsMTkxLjZjLTIwLjItMjAuMi01My4yLTE5LjktNzMuNywwLjYKCWMtMjAuNSwyMC41LTIwLjgsNTMuNS0wLjYsNzMuN2wxOTAsMTkwYzEwLjEsMTAuMSwyMy40LDE1LjEsMzYuOCwxNWMxMy4zLDAuMSwyNi43LTQuOSwzNi44LTE1bDE5MC0xOTAKCUM1MDMuOSwyNDUuNyw1MDMuNywyMTIuNyw0ODMuMiwxOTIuMnoiLz4KPC9zdmc+);
        background-size: contain;
      }

      /* SCROLL UP */
      .scroll-up {
        position: absolute;
        top: 70px;
        left: 50%;
        transform: translate(-50%, 0);
        color: black;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 16px;
        overflow: visible;
      }
      .scroll-up .arrow {
        position: relative;
        top: 4px;
        margin: 0 auto;
        width: 20px;
        height: 20px;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPHBhdGggZmlsbD0iYmxhY2siIGQ9Ik00ODMuMiwxOTIuMmMtMjAuNS0yMC41LTUzLjUtMjAuOC03My43LTAuNkwyNTcsMzQ0LjFMMTA0LjUsMTkxLjZjLTIwLjItMjAuMi01My4yLTE5LjktNzMuNywwLjYKCWMtMjAuNSwyMC41LTIwLjgsNTMuNS0wLjYsNzMuN2wxOTAsMTkwYzEwLjEsMTAuMSwyMy40LDE1LjEsMzYuOCwxNWMxMy4zLDAuMSwyNi43LTQuOSwzNi44LTE1bDE5MC0xOTAKCUM1MDMuOSwyNDUuNyw1MDMuNywyMTIuNyw0ODMuMiwxOTIuMnoiLz4KPC9zdmc+);
        background-size: contain;
        transform: rotate(180deg);

      }
      
      `}</style>
    </>
  );
}
