import TypingText from '../component/TypingText';

const WelcomePage = () => {
    return (
        <div className='flex flex-col w-full h-svh justify-center items-center'>
            <TypingText 
                text='All Because of Christ, we all come here and worshiping the lord together.' 
                typingSpeed={70} 
                className='mt-4 font-Okay text-white'
            />
        </div>
    )
}

export default WelcomePage;