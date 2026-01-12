import React from 'react';

const Login: React.FC = () => {

    return( <section className="flex justify-center items-center  min-h-screen bg-gray-200" >
                <div className="flex flex-col justify-center items-center gap-8 bg-white rounded-lg w-100 p-5 shadow-lg">
                    <p className="text-3xl font-bold ">Welcome Back</p>
                    <div className="flex flex-col gap-4 w-80  sm:w-90">

                        <label className="flex flex-col text-gray-700 sm: text-sm sm:text-base">
                        Email or phone number
                        <input 
                        type="text"
                        placeholder="Email or phone number"
                        className="border p-2 rounded-lg sm:p-4 text-sm sm:text-base"/>
                        </label>

                        <label className="flex flex-col text-gray-700 text-sm sm:text-base">
                            Password
                        <input 
                        type="password"
                        placeholder="Password"
                        className="border p-2 rounded-lg sm:p-4"/>
                        </label>

                        <p className="text-blue-700 text-sm sm:text-base">Forgot username?</p>

                        <button className="border p-2 rounded-lg bg-blue-500 text-white text-sm sm:text-base sm:p-4"> 
                            Login
                        </button>
                        <div className="flex justify-center items-center gap-2 text-sm sm:text-base">
                            <hr className="flex-1 border-gray-400"/>
                        <p className="flex flex-col justify-center align-items text-gray-700">
                            Or login with
                        </p>
                        <hr className="flex-1 border-gray-400"/>
                        </div>
                             <button className="flex justify-center items-center border border-gray-500 p-1  sm:p-3 rounded-full gap-2  text-sm sm:text-base">
                            <img
                            src="https://www.svgrepo.com/show/355037/google.svg"
                            alt="Google"
                            className="w-5 h-6 flex items-center sm:w-10 h-8"/>
                            Login with Google
                        </button>
                        <button
                        className="flex justify-center items-center gap-2 border border-gray-600 p-2 sm:p-4 rounded-full text-sm sm:text-base">
                            <img 
                            src="https://th.bing.com/th/id/OIP.0b-pej3UqLTu3qfVPw8-egHaHa?w=195&h=195&c=7&r=0&o=7&pid=1.7&rm=3"
                            alt="Facebook"
                            className="w-7 h-4 sm:w-8 h-8"/>
                            Login with Facebook
                        </button>
                       </div>
                    </div>
            </section>
    );
}

export default Login;
