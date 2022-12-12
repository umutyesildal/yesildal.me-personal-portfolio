import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Section4() {
  const [texts] = useState({
    title: `<strong>So,</strong> how much will you earn?`,
    subtitle:`Starting investment`,
    monthlyDeposits: `Monthly deposits`,
    time:`Time`,
    oneYear: `1 Year`,
    twoYears: `2 Years`,
    threeYears: `3 Years`,
    yourTotalEarnings: `Your total earnings: `,
    statement: `for USDC/USDT investments <br /> for 10% APY`,
  })

  const [formValues, setFormValues] = useState({
    investment: 25000,
    deposit: 1000,
    time: 12,
    result: 0,
  });
  const form = useRef(null);

  function calculate() {
    let values = new FormData(form.current);
    let investment:number = values.get("investment") as any;
    let deposit:number = values.get("deposit") as any;
    let time:number = values.get("time") as any;
    let result = investment * Math.pow(1.1, time * (1 / 12));
    for (let a = 1; a <= time; a++) {
      result =
        result + Math.floor(deposit * Math.pow(Math.pow(1.1, 1 / time), a));
    }
    result = Math.floor(result);
    setFormValues({
      investment: investment,
      deposit: deposit,
      time: time,
      result: result,
    });
    let indexString = document.querySelector("#result").innerHTML.replace('$','');
    let index:number = parseInt(indexString.replace(',','').replace('.',''));
    let floor = Math.floor(Math.abs(index - result) / 30);
    let calulateInterval = setInterval(() => {
      if (index < 1000) {
        document.querySelector("#result").innerHTML =
          "$" + index + "";
      } else {
        document.querySelector("#result").innerHTML =
          "$" + index.toLocaleString() + "";
      }
      if(result > index) {
        index += floor;
      } else {
        index -= floor;
      }
      if (Math.abs(index - result) <= floor) {
        document.querySelector("#result").innerHTML =
          "$" + result.toLocaleString() + "";
        clearInterval(calulateInterval);
      }
    }, 10);

    return true;
  }

  useEffect(() => {
    const range:any = document.getElementById("range"),
    rangeV = document.getElementById("rangeV"),
    setValue = () => {
      const newValue = Number(
          ((range.value - range.min) * 100) / (range.max - range.min)
        ),
        newPosition = 10 - newValue * 0.2;
      rangeV.innerHTML = `<span>$${parseInt(
        range.value
      ).toLocaleString()}</span>`;
      rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    };
    document.addEventListener("DOMContentLoaded", setValue);
    range.addEventListener("input", setValue);

    const range2:any = document.getElementById("range2"),
    rangeV2 = document.getElementById("rangeV2"),
    setValue2 = () => {
      const newValue = Number(
          ((range2.value - range2.min) * 100) / (range2.max - range2.min)
        ),
        newPosition = 10 - newValue * 0.2;
      rangeV2.innerHTML = `<span>$${parseInt(
        range2.value
      ).toLocaleString()}</span>`;
      rangeV2.style.left = `calc(${newValue}% + (${newPosition}px))`;
    };
    document.addEventListener("DOMContentLoaded", setValue2);
    range2.addEventListener("input", setValue2);

    setValue();
    setValue2();
  });

  return (
    <>
      <section id="section4">
        <div className="media">
          <Image src="/img_5.svg" layout="responsive" width="766" height="469" alt="how much will you earn?"/>
        </div>
        <img className="media" src="/img_5.svg" alt="section 5 image" />
        <div className="content">
          <h2 className="animation-element" dangerouslySetInnerHTML={{__html: texts.title }}></h2>
          <form id="revenue-form" ref={form}>
            <fieldset>
              <label>{texts.subtitle}</label>
              <div className="range-wrap">
                <div className="range-value" id="rangeV"></div>
                <input
                  name="investment"
                  id="range"
                  type="range"
                  min="100"
                  max="50000"
                  value={formValues.investment}
                  step="100"
                  onChange={calculate}
                />
              </div>
            </fieldset>
            <fieldset>
              <label>{texts.monthlyDeposits}</label>
              <div className="range-wrap">
                <div
                  className="range-value"
                  id="rangeV2"
                ></div>
                <input
                  name="deposit"
                  id="range2"
                  type="range"
                  min="0"
                  max="2000"
                  value={formValues.deposit}
                  step="100"
                  onChange={calculate}
                />
              </div>
            </fieldset>
            <fieldset className="time-fieldset">
              <span className="text-as-label">{texts.time}</span>
              <div className="option">
                <input
                  id="year1"
                  name="time"
                  type="radio"
                  value="12"
                  checked={formValues.time == 12}
                  onChange={calculate}
                />
                <label htmlFor="year1">{texts.oneYear}</label>
              </div>
              <div className="option">
                <input
                  id="year2"
                  name="time"
                  type="radio"
                  value="24"
                  checked={formValues.time == 24}
                  onChange={calculate}
                />
                <label htmlFor="year2">{texts.twoYears}</label>
              </div>
              <div className="option">
                <input
                  id="year3"
                  name="time"
                  type="radio"
                  value="36"
                  checked={formValues.time == 36}
                  onChange={calculate}
                />
                <label htmlFor="year3">{texts.threeYears}</label>
              </div>
            </fieldset>
            <div className="total">
              <span>
                {texts.yourTotalEarnings} <strong id="result">$40,136</strong>
              </span>
            </div>
            <div className="description">
              <img src="/usdc.svg" alt="usdc logo" />{" "}
              <span dangerouslySetInnerHTML={{__html: texts.statement}}></span>
            </div>
          </form>
        </div>
      </section>
      <style jsx>{`
        section {
          position: relative;
          display: flex;
          flex-direction: row;
          padding: 8.597vw 12.103vw 0 10.317vw;
          background: #ecf6f8;
        }

        section .media {
          width: 58vw;
          height: auto;
          object-fit: cover;
          position: absolute;
          left: -12vw;
        }

        section .content {
          display: flex;
          flex-direction: column;
          width: 32vw;
          margin-left: calc(100% - 32vw);
          position: relative;
          z-index: 1;
        }

        section .content h2 {
          font-family: TWK Everett, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 2.6455vw;
          line-height: 122%;
          width: 22.35449vw;
          margin-bottom: 3.637vw;
          animation-delay: 0;
          color: var(--theme-color);
        }

        section .content h2.animation-element {
          animation: onlyfadeIn 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        section .content h2 strong {
          font-weight: 500;
        }

        section .content form {
          display: flex;
          flex-direction: column;
        }

        section .content form fieldset {
          border: 1px solid #8cedfe;
          box-sizing: border-box;
          border-radius: 0.595vw;
          padding: 1.587vw 0 1.5vw 0.793vw;
          display: flex;
          flex-direction: row;
          margin-bottom: 1.322vw;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }

        section .content form fieldset label {
          font-family: TWK Everett, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.19047vw;
          line-height: 120%;
          color: #234d63;
          margin-right: 0.661vw;
        }

        section input[type="range"] {
          -webkit-appearance: none;
          margin: 1.322vw 0;
          width: 100%;
        }

        section input[type="range"]:focus {
          outline: none;
        }

        section input[type="range"]::-webkit-slider-runnable-track {
          width: 100%;
          height: 2px;
          cursor: pointer;
          animate: 0.2s;
          background: #32bdd3;
          border-radius: 1.653vw;
        }

        section input[type="range"]::-webkit-slider-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #32bdd3;
          cursor: pointer;
          -webkit-appearance: none;
          margin-top: -7px;
        }

        section input[type="range"]:focus::-webkit-slider-runnable-track {
          background: #32bdd3;
        }

        section .range-wrap {
          position: relative;
          margin-right: 16px;
        }

        section .range-value {
          position: absolute;
          top: -20px;
        }

        section .content form fieldset input[type="range"] {
          width: 17.19576vw;
          height: 2px;
        }

        section .content form fieldset.time-fieldset {
          padding-right: 2.777vw;
        }

        section .content form fieldset .text-as-label {
          font-family: TWK Everett, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.19047vw;
          line-height: 120%;
          color: #234d63;
        }

        section .content form fieldset .option {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        section .content form fieldset .option input {
          opacity: 0;
        }

        section .content form fieldset .option label {
          margin-left: 6px;
          font-size: 1.19047vw;
          line-height: 120%;
          position: relative;
        }

        section .content form fieldset .option label:before {
          content: "";
          display: flex;
          position: absolute;
          left: -1.5873vw;
          width: 1.19047vw;
          height: 1.19047vw;
          border: 0.0661vw solid #32bdd3;
          border-radius: 50%;
        }

        section .content form fieldset .option input:checked + label:after {
          content: "";
          display: flex;
          position: absolute;
          left: -1.32275vw;
          top: 0.26455vw;
          background: #32bdd3;
          width: 0.79365vw;
          height: 0.79365vw;
          border-radius: 50%;
        }

        section .content form .total {
          background: #ffffff;
          border: 0.066vw solid #8cedfe;
          box-sizing: border-box;
          border-radius: 0.595vw;
          padding: 1.388vw 2.51322vw 23px 2.51322vw;
          display: flex;
          justify-content: center;
        }

        section .content form .total span {
          font-family: TWK Everett, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 500;
          font-size: 1.65343vw;
          line-height: 120%;
          color: #32bdd3;
        }

        section .content form .total span strong {
          color: #234d63;
          width: 8.20105vw;
          display: inline-block;
          text-align: center;
        }

        section .content form .total span strong span {
          border-bottom: #234d63 0.198vw solid;
          color: #234d63;
        }

        section .content form .description {
          font-family: TWK Everett, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          display: flex;
          justify-content: center;
          font-size: 0.92592vw;
          padding-top: 1.25661vw;
        }

        section .content form .description img {
          width: 1.19047vw;
          height: 1.19047vw;
          margin-right: 0.46296vw;
        }

        section .content form .description span {
          text-align: center;
        }


        @media screen and (max-width: 992px) {
          section {
            padding: 5vw 22px;
          }
          section .content{
              margin-left: 0px;
              width: 100vw;
              overflow: hidden;
          }

          section .content h2 {
            font-size: 34px;
            line-height: 122%;
            width: 70%;
            font-weight: 300;
            margin-bottom: 40px;
            margin-top: 44vw;
          }

          section .content form fieldset {
            border-bottom: none;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            border-left: none;
            border-right: none;
            margin-left: -6vw;
            margin-right: -6vw;
            padding-left: 6vw;
            padding-right: 6vw;
            padding-top: 16px;
            padding-bottom: 16px;
          }

         

          section .content form fieldset label {
              font-size: 20px;
              margin-bottom: 48px;
          }

          section .content form fieldset option label {
              
          }

          section .content form fieldset.time-fieldset {
              flex-direction: row;
              padding-top: 40px;
          }

          section .content form fieldset.time-fieldset span {
              position: absolute;
              font-size: 20px;
              transform: translateY(-40px);
          }

          section .content form fieldset input[type="range"] { 
            width: 100%;
            height: 34px;
            background: transparent;
          }
          
        }

        @media screen AND (max-width: 526px) {
            section .range-wrap {
                position: relative;
                margin-right: 32px;
                margin-left: 32px;
            }

            section .content form fieldset.time-fieldset input {
                align-items: center;
            }

            section .content form fieldset .option {
                margin-bottom: -40px;
            }

            section .content form fieldset .option::first-of-type {
                margin-left: 16px;
            }

            section .content form fieldset .option label {
              font-size: 18px;
            }

            section .content form fieldset .option label:before {
                content: "";
                display: flex;
                position: absolute;
                left: -28px;
                top: 1px;
                width: 16px;
                height: 16px;
                border: 1px solid #32bdd3;
                border-radius: 50%;
            }

            section .content form fieldset .option input:checked + label:after {
                content: "";
                display: flex;
                position: absolute;
                left: -25px;
                top: 4px;
                width: 12px;
                height: 12px;
                background: 1px solid #32bdd3;
                border-radius: 50%;
            }

            section .content form fieldset.time-fieldset {
                flex-direction: row;
                padding-top: 56px;
                padding-left: 9vw;
                padding-right: 5vw;
                margin-bottom: 4vh;
            }

            section .content form fieldset.time-fieldset span {
                margin-left: -3vw;
            }

            section .content form .total {
                padding-top: 20px;
                border-radius: 4vw;
                border: 1px solid #8CEDFE;
            }

            section .content form .total span {
                font-size: 6vw;
            }

            section .content form .total span strong {
                display: block;
                width: 100%;
                margin-top: 4px;
                text-decoration: underline;
                text-underline-offset: 4px;
                text-decoration-thickness: 3px;
            }

            section .content form .description {
                margin-top: 4px;
                font-size: 3vw;
                font-weight: 400;
            }

            section .content form .description img {
                width: 3.6vw;
                height: 3.6vw;
                margin-right: 1.1vw;
            }

            section .media {
                width: 70vw;
                height: auto;
                object-fit: cover;
                position: absolute;
                left: 0vw;
                top: -4vw;
            }
        }
        @media screen AND (max-width: 375px) {
          section .content h2 {
            font-size: 8vw;
            margin-bottom: 16px;
          }
          section .content form fieldset label {
            margin-bottom: 36px;
          }
          section .content form fieldset {
            padding-bottom: 4px;
            padding-top: 10px;
          }

          section .content form fieldset.time-fieldset {
            padding-top: 48px;
            padding-left: 9vw;
            padding-right: 5vw;
          }
          
        }
      `}</style>

      <style jsx global>{`

        #section4 .content h2 strong {
          font-weight: 500;
        }
        #section4 .range-value span {
          font-style: normal;
          height: 41px;
          font-size: 24px;
          line-height: 120%;
          text-align: center;
          background: #fff;
          border: 1px solid #03a9f4;
          border-radius: 4px;
          color: #234d63;
          display: flex;
          align-items: center;
          padding: 0 8px;
          font-weight: 500;
          position: absolute;
          left: 50%;
          top: -20px;
          transform: translate(-50%, 0);
        }

        #section4 .range-value span:before {
          content: "";
          position: absolute;
          width: 14px;
          height: 14px;
          background-image: url(/arrow_down.svg);
          background-repeat: no-repeat;
          background-size: contain;
          top: 100%;
          left: 50%;
          margin-left: -7px;
          margin-top: -1px;
        }

        @media screen AND (max-width: 526px) {
          #section4 .range-value span {
              font-size: 20px;
          }
        }
        
        @media screen AND (max-width: 375px) {
          #section4 .range-value span {
            font-size: 5vw;
            padding-top: 4px;
            padding-bottom: 4px;
            height: 32px;
            top: -10px;
          }
          
        }
      `}</style>
    </>
  );
}
