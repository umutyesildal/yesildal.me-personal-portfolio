import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

export default function CookieConsent(props) {

    const [showBox , setShowBox] = useState(false);
    
    function toggle(){
        setShowBox(false);
        Cookies.set('cs-cookie-box', 'true')
    }

    const description = props.description ?? `
      We use cookies to improve user experience and analyze website
      traffic. By clicking "Accept", you agree to our website's cookie use
      as described in our 
      <a class="cookie-anc" href="#" target="_blank">
        <span> Cookie Policy.</span>
      </a>
      `;

    const accept = props.accept ?? 'Accept';
    const reject = props.reject ?? 'Reject';
    

    useEffect(() => {
        if(Cookies.get('cs-cookie-box') === undefined){
            setShowBox(true);
        }else{
            setShowBox(false);
        }
        if(typeof window !== 'undefined'){
          var loc = window.location.pathname.split('/')[location.pathname.split('/').length > 1 ? 1 : 0];
          document.querySelector<HTMLAnchorElement>('.cookie-anc').href = loc+'/privacy-policy#Cookie';
        }
       
      }), [showBox];

  return (
    <>
      <div className="cookie-popup" id="cookie-popup" style={{display: showBox ? "block" : "none"}}>
        <div className="cookie-popup-content">
          <p className="cookie-pg" dangerouslySetInnerHTML={{__html: description}}>
          </p>
        </div>
        <div className="cookie-popup-action">
          <div className="cookie-popup-accept">
                <div className="cookie-popup-accept-btn" onClick={toggle}>{reject}</div>
          </div>
          <div className="cookie-popup-reject">
              <div className="cookie-popup-reject-btn" onClick={toggle}>{accept}</div>
          </div>
        </div>
      </div>
      <style jsx global>{`

        .cookie-popup {
            width: 480px;
            height: 240px;
            position: fixed;
            bottom: 2px;
            left: 2px;
            margin: auto;
            background-color: white;
            color: #333333;
            z-index: 10;
            border-radius: 10px;
            box-shadow: 0 7px 16px 16px #234d6322;
        }

        .cookie-popup-content {
            float: left;
            position: relative;
            width: 100%;
            height: 60%;
        }

        .cookie-popup-action {
            height: 40%;
            display: flex;
            padding-left: 6%;
            padding-right: 6%;
            justify-content: space-between;
        }

        .cookie-popup-reject {
            flex: 1;
        }

        .cookie-popup-accept {
            flex: 1;
        }
        
        .cookie-pg{
            display: inline-block;
            position: relative;
            top: 15%;
            height: 70%;
            padding-left: 6%;
            padding-right: 6%;
            padding-top: 2%;
            font-size: 17px;
            font-weight: 400;
            letter-spacing: 0.04px;
        }

        .cookie-anc{
            text-decoration: underline;
            font-weight: 500;
            color: #333333;
        }

        .cookie-popup-reject-btn{
            background: none;
            border: 1px solid black;
            border-radius: 7px;
            text-align: center;
            line-height: 46px;
            cursor: pointer;
            font-weight: bold;
            width: 95%;
        }

        .cookie-popup-accept-btn{
            background: none;
            height: 50%;
            border-radius: 7px;
            text-align: center;
            line-height: 46px;
            cursor: pointer;
            font-weight: bold;
            background-color: #96e8f9;
            width: 95%;

        }

        @media screen AND (max-width: 480px) {
            .cookie-popup {
                width: 90%;
                left: 5%;
                bottom: 2px;
            }

            .cookie-popup p{
                font-size: 15px;
            }
        }
      `}</style>
    </>
  );
}
