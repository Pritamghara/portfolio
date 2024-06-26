import React from 'react'
import css from './Hero.module.scss'
import {motion} from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion'
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false,amount:0.25}}

        
        className={`innerWidth ${css.container}`}>
            <div className={css.upperelement}>
                {/* upper ele */}
                <motion.span
                variants={fadeIn("right","tween",0.2,1)}
                className='primaryText'>Hey there,<br/>I'm Pritam </motion.span>
                <motion.span 
                variants={fadeIn("left","tween",0.4,1)}
                className='secondaryText'>I design beautiful simple <br/>things, and I love what i do</motion.span>
            </div>


            <motion.div 
            variants={fadeIn("up","tween",0.3,1)}
            className={css.person}>

                <motion.img 
                variants={slideIn("up","tween",0.5,1)}
                src="./myphoto.png" alt="" />
            </motion.div>
            {/* email */}

            <a className={css.email} href="mailto:pritamghara@gmail.com">pritamghara@gmail.com</a>
            {/* lower ele */}
            <div className={css.lowerelement}>
                <motion.div
                variants={fadeIn("right","tween",0.3,1)}
                className={`${css.experience}`}>
                <div className="primaryText" >2</div>
                <div className="secondaryText" >
                    <div>
                        Years
                    </div>
                    <div>Experience</div>
                </div>
                </motion.div>
                <motion.div 
                variants={fadeIn("left","tween",0.5,1)}
                className={`${css.certificate}`} >
                    <img src="./certificate.png" alt="" />
                    <span>Front-end</span>
                    <span>and Back-end Developer</span>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero