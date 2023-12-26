"use client"
import "./page.scss"
import React from 'react';
import { Playfair_Display } from "next/font/google";
import About from "./Assets/About.webp"
import Image from "next/image";
import irdLogo from "./Assets/irdlogo.png"
import cuLogo from "./Assets/culogo.png"
import { PiMedalLight } from "react-icons/pi";
import { FaTrophy } from "react-icons/fa";

const playfair = Playfair_Display({ subsets: ['latin'] })

export default function Home() {

  var speed = 50;//The speed/duration of the effect in milliseconds
  function incEltNbr(id) {
    let elt = document.getElementById(id);
    let endNbr = Number(document.getElementById(id).innerHTML.replace("+", ""));
    incNbrRec(0, endNbr, elt);
  }

  /*A recursive function to increase the number.*/
  function incNbrRec(i, endNbr, elt) {
    if (i <= endNbr) {
      elt.innerHTML = `${i}+`;
      setTimeout(function () {//Delay a bit before calling the function again.
        incNbrRec(i + 1, endNbr, elt);
      }, speed);
    }
  }

  /*Function called on button click*/
  function incNbr() {
    incEltNbr("nbr1");
    incEltNbr("nbr2");
    incEltNbr("nbr3");
    incEltNbr("nbr4");
  }

  const [WorkArray, setWorkArray] = React.useState([
    {
      Timings: "Feb 2021 - Aug 2021",
      Title: "Research Assistant Intern",
      Company: "IRD (L'Institut de researche pour le development)",
      Work: [
        {
          Topic: "Master Thesis",
          Description: "Evaluation of the inclusion of texture channels from the python fototex libraray in the IOTA2 processing chain."
        }
      ],
      Image: irdLogo
    },
    {
      Timings: "Mar 2019 - Sep 2019",
      Title: "Research assistant",
      Company: "University centre of research and development at Chandigarh University",
      Work: [
        {
          Description: "Analysed the 'Data of startups register and closed' during last 15 years(2003-18) in India, and predicted the age of startups (considering the different parameters which affects its age like funding infrastructure resources etc.) using Python libraries such as Scikit learn, matplotlib, Numpy."
        }
      ],
      Image: cuLogo
    },
    {
      Timings: "Dec 2020 - Sep 2021",
      Title: "Information technology Consultant",
      Company: "Junior ISEP",
      Work: [
        {
          Description: "Supervised and developed a couple of web applications using technologies like wordpress, PHP, etc."
        }
      ],
      Image: irdLogo
    },
    {
      Timings: "Dec 2019 - Present",
      Title: "Data Scientist and IT project manager",
      Company: "DOTS PVT.LTD",
      Work: [
        {
          Description: "Provided analysis to personalize health care of patients using random forest algorithm and developed a platform to digitalise medical and Healthcare facilities."
        },
        {
          Description: "Analysed carbon offsetting data to B algorithms and model for predicting amount of Co2 absorbed by trees."
        }
      ],
      Image: irdLogo
    },
    {
      Timings: "July 2019 - Dec 2019",
      Title: "Incubated the start-up",
      Company: "'Smart faming technology services' (Mohali, India)",
      Work: [
        {
          Description: "Production of crops suitable for different Seasons using climate data such that precipitation temperature etc and life form value on mobile application (Machine learning models using linear regression & Navye Byes)."
        },
        {
          Description: "Online platform mobile and web app to sell and purchase farming product and farming education and guidance for farmers (HTML CSS JS PHP and SQL)"
        }
      ],
      Image: irdLogo
    },
  ]
  )

  const ExperienceArray = [
    {
      Title: "Founder-Director",
      Company: "DOTS(Digital Optimised & Tenacious Solutions) PVT.LTD",
      Image: "/Assets/dots.webp",
      Description: "DOTS is IT consultant company and also provides software as service (SaaS). DOTS provides its services in India as well as abroad...",
      Link: "https://edu.dotsforall.com/"
    },
    {
      Title: "Founder-CEO",
      Company: "SFT services (Smart Farming Technique)",
      Image: "./Assets/dots.webp",
      Description: "We, at Smart Farming Technique(SFT) services facilitates a single window solution to the farmers and buyers. We provide an IoT-based smart...",
      Link: "https://sftservices.com/"
    },
    {
      Title: "Founder",
      Company: "Parmit foundation",
      Image: "./Assets/dots.webp",
      Description: "The objective of this NGO is promote and advocate Human Rights, child education and Fundamental Freedom for all without any discrimination...",
      Link: "https://parmitfoundation.org/"
    }
  ]

  React.useEffect(() => {
    incNbr();
  }, []);

  return (
    <main className="h-max">
      {/* Section 1 - Image */}
      <section className=" w-full flex justify-center pt-6">
        <div className="w-[90%] h-[70vh] relative px-10 pt-10">
          <div className="heroImage flex justify-center gap-6 flex-col h-full">
            <h1 className='text-7xl font-bold w-2/3 h-2/4 relative z-10'>
              I
              <br />
              AM
              <br />
              ENTREPRENEURIAL
              <br />
            </h1>
            <br />
            <p className='text-2xl relative z-10'>ME - AN AMBITIOUS ENTREPRENEUR WITH A TRACK RECORD OF SUCCESS</p>
          </div>
        </div>
      </section>

      {/* Section 2 - Stats */}
      <section className="w-full flex justify-center h-auto py-16">
        <div className="flex w-full justify-evenly">
          {/* Years */}
          <div className={`flex justify-center items-center gap-3 h-full ${playfair.className} flex-col-reverse`}>
            <h4 className=' text-lg w-4/5 relative z-10'>
              Projects
              <br />
              Completed
            </h4>
            <br />
            <p className=' text-6xl' id='nbr1'>
              20+
            </p>
          </div>
          {/* Years */}
          <div className={`flex justify-center items-center gap-3 h-full ${playfair.className} flex-col-reverse`}>
            <h4 className=' text-lg w-4/5 relative z-10'>
              Years of
              <br />
              Experience
            </h4>
            <br />
            <p className=' text-6xl' id='nbr2'>
              20+
            </p>
          </div>
          {/* Awards */}
          <div className={`flex justify-center items-center gap-3 h-full ${playfair.className} flex-col-reverse`}>
            <h4 className=' text-lg w-4/5 relative z-10'>
              Awards &
              <br />
              Achievements
            </h4>
            <br />
            <p className=' text-6xl' id='nbr3'>
              20+
            </p>
          </div>
          {/* Ventures */}
          <div className={`flex justify-center items-center gap-3 h-full ${playfair.className} flex-col-reverse`}>
            <h4 className=' text-lg w-4/5 relative z-10'>
              Entreprenereual
              <br />
              Ventures
            </h4>
            <br />
            <p className=' text-6xl' id='nbr4'>
              20+
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - About */}
      <section className="w-full flex justify-center flex-col h-auto py-20 gap-4 bg-[--white] text-primary">
        <h2 className="text-4xl font-bold w-2/4 pl-28">About Me</h2>

        <div className="place-items-center flex justify-around items-center">
          <div className="w-2/4 flex flex-col gap-5 bg-[--white] text-primary justify-between h-full font-medium py-10">
            <p className="font-medium text-3xl font-mono">Entrepreneurship and Research is My Passion</p>
            <p className="text-xl w-full">I am Praveen Soni, a doctoral student and working on a couple of start-ups.
              <br />
              <br />
              I am thrilled for research and innovation(entrepreneurship), and always eager to learn about new tools and technologies. I like teaching and delivering workshop lectures..
            </p>
            <div className="flex flex-col w-full">
              <div className="divider divider-primary opacity-50"></div>
              <div className=" flex justify-center items-start flex-col w-full gap-7">
                <p className="font-medium text-xl italic">
                  Key characteristics
                </p>
                <div className="flex justify-around items-center w-full">
                  <div className="badge badge-outline">Open Minded</div>
                  <div className="badge badge-outline">Creative</div>
                  <div className="badge badge-outline">Positive Attitude</div>
                  <div className="badge badge-outline">Punctual</div>
                  <div className="badge badge-outline">Flexible</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-72 rounded-md aspect-[3/5]">
              <Image alt="Tailwind CSS chat bubble component" className="rounded-lg h-full w-full object-cover" src={About} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Work */}
      <section className="w-full flex justify-center items-center flex-col h-auto py-20 gap-10">
        <h2 className=" text-3xl font-bold px-20">My Work</h2>
        <div className="w-full flex flex-wrap flex-grow justify-center items-center">
          {
            WorkArray.map((item, index) => {
              return (
                <div key={index} className="flex justify-evenly items-center w-2/4">
                  <div className="flex flex-col gap-5 text-[--white] py-10 w-2/4">
                    <div className="flex justify-between items-end">

                      <h4 className="text-xl w-full font-bold">{item.Timings}</h4>
                      <div className="flex justify-center items-center">
                        <Image alt="Work Image" src={item.Image} />
                      </div>
                    </div>
                    <h4 className="text-xl w-full inline-block">{item.Title} at <span className="font-bold">{item.Company}</span></h4>
                    <ul className="list-decimal flex flex-col gap-4" style={{ listStyle: "disk !important" }}>
                      {
                        item.Work.map((workItem, index) => {
                          return (
                            <li className="flex flex-col gap-5 text-[--white] list-disc">
                              {
                                workItem.Topic ? (
                                  <h4 className="text-xl w-full inline-block"><span className="font-bold">{workItem.Topic} : </span>{workItem.Description}</h4>
                                ) :
                                  <p className="text-xl w-full inline-block">{workItem.Description}</p>
                              }
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              )
            }
            )
          }
        </div>

      </section>

      {/* Section 4 - Formation */}
      <section className="w-full flex justify-center items-center flex-col h-auto py-20 gap-4 bg-[--white] text-primary">
        <h2 className=" text-4xl font-bold px-20">Formation</h2>
        <div className="flex justify-evenly items-center w-full">
          <div className="card w-80 min-h-72 bg-[--white] shadow-2xl hover:scale-105 transition-all">
            <div className="card-body justify-evenly">
              <div className="self-center p-5 bg-primary rounded-full">
                <PiMedalLight className="text-[--white]" />
              </div>
              <h2 className="card-title text-center justify-center text-2xl">Bachelors</h2>
              <p className="font-bold text-center">Chandigarh University(CU), Mohali, India
                <br />
                Aug 2016- Jun 2020 :&nbsp;
                <span className=" font-normal">
                  Bachelors in Computer Science and Engineering.
                </span>
              </p>
            </div>
          </div>
          <div className="card w-80 min-h-72 bg-[--white] shadow-2xl hover:scale-105 transition-all">
            <div className="card-body justify-evenly">
              <div className="self-center p-5 bg-primary rounded-full">
                <PiMedalLight className="text-[--white]" />
              </div>
              <h2 className="card-title text-center justify-center text-2xl">Masters</h2>
              <p className="font-bold text-center">Institut supereur d'electronique de Paris(ISEP), France
                <br />
                Feb 2018 - Jan 2019 & Sep 2020-Aug 2021 :&nbsp;
                <span className=" font-normal">
                  Masters in Software development and Engineering
                </span>
              </p>
            </div>
          </div>
          <div className="card w-80 min-h-72 bg-[--white] shadow-2xl hover:scale-105 transition-all">
            <div className="card-body justify-evenly">
              <div className="self-center p-5 bg-primary rounded-full">
                <PiMedalLight className="text-[--white]" />
              </div>
              <h2 className="card-title text-center justify-center text-2xl">Doctorate</h2>
              <p className="font-bold text-center">University of Tours (France)
                <br />
                Oct 2021-2024 :&nbsp;
                <span className=" font-normal">
                  Computer Science (Automatic generation of dashboard)
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Entrepreneurship */}
      <section className="w-full flex justify-center items-center flex-col h-auto py-20 gap-10">
        <h2 className=" text-3xl font-bold px-20">Entrepreneurship And Start-ups</h2>
        <div className="w-full flex flex-wrap flex-grow justify-center items-center">
          {
            ExperienceArray.map((item, index) => {
              return (
                <div key={index} className="flex justify-evenly items-center w-1/3">
                  <div className={`example-${index} card-Experience`}>
                    <div className="wrapper rounded-xl shadow-xl hover:scale-105 transition-all"
                    //To set the image for each card individually, go to scss file and make a new class with the name of the example-{index} and inside it, add class wrapper and set the background image there.
                    >
                      <div className="data">
                        <div className="content">
                          <span className="author underline underline-offset-4">{item.Title}</span>
                          <h1 className="title font-bold"><a href="#">{item.Company}</a></h1>
                          <p className="text">{item.Description}</p>
                          <a href="#" className="button">Know more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            )
          }
        </div>
      </section>

      {/* Section 7 - Awards and Achievements */}

      <section className="w-full flex justify-center items-center flex-col h-auto py-20 gap-10 bg-[--white] text-[--black]">
        <h2 className=" text-3xl font-bold px-20">Awards and Achievements</h2>
        <div className="w-full flex justify-between items-center">
          <div className="left-Sec flex justify-center items-center w-1/3">
            <Image alt="Work Image" src={require("@/app/Assets/award1.webp")} className=" w-[70%] h-auto" width={100} height={100}/>
          </div>
          <div className="center-Sec w-1/3 flex justify-center items-center">
            <ul className=" list-disc">
              <li>
                <div className="flex justify-center items-center">
                  <p className=""><span className="font-bold">Student Entrepreneur status “Pepite PON” Paris</span>, at Nord. (Session 2021-22)</p>
                </div>
              </li>
              <li>
                <div className="flex justify-center items-center">
                  <p className=""><span className="font-bold">Student Entrepreneur status “Pepite PON” Paris</span>, at Nord. (Session 2021-22)</p>
                </div>
              </li>
              <li>
                <div className="flex justify-center items-center">
                  <p className=""><span className="font-bold">Student Entrepreneur status “Pepite PON” Paris</span>, at Nord. (Session 2021-22)</p>
                </div>
              </li>
              <li>
                <div className="flex justify-center items-center">
                  <p className=""><span className="font-bold">Student Entrepreneur status “Pepite PON” Paris</span>, at Nord. (Session 2021-22)</p>
                </div>
              </li>
              <li>
                <div className="flex justify-center items-center">
                  <p className=""><span className="font-bold">Student Entrepreneur status “Pepite PON” Paris</span>, at Nord. (Session 2021-22)</p>
                </div>
              </li>
              <li>
                <div className="flex justify-center items-center">
                  <p className=""><span className="font-bold">Student Entrepreneur status “Pepite PON” Paris</span>, at Nord. (Session 2021-22)</p>
                </div>
              </li>
              <li>
                <div className="flex justify-center items-center">
                  <p className=""><span className="font-bold">Student Entrepreneur status “Pepite PON” Paris</span>, at Nord. (Session 2021-22)</p>
                </div>
              </li>
              <li>
                <div className="flex justify-center items-center">
                  <p className=""><span className="font-bold">Student Entrepreneur status “Pepite PON” Paris</span>, at Nord. (Session 2021-22)</p>
                </div>
              </li>
              <li>
                <div className="flex justify-center items-center">
                  <p className=""><span className="font-bold">Student Entrepreneur status “Pepite PON” Paris</span>, at Nord. (Session 2021-22)</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="right-Sec w-1/3 flex justify-center items-center">
            <Image alt="Work Image" src={require("@/app/Assets/award2.webp")} className=" w-[70%] h-auto" width={100} height={100}/>
          </div>
        </div>
      </section>
    </main>
  )
}
