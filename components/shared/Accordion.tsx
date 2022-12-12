import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';


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
      questionTitle: 'Şurası gmbh 2013-2015',
      questionDescription: 'Description'
    },
    {
      questionTitle: 'Şurası gmbh 2013-2015',
      questionDescription: 'Description'
    },
    {
      questionTitle: 'Şurası gmbh 2013-2015',
      questionDescription: 'Description'
    }
  
  ]
});

  return <>
    <div className="accordion-style">
            {
              questions.questions.map((i) => {
                return  <Accordion elevation={0}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon 
                    sx={{ color: '#234d63',
                    }}
                  />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                  sx={{ 
                    color: '#234d63',
                    fontSize: '1.5873vw',
                    lineHeight: '122%',
                  }}>
                    {i.questionTitle}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                  sx={{ color: '#A0A0AA'}}
                  >{i.questionDescription}
                  </Typography>
                </AccordionDetails>
              </Accordion> 
              })
            }
    </div>
    <style jsx>{`
  .accordion-style{
    padding-top: 5vw;
  }
  `}
  </style> 
    </>
  
 
}


