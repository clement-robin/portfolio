import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';



const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Skills</h2>
        <p className={styles.sectionSubText}>Programming languages that I have learned through my career</p>
      </motion.div>
      <div className="mt-32 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div 
            className="w-28 h-28"
            key={technology.name}   
          >
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
    
      </div>
    </>
    
    
  )
}

export default SectionWrapper(Tech, "")