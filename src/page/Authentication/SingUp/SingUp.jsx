import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import signUpAnimation from './sign.json'
import Lottie from "lottie-react";
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";
const SingUp = () => {
  const { createUsers,logOutUser } = useContext(AuthContext);
  const [error, setError] = useState('')
  const location = useLocation();
  const navigate = useNavigate()
  const hendelSingUp = e =>{
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    const photo = target.photo.value;
    const password = target.password.value;
    setError('')
    createUsers(email, password)
    .then((result) => {
      updateProfile(result.user,{
      displayName: name, 
        photoURL: photo
      })
      .then(()=>{
        logOutUser()
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Successfull in the registor',
          showConfirmButton: false,
          timer: 1500,
          
        })
        
        navigate(location?.state ? location.state : "/login")
      })
      .catch(error =>setError(error.message))
    })
    .catch(error => setError(error.message))
  }
  return (
    <div className="bg-[#142F5C]">
      <Helmet>
        <title>Career Pulse | Sing Up</title>
      </Helmet>
      <div className=" min-h-[91vh] w-11/12 mx-auto flex items-center">
        <div className="hero-content w-full flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          <Lottie animationData={signUpAnimation} loop={true}/>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-[#0a1a35]">
            <form onSubmit={hendelSingUp} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-xl">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
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
                  <span className="label-text text-white text-xl">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="photo url"
                  className="input input-bordered"
                  name="photo"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-xl">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              
              {
                    error?<p className="text-xl text-white">{error} </p>:''
                }
              <div className="form-control mt-3">
                <button className="btn bg-[#0B1221] hover:bg-[#0B1221] text-white border-none">Sign UP</button>
              </div>
              <p className="text-xl text-white">Already have in account <Link to="/login" className="text-orange-400 hover:underline">Please Login</Link> </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
