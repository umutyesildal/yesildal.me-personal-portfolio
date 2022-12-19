import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useRef, useEffect, useState } from 'react';
gsap.registerPlugin(ScrollTrigger);

export default function Work2() {

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
          <div>
            <h1>Horizontal snapping sections</h1>
            <p>
              Scroll vertically to scrub the horizontal animation. It also
              dynamically snaps to the sections in an organic way based on the
              velocity. The snapping occurs based on the natural ending position
              after momentum is applied, not a simplistic "wherever it is when
              the user stops".
            </p>
            <div className="scroll-down">
              Scroll down<div className="arrow"></div>
            </div>
          </div>
        </div>
        <section className="panel" ref={(e) => createPanelsRefs(e, 1)}>
        <h1>Horizontal snapping sections</h1>
        <img src="/illustrations/hello_illustration.png" alt="" />
        </section>
        <section className="panel" ref={(e) => createPanelsRefs(e, 2)}>
        <h1>Horizontal snapping sections</h1>
        <img src="/illustrations/hello_illustration.png" alt="" />

        </section>
        <section className="panel" ref={(e) => createPanelsRefs(e, 3)}>
        <h1>Horizontal snapping sections</h1>
        <img src="/illustrations/hello_illustration.png" alt="" />

        </section>
        <section className="panel" ref={(e) => createPanelsRefs(e, 4)}>
        <h1>Horizontal snapping sections</h1>
        <img src="/illustrations/hello_illustration.png" alt="" />

        </section>
        <section className="panel" ref={(e) => createPanelsRefs(e, 5)}>
        <h1>Horizontal snapping sections</h1>
        <img src="/illustrations/hello_illustration.png" alt="" />

        </section>
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
      
      .panel.align-top {
        align-items: flex-start;
      }
      
      .panel h1 {
        font-size: 1.8em;
        color: black;
        font-weight: 300;
        margin: 0 auto;
      }
      .panel.description {
        padding-bottom: 60px;
      }
      .panel p
      .panel li {
        color: black;
        font-weight: 400;
        text-align: left;
        font-size: 0.8em;
        line-height: 1.5em;
        margin: 0.3em 0 1em 0;
      }
      .panel p strong,
      .panel li strong {
        color: white;
        font-weight: 400;
      }
      .panel p code,
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
        color: white;
        position: relative;
        box-sizing: border-box;
        padding: 10px;
      }
      
      body {
        overflow-x: hidden;
        overflow-y: scroll;
      }
      
      h1,
      h2,
      p,
      li {
        max-width: 800px;
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
      
      `}</style>
    </>
  );
}
