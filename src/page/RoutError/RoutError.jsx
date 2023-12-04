import Lottie from "lottie-react";
import { Link, useRouteError } from "react-router-dom";
import errorLoader from "./error.json";
const RoutError = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="max-w-screen-xl mx-auto px-2 md:px-16 lg:px-24">
      <div className="flex flex-col justify-center items-center my-10">
        <h3 className="text-3xl font-bold text-[#142F5C]">Go Back To Home</h3>

        <div className="text-2xl font-bold text-[#142F5C] mt-2">
          {error.statusText || error.message}
        </div>

        <div className="text-2xl font-bold ">
          {error.status === 404 && (
            <div>
              <div className="h-[60vh]">
              <Lottie
                animationData={errorLoader}
                loop={true}
                className="w-3/2 h-full"

              />
              </div>
              <div className="flex flex-col justify-center items-center mt-4">
                <Link to="/">
                  <button className=" px-6 py-2 font-medium text-xl bg-[#142F5C]  rounded-lg text-white">
                    Go Home
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default RoutError;
