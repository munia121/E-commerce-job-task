import { useState } from "react";
import { FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);


    return (
        <div>
            <div className="hero  min-h-screen mt-20">
                <div className=" flex-col ">
                    <div className="text-center ">
                        <h1 className="lg:text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="w-full mt-4 lg:mt-10 lg:w-[800px] mx-auto bg-base-100">
                        <form  className="rounded-lg card-body bg-gradient-to-r from-[#f5d3d0] to-[#f29c94] border">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text text-xl">Password</span>
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered" required />
                                <span className="absolute ml-48 mt-14 lg:ml-[660px]"onClick={() => setShowPassword(!showPassword)} >

                                    {
                                        showPassword ? <FaRegEye size={30}></FaRegEye> :
                                            <FaRegEyeSlash size={30}></FaRegEyeSlash>


                                    }

                                </span>
                                {
                                    // error && <p className="text-red-600">{error}</p>
                                }

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-[#f5d3d0] to-[#f29c94] text-white text-lg">Login</button>
                            </div>


                            <p>Don't you have an account? <Link className="text-pink-700 underline" to={'/register'}>Register now</Link></p>
                            <div className="flex gap-4 items-center justify-between mt-10">

                                <p className="w-full h-0.5 bg-black"></p>
                                <p>or</p>
                                <p className="w-full h-0.5 bg-black"></p>

                            </div>
                            <div className="mt-6 mx-auto flex gap-8">
                                {/* <p onClick={googleHandle} className=" bg-black px-4 rounded-md py-2">
                                    <FcGoogle size={30}></FcGoogle>
                                </p>

                                <p onClick={gitHubHandle} className="px-4 py-2 rounded-md border">
                                    <FaGithub size={30}></FaGithub>
                                </p> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;