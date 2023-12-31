import { useState, useEffect } from 'react';
import React from 'react';
import { canva, book } from '../assets';
import { motion } from 'framer-motion';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { SectionWrapper } from '../hoc';


const About = () => {
    const [isVideoHovered, setIsVideoHovered] = useState(false);

    const [isMuted, setIsMuted] = useState(true);

    const handleMuteToggle = () => {
      setIsMuted(prevMuted => !prevMuted);
    };


    const fadeInVariants = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.75 } },
    };
  const fadeIn = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.75 } }
  }
  const slideInLeftVariants = {
    hidden: { x: -80 },
    visible: { x: 0, transition: { duration: 2 } },
};

const slideInRightVariants = {
    hidden: { x: -80 },
    visible: { x: 0, transition: { duration: 2 } },
};
    return (
        <div className="bg-blocker text-white py-10 md:px-4 ">
            <div className="bg-gray py-8 text-center ">
                {/* Content for the upper div */}
                <h1 className="text-5xl font-semibold mb-2">Explore Educationial Services</h1>
                <p className="text-lg">Unlock a world of knowledge with our curated educational content.</p>
            </div>
            <motion.div className="bg-gray-800 py-8 text-center md:flex md:flex-wrap lg:w-[98%] md:100% rounded-md md:ml-0 md:items-center md:justify-center"
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible">
                {/* Content for the white background section */}
                <motion.div className="w-full  md:w-[35%] p-4"
                 variants={fadeInVariants}
                 initial="hidden"
                 whileInView="visible">
                    <img src={book} alt="Service" className="w-full h-[300px] md:h-[450px] rounded-lg"/>
                </motion.div>
                <motion.div className="w-full p-4 md:w-1/3 lg:ml-[100px] md:ml-[50px]" variants={fadeIn}
                    initial="hidden"
                    whileInView="visible" >
                <h1 className='text-xl font-semibold mb-2 text-white text-left'>Written Collection</h1>
                    <p className="text-lg text-white text-left"> Explore a diverse selection of educational books spanning various subjects. 
                    Our thoughtfully curated collection equips you with
                     knowledge and insights for success. From science to literature, these
                     books foster continuous learning and personal development..</p>
                     <ul className="list-none pl-6 mt-4 text-left text-white">
                        <li>&#x2713; Gain access to diverse educational content.</li>
                        <li>&#x2713; Stay up-to-date.</li>
                        <li>&#x2713; Expand your horizons and boost your skills.</li>
                    </ul>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-600 transition duration-300 ease-in-out">
                        Start Exploring
                    </button>
                </motion.div>

            </motion.div>
            <motion.div className="bg-gray-800 py-8 md:w-[100%] lg:w-[98%] rounded-md lg:ml-[25px] md:ml-[10px] mt-3 md:flex md:flex-wrap md:items-center md:justify-center"
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible">
                {/* Content for the dim background section */}
                <motion.div className="w-full md:w-1/3 p-4" variants={fadeIn}
                    initial="hidden"
                    whileInView="visible" >
                <h1 className='text-xl font-semibold mb-2 text-white text-left'>Visual Vault</h1>
                    <p className="text-lg text-white">  Discover engaging video lessons that cover a wide array of subjects. Our 
                    carefully selected videos provide you with a dynamic learning experience that caters to various learning 
                    styles. Whether you're looking to understand complex concepts or explore new interests, our educational videos offer
                     insights and knowledge to fuel your intellectual curiosity.</p>
                     <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-600 transition duration-300 ease-in-out">
                        Learn More
                    </button>
                </motion.div>
                <motion.div className="w-full md:w-[37%] lg:ml-[100px] md:ml-[50px] p-4" variants={fadeInVariants}
                    initial="hidden"
                    whileInView="visible">
                     <video
            src={canva}
            className="w-full h-[400px] object-fill rounded-lg"
            controls={false}
            autoPlay
            loop
            muted={isMuted}
            onMouseEnter={() => setIsVideoHovered(true)}
            onMouseLeave={() => setIsVideoHovered(false)}
          ></video>
          <button
            onClick={handleMuteToggle}
            className={`bg-black text-white px-2 py-1 rounded-full absolute mt-[-30px] ml-[65%] md:ml-[26%] ${
                isVideoHovered ? "visible" : "invisible"
              } transition-opacity duration-500`}
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
                </motion.div>
            </motion.div>
          
        </div>
    );
}


export default SectionWrapper(About, "about");
