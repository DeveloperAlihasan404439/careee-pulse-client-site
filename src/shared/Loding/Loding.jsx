import Lottie from 'lottie-react'
import loding from './loader.json'
const Loding = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center bg-[#0B1221]'>
            <Lottie
                animationData={loding}
                loop={true}
              />
              
        </div>
    );
};

export default Loding;