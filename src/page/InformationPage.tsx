const InformaitonPage = () => {
    return (
        <div className='flex flex-col w-full h-[350px] items-center'>
            <div className='flex flex-col h-[350px] w-4/6 items-start' data-aos="fade-right">
                <p className='text-4xl font-Jeju'>When?</p>   
                <p className='text-md font-Okay mt-4'>September 7th, 2024, 19:00</p>
            </div>
            <div className='flex flex-col h-[350px] w-4/6 items-end' data-aos="fade-left">
                <p className='text-4xl font-Jeju'>Where?</p>   
                <p className='text-md font-Okay mt-4'>ESF 3F</p>
            </div>
        </div>
    )
}

export default InformaitonPage;