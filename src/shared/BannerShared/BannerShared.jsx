import { TypeAnimation } from "react-type-animation";

const BannerShared = ({ url, title, catagory }) => {
  return (
    <div>
      <div
        className="h-[60vh] "
        style={{
          backgroundImage: `url(${url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-[#00000070] h-full flex items-center relative">
          <div className="w-11/12 mx-auto ">
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-white drop-shadow-2xl pb-3">
              {title}
            </h1>
            <p>
              <TypeAnimation
                sequence={[
                  "Career Pulse 🚩 Navigating Your Path to a Fulfilling Future.",
                  1000, // Waits 1s
                  "Explore job opportunities, gain insights,",
                  2000, // Waits 2s
                  "and find your purpose in a diverse range of industries.",
                  3000,
                  "Your dream career starts here",
                  () => {
                    // console.log("Sequence completed");
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{
                  fontSize: "20px",
                  display: "inline-block",
                  color: "white",
                }}
              />
            </p>
          </div>
          <div className="hidden md:block">
            <div
              className="absolute left-[50%] bottom-0 py-2 px-10 bg-[#142F5C] text-white"
              style={{
                transform: "translateX(-50%)",
                clipPath: " polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <h1 className="text-3xl font-medium">Job Type / {catagory}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerShared;
