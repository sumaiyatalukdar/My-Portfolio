import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style,js";
import { workExperiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn, staggerContainer } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      variants={fadeIn(index % 2 === 0 ? "right" : "left", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <VerticalTimelineElement
        contentStyle={{
          background: "#18181b",
          color: "#fff",
          boxShadow: "0 4px 24px 0 #00000040"
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={experience.duration}
        iconStyle={{
          background: "#1d1836",
          width: "60px",
          height: "60px",
          boxShadow: "0 0 0 4px #1d1836",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
          overflow: "hidden"
        }}
        position={index % 2 === 0 ? "right" : "left"}
        icon={
          <div className='w-full h-full flex justify-center items-center overflow-hidden'>
            <img
              src={experience.icon}
              alt={experience.name}
              className='w-full h-full object-contain'
            />
          </div>
        }
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className='text-white text-[24px] font-bold'>{experience.pos}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience.name}
          </p>
        </motion.div>

        <motion.ul 
          className='mt-5 list-disc ml-5 space-y-2'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {experience.title}
          </motion.li>
        </motion.ul>
      </VerticalTimelineElement>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className="head-text text-center">
          Work Experience.
        </h2>
      </motion.div>

      <motion.div 
        className='mt-20 flex flex-col'
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <VerticalTimeline>
          {workExperiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");