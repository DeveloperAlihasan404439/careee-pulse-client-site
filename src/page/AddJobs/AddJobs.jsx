import Lottie from "lottie-react";
import addjob from "./job.json";
import { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
const AddJobs = () => {
    const [selectedTypeValue,setSelectedTypeValue] = useState('')
    const [selectedCategoryValue,setSelectedCategoryValue] = useState('')
    const currentDate = new Date().toISOString().split('T')[0];
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const hendelAddJob = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const title = target.title.value;
    const deadline = target.deadline.value;
    const description = target.description.value;
    const minimumPrice = target.minimumPrice.value;
    const maximumPrice = target.maximumPrice.value;
    const addJobData = {
      // _id, job_title,deadline, maximum_price, minimum_price,
        email,
        job_title: title,
        deadline,
        description,
        category: selectedCategoryValue,
        type: selectedTypeValue,
        minimum_price: minimumPrice,
        maximum_price: maximumPrice,
    }
    axios.post("https://serverlite-assignament.vercel.app/catagory", addJobData).then((res) => {
      console.log(res.data)
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfull in the new job added",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/myPostedJobs");
      }
    });
};
  return (
      <div className="w-11/12 mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        
      <Helmet>
        <title>Career Pulse | Add Job</title>
      </Helmet>
        <div>
          <Lottie animationData={addjob} loop={true} />
        </div>
        <div>
          <div className="card flex-shrink-0 w-full shadow-xl bg-base-200 dark:bg-[#2A323C] ">
            <form onSubmit={hendelAddJob} className="card-body">
              <div className="md:flex gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text dark:text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user.email}
                    className="input input-bordered"
                    placeholder="email of the employer"
                    readOnly
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text dark:text-white">Job title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="input input-bordered"
                    placeholder="job title"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text dark:text-white">Deadline</span>
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    defaultValue={currentDate}
                    className="input input-bordered"
                    placeholder="deadline"
                    readOnly
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text dark:text-white">Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    className="input input-bordered"
                    placeholder="sort description"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text dark:text-white">Minimum price</span>
                  </label>
                  <input
                    type="text"
                    name="minimumPrice"
                    className="input input-bordered"
                    placeholder="minimum price"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text dark:text-white">Maximum price</span>
                  </label>
                  <input
                    type="text"
                    name="maximumPrice"
                    className="input input-bordered"
                    placeholder="maximum-price"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text dark:text-white">Category</span>
                  </label>
                  
                <select
                  id="input"
                  className="input input-bordered"
                //   value={selectedBrandValue}
                  onChange={(e) => setSelectedCategoryValue(e.target.value)}
                >
                  <option>Select Option Category</option>
                  <option value="Web development">Web development</option>
                  <option value="Digital marketing">Digital marketing</option>
                  <option value="Graphics design" >Graphics design</option>
                </select>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text dark:text-white">Type</span>
                  </label>
                  
                <select
                  id="input"
                  className="input input-bordered"
                  onChange={(e) => setSelectedTypeValue(e.target.value)}
                >
                  <option>Select Option Type</option>
                  <option value="Development">Development</option>
                  <option value="Marketing" >Marketing</option>
                  <option value="Graphics">Graphics</option>
                </select>
                </div>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn bg-[#142F5C] hover:bg-[#142F5C] text-white"
                >
                  Add Jobs{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div />
      </div>
  );
};

export default AddJobs;
