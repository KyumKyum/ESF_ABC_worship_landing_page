import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BannerImg from './assets/banner.jpg';
import PosterImg from './assets/poster.jpg';
import StarsImg from './assets/stars.png';
import WelcomePage from './page/WelcomePage';
import InformaitonPage from './page/InformationPage';
import SongPage from './page/SongPage';

function App() {
  const bannerRef = useRef<HTMLImageElement>(null); 
  const welcomeRef = useRef<HTMLDivElement>(null);
  const [inViewBanner, setInViewBanner] = useState(false);
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
  const [bannerRefView, inViewBannerRef] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inViewBannerRef && !inViewBanner) {
      setInViewBanner(true);
    }
  }, [inViewBannerRef, inViewBanner]);

  useEffect(() => {
    if (inViewBanner) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const banner = bannerRef.current;
        if (banner) {
          banner.style.transform = `translateY(${scrollY * 0.6}px)`; // 스크롤에 따른 패럴랙스 효과
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [inViewBanner]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsWelcomeVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Reduced the threshold for better detection
    );

    if (welcomeRef.current) {
      observer.observe(welcomeRef.current);
    }

    return () => {
      if (welcomeRef.current) {
        observer.unobserve(welcomeRef.current);
      }
    };
  }, []);

  useEffect(() => {
    console.log(isWelcomeVisible);
  }, [isWelcomeVisible]);

  return (
    <div className='flex flex-col items-center max-w-[600px] min-w-[460px] px-10'>
      <motion.div 
        className='mt-20'
        initial={{opacity: 0}}
        animate={{ opacity: 1}}
        transition={{duration: 1}}
      >
        <img
          src={PosterImg}
          alt='poster'
        />
      </motion.div>
      <div className='h-[700px]' ref={welcomeRef}>
        {isWelcomeVisible && 
          <motion.div
            initial={{opacity: 0}}
            animate={{ opacity: 1}}
            transition={{duration: 1}}
          >
            <WelcomePage />
          </motion.div>
        }
      </div>
      <div ref={bannerRefView} className='m-0'>
        <motion.img
          ref={bannerRef}
          src={BannerImg}
          alt="banner"
          className='bannerImg'
          initial={{ opacity: 0 }} 
          animate={{ opacity: inViewBanner ? 1 : 0 }} 
          transition={{ duration: 1 }} 
        />
      </div>

      <InformaitonPage />
      <div className='w-full mt-20'>
        <SongPage/>
      </div>
      <div className='mx-20 h-32 flex justify-center items-baseline'> 
        <p className="my-20 font-Okay text-white">Google Form Here</p>
      </div>
    </div>
  );
}

export default App;
