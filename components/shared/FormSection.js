export default function FormSection(props){
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
              max-width: 474px;
          }


          .container h3 {
              font-family: Visby, -apple-system, BlinkMacSystemFont,
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
              font-family: Visby,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
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