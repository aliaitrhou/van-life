import { Link } from "react-router-dom";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import google from "../assets/google.png";
const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  // try {
  //   await auth().signInWithEmailAndPassword(email, password);
  //   // User signed in successfully
  // } catch (error) {
  //   console.error(error);
  // }
  const provider = new GoogleAuthProvider();
  function authSignInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        console.log("Signed in with Google");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
    signInWithEmailAndPassword(
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
        <h1 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300  to-orange-100 ">
          Sign in to your account
        </h1>
        <form onSubmit={handleSubmit} className=" p-8 flex flex-col">
          <button
            onClick={authSignInWithGoogle}
            className="bg-white mb-4 font-medium text-black border border-slate-300 py-3 px-8 rounded-lg text-xl flex justify-center items-center gap-4"
          >
            <img src={google} className="w-9 h-9" />
            <p>Sign in with Google</p>
          </button>
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
            className="border bordr-t-none border-slate-300 py-3 indent-4 outline-none rounded-b-lg text-slate-600"
          />
          <button className="bg-orange-400 text-white font-medium py-4 rounded-lg mt-8 text-xl">
            Sign in
          </button>
        </form>

        <p className="text-center text-lg font-light">
          Don’t have an account?
          <Link to="/signup" className="text-orange-400">
            Create one now
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
