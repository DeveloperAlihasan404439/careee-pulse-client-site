import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const MyPostedJobsCart = ({ myjob, refetch }) => {
  const {
    _id,
    job_title,
    deadline,
    minimum_price,
    maximum_price,
    email,
    description,
  } = myjob || {};
  console.log(myjob)
  const hendelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "delete the job post",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#142F5C",
      cancelButtonColor: "#142F5C",
      confirmButtonText: "Yes, delete it!",
      background: "black",
      color: "white",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://serverlite-assignament.vercel.app/catagory/delete?id=${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Success the delete job",
                showConfirmButton: false,
                timer: 1500,
                background: "black",
                color: "white",
              });
              refetch();
            }
          });
      }
    });
  };
  return (
    <div className="p-5 mb-5 border-2 rounded-xl bg-base-300 dark:bg-[#060708a9] dark:text-white">
      <h2 className="text-lg md:text-2xl text-left font-medium ">
        {job_title}
      </h2>
      <h1 className="text-sm md:text-lg p-1 text-left font-medium ">
        Deadline : {deadline}
      </h1>
      <h1 className="text-sm md:text-lg text-left font-medium ">
        {" "}
        Minimum Price : {minimum_price}
      </h1>
      <h1 className="text-sm md:text-lg text-left font-medium ">
        {" "}
        Maximum Price : {maximum_price}
      </h1>
      <h1 className="text-sm md:text-lg text-left pb-2 font-medium ">
        {" "}
        Email : {email}
      </h1>
      <h1 className="text-sm md:text-md text-left font-medium   mb-4">
        Description : {description}
      </h1>
      <div className=" md:flex gap-5 ">
        <Link to={`/myPostedJobs/${_id}`}>
        <button
          className="uppercase py-2 px-6 w-full mb-2 md:mb-0 md:w-fit items-center justify-center bg-[#142F5C] text-white text-2xl font-medium  rounded-xl"
        >
          update
        </button>
        </Link>
        <button
          onClick={() => hendelDelete(_id)}
          className="uppercase py-2 px-6 w-full md:w-fit items-center justify-center bg-[#142F5C] text-white text-2xl font-medium rounded-xl"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default MyPostedJobsCart;
