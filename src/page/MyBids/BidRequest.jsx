import BannerShared from "../../shared/BannerShared/BannerShared";
import BidRequestTable from "./BidRequestTable";
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";

const BidRequest = () => {
  const [requst, setBidRequist] = useState([]);
  const {user} = useContext(AuthContext)
  useState(() => {
    axios
      .get(`https://serverlite-assignament.vercel.app/myBids?email=${user.email}`, { withCredentials: true })
      .then((res) => setBidRequist(res.data));
  });
  return (
    <div>
      <Helmet>
        <title>Career Pulse | Bid Request</title>
      </Helmet>
      <BannerShared
        url="https://img.freepik.com/free-photo/characters-looking-job_1156-558.jpg?w=826&t=st=1699287748~exp=1699288348~hmac=7360adafb1f27898b9c5d90a6860b7ccc415975b998c827d4cfe8419c0fc4122"
        title="Bid Requests All Jobs"
        catagory="Bid Requests"
      />
      <div className="w-11/12 mx-auto overflow-x-auto mb-5">
        <h1 className="text-center text-2xl md:text-4xl font-medium my-5">
          <span className="border-b-4 p-2 rounded-xl border-orange-500 dark:text-white dark:border-white">
            Bid Requests All Jobs
          </span>
        </h1>
        <table className="table dark:text-white">
          <thead>
            <tr>
              <th className="dark:text-white">No</th>
              <th className="dark:text-white">Job Title</th>
              <th className="dark:text-white">Email</th>
              <th className="dark:text-white">Deadline</th>
              <th className="dark:text-white">Price</th>
              <th className="dark:text-white">
                <div className="flex justify-around">
                  <h1>Status</h1>
                  <h1 className="mr-4">Complete</h1>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {requst?.map((mybid, index) => (
              <BidRequestTable
                key={index}
                mybid={mybid}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidRequest;
