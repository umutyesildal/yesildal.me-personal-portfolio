import React, { useState } from 'react';

type ProjectsItemProps = {

}
function ProjectsColumn(props:ProjectsItemProps){

  const [texts] = useState({
assets:     [
  {
  backgroundColor: `#dfe6e940`,
  type: `Mobile App`,
  title: `<strong>Danceflavors</strong>`,
  subtitle: 'Worked on Danceflavors app for a year, created frontend for the app, took a part in designing and implementing the architecture of the backend.',
  techs: 'Flutter SQL NoSQL BloC',
  links: {
    github: '',
    website: 'https://www.danceflavors.com/'
  }
},
{
  backgroundColor: `#E4FAFE`,
  type: `Website`,
  title: `<strong>Metavest</strong>`,
  subtitle: 'Worked on metavest.app website and created bunch of pages at metavest.app.',
  techs: 'Flutter SQL NoSQL BloC',
  links: {
    github: '',
    website: 'https://www.danceflavors.com/'
  }},
{
  backgroundColor: `#CCFAED`,
  type: `Mobile App`,
  title: `<strong>DaiDay</strong>`,
  subtitle: 'Worked on Danceflavors app for a year, created frontend for the app, took a part in designing and implementing the architecture of the backend.',
  techs: 'Flutter SQL NoSQL BloC',
  links: {
    github: '',
    website: 'https://www.danceflavors.com/'
  }},
{
  backgroundColor: `#D5EAFF`,
  type: `Mobile App`,
  title: `<strong>Mercedes Assistify</strong>`,
  subtitle: 'Worked on Danceflavors app for a year, created frontend for the app, took a part in designing and implementing the architecture of the backend.',
  techs: 'Flutter SQL NoSQL BloC',
  links: {
    github: '',
    website: 'https://www.danceflavors.com/'
  }
}
]
  });
 
  return <>
    <div  className='column'>
    {
        texts.assets.map((item, i) => {
          return (
            <div className='item' style={{backgroundColor: item.backgroundColor}} >
              <h1 dangerouslySetInnerHTML={{
                __html: item.type
              }} ></h1>
              <h2 dangerouslySetInnerHTML={{
                __html: item.title
              }} ></h2>
              <p dangerouslySetInnerHTML={{
                __html: item.subtitle
              }}></p>
              <span dangerouslySetInnerHTML={{
                __html: item.techs
              }}></span>
              <div className='row-of-logos'>
               {item.links.github != '' ? <a href=""><img src="/logos/github-mark.png" alt="" /></a> : null } 
               {item.links.website != '' ? <a href=""><img src="/logos/website.png" alt="" /></a> : null } 
              </div>
            </div>
          )
        })
      }
    </div>
    <style jsx>{`
      .column {
        display: flex;
        flex-direction: column;
        margin-top: 16px;
      }
      h1 {
        font-family: Visby, -apple-system, BlinkMacSystemFont,
        "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        margin-bottom: 5px;

      } 
      h2 {
        font-family: Visby, -apple-system, BlinkMacSystemFont,
        "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 25px;

      }  
      p {
        font-family: Visby, -apple-system, BlinkMacSystemFont,
        "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji";
        font-style: normal;
        font-weight: 300;
        font-size: 17px;
        line-height: 20px;
        color: #7a7a85;
        margin-bottom: 25px;

      }  
      p {
        font-family: Visby, -apple-system, BlinkMacSystemFont,
        "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji";
        font-style: normal;
        font-weight: 300;
        font-size: 17px;
        line-height: 20px;
        color: #7a7a85;

      }  
      .item {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 4vw;
        border-radius: 2vw; 
        margin-bottom: 25px;

      }
      .item .row-of-logos{
        display: flex;
        flex-direction: row;
        margin-top: 25px;

      }
      .item .row-of-logos img{
        width: 40px;
        height: 25px;
        object-fit: contain;
      }
    `}</style>
  </>
}

export default ProjectsColumn;

