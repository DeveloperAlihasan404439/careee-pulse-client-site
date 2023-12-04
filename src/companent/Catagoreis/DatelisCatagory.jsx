import { useLoaderData, useNavigate } from "react-router-dom";
import BannerShared from "../../shared/BannerShared/BannerShared";
import { useContext } from "react";
import { AuthContext } from "../../page/Authentication/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet";
const DatelisCatagory = () => {
  const { user } = useContext(AuthContext);
  const singleData = useLoaderData();
  const navigate = useNavigate();
  const { _id, email, job_title, them_url, deadline, maximum_price, category } =
    singleData || {};
  const hendelBidOnTheProject = (e) => {
    e.preventDefault();
    const myBids = {
      _id,
      wner_email: email,
      price: maximum_price,
      deadline,
      job_title,
      status: "Pending",
      user_email: user.email,
    };
    axios.post("https://serverlite-assignament.vercel.app/myBids", myBids).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "My Bids Added The Successfull In The Mongodb",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/myBids");
      }
    });
  };
  return (
    <div className="bg-base-200">
      <Helmet>
        <title>Career Pulse | Detelis</title>
      </Helmet>
      <BannerShared
        url={
          them_url
            ? them_url
            : "https://i.ibb.co/1q5kjTT/Web-Development-Manager.png"
        }
        title={job_title}
        catagory={`${category}/Bids Job`}
      />
      <div className="w-11/12 mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div>
          <img
            src="https://img.freepik.com/free-vector/business-support-concept-illustration_114360-9863.jpg?size=626&ext=jpg&ga=GA1.1.1505135152.1696615291&semt=sph"
            alt=""
            className="rounded-md max-h-fit"
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                defaultValue={maximum_price}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                placeholder="email"
                defaultValue={deadline}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Buyer Email</span>
              </label>
              <input
                type="email"
                defaultValue={email}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">My Email</span>
              </label>
              <input
                type="email"
                defaultValue={user.email}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              {email === user.email ? (
                <button
                  disabled
                  className="btn bg-[#142F5C] hover:bg-[#142F5C] text-white"
                >
                  Bid on the project{" "}
                </button>
              ) : (
                <button
                  onClick={hendelBidOnTheProject}
                  className="btn bg-[#142F5C] hover:bg-[#142F5C] text-white"
                >
                  Bid on the project{" "}
                </button>
              )}
            </div>
          </form>
        </div>
        <div />
      </div>
    </div>
  );
};

export default DatelisCatagory;
