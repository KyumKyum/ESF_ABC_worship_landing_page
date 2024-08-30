import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BannerImg from './assets/banner.jpg';
import FireImg from './assets/fire.jpg';
import WelcomePage from './page/WelcomePage';

function App() {
  const bannerControls = useAnimation();
  const [bannerRef, inViewBanner] = useInView({ triggerOnce: false, threshold: 0.5 });

  useEffect(() => {
    if (inViewBanner) {
      bannerControls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 1 }
      });
    } else {
      bannerControls.start({
        scale: 0.5,
        opacity: 0,
        transition: { duration: 1 }
      });
    }

  }, [inViewBanner, bannerControls]);

  return (
    <div className='flex flex-col items-center max-w-[600px] min-w-[460px] p-0'>
      <WelcomePage/>
      
      <div ref={bannerRef} className='m-0'>
        <motion.img
          src={BannerImg}
          alt="banner"
          className='bannerImg'
          initial={{ scale: 0.5, opacity: 0 }}
          animate={bannerControls}
        />
      </div>
    </div>
  );
}

export default App;
