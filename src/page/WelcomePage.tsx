import TypingText from '../component/TypingText';
import StarsImg from '../assets/stars.png'

const WelcomePage = () => {
    return (
        <div 
            className='flex flex-col w-full h-svh justify-center items-center'
            style={{backgroundImage: `url(${StarsImg})`}}
        >
            <TypingText 
                text='Title. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
                typingSpeed={70} 
                className='font-bkk text-white'
            />
        </div>
    )
}

export default WelcomePage;