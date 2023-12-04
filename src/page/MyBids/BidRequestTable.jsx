import axios from "axios";
import Swal from "sweetalert2";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import stap1 from '../../assets/love.png'
import stap2 from '../../assets/loved.png'
const BidRequestTable = ({ mybid, index, refetch }) => {
  const { _id, job_title, user_email, deadline, price, status } = mybid;
  const hendelAccept = (id) => {
    axios
      .patch(`https://serverlite-assignament.vercel.app/myBids/accept?id=${id}`, mybid)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Are you sure?",
            text: "Bid job requst  has be accept",
            icon: "success",
            background: "black",
            color: "white",
          });
          refetch();
        }
      });
  };
  const hendelReject = (id) => {
    axios
      .patch(`https://serverlite-assignament.vercel.app/myBids/reject?id=${id}`, mybid)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Are you sure?",
            text: "Bid job requst has be canceled ",
            icon: "success",
            background: "black",
            color: "white",
          });
          refetch();
        }
      });
  };
  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>{job_title}</td>
      <td>{user_email}</td>
      <td>{deadline}</td>
      <td>{price}</td>
      <th>
        {status === "In progress" || status === "Complete" ? (
          <>
            <ProgressBar
              percent={status === "In progress"? 50 : 100}
              filledBackground="linear-gradient(to right, #142F5C, #f0bb31)"
            >
              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                    width="30"
                    src={stap1}
                  />
                )}
              </Step>
              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                    width="30"
                    src={stap2}
                  />
                )}
              </Step>
              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                    width="30"
                    src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
                  />
                )}
              </Step>
            </ProgressBar>
          </>
        ) : (
          <div className="flex gap-5 justify-around">
            <button
              onClick={() => hendelAccept(_id)}
              className="px-3 bg-[#142F5C] text-white py-1 h-full rounded-lg"
            >
              Accept
            </button>
            <button
              onClick={() => hendelReject(_id)}
              className="px-3 bg-[#142F5C] text-white py-1 h-full rounded-lg"
            >
              {status === "Canceled" ? "Rejected" : "Reject"}
            </button>
          </div>
        )}
      </th>
    </tr>
  );
};

export default BidRequestTable;
