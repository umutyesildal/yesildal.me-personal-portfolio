import React from 'react';

type JoinSectionProps = {
  downloadLink:string
}
function JoinSection(props:JoinSectionProps){
  return <>
    <div className='container'>
      <div className='cta-container'>
        <h2>{'callToActionTitle'}</h2>
        <span className='text' dangerouslySetInnerHTML={{
          __html: 'callToActionSubtitle'
        }}></span>
        <a className='btn primary-button arrow-button' href={props.downloadLink}>
          {'joinButtonTitle'}
        </a>
      </div>
      <div className='separator'></div>
      <img src="/img/image-preview.png" alt="Join Metavest" />
    </div>
    <style jsx>{`
      .container {
        background-color: white;
        display: flex;
        align-items: center;
        flex-direction: row;
        padding-bottom: 8vw;
        padding-top: 8vw;
        padding-left: 14vw;
        padding-right: 14vw;
      }
      h2 {
        font-family: TWK Everett,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
        font-style: normal;
        font-weight: 700;
        font-size: 2vw;
        line-height: 110%;
        color: var(--title-color);
        margin-bottom: 1.851vw;
      }  
      .text {
        color: var(--theme-color);
        font-size: 11pt;
      }

      .text strong {
        font-weight: 400;
      }

      .cta-container {
        flex: 1;
      }
      .separator {
        flex: 0.2
      }

      .btn {
        justify-content: center;
        font-size: 14px;
        padding-left: 12px;
        padding-right: 12px;
        margin-top: 3vh;
        align-self: flex-start;
        height: 2.2vw;
      }

      .container img {
        object-fit: contain;
        flex: 1;
        flex-grow: 0;
        max-width: 46%;
      }
      @media screen AND (max-width: 526px) {
        .container {
          flex-direction: column;
          padding-top: 5vh;
          padding-left: 6vw;
          padding-right: 6vw;
          padding-bottom: 0;
          margin-bottom: -4vh;
        }
        h2 {
          font-family: TWK Everett,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
          font-style: normal;
          font-weight: 700;
          font-size: 7vw;
          margin-right: 20vw;
          line-height: 130%;
          color: var(--title-color);
          margin-bottom: 2.4vh;
        }  
        .text {
          font-size: 4.4vw;
        }

      
        .cta-container {
          flex: 1;
        }
        .separator {
          flex: 0.2
        }
        .container img {
          object-fit: contain;
          flex: 1;
          flex-grow: 0;
          max-width: 100%;
          max-height: 94vw;
        }
      }
    `}</style>
  </>
}

export default JoinSection;