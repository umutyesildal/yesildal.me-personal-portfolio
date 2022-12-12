import Link from "next/link";
import LanguageImage from "./visual/LanguageImage";
import LanguageLink from "./shared/LanguageLink";

export default function CommonFooter() {
  const about ='About Company';
  const careersTitle = 'Careers';
  const careersLink ='https://metave.st/careers';
  const support = 'Support';
  const contactUs = 'Contact Us';
  const termsOfUse = 'Terms of Use';
  const privacyPolicy = 'Privacy Policy';
  const supportLink ='mailto:support@metavest.app?subject=Support Request - Metavest.app';

  return (
    <>
      <footer>  
        <hr></hr>
        <div className="page-and-store-links">
          <div className="page-links">
            {/* <div className="col">
              <LanguageLink href="security">{security}</LanguageLink>
              <LanguageLink href="about">{about}</LanguageLink>
              <LanguageLink href="investment">{investment}</LanguageLink>
            </div> */}
            <div className="col">
              <LanguageLink href={supportLink}>{support}</LanguageLink>
              <LanguageLink target="_blank" href={careersLink}>{careersTitle}</LanguageLink>

              {/* <LanguageLink href="media-center">{mediaCenter}</LanguageLink> */}
              <LanguageLink href="contact-us">{contactUs}</LanguageLink>
            </div>
            <div className="col">
              <LanguageLink href="terms-of-use">{termsOfUse}</LanguageLink>
              <LanguageLink href="privacy-policy">{privacyPolicy}</LanguageLink>
            </div>
          </div>

          <hr></hr>

          <div className="store-links">
            <a href="https://apps.apple.com/en/app/metavest-invest-earn-crypto/id1622578169">
              <LanguageImage src='download-app-store.svg' />
            </a>
            <a href="https://play.google.com/store/apps/details?id=app.metavest.mobile">
              <LanguageImage src='download-google-play.svg' />
            </a>
          </div>
        </div>
        <hr></hr>
       
        <div className="social-links">
          <img
            className="logo_colored"
            src="/img/footer-logo.svg"
            alt="logo icon"
          />
          <ul>
            <li>
              <Link href="https://www.instagram.com/metavestapp/" passHref>
                <a target="_blank" rel="noreferrer">
                  <img src="/instagram.svg" alt="instagram" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/Metavestapp" passHref>
                <a target="_blank" rel="noreferrer">
                  <img src="/facebook.svg" alt="facebook" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/MetavestApp" passHref>
                <a target="_blank" rel="noreferrer">
                  <img src="/twitter.svg" alt="twitter" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://discord.gg/8sex2Upn79" passHref>
                <a target="_blank" rel="noreferrer">
                  <img src="/discord.svg" alt="discord" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://t.me/metavestofficial" passHref>
                <a target="_blank" rel="noreferrer">
                  <img src="/telegram.svg" alt="telegram" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/metavestapp" passHref>
                <a target="_blank" rel="noreferrer">
                  <img src="/linkedin.svg" alt="linkedin" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <style jsx>{`
        footer {
          width: 80%;
          padding: 4.1vw 0;
          margin: auto;
        }

        footer div.page-and-store-links {
          display: flex;
          margin-bottom: 32px;
          justify-content: space-between;
        }

        footer div.page-and-store-links hr {
          display: none;
        }

        footer div.social-links {
          justify-content: space-between;
          display: flex;
          margin: auto;
        }

        footer div.page-and-store-links div.store-links {
          display: flex;
          justify-content: space-between;
        }

        footer div.store-links a {
          margin-left: 8px;
        }

       

        footer .logo_colored {
          width: 15.608vw;
        }

        footer ul {
          display: flex;
          flex-direction: row;
        }

        footer ul li {
          margin-right: 0.793vw;
          opacity: 1;
          transition: 0.3s ease-out;
        }

        footer ul li:hover,
        footer ul li:focus {
          opacity: 0.4;
        }

        footer ul li:last-child {
          margin-right: 0;
        }

        footer hr {
          height: 1px;
          background-color: var(--light-theme-color);
          width: 80vw;
          border: none;
          margin-bottom: 32px;
          margin-top: 32px;

        }

        footer div.page-and-store-links .page-links {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex: 1;
          margin-right: 78px;
          max-width: 540px;
        }


        

        footer .page-links .col {
          display: flex;
          flex-direction: column;
        }

        footer sub {
          color: #aaa;
          padding-top: 24px;
          display: block;
          font-size: 9pt;
          line-height: 1.6em;
        }

      

        @media screen AND (max-width: 526px) {
          footer {
            width: 100%;
            padding: 0;
            padding-top: 2vh;
            
          }

          footer hr {
            width: 100vw;
          }

          footer div.page-and-store-links {
            flex-direction: column-reverse;
          }

          footer div.page-and-store-links hr {
            display: block;
          }

          footer .page-links {
            flex-direction: column;
            padding-left: 15vw;
          }


          footer .page-links .col {
            margin-bottom: 40px;
          }


          footer div.store-links {
            margin: auto;

          }

          footer div.social-links {
            justify-content: center;
            align-items: center;
            display: flex;
            flex-direction: column-reverse;
          }

          footer img.logo_colored {
            width: 126px;
          }

          footer ul {
            margin-bottom: 40px;
          }
          footer ul li {
            margin-right: 12px;
          }

          footer sub {
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: 40px;
          }
        }
      `}</style>
      <style global jsx>{`
        footer .page-links .col a {
          color: var(--title-color);
          flex: 1;
          margin-bottom: 8px;
        }

        footer div.store-links a img {
          height: 38px;
        }
      `}
      
      </style>
    </>
  );
}
