import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

/**
 *
 * A simple accordion component used at FAQ page, created by using Material UI package.
 *
 * @param {Array} questions - Array of questions, data comes from strapi. questionTitle is the title, questionDescription is the description.
 *
 */

export default function SimpleAccordion() {
  const [questions] = useState({
    questions: [
      {
        questionTitle: "Entrepreneur İTÜ Çekirdek Jan2020-June2020",
        questionDescription:
          'Learned the fundamentals of entrepreneurship. Taken various seminars from İTÜ Çekirdek Mentors and found the opportunity to do meetings with these Mentors. Worked at a time management project called "Crillo" and earned 10.000$ worth of credit from İTÜ Çekirdek.',
      },
      {
        questionTitle: "Intern Vendrops Technologies Sep2020-Mar2021",
        questionDescription:
          "I learned the fundamental parts of the backend web programming using Node.js, Express.js, Gatsby.js. I created a Documentation page of the product using Gatsby.js.I learned the fundamentals of Testing. I learned and used Whitebox Testing, Blackbox Testing, Monkey Testing, Unit Testing and used them when testing the project. I helped the team in the creation of Facilera Tasks App by flutter development, bug fixing and testing.Learned the real life usage of Agile Methodology and SCRUM.",
      },
      {
        questionTitle: "Flutter Developer Platri IT GmbH Feb2021-Jan2022",
        questionDescription:
          "Worked at some projects called “DanceFlavors”,”Signalficant”, ”Nimag” at Platri GmbH. Working with BLoC, state management and Null Safety since the start of the project. Using the package system and creating my own packages in order to have cleaner code and making the packages continually usable for other projects. Using multiple local databases for different needs so that each database has their own usage. For Key-Value Pair i used Hive and for SQL database i used SQFLite.",
      },
      {
        questionTitle: "Software Developer Metavest Mar2022-Still",
        questionDescription:
          "Currently working at Metavest as a software developer, mostly focused on creating front-end pages using react and javascript and creating micro-packages for various purposes with python and javascript.",
      },
    ],
  });

  return (
    <>
      <div className="accordion-style">
        {questions.questions.map((i) => {
          return (
            <Accordion
              elevation={0}
              sx={{
                backgroundColor: "#bae374",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#2d3436" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    color: "#2d3436",
                    fontSize: "20px",
                    fontWeight: "500",
                    lineHeight: "122%",
                    fontFamily: "Visby",
                  }}
                >
                  {i.questionTitle}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "#2d3436",
                    fontSize: "16px",
                    lineHeight: "122%",
                    fontFamily: "Visby",
                  }}
                >
                  {i.questionDescription}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
      <style jsx>
        {`
          .accordion-style {
            padding-top: 5vw;
          }
        `}
      </style>
    </>
  );
}
