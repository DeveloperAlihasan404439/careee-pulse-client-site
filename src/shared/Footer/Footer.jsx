import logo from "../../assets/logo.png";
import name from "../../assets/name.png";
import { NavLink } from "react-router-dom";
import socel from './seocel.png'
const Footer = () => {
  return (
    <div className="bg-[#0B1221] lg:relative">
      <div className="hidden lg:block h-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#142f5c"
            fillOpacity="1"
            height="100$"
            d="M0,96L60,106.7C120,117,240,139,360,160C480,181,600,203,720,208C840,213,960,203,1080,181.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bg-[#00000070] h-full flex items-center w-full lg:absolute top-0 left-0">
        <div className="w-11/12 mx-auto py-5">
          <footer className="flex flex-wrap justify-around text-white">
            <div className="flex flex-col justify-center w-full md:w-auto">
              <div className="flex items-center justify-center ">
                <img src={logo} alt="" className="w-[80px] md:w-[100px]" />
                <img src={name} alt="" className="w-[150px] md:w-[200px]" />
              </div>
              <p className="text-center md:text-left">
                MANUB Industries Ltd.
                <br />
                Providing reliable tech since 1992
              </p>
            </div>
            <div className="mt-5 md:mt-0 flex flex-col text-center md:text-left gap-1 text-xl w-full md:w-auto">
              <NavLink to="/" className="mb-1 lg:mb-0">
                Home
              </NavLink>
              <NavLink to="/addjobs" className="mb-1 lg:mb-0">
                Add job
              </NavLink>
              <NavLink to="myPostedJobs" className="mb-1 lg:mb-0">
                My posted jobs
              </NavLink>

              <NavLink to="/myBids" className="mb-1 lg:mb-0">
                My Bids
              </NavLink>
              <NavLink to="/bidRequest" className="mb-1 lg:mb-0">
                Bid Requests
              </NavLink>
            </div>

            <div className=" md:mt-0 flex flex-col text-center md:text-left gap-1 text-xl w-full md:w-auto">
              <header>Company</header>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </div>
            <div className=" md:mt-0 flex flex-col text-center md:text-left gap-1 text-xl w-full md:w-auto justify-center">
            <header>Social Media</header>
            <div className="flex justify-center md:justify-start">
            <img src={socel} alt="" className="w-[100px]"/>
            </div>
            <div className="bg-black rounded-md">
            <input
                  type="password"
                  placeholder="message"
                  className="input input-bordered rounded-r-none"
                  name="password"
                  required
                />
                <button className="py-3 px-2 bg-[#0B1A34] text-white rounded-r-xl dark:bg-white dark:text-black">Send</button>
            </div>
            </div>
          </footer>

          <p className="text-center pt-10 text-white">
            Copyright © 2023 - All right reserved by MANUB Industries Ltd
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
