import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import login from "./login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
const LogIn = () => {
  const { loginUser, googleUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const hendelSingUp = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;

    setError("");
    loginUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfull in the login",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => setError(error.message));
  };

  const hendelGoogle = () => {
    googleUser()
      .then((result) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfull in the login",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => setError(error.message));
  };
  const style = {
    height: 400,
  };
  return (
    <div className="bg-[#142F5C]">
      <Helmet>
        <title>Career Pulse | Log in</title>
      </Helmet>
      <div className="md:min-h-[91vh] w-11/12 mx-auto flex items-center">
        <div className="w-full pt-10 md:pt-10 md:flex gap-5 items-center md:max-h-screen">
          <div className="text-center lg:text-left md:w-[50%] pb-5 md:pb-0">
            <Lottie animationData={login} loop={true} style={style} />
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-[#0a1a35]">
            <form onSubmit={hendelSingUp} className="card-body max-w-lg">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-xl">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-xl">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              {error ? <p className="text-xl text-white">{error} </p> : ""}
              <div className="form-control mt-3">
                <button className="btn bg-[#0B1221] hover:bg-[#0B1221] text-white border-none">
                  Sign UP
                </button>
              </div>
              <div className="flex justify-center">
                <div className="divider divider-horizontal text-white">OR</div>
              </div>
              <div
                onClick={hendelGoogle}
                className=" btn bg-[#0B1221] hover:bg-[#0B1221] text-white border-none"
              >
                google
              </div>
              <p className="text-xl text-white">
                Do not have in account{" "}
                <Link to="/sinup" className="text-orange-400 hover:underline">
                  Please Registor
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
