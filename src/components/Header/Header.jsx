import React, { useEffect, useRef, useState } from 'react';
import styles from './Header.module.scss';
import { BiPhoneCall, BiMenuAltRight } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { getMenuStyles, headerVariants } from '../../utils/motion';
import useHeaderShadow from '../../hooks/useHeaderShadow'
import useOutsideAlerter from '../../hooks/useOutsideAlerter'
const Header = () => {


  const [checkwidth, setcheckwidth] = useState(window.innerWidth)
  const [menuopened, setmenuopened] = useState(false)
  const headershadow=useHeaderShadow()
  const menuRef=useRef()
  useOutsideAlerter(
    {
    menuRef,
    setmenuopened
    }
  )
  useEffect(() => {
    
   
  
    // Add event listener for window resize
    const handleResize = () => {
      setcheckwidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  
  return (
    <motion.div initial="hidden" whileInView="show" variants={headerVariants} viewport={{ once: false, amount: 0.25 }} style={{boxShadow:headershadow}}  className={`paddings ${styles.wrapper}`}>
      <div className={`flexCenter innerWidth ${styles.container}`}>
        <div className={styles.name}>
          Pritam
        </div>
        <ul ref={menuRef}  style={getMenuStyles(menuopened)} className={`flexCenter ${styles.menu}`}>
          <li><a href="#experties">Services</a></li>
          <li><a href="#work">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#people">Testimonials</a></li>
          <li className={`flexCenter ${styles.phone}`}>
            <p>8700806596</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>
        {/* form emedium and small screen */}
        <div className={styles.menuicon} onClick={()=>setmenuopened((prev)=>!prev)}>
          {(checkwidth<=640)  && <BiMenuAltRight style={{ fontSize: "30px" }} />}
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
