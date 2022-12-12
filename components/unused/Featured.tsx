import React from 'react';

function Featured(){
  return <>
    <div className={'container'}>
      <h2>{'As Featured'}</h2>
      <div className='items'>
        <a href='https://webrazzi.com/2022/05/10/mobil-kripto-bankacilik-uygulamasi-metavest-1-6-milyon-dolar-tohum-yatirim-aldi/' target='_blank'>
          <img src='/img/featured-in/webrazzi.svg'/>
        </a>
        <a href='https://avangernews.com/geleceginize-yatirim-yapin-metavest-app/' target='_blank'>
          <img src='/img/featured-in/avangernews.svg'/>
        </a>
        <a href='https://br.investing.com/news/cryptocurrency-news/metavest-integra-brz-e-recebe-aporte-de-us-16-milhao-1001097' target='_blank'>
          <img src='/img/featured-in/investing-com.svg'/>
        </a>
        <a href='https://panoramacrypto.com.br/metavest-integra-brz-e-recebe-aporte-de-us-16-milhao/' target='_blank'>
          <img src='/img/featured-in/panoramacrypto.svg'/>
        </a>
        <a href='https://www.btchaber.com/metavest-kolay-ve-ulasilabilir-global-kripto-bankacilik-uygulamasi/' target='_blank'>
          <img src='/img/featured-in/btchaber.svg'/>
        </a>
      </div>
    </div>
    <style jsx>{`
        .container {
          background-color: #ECF6F8;
          display: flex;
          margin-left: 22px;
          margin-right: 22px;
          padding: 24px;
          border-radius: 48px;
          flex-direction: column;
        }
        h2 {
          text-align: center;
          flex: 1;
          font-size: 1.85185vw;
          font-weight: 400;
          color: #25859F;
          margin-bottom: 3vw;
        }
        .items{
          display: flex;
          flex-wrap: wrap;
          padding-left: 5vw;
          padding-right: 5vw;
          align-items: center;
          justify-content: center;

        }

        .items a {
          margin-left: 3vw;
          margin-right: 3vw;
          margin-top: 2vw;
          margin-bottom: 1vw;
          width: 21%;
        }
        .items img {
          width: 100%;
          opacity: 0.5;
          transition: 0.3s opacity;
        }
        .items img:hover{
          opacity: 1;
        }

        @media screen AND (max-width: 526px) {
          h2 {
            font-size: 4vw;
          }
          .items{
            padding-left: 1vw;
            padding-right: 1vw;
            justify-content: space-evenly;
          }
          .items a {
            margin-left: 1vw;
            margin-right: 1vw;
            margin-top: 3vw;
            margin-bottom: 3vw;
            width: 40%;
          }
        }
    `}</style>
  </>
}

export default Featured;