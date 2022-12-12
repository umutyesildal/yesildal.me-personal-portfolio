import { useState } from "react";






export default function Contact() {

const PAGE_CONTAINER_ID = 'security-page-container';
const NOT_SENT = 'NOT_SENT';
const SENDING = 'SENDING';
const SENT = 'SENT';
const ERROR = 'ERROR';


function InquiriesForm(){


  const [sendState, setSendState] = useState(NOT_SENT);

  return <>
      <FormSection title='title' description='description'>
          <form>
              <input name="name" type={'text'} placeholder={'namePlaceholder'} required/>
              <input name="email" type={'email'} placeholder={'emailPlaceholder'} required/>
              <input name="number" type={'text'} placeholder={'numberPlaceholder'} required/>
              <input name="company" type={'text'} placeholder={'companyPlaceholder'} required/>
              <input name="country" type={'text'} placeholder={'countryPlaceholder'} required/>
              <input name="address" type={'text'} placeholder={'addressPlaceholder'} required/>
              <textarea name="message" placeholder={'yourMessagePlaceholder'} required/>
              <button className={sendState.toLowerCase()} type="submit">{'ctaTitle'}</button>
          </form>
      </FormSection>
      <style jsx>{`
          form{
              display: flex;
              flex-direction: column;
              padding-top: 20px;
              padding-bottom: 20px;
          }
          form input{
              border: none;
              border-bottom: 1px solid #63D7EB;
              height: 40px;
              font-size: 14px;
              padding-left: 4px;
              margin-bottom: 8px;
          }
          form textarea{
              margin-top: 16px;
              border-radius: 4px;
              border: 1px solid #63D7EB;
              padding-left: 4px;
              padding-top: 8px;
              min-height: 86px;
              margin-bottom: 16px;
              font-size: 14px;
          }
          form button{
              align-items: flex-start;
              padding: 8px 16px;
              border:none;
              background: #8CEDFE;
              box-shadow: 0px 4px 4px rgba(140, 237, 254, 0.25);
              border-radius: 34px;
              align-self: flex-start;
              font-weight: 400;
              font-size: min(20px,4.2vw);
              cursor: pointer;
          }
          form button.sent{
            opacity: 0.3;
            pointer-events: none;
          }
          form button.sent:after{
            content: ' ✓'
          }
          form button.sending{
            opacity: 0.3;
            pointer-events: none;
          }
          form button.error{
            background: var(--title-color);
          }
          form input:focus{
              box-shadow: none;
          }
          `}
      </style>
  </>
}
  
  return (
    <>
      <div className="forms">
        <InquiriesForm />
      </div>
      <style jsx>{`
        section {
          position: relative;
          display: flex;
          flex-direction: row;
          padding: 0 12.103vw 2vw 10.317vw;
        }

        section .media {
          width: 49vw;
          position: absolute;
          right: 0;
          top: 0;
        }

        section .content {
          display: flex;
          flex-direction: column;
        }

        section .content .animation-element {
          opacity: 0;
        }

        section .content h2 {
          opacity: 0;
          font-family: TWK Everett, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 3.43391vw;
          line-height: 122%;
          color: #234d63;
          width: 29.49735vw;
          margin-bottom: 2.513vw;
          animation-delay: 0s;
        }

        section .content p {
          opacity: 0;
          font-family: TWK Everett, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.5873vw;
          line-height: 140%;
          color: #234d63;
          width: 29.2328vw;
          margin-bottom: 2.513vw;
          animation-delay: 0.3s;
        }

        section .content .primary-button {
          width: 11.78407vw;
          animation-delay: 0.6s;
        }

        section .content .primary-button.mobile {
          display: none;
          animation-delay: 1.8s;
        }

        section .content ul {
          display: flex;
          flex-direction: row;
          margin-top: 5.621vw;
        }

        section .content ul li {
          opacity: 0;
          display: flex;
          flex-direction: column;
          width: 19.31216vw;
          margin-right: 3.83597vw;
        }

        section .content ul li:nth-child(1) {
          animation-delay: 0.9s;
        }

        section .content ul li:nth-child(2) {
          animation-delay: 1.2s;
        }

        section .content ul li:nth-child(3) {
          animation-delay: 1.5s;
        }

        section .content ul li:last-child {
          margin-right: 0;
        }

        section .content ul li img {
          width: 1.917vw;
          height: 1.322vw;
          margin-bottom: 1.851vw;
        }

        section .content ul span {
          font-family: TWK Everett, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.32275vw;
          line-height: 130%;
          color: #a0a0aa;
        }

        @media screen and (max-width: 992px) {
          section {
            padding: 35px 22px;
            margin-top: 2vh;
          }

          section > .media {
            display: none;
          }

          section .content {
            width: 100%;
          }

          section .content h2 {
            font-size: 29px;
            line-height: 122%;
            width: 87%;
            margin-bottom: 17px;
          }

          section .content p {
            font-size: 15px;
            line-height: 20px;
            width: 100%;
            margin-bottom: 32px;
          }

          section .content > .primary-button {
            display: none;
          }

          section .content > .primary-button.mobile {
            display: flex;
            width: 100%;
            justify-content: center;
            margin-top: 13px;
            height: 45px;
            font-size: min(5vw, 24px);
          }

          section .content > ul {
            flex-direction: column;
            margin-top: 0;
          }

          section .content > ul li {
            width: 100%;
            margin-right: 0;
            flex-direction: row-reverse;
            justify-content: space-between;
            padding: 17px 0 28px 0;
            border-top: 1px solid #eeeef2;
          }

          section .content > ul li span {
            font-size: 15px;
            line-height: 20px;
            width: 70%;
          }
        }

        @media screen AND (max-width: 526px) {
            section .content ul li img {
                width: 6vw;
                height: 4.5vw;
            }
        }

        @media screen AND (min-width: 526px) AND (max-width: 992px) {
          section .content h2 {
            font-size: 35px;
          }

          section .content p {
            font-size: 20px;
            line-height: 30px;
          }

          section .content > ul li span {
            font-size: 20px;
            line-height: 30px;
          }
          
          section .content ul li img {
            width: 4vw;
            height: 3.5vw;
          }
        }

        @media screen AND (min-width: 993px) AND (max-width: 1199px) {
          section .content .primary-button {
            width: 13.5vw;
          }
        }
      `}</style>
      <style jsx global>{`
        #section2 .content h2 strong {
          font-weight: 500;
        }
      `}</style>
    </>
  );
}


  function FormSection(props){
  const title = props.title;
  const description = props.description;
  return <>
      <div className={`container ${props.className ?? ''}`}>
          {
              title && <h3>{title}</h3>
          }
          {
              description && <h5>{description}</h5>
          }
          <div className="content-container">
              {props.children}
          </div>
      </div>

      <style jsx>{`
        .container {
            display: flex;
            flex-direction: column;
            background: #FBFEFF;
            box-shadow: 0px 4px 11px rgba(140, 237, 254, 0.33);
            border-radius: 25px;
            margin: 16px;
            padding-top: 40px;
            padding-bottom: 40px;
            padding-left: 5vw;
            padding-right: 4vw;
            border: 1px solid rgba(140, 237, 254, 0.2);
            flex: 1;
        }


        .container h3 {
            font-family: TWK Everett, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
            font-style: normal;
            font-weight: 500;
            line-height: 135%;
            color: var(--title-color);
            margin-bottom: 2vw;
            font-size: min(24px,6vw);
            line-height: 80%;
            z-index: 1;
        }

        .container h5 {
            font-family: TWK Everett,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
            font-style: normal;
            font-weight: 400;
            color: #234D63;
            margin-top: 2vw;
            font-size: min(18px,4vw);
            z-index: 1;
        }

        .content-container{
            flex: 1
        }



      
          `}
      </style>
  </>
}
