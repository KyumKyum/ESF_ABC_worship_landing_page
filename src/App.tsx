import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BannerImg from './assets/banner.jpg';
import PosterImg from './assets/poster.jpg'
import WelcomePage from './page/WelcomePage';
import InformaitonPage from './page/InformationPage';
import SongPage from './page/SongPage';

function App() {
  const bannerRef = useRef<HTMLImageElement>(null); 
  const [inViewBanner, setInViewBanner] = useState(false);
  const [inViewPoster, setInViewPoster] = useState(false);

  const [bannerRefView, inViewBannerRef] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [posterRef, inViewPosterRef] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inViewBannerRef && !inViewBanner) {
      setInViewBanner(true);
    }
  }, [inViewBannerRef, inViewBanner]);

  useEffect(() => {
    if (inViewPosterRef && !inViewPoster) {
      setInViewPoster(true);
    }
  }, [inViewPosterRef, inViewPoster]);

  useEffect(() => {
    if (inViewBanner && !inViewPoster) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const banner = bannerRef.current;
        if (banner) {
          banner.style.transform = `translateY(${scrollY * 0.5}px)`; // 스크롤에 따른 패럴랙스 효과
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [inViewBanner, inViewPoster]);

  return (
    <div className='flex flex-col items-center max-w-[600px] min-w-[460px] px-10'>
      <div className='h-svh'>
        <WelcomePage/>
      </div>

      <div ref={bannerRefView} className='m-0'>
        <motion.img
          ref={bannerRef} // bannerRef를 이미지에 연결
          src={BannerImg}
          alt="banner"
          className='bannerImg'
          initial={{ opacity: 0 }} // 초기 상태 설정
          animate={{ opacity: inViewBanner ? 1 : 0 }} // 배너가 보일 때만 불투명도 애니메이션 적용
          transition={{ duration: 1 }} // 불투명도 애니메이션의 트랜지션 설정
        />
      </div>

      <InformaitonPage />

      <div ref={posterRef} className='mt-20'>
        <motion.img
          src={PosterImg}
          alt="poster"
          initial={{ scale: 0.8 }} // 초기 축소 상태 설정
          animate={{ scale: inViewPoster ? 1 : 0.8 }} // 포스터가 보일 때 확대 애니메이션 적용
          transition={{ duration: 1 }} // 확대 애니메이션의 트랜지션 설정
        />
      </div>
      <div className='w-full mt-20'>
        <SongPage/>
      </div>
      <div className='mx-20'> 
        <p className="my-40 font-Okay text-white place-self-center">Google Form Here</p>
      </div>
    </div>
  );
}


export default App;
