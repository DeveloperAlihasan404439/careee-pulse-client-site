import axios from "axios";
import BannerShared from "../../shared/BannerShared/BannerShared";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";

const MyBids = () => {
  const [myBids, setMyBids] = useState([]);
  const {user} = useContext(AuthContext)
  useState(() => {
    axios
      .get(`https://serverlite-assignament.vercel.app/myBids?email=${user.email}`,  { withCredentials: true })
      .then((res) => setMyBids(res.data));
  });
  const hendelComplete = (id) => {
    axios
      .patch(`https://serverlite-assignament.vercel.app/myBids/complete?id=${id}`)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Are you sure?",
            text: "Bid job requst  has be complete",
            icon: "success",
            background: "black",
            color: "white",
          });
          refetch();
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Career Pulse | My Bids</title>
      </Helmet>
      <BannerShared
        url="https://img.freepik.com/free-photo/characters-looking-job_1156-558.jpg?w=826&t=st=1699287748~exp=1699288348~hmac=7360adafb1f27898b9c5d90a6860b7ccc415975b998c827d4cfe8419c0fc4122"
        title="My Bids All Jobs"
        catagory="My Bids"
      />
      <div className="w-11/12 mx-auto overflow-x-auto mb-5">
        <h1 className="text-center text-2xl md:text-4xl font-medium my-4">
          <span className="border-b-4 p-2 rounded-xl border-orange-500 dark:border-white dark:text-white">
            My Bids All Jobs
          </span>
        </h1>
        <table className="table dark:text-white">
          <thead>
            <tr>
              <th className="dark:text-white">No</th>
              <th className="dark:text-white">Job Title</th>
              <th className="dark:text-white">Email</th>
              <th className="dark:text-white">Deadline</th>
              <th className="dark:text-white">status</th>
              <th className="dark:text-white">Complete</th>
            </tr>
          </thead>
          <tbody>
                {myBids?.map((mybid, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{mybid?.job_title || "no title"}</td>
                    <td>{mybid.user_email}</td>
                    <td>{mybid.deadline}</td>
                    <td>{mybid.status}</td>
                    {mybid.status === "Complete" ? (
                      ""
                    ) : (
                      <th>
                        {mybid.status === "In progress" ? (
                          <button
                            onClick={() => hendelComplete(mybid._id)}
                            className="px-3 bg-[#142F5C] text-white py-1 h-full rounded-lg"
                          >
                            Complete
                          </button>
                        ) : (
                          <button
                            disabled
                            className="px-3 bg-[#142F5C] text-white py-1 h-full rounded-lg"
                          >
                            Complete
                          </button>
                        )}
                      </th>
                    )}
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
