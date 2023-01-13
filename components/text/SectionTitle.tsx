import React from "react";

type SectionTitleProps = {
  children: any;
  centered?: boolean;
};
function SectionTitle(props: SectionTitleProps) {
  let className = "";
  if (props.centered) {
    className += " center";
  }
  return (
    <>
      <h2 className={className}>{props.children}</h2>
      <style jsx>
        {`
      h2 {
          font-family: Visby,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
          font-style: normal;
          font-weight: normal;
          font-size: 2.6455vw;
          line-height: 110%;
          color: var(--title-color);
          margin-bottom: 1.851vw;
      }

      .center {
        text-align: center;
      }
      
      @media screen AND (max-width: 526px) {
        h2 {
          font-size: 7vw;
          font-weight: 700;
      }  
    `}
      </style>
    </>
  );
}

export default SectionTitle;
