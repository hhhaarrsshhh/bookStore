import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate,useLocation } from 'react-router-dom';
const Login = () => {
  const Navigate=useNavigate()
      const location=useLocation()
      const from=location.state?.from?.pathname||"/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo={
    emailid:data.emailid,
    password:data.password 

}  
await axios.post("http://localhost:3001/user/login",userInfo)
.then((res)=>{
  console.log(res.data)
  if(res.data){

   // alert("Login successfully")
   toast.success("Login successfully");
    document.getElementById("my_modal_3").close();
    Navigate(from,{state:{from:location.pathname}})

   setTimeout(() => {
        window.location.reload();
        localStorage.setItem("Users",JSON.stringify(res.data.user));
      },1000)


  }

}).catch((err)=>{
  if(err.response){
    console.log(err)
    //alert("Errror"+err.response.data.message);
    toast.error(err.response.data.message);
    setTimeout(() => {
      
    },2000)
    
  }
  
})


  }

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        {/* Close button form - separate from login form */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        
        <h3 className="font-bold text-lg">Login</h3>
        
        {/* Main login form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div className="mt-4 space-y-2">
            <label>Email</label>
            <input 
              type="emailid" 
              placeholder="Enter your email" 
              className='w-full px-3 py-1 border rounded-md outline-none'
              {...register("emailid", { required: "Email is required" })}
            />
            {errors.email && (
              <span className='text-sm text-red-500'>{errors.email.message}</span>
            )}
          </div>

          {/* Password Field */}
          <div className="mt-4 space-y-2">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              className='w-full px-3 py-1 border rounded-md outline-none'
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className='text-sm text-red-500'>{errors.password.message}</span>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center mt-6">
            <button 
              type="submit"
              className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-400 duration-300'
            >
              Login
            </button>
            <p>
              Not registered?{' '}
              <Link to="/signup" className='underline text-blue-500'>
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
      
      {/* Modal backdrop for clicking outside to close */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Login;