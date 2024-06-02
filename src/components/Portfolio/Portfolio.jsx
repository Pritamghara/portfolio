import React from 'react'
import css from './Portfolio.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, staggerChildren } from '../../utils/motion'

const Portfolio = () => {
  return (
    <motion.section 
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className='primaryText'>My Latest Works</span>
            <p style={{ marginTop: "10px" }}>Perfect Solution for digital Experience</p>
          </div>

          <span className='secondaryText'>Explore more works</span>
        </div>

        {/* image */}
        <div className={`flexCenter ${css.showcase}`}>
          <motion.a 
            href="https://movies-seven-lyart.vercel.app/" // Replace with the actual link
            variants={fadeIn('up', 'tween', .5, .6)}
          >
            <img src="./1.png" alt="project" />
          </motion.a>
          <motion.a 
            href="https://gymsite-react.pages.dev/" // Replace with the actual link
            variants={fadeIn('up', 'tween', .7, .6)}
          >
            <img src="./2.png" alt="project" />
          </motion.a>
          <motion.a 
            href="https://realestate-v5b9.onrender.com/" // Replace with the actual link
            variants={fadeIn('up', 'tween', .9, .6)}
          >
            <img src="./3.png" alt="project" />
          </motion.a>
          <motion.a 
            href="https://ecomsitewebtuto.pages.dev/" // Replace with the actual link
            variants={fadeIn('up', 'tween', .5, .6)}
          >
            <img src="./4.png" alt="project" />
          </motion.a>
          <motion.a 
            href="https://realestateweb-67v.pages.dev/" // Replace with the actual link
            variants={fadeIn('up', 'tween', .7, .6)}
          >
            <img src="./5.png" alt="project" />
          </motion.a>
          <motion.a 
            href="https://pritamghara.github.io/bluelock/" // Replace with the actual link
            variants={fadeIn('up', 'tween', .9, .6)}
          >
            <img src="./6.png" alt="project" />
          </motion.a>
        </div>
      </div>
    </motion.section>
  )
}

export default Portfolio
