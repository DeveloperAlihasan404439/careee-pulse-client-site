import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import BannerShared from "../../shared/BannerShared/BannerShared";
import Loding from "../../shared/Loding/Loding";
import { useQuery } from "@tanstack/react-query";
import MyPostedJobsCart from "./MyPostedJobsCart";
import { Helmet } from "react-helmet";
const MyPostedJobs = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["tacnologi", user],
    queryFn: async () => {
      const catagoresData = await fetch(
        `https://serverlite-assignament.vercel.app/catagory?email=${user?.email}`
      );
      const catagorys = await catagoresData.json();
      return catagorys;
    },
  });
  return (
    <div className="bg-base-200 dark:bg-[#2A323C]">
      
      <Helmet>
        <title>Career Pulse | My Post Job</title>
      </Helmet>
      <BannerShared
        url="https://i.ibb.co/1q5kjTT/Web-Development-Manager.png"
        title="My Posted Jobs"
        catagory="My Jobs"
      />
      {isLoading ? (
        <Loding />
      ) : (
        <>
          <div className="w-11/12 mx-auto py-10 ">
            {data?.map((myjob) => (
              <MyPostedJobsCart
                key={myjob._id}
                myjob={myjob}
                refetch={refetch}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyPostedJobs;
