import octypto from '../../Images/octypto.png'

const Footer = () =>{
    return (
        <div className='w-full flex md:justify-center justify-between items-center flex-col p-2 gradient-bg-footer'>
        <div className='w-full flex sm:flex-row flex-col justify-between items-center my-2'>
        <div className='flex flex-[0.8] justify-center items-center'>
            <img src={octypto} alt="logo" style={{ height: 200, width: 300}} className='w-32'/>
        </div>
        <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-1 w-full'>
        <p className='text-white text-base text-center cursor-pointer'>
        MARKET</p>
        <p className='text-white text-base text-center cursor-pointer'>
        EXCHANGE</p>
        <p className='text-white text-base text-center cursor-pointer'>
        TUTORIALS</p>
        <p className='text-white text-base text-center cursor-pointer'>
        WALLETS</p>

        </div>

        </div>
        <div className='flex justify-center items-center flex-col mt-5'>
        <p className='text-white text-sm text-center'>Come join us

        </p>
        <p className='text-white text-sm text-center'>octetrahul3290@gmail.com

        </p>

        </div>
        <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5'/>
        <div className='sm:w-[90%] w-full flex justify-between items-centermt-3'>
        <p className='text-white text-sm text-center'>@octypto 2022

        </p>
        <p className='text-white text-sm text-center'>All rights reserved

        </p>

        </div>

        </div>
        
    );
}

export default Footer;