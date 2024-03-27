import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
    createUserWithEmailAndPassword(
      auth,
      loginFormData.email,
      loginFormData.password,
    )
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => console.log(err));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <section className="w-full p-20 mb-4" style={{ height: "75dvh" }}>
      <div className="mt-20">
        <h1 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-orange-50  ">
          Create accout to Sign up
        </h1>
        <form onSubmit={handleSubmit} className=" p-8 flex flex-col">
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            value={loginFormData.email}
            className="border-t py-3 indent-4 border-l border-r border-slate-300 rounded-t-lg outline-none text-slate-600"
          />
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            value={loginFormData.password}
            className="border border-t-none border-b-none border-slate-300 py-3 indent-4 outline-none text-slate-600"
          />
          <button className="bg-orange-400 text-white font-medium py-4 rounded-lg mt-8 text-xl">
            Sign up
          </button>
        </form>
        <p className="text-center text-lg font-light">
          Already have an account?
          <Link to="/login" className="text-orange-400">
            Back to Sign-in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
