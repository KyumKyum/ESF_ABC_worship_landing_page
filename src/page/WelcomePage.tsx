import HoveringTitle from '../component/Title'
import TypingText from '../component/TypingText';

const WelcomePage = () => {
    return (
        <div className='flex flex-col w-full h-[350px] justify-center items-center'>
            <div data-aos="fade-up">
                <HoveringTitle text={"ABC"} />  
                <HoveringTitle text={"Worship"} />  
            </div>
            <TypingText 
                text='All because of GOD, we all come here and worshiping the LORD together.' 
                typingSpeed={70} 
                className='mt-4 font-Okay'
            />
        </div>
    )
}

export default WelcomePage;