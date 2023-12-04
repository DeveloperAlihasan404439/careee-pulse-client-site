import moment from 'moment';
import './CatagoryCard.css'
import { Link } from 'react-router-dom';
const CatagoryCart = ({ catagory }) => {
    const { _id, job_title,deadline, maximum_price, minimum_price,description} = catagory || {}

  return (
    <div className=" p-5 border-2 rounded-xl bg-base-200 text-black dark:bg-[#2A323C] dark:text-white relative" data-aos="flip-left" data-aos-duration="1500">
        <h2 className="text-lg md:text-2xl text-left font-medium ">Job Title : {job_title}</h2>
        <h1 className="text-sm md:text-lg p-1 text-left font-medium ">Deadline : {moment(deadline).format("dddd, MMMM Do, YYYY,")}</h1>
        <h1 className="text-sm md:text-lg text-left font-medium "> Maximum Price : {maximum_price}</h1>
        <h1 className="text-sm md:text-lg p-1 text-left font-medium "> Minimum Price : {minimum_price}</h1>
        <h1 className="text-sm md:text-md text-left font-medium   mb-10">Description : {description}</h1>
        <div className='absolute left-0 bottom-0 text-center py-2 bg-[#142F5C] text-white text-2xl font-medium  w-full rounded-b-xl'>
         <Link to={`/details/${_id}`}>
         <button className='uppercase w-full'>Bid Now</button>
         </Link>
        </div>
    </div>
  );
};

export default CatagoryCart;
