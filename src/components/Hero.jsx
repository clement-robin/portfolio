import { styles } from '../styles'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { developer } from '../assets';
import { slideIn } from '../utils/motion'

const downloadFile = (url, filename) => {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.download = filename;
  link.click();
};

const Hero = () => {
  return (
    <div className="xl:flex-row flex-col*reverse flex relative  xs:h-screen h-[300px]">
      <motion.div
        variants={slideIn('left',"tween",0.2, 1)}
        className="w-4/5"
      >
        <div className={`inset-0 top-[120px] flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-secondary"/>
            <div className="w-1 sm:h-80 h-40 violet-gradient"/>
          </div>
          <div className="mb-[150]">
            <h1 className={`${styles.heroHeadText}`}>
              <span className="text-[#915EFF]">Clément</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              French futur engineer <br className='sm:block hidden' />
              looking for intership in Canada
            </p>
            <a
              href="https://raw.githubusercontent.com/clement-robin/portfolio/main/files/resume_Clement_ROBIN_eng.pdf"
              className="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg py-2.5 sm:py-3 shadow-lg rounded-lg bg-[#915EFF] text-white hover:bg-white hover:text-[#915EFF] duration-100"
            >
              <span className="text-sm sm:text-lg font-general-medium duration-100 cursor-pointer">
                Download Resume
              </span>
            </a>
          </div>
        </div>     
      </motion.div>

      <motion.div 
        variants={slideIn('right',"tween",0.2, 1)}
        className="sm:block hidden mt-[-200px]"
      >
        <img 
          src={developer}
          alt="developper_img"
          className="w-full h-full"
        />
      </motion.div>
    </div>

  )
}

export default SectionWrapper(Hero, "") 