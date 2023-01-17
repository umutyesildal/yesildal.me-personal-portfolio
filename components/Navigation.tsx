import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { Link } from "react-scroll";


/**
 *
 * Navigation for Desktop. It is static. Every <Link> component requires a string and a section id.
 *
 */

export default function Navigation({
  isSticky = false,
  isDimmed = false,
  isActionable = true,
  isDark = false,
  currentPage = {},
}) {
  const security = "Security";
  const [state, setState] = useState({
    isActive: false,
    isSticky: isSticky,
    isDimmed: isDimmed,
    isActionable: isActionable,
  });
  const router = useRouter();
  const { pathname, asPath } = router;
  const [language, setLanguage] = useState({
    state: false,

    currentPage: currentPage,
  });

  let offsetHeight = 0;

  const toggleMenu = () => {
    setState((state) => ({ ...state, isActive: !state.isActive }));
  };

  function handleNavigationBackground() {
    if (typeof window !== "undefined") {
      if (isActionable) {
        if (window.pageYOffset > 0) {
          setState((state) => ({ ...state, isSticky: true }));
          if (window.pageYOffset + 50 > offsetHeight) {
            setState((state) => ({ ...state, isDimmed: true }));
          } else {
            setState((state) => ({ ...state, isDimmed: false }));
          }
        } else {
          setState((state) => ({ ...state, isSticky: false, isDimmed: false }));
        }
      }
    }
  }

  if (typeof window !== "undefined") {
    if (isActionable) {
      window.onscroll = function () {
        const introElem = document.querySelector(".intro");
        if (introElem) {
          offsetHeight =
            document.querySelector<HTMLDivElement>(".intro")?.offsetHeight;
        }
        handleNavigationBackground();
        setState((state) => ({ ...state, isActive: false }));
        setLanguage((state) => ({ ...state, state: false }));
      };
    }
  }
  return (
    <>
      <nav
        className={`${state.isSticky ? "sticky" : ""} ${
          state.isDimmed ? "dim" : ""
        } ${isDark ? "dark-style" : ""}`}
      >
        <a className="home-logo" href="/">
          {!isDark ? (
            <img className="white" src="/icon.png" alt="logo" />
          ) : (
            <img className="white" src="/icon.png" alt="logo" />
          )}
          <img className="colored" src="/icon.png" alt="logo colored" />
        </a>

        <ul className="menu">
          <li className="secondary">
            <Link activeClass="active" smooth spy to="home">
              home
            </Link>
          </li>
          <li className="secondary">
            <Link activeClass="active" smooth spy to="expertise">
              expertise
            </Link>
          </li>
          <li className="secondary">
            <Link activeClass="active" smooth spy to="work">
              work
            </Link>
          </li>
          <li className="secondary">
            <Link activeClass="active" smooth spy to="experience">
              experience
            </Link>
          </li>
          <li className="secondary">
            <Link activeClass="active" smooth spy to="contact">
              contact
            </Link>
          </li>
        </ul>
        <div className={`mobile-menu ${state.isActive ? "opened" : "closed"}`}>
          <button
            onClick={toggleMenu}
            aria-label="menu button"
            className="menu-button"
          ></button>
          <ul>
            <li className="secondary">
              <Link activeClass="active" smooth spy to="home">
                home
              </Link>
            </li>
            <li className="secondary">
              <Link activeClass="active" smooth spy to="expertise">
                expertise
              </Link>
            </li>
            <li className="secondary">
              <Link activeClass="active" smooth spy to="work">
                work
              </Link>
            </li>
            <li className="secondary">
              <Link activeClass="active" smooth spy to="experience">
                experience
              </Link>
            </li>
            <li className="secondary">
              <Link activeClass="active" smooth spy to="contact">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx global>{`
        .language-selector {
          display: none;
          color: #9cb6c1;
          background: transparent;
          font-size: 0.9vw;
          cursor: pointer;
          font-weight: 400;
          margin: 5px;
          padding: 3px;
          box-sizing: border-box;
          box-shadow: 0 1px 0 1px rgb(0 0 0 / 4%);
          border: none;
          text-align: center;
          outline: 0px;
        }

        nav {
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: -5.83vw;
          padding: 1.4vw 4.563vw 1.3vw 4.563vw;
          transition: 0.3s ease-in;
        }

        nav.sticky {
          -webkit-backdrop-filter: blur(2rem);
          backdrop-filter: blur(2rem);
          padding: 1.2vw 4vw;
          border: none;
        }

        nav.sticky.dim {
          background: hsl(0deg 0% 100% / 15%);
          -webkit-backdrop-filter: blur(2rem) brightness(1);
          backdrop-filter: blur(2rem) brightness(1);
          box-shadow: 0px 1px 6px #0000000a;
        }

        nav .home-logo {
          display: flex;
          align-items: center;
        }

        nav.sticky.dim a img {
          display: none;
        }

        nav.sticky.dim a img.colored {
          display: flex;
        }

        nav.sticky.dim ul li.secondary a,
        nav.sticky.dim ul li.primary p {
          color: #2d3436;
        }

        nav .mobile-menu ul li p {
          font-size: 14px;
        }

        nav ul li.secondary.language-select {
          position: relative;
        }
        nav ul li.secondary.language-select button {
          border: none;
          background: none;
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 0.9vw;
          line-height: 128%;
          color: rgba(255, 255, 255, 0.7);
          transition: 0.15s all;
          cursor: pointer;
          font-size: min(1.4vw, 13pt);
        }
        nav.sticky.dim ul li.secondary.language-select button,
        nav ul li.secondary.language-select button:hover {
          color: var(--title-color);
        }
        nav ul li.secondary.language-select div {
          position: absolute;
          opacity: 0;
          pointer-events: none;
          background: white;
          border-radius: 0.9vw;
          top: 1.8vw;
          left: 50%;
          transform: translateX(-50%) scale(0.5);
          transition: 0.15s all;
          box-shadow: 0 3px 12px #2d343622;
        }
        nav ul li.secondary.language-select div[data-open="true"] {
          position: absolute;
          opacity: 1;
          pointer-events: all;
          top: 3vw;
          transform: translateX(-50%) scale(1);
          overflow: hidden;
        }
        nav ul li.secondary.language-select div ul {
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          padding-bottom: 4px;
        }
        nav ul li.secondary.language-select div ul li {
          padding: 0;
          margin: 0.4vw 0 0.4vw;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        nav ul li.secondary.language-select div ul li button {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          cursor: pointer;
          font-style: normal;
          font-weight: 300;
          font-size: min(1.2vw, 11pt);
          line-height: 128%;
          color: rgba(0, 0, 0, 0.5);
          text-decoration: none;
          -webkit-transition: 0.15s all;
          transition: 0.15s all;
          text-transform: capitalize;
          padding: 0.5vw 2vw;
        }
        nav ul li.secondary.language-select div ul li button:hover {
          color: var(--title-color);
        }

        nav img {
          height: 2vw;
        }

        nav a img.colored {
          display: none;
        }

        nav .mobile-menu {
          display: none;
        }

        nav ul {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        nav ul li.secondary {
          margin-right: 2.843vw;
          align-items: center;
          display: flex;
        }

        nav ul li.secondary a,
        nav ul li.primary p {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          line-height: 128%;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: 0.3s ease-in all;
          font-size: min(1.4vw, 13pt);
        }

        nav ul li.primary p {
          font-weight: 500;
          color: white;
          letter-spacing: 0.25px;
        }

        nav ul li.secondary a:hover,
        nav ul li.primary p:hover {
          color: var(--title-color);
        }

        nav ul li.primary {
          display: flex;
        }

        nav ul li.primary button {
          border: none;
          background: none;
          display: flex;
          cursor: pointer;
          position: relative;
        }

        nav ul li.primary button svg {
          width: auto;
          height: 32px;
        }

        nav ul li.primary button p {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: min(1.2vw, 11pt);
        }

        nav ul li div ul li button p {
          color: #2d3436;
        }

        @media screen and (max-width: 992px) {
          nav {
            padding: 21px 23px;
            margin-bottom: -70px;
          }

          nav.sticky {
            padding: 21px 23px;
            -webkit-backdrop-filter: none;
            backdrop-filter: none;
          }

          nav.sticky.dim {
            padding: 21px 23px;
            -webkit-backdrop-filter: none;
            backdrop-filter: none;
          }

          nav.sticky .mobile-menu {
            transition: 0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);
          }

          nav a > img {
            width: auto;
            height: 24px;
            position: relative;
            top: 3px;
            z-index: 2;
          }

          nav a > img,
          nav.sticky a > img,
          nav.sticky.dim a > img.colored {
            display: flex;
          }

          nav a > img.colored,
          nav.sticky a > img.colored,
          nav.sticky.dim a > img {
            display: none;
          }

          nav .menu {
            display: none;
          }

          nav .mobile-menu {
            display: flex;
            position: absolute;
            width: 100%;
            padding-top: 70px;
            left: 0;
            top: 0;
            -webkit-backdrop-filter: blur(1rem);
            backdrop-filter: blur(1rem);
            transition: 0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);
          }

          nav .mobile-menu.opened {
            padding: 107px 0 86px 0;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(31px);
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: stretch;
          }

          nav.dim .mobile-menu.opened {
            background: #ffffff66;
          }

          nav .mobile-menu.opened .filler {
            flex: 1;
          }

          nav .mobile-menu button.menu-button {
            display: flex;
            height: 32px;
            width: 32px;
            min-height: 32px;
            min-width: 32px;
            right: 16px;
            top: 16px;
            position: absolute;
            border: none;
            background: transparent;
            background-repeat: no-repeat;
            background-position: center center;
            color: #bae374;
          }

          nav .mobile-menu .primary button {
            position: relative;
            top: 0;
            left: 0;
          }

          nav .mobile-menu.closed button.menu-button {
            background-size: 24px 16px;
            background-image: url("/menu_icon.png");
            animation: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s rotateLeft;
            cursor: pointer;
          }

          nav .mobile-menu.opened button.menu-button {
            background-size: 17px 17px;
            background-image: url("/menu_icon_close.png");
            animation: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s rotateRight;
            cursor: pointer;
            background-position-x: right;
          }

          nav.sticky.dim .mobile-menu.closed button.menu-button {
            background-image: url("/menu_icon_dim.png");
            cursor: pointer;
          }

          nav.sticky.dim .mobile-menu.opened button.menu-button {
            background-image: url("/menu_icon_close_dim.png");
            cursor: pointer;
          }

          nav .mobile-menu ul {
            opacity: 0;
            position: absolute;
            pointer-events: none;
            transition: 0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            flex: 1;
          }

          nav .mobile-menu ul li.primary button p {
            font-size: 14px;
          }

          nav .mobile-menu.opened ul {
            opacity: 1;
            position: relative;
            pointer-events: all;
          }

          nav .mobile-menu ul li.secondary {
            margin-right: 0;
            margin-bottom: 20px;
            border: 2px solid #b4b4be;
            font-size: 16px;
            line-height: 20px;
            border-radius: 16px;
            padding: 7px 2px;
            width: 205px;
            text-align: center;
            height: 40px;
            display: flex;
            justify-content: center;
            position: relative;
          }

          nav .mobile-menu ul li.secondary a {
            font-size: 16px;
            font-weight: 500;
            flex: 1;
          }
          nav .mobile-menu ul li.primary {
            width: 205px;
            text-align: center;
            height: 40px;
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
          }
          nav .mobile-menu ul li.primary button {
            width: 100%;
            height: 40px;
            cursor: pointer;
          }
          nav .mobile-menu ul li.primary button svg {
            width: 100%;
            height: 40px;
          }

          nav .mobile-menu ul li.secondary.language-select {
            display: flex;
            justify-content: stretch;
            padding-left: 0;
            padding-top: 0;
            padding-bottom: 0;
            padding-right: 0;
          }
          nav .mobile-menu ul li.secondary.language-select select {
            border: none;
            background: none;
            font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 128%;
            padding-left: 16px;
            color: #ffffff88;
            transition: 0.15s all;
            cursor: pointer;
            background: transparent;
            border: none;
            -webkit-appearance: none;
            height: 100%;
            width: 100%;
          }

          nav.dim .mobile-menu ul li.secondary.language-select select {
            color: #00000066;
          }

          nav .mobile-menu ul li.secondary.language-select:after {
            content: "▼";
            transform: scaleY(0.7);
            position: absolute;
            right: 16px;
            pointer-events: none;
            top: 8px;
            color: #888888;
          }
        }

        nav.dark-style {
          backdrop-filter: none;
        }

        nav.dark-style ul li a,
        nav.dark-style ul li.secondary.language-select button,
        nav.dark-style ul li.secondary a,
        nav.dark-style ul li.secondary a,
        nav.dark-style ul li.primary button p {
          color: #2d3436;
        }

        nav.dark-style.sticky ul li.primary button p {
          color: var(--title-color);
        }

        nav.dark-style .mobile-menu.opened {
          background: transparent;
        }

        nav.dark-style .mobile-menu .menu-button {
          /** this !important is to overcome the absolutely terrible code written by the
          previous contractor. i HATE this practice but given time constraints this is the
          best we can do with extremely coupled code here and there written by random people
          who thought there wouldn't be any other page than the landing page on the website. */
          background-image: url("/menu_icon_dark.svg") !important;
        }

        nav.dark-style .mobile-menu.opened .menu-button {
          /** same as above */
          background-image: url("/menu_icon_close_dark.svg") !important;
        }

        nav.dark-style.sticky .mobile-menu .menu-button {
          /** same as above */
          background-image: url("/menu_icon_dim.png") !important;
        }

        nav.dark-style.sticky .mobile-menu.opened .menu-button {
          /** same as above */
          background-image: url("/menu_icon_close_dim.png") !important;
        }

        @media screen AND (max-width: 526px) {
          nav.sticky .mobile-menu.opened {
            backdrop-filter: blur(31px) brightness(1.5);
            background: none;
          }
        }
      `}</style>

      <style jsx global>{`
        nav ul li.primary .text {
          transition: 0.3s ease-in all;
          fill: rgb(255 255 255);
        }
        nav ul li.primary:hover .text {
          fill: var(--title-color);
        }
        nav.sticky.dim ul li.primary .text {
          fill: var(--title-color);
        }
      `}</style>
    </>
  );
}
