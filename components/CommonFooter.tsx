export default function CommonFooter() {


  return (
    <>
      <footer>         
      <h2>
      Built by yesildal.
      </h2>
      </footer>
      <style jsx>{`
        footer {
          padding-top: 4vw;
          margin: auto;
          text-align: center;

        }
        
        footer h2{
          font-family: TWK Everett, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.5873vw;
          line-height: 140%;
          color: #234d63;
        }

        @media screen AND (max-width: 526px) {
          footer {
            width: 100%;
            padding: 0;
            padding-top: 2vh;
            
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
