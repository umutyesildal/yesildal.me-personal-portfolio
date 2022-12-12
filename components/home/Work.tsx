import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const [texts, setTexts] = useState({
    title: `Daha önce<br>çalıştığım projeler`,
    item1: `bi şey bir şey projesi`,
    item2: `bi şey bir şey projesi`,
    item3: `bi şey bir şey projesi`,
    item4: `bi şey bir şey projesi`,
    item5: `bi şey bir şey projesi`,

  });

  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  let windowWidth = 1512;
  let windowHeight = 900;
  let media = null;
  let listElements = null;
  let contentTextArea = null;
  let scrollPos = {
    current: 0,
    next: 0,
  };
  let images = [];

  if (typeof window !== "undefined") {
    for (let i = 0; i <= 191; i++) {
      let _image = new Image();
      _image.src = `https://mvst-public.s3.eu-central-1.amazonaws.com/landing/${i}.jpg`;
      _image.alt = `section 1 image-${i}`;
      images.push(_image);
    }
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    if (window.innerWidth > 992) {
      media = document.querySelector("#section1 .media");
    } else {
      media = document.querySelector("#section1 .media.mobile");
    }
    listElements = document.querySelectorAll("#section1 ul li");
    contentTextArea = document.querySelector("#section1 .content");
  }

  let interval = null;

  useEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#section1",
        pin: true,
        start: windowWidth > 992 ? "top center" : "top top",
        end: windowHeight * 2,
        toggleActions: "play none none reverse",
        onUpdate: (self) => {
          let currentPosition = self.progress.toFixed(2);
          scrollPos.next = Math.min(
            Math.max(0, Math.floor(currentPosition * 191)),
            191
          );

          if (!interval) {
            interval = setInterval(() => {
              if (scrollPos.next != scrollPos.current) {
                if (scrollPos.next > scrollPos.current) {
                  scrollPos.current += 1;
                } else {
                  scrollPos.current -= 1;
                }
                media.querySelector("img")?.remove();
                if (images[scrollPos.current]) {
                  media?.appendChild(images[scrollPos.current]);
                }
              } else {
                clearInterval(interval);
                interval = null;
              }
            }, 20);
          }
          if (windowWidth > 992) {
            let contentTextAreaTranslate = currentPosition * 200;
            contentTextAreaTranslate > 50 && (contentTextAreaTranslate = 50);
            contentTextArea.style.transform = `translate(0, -${contentTextAreaTranslate}%)`;
          }
          let activeListItem = document.querySelector("#section1 ul li.active");
          activeListItem && activeListItem.classList.remove("active");
          if (currentPosition > 0.8) {
            listElements[4].classList.add("active");
          } else if (currentPosition > 0.6) {
            listElements[3].classList.add("active");
          } 
          else if (currentPosition > 0.4) {
            listElements[2].classList.add("active");
          }  else if (currentPosition > 0.2) {
            listElements[1].classList.add("active");
          } 
          else {
            listElements[0].classList.add("active");
          }
        },
      },
    });
  }, []);

  return (
    <>
      <section id="section1" ref={el}>
        <div className="media">
          <img src="/section1/0.jpg" alt="section 1 image" />
        </div>
        <div className="content">
          <h2 dangerouslySetInnerHTML={{ __html: texts.title }}></h2>
          <div className="media mobile">
            <img src="/section1/0.jpg" alt="section 1 image" />
          </div>
          <ul>
            <li
              className="active"
              dangerouslySetInnerHTML={{ __html: texts.item1 }}
            ></li>
            <li dangerouslySetInnerHTML={{ __html: texts.item2 }}></li>
            <li dangerouslySetInnerHTML={{ __html: texts.item3 }}></li>
            <li dangerouslySetInnerHTML={{ __html: texts.item4 }}></li>
            <li dangerouslySetInnerHTML={{ __html: texts.item5 }}></li>

          </ul>
        </div>
      </section>
      <style jsx>{`
        section {
          position: relative;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          padding-top: 5.952vw;
          padding-bottom: 0;
          padding-left: 10.317vw;
          padding-right: 9.193vw;
        }

        section .media {
          height: 44.04761vw;
          width: 37.23544vw;
          object-fit: cover;
          transform: translateY(-50%);
        }

        section .content {
          display: flex;
          flex-direction: column;
          width: 29.20158vw;
          position: relative;
          z-index: 2;
          /* TEST */
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 4vw;
          position: relative;
          width: 30.2vw;
          transform: translateY(-7%);
          z-index: 2;
          transition: transform 0.1s ease-out;
        }

        section .content h2 {
          font-family: TWK Everett, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: normal;
          font-size: 2.6455vw;
          line-height: 110%;
          color: var(--title-color);
          margin-bottom: 1.851vw;
          width: 30.7539vw;
        }

        section .content p {
          font-family: TWK Everett, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 400;
          font-size: 1.32275vw;
          line-height: 125%;
          color: #234d63;
          margin-bottom: 2.05vw;
          width: 100%;
        }

        section .content ul {
          margin: 0 -1.124vw;
        }

        section .content li {
          box-sizing: border-box;
          border-radius: 23.6503px;
          font-family: TWK Everett, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.32275vw;
          line-height: 125%;
          color: #32bdd3;
          padding: 0.661vw 0.925vw;
          transition: all 0.5s cubic-bezier(0.65, 0, 0.35, 1);
          border: 1px solid #ffffff;
        }

        section .content li strong {
          font-weight: 500;
        }

        section .content li.active {
          border: solid #32bdd3;
        }

        @media screen and (max-width: 992px) {
          section {
            padding-top: 70px !important;
            padding-bottom: 35px;
            padding-left: 22px;
            padding-right: 22px;
          }

          section .media {
            display: none;
          }

          section .media.mobile {
            display: flex;
            height: auto;
            width: 50%;
            margin: auto;
            transform: none !important;
          }

          section .content {
            width: 100%;
            transform: none;
            padding-top: 0;
            overflox-x: hidden;
          }

          section .content h2 {
            font-size: 24px;
            line-height: 31px;
            width: 100%;
            position: relative;
            z-index: 3;
          }

          section .content p {
            font-size: 15px;
            line-height: 18px;
            width: 100%;
            position: relative;
            z-index: 3;
          }

          section .content ul {
            margin: 0 -12px;
          }

          section .content ul li {
            font-size: 14px;
            line-height: 19px;
            padding: 10px 12px;
          }
        }

        @media screen AND (min-width: 526px) AND (max-width: 992px) {
          section .content h2 {
            font-size: 35px;
            line-height: 1.2;
          }

          section .content p {
            font-size: 20px;
            line-height: 30px;
          }

          section .content ul li {
            max-width: 100%;
            margin-bottom: 10px;
            font-size: 20px;
            text-align: center;
          }
        }
      `}</style>

      <style jsx global>{`
        #section1 .media img {
          width: 100%;
          height: 100%;
          position: absolute;
        }

        @media screen and (max-width: 992px) {
          #section1 .media.mobile img {
            position: relative;
          }
        }
        @media screen and (min-width: 993px) and (max-width: 1199px) {
          #section1 .media.mobile {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
