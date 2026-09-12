import React from 'react';
import Hero_1 from '../assets/images/hero/hero-2025.png';
import Bg_Back from '../assets/images/hero/bg-back.jpg';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div
      id="about-us"
      className="bg-black text-white py-10 pb-0 p-4 sm:p-0 font-sans bg-back"
      style={{
        backgroundImage: `url(${Bg_Back})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-left flex flex-col justify-center"
        >
          <h1 className="text-2xl md:text-4xl font-semibold leading-snug">
            Elevate Your CAT 2026 <br /> Preparation With Rodha Mocks
          </h1>
          <p className="mt-3 text-lg md:text-4xl font-light">
            Get The Closest Experience To <br /> The Actual CAT Exam
          </p>
          <p className="mt-4 text-sm md:text-lg font-semibold py-6 text-gray-300">
            Mentored By India’s Top MBA Experts <br />
            Curated according to students’ needs to ace the <br /> CAT 2026 Exam
          </p>

          <hr className="border-orange-500 w-3/2" />

          <p className="text-xs md:text-base py-4">
            Buy Rodha Mocks Today and Analyse Your CAT 2026 Preparation
          </p>

          <div className="mt-5 sm:flex flex-col sm:flex-row flex-nowrap gap-4">
            <a
              href="https://exam.rodha.co.in/candidate/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button
                className="cursor-pointer bg-yellow-400 text-black py-3 sm:px-15 sm:py-4 md:px-8 md:py-4 rounded-full text-sm sm:text-base font-semibold w-full sm:w-auto transition-all duration-300 transform hover:scale-105 shadow hover:shadow-xl animate-bounce hover:bg-[#fff] hover:text-[#000] border dark:border-[#000]"
              >
                Take A Free Mock
              </button>
            </a>
            <a href="#package" className="w-full sm:w-auto">
              <button
                className="cursor-pointer bg-orange-500 hover:bg-[#fff] hover:text-[#000] border dark:border-[#000] py-3 sm:px-15 sm:py-4 md:px-8 md:py-4 text-white rounded-full text-sm sm:text-base font-semibold w-full sm:w-auto transition-all duration-300 transform hover:scale-105 shadow hover:shadow-xl animate-blink"
              >
                Buy Rodha Mocks for CAT 2026
              </button>
            </a>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex min-h-[470px] items-end justify-center pt-8 sm:min-h-[560px] sm:pt-10"
        >
          <div className="absolute left-0 top-[34%] z-20 max-w-[145px] rounded-xl bg-white px-3 py-3 text-left text-black shadow-xl sm:max-w-[180px] sm:px-4">
            <strong className="block text-lg leading-tight text-[#FF6B00] sm:text-2xl">
              210+ BLACKI
            </strong>
            <span className="text-xs font-semibold leading-tight sm:text-base">
              Converts in CAT 2025
            </span>
          </div>
          <div className="absolute right-0 top-[7%] z-20 max-w-[150px] rounded-xl bg-white px-3 py-3 text-left text-black shadow-xl sm:max-w-[190px] sm:px-4">
            <strong className="block text-lg leading-tight text-[#FF6B00] sm:text-2xl">
              150+ TWIN-SCORE
            </strong>
            <span className="text-xs font-semibold leading-tight sm:text-base">
              99+ percentile in CAT 2025
            </span>
          </div>
          <img
            src={Hero_1}
            alt="Ravi Sir, Rodha mentor"
            className="relative z-10 max-h-[540px] w-auto max-w-full object-contain object-bottom sm:max-h-[620px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
