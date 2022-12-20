import AppPreview from 'components/visual/AppPreview';
import {useState, useEffect, useRef} from 'react';

export default function Home() {
  const [texts] = useState({
    title: "Umut Yunus Yeşildal",
    subtitle: "I am a Software Developer focused on drifting with the wind of newly developed tech.<br/><br/> Jack of all trades, master of none. (yet)",
    actionText: "See more <br/>socials",
  });

  /// TODO: Add your photos to here
  return (
    <>
      <div className={`intro ${''}`}>
        <div className="content">
          <h1 className="text">{texts.title}</h1>
          <p
            className="text"
            style={{ opacity: 0 }}
            dangerouslySetInnerHTML={{ __html: texts.subtitle }}
          ></p>
          <div className="action">
            <span dangerouslySetInnerHTML={{ __html: texts.actionText }}></span>
            <a
              className="primary-button"
              href="https://github.com/umutyesildal">
                Github
              </a>
            <a
              className="primary-button"
              href="https://linkedin.com/in/umut-ye%C5%9Fildal-10546812a">
                Linkedin
              </a>
          </div>

        </div>
        <div className={`preview-container ${'shown-preview'}`}>
          <div className='preview-inner'>
            <AppPreview />
          </div>
        </div>
      </div>

      <style jsx>{`
        .intro {
          position: relative;
          display: flex;
          padding: 12.235vw 12.103vw 10.978vw;
          background: linear-gradient(
            149.15deg,
            #0a3d62 28.8%,
            #3c6382 45.29%,
            #60a3bc 82.96%
          );
          padding-right: 0;
        }

        .intro .media {
          opacity: 0;
          position: absolute;
          right: 0;
          top: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: onlyfadeIn 10s forwards cubic-bezier(0.075, 0.82, 0.165, 1);
          animation-delay: 1.25s;
        }

        .intro .content {
          color: white;
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }

        .intro .content h1 {
          opacity: 0;
          font-family: Visby, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 500;
          font-size: clamp(5.0264vw, 5.0264vw, 154.5px);
          line-height: 115%;
          color: #a8d0e6;
          color: color(display-p3 0.549 0.929 0.996);
          width: clamp(32vw, 32vw, 991.92px);
          margin-bottom: 1.435vw;
          animation: fadeIn 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          animation-delay: 1.5s;
        }

        .intro .content p {
          opacity: 0;
          font-family: Visby, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: clamp(1.521164vw, 1.521164vw, 46.76px);
          line-height: 128%;
          width: clamp(32vw, 32vw, 890.43px);
          margin-bottom: 2.248vw;
          animation: fadeIn 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          animation-delay: 1.8s;
        }

        .intro.has-qr .content .action{
          display: none;
        }

        .intro .content .action {
          opacity: 0;
          padding: 1.19047vw 1.32275vw 1.32275vw 1.32275vw;
          box-sizing: border-box;
          border-radius: 0.92592vw;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: clamp(26.5873vw, 26.5873vw, 817.25px);
          animation: fadeIn 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          animation-delay: 2.1s;
          background: #0a3d62;
        }

        .intro .content .action span {
          font-family: Visby, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: clamp(1.25661vw, 1.25661vw, 38.63px);
          line-height: 128%;
          display: flex;
          flex-direction: column;
        }

        .intro .content .qr-container {
          display: none;
          position: relative;
        }

        .intro.has-qr .content .qr-container {
          display: flex;
          width: max(300px, 25vw);
          align-items: center;
          transition: 0.8s ease;
          transition-property: opacity, transform;
          opacity: 0;
        }

        .intro.has-qr .content .qr-container.attention-shown{
          transform: scale(1.2);
        }

       

        .intro.has-qr .content .qr-container .attention {
          position: absolute;
          top: -1.5vw;
          left: -1.5vw;
          right: -1.5vw;
          bottom: -1.5vw;
          transition: opacity 0.3s;
          opacity: 0;
          border: 2px #00ffff solid;
          border-radius: 1vw;
          padding: 1vw;
          background: #00000088;
          box-shadow: #00000088 0 0 24px;
        }

        .intro.has-qr .content .qr-container.attention-shown .attention{
          opacity: 1;
        }

        .intro.has-qr .content .qr-container.shown{
          opacity: 1;
        }

        .intro.has-qr .content .qr-container .qr-intermediate-container{
          min-width: 112px;
          height: 112px;
          position: relative;
          padding: 6px;
          background: white;
          border-radius: 6px;
        }

        .intro.has-qr .content .qr-container .qr-intermediate-container .qr {
          position: absolute;
          left: 6px;
          top: 6px;
          display: flex;
          width: 100px;
          height: 100px;
        }


        .intro.has-qr .content .qr-container .description {
          margin-left: 20px;
          font-weight: 700;
          font-size: max(23px, 1.8vw);
          z-index: 1;
        }

        .intro.has-qr .content .qr-container .logo {
          position: absolute;
          left: 36px;
          top: 36px;
          width: 40px;
          height: 40px;
          z-index: 1;

        }

        .preview-container{
          flex-grow: 1;
          z-index: 0;
          opacity: 0;
          transform: translateY(8vh);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 1s ease;

        }

        .shown-preview{
          opacity: 1;
          transform: translateY(-46vh);
          position: relative;
          top: calc(var(--scroll-page) * -250px);
        }

        .preview-inner{
          max-width: 20vw;
        }

        @media screen AND (min-width: 526px) {

          .preview-container{
            transform: translateY(10vh);
          }
          .shown-preview{
            transform: translateY(0);
            top: calc(var(--scroll-page) * -100px);
          }

          .intro {
            overflow: hidden;
          }
        }

        @media screen and (max-width: 992px) {
          .intro {
            padding: 23px 22px;
            height: 101vh !important;
            border-radius: 0 !important;
            animation: none;
            flex-direction: column;
          }

          .intro.has-qr .content .qr-container{
            display: none;
          }

          .intro .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: stretch;
            margin-left: auto;
            margin-right: auto;
            padding-top: 64px;
            min-height: 92vh;
          }

          .intro .content h1 {
            font-size: 13vw;
            width: 100%;
            line-height: 120%;
            font-weight: 500;
            text-align: center;
            text-shadow: 0 0 24px #1e4b6b88;
            margin-bottom:16px;
          }

          .intro .content p {
            font-size: 15.52px;
            line-height: 128%;
            width: 100%;
            padding: 0 15px;
            font-weight: 300;
            text-align: center;
          }

          .intro .content .action {
            -webkit-backdrop-filter: blur(31px);
            backdrop-filter: blur(31px);
            width: 100%;
            position: absolute;
            bottom: 8px;
            border-radius: 11.5274px;
            padding: 14px 16px 16px 16px;
            
          }

          .intro .content .action span {
            font-size: 15.6443px;
            line-height: 128%;
            margin-right: 12px;
          }

          .intro .content .action span strong {
            font-size: 15.6443px;
            line-height: 128%;
          }

          .intro .content .action .primary-button {
            max-width: 139px;
            font-size: 15.5px;
            line-height: 21px;
            padding: 0 13px;
            white-space: nowrap;
          }

          .intro .media {
            display: none;
          }

          .intro .media.mobile {
            display: flex;
            top: auto;
            bottom: 0;
            height: auto;
          }

          .preview-inner{
            max-width: 64vw;
            border-radius: 10vw;
          }
        }

        
      
        @media screen AND (min-width: 526px) AND (max-width: 992px) {
          .intro .content h1 {
            font-size: 64px;
          }

          .intro .content p {
            font-size: 24px;
          }

          .intro .content .action span {
            font-size: 20px;
          }

          .intro .content .action span strong {
            font-size: 20px;
          }
        }
        @media screen AND (min-width: 993px) AND (max-width: 1199px) {
          .intro .media.mobile {
            display: none;
          }
          .intro .content .action {
            width: 29vw;
          }
        }

      

        @media screen AND (min-width: 1200px) {

          .intro.has-qr .content .qr-container .qr-intermediate-container{
            min-width: 140px;
            height: 140px;
            position: relative;
            padding: 6px;
            border-radius: 8px;
          }
          .intro.has-qr .content .qr-container .qr-intermediate-container .qr {
            display: flex;
            width: 128px;
            height: 128px;
          }

          .intro.has-qr .content .qr-container .logo {
            position: absolute;
            left: 43px;
            top: 43px;
            width: 54px;
            height: 54px;
            z-index: 1;

          }
        }

        @media screen AND (min-width: 1921px) {
          .intro .content h1 {
            font-size: 4vw;
            width: 25.807vw;
          }

          .intro .content p {
            font-size: 1.197vw;
            width: 23.177vw;
          }

          .intro .content .action {
            width: 21.276vw;
            padding-left: 1.041vw;
            padding-right: 1.041vw;
          }

          .intro .content .action span {
            font-size: 1.005vw;
          }

          .intro .content .action span strong {
            font-size: 1.005vw;
          }

          .intro.has-qr .content .qr-container .qr-intermediate-container{
            min-width: 172px;
            height: 172px;
            position: relative;
            padding: 8px;
            border-radius: 10px;
          }

          .intro.has-qr .content .qr-container .qr-intermediate-container .qr {
            display: flex;
            width: 160px;
            height: 160px;
          }

          .intro.has-qr .content .qr-container .logo {
            position: absolute;
            left: 54px;
            top: 54px;
            width: 64px;
            height: 64px;
            z-index: 1;

          }
        }

        @media screen AND (max-width: 375px) {
          .intro {
            padding-left: 4vw;
            padding-right: 4vw;
          }
          .intro .content .action{
            padding-left: 4vw;
            padding-right: 4vw;
          }

          .intro .content .action span {
            font-size: 4vw;
            margin-right: 8px;
          }

          .intro .content .action span strong {
            font-size: 3.5vw;
          }

          .intro .content .action .primary-button {
            font-size: 3.4vw;
          }

          .intro.has-qr .content .qr-container {
            display: none;
          }
          
        }

        @media screen AND (max-width: 526px) {
            .intro .content .action {
              position: fixed;
              bottom: 2vh;
              left: 3vw;
              right: 3vw;
              width: 94vw;
            }
          }

        @media screen AND (min-width: 1200px) {
          .preview-container{
            transform: translateY(4vh);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .preview-inner{
            max-width: min(18vw, 32vh);
          }
        }
      `}</style>
      <style jsx global>{`
        .intro .content .action span strong {
          font-family: Visby, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 400;
          font-size: clamp(1.25661vw, 1.25661vw, 38.63px);
          line-height: 128%;
          color: #fdbab2;
        }


        @media screen and (max-width: 992px) {
          .intro .content .action span strong {
            font-size: 15.6443px;
            line-height: 128%;
          }
        }


        @media screen AND (min-width: 526px) AND (max-width: 992px) { 
          .intro .content .action span strong {
            font-size: 20px;
          }
        }


        @media screen AND (min-width: 1921px) { 
          .intro .content .action span strong {
            font-size: 1vw;
          }
        }
      `}</style>
    </>
  );
}
