import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, slideIn } from '../utils/motion';
import mypicture from '../assets/mypicture.jpg';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>About Me</motion.h1>
    <div className={style.content}>
      <motion.div variants={slideIn('left', '', 0, 1)} className={style.para}>
        <p className={style.text}>
        👋 Myself,
          {' '}
          <a href="http://www.linkedin.com/in/pasupuleti-prem" target="_blank" className={style.link} rel="noreferrer">Prem Pasupuleti</a>
          {' '}
          Hello! I’m Prem, a passionate Computer Science and Engineering student with a keen interest in software development and technology. With a strong foundation in Python, HTML, CSS, and JavaScript, I enjoy crafting responsive and dynamic web applications. I am driven by curiosity and a desire to solve complex problems through innovative solutions.
        </p>
        <p className={style.text}>My academic journey has equipped me with a solid understanding of programming, algorithms, and system design. I have hands-on experience with various projects that have allowed me to apply my knowledge practically and efficiently. Whether it’s developing user-friendly websites, creating efficient algorithms, or exploring the latest advancements in AI and machine learning, I am always eager to expand my knowledge and skills.

</p>
        <p className={style.text}>
        In addition to my technical expertise, I am a strong advocate for teamwork and collaboration. I believe that great things can be achieved when people with diverse perspectives come together to share ideas and work towards a common goal.

When I’m not coding, you can find me exploring new technologies, reading up on the latest industry trends, or participating in hackathons and coding competitions. I am excited to continue my journey in the tech world and look forward to contributing to impactful projects that make a difference.

Feel free to explore my portfolio. Let’s connect and create something amazing together!</p>
      </motion.div>
      <motion.div variants={slideIn('right', '', 0, 1)} className={style.img_container}>
        <div className={style.overlay} />
        <img className={style.img} src={mypicture} alt="Shubh" />
      </motion.div>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
