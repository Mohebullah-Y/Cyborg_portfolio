import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key='1' />,
          <FaCss3 key='2' />,
          <FaJs key='3' />,
          <FaReact key='4'/>,
          <FaWordpress key='5'/>,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "WordPress Developer - Cyborg Tech",
        stage: "2024",
      },
      {
        title: "Web Developer - Cyborg Tech",
        stage: "2023 - 2024",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development: CS OF CS Committee of Herat University",
        stage: "2021",
      },
      {
        title: "Computer Science Bachelor Herat University: I got acceptance to study in Herat University and I am student of Computer Science Faculty",
        stage: "Since 2019",
      },
      {
        title: "English Diploma: I got my English diploma from Ghalib University",
        stage: "2020",
      },
    ],
  },
];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counters
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full w-full bg-primary/30 py-32 text-center xl:text-left flex justify-center 
    items-center lg:mx-[3rem] xl:mx-0 fk:px-[7rem]">

      <Circles />
      
      {/* avatar image */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -right-[-75%] md:w-[700px] fk:w-[1250px] fk:-right-[-79%]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto lg:mx-[10rem] lg:my-[3rem] h-full flex flex-col items-center 
      xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">

          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 fk:text-[5rem]"
          >
            WHO <span className="text-accent">AM</span> I
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] fk:text-[1.2rem] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Enthusiastic student studying software engineering at Herat University, with a focus on WordPress development. Experienced in troubleshooting and customizing WordPress projects, adept at transforming innovative ideas into unique solutions. Proficient in frontend design to improve user interaction and satisfaction.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 fk:w-[40rem]"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div
                className="relative flex-1 after:w-[1px] fk:after:w-[0px] after:h-full after:bg-white/10 after:absolute 
                after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 hd:w-[100px]">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[110px]">
                  years of experience
                </div>
              </div>
              {/* clients */}
              <div
                className="relative flex-1 after:w-[1px] fk:after:w-[0px] after:h-full after:bg-white/10 after:absolute 
                after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 hd:w-[110px]">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div
                className="relative flex-1 after:w-[1px] fk:after:w-[0px] after:h-full after:bg-white/10 after:absolute 
                after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 hd:w-[110px]">
                  <CountUp start={0} end={15} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
              {/* awards */}
              {/* <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 hd:w-[110px] ">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  wining awards
                </div>
              </div> */}
            </div>
          </motion.div>

        </div>
        
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] hd:mt-[4rem]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 z-10">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute 
                  cursor-pointer fk:text-[3rem] after:fk:top-[45px]
                  after:-bottom-1 after:-left-0`}
                  key={itemIndex}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0 fk:text-[1.5rem]">{item.title}</div>
                  <div className="hidden md:flex fk:text-[1.5rem]">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl text-white fk:text-[2rem]">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default About;
