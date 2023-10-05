import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";

const Hero_register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const heroRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(password.length < 6){
           setRegisterError('password should be at least 6 charecter')
           return;
        }
        else if(!/[A-Z]/.test(password)){
          setRegisterError('Password should have at least single uppercase charecter');
          return;
        }
        // reset error
        setRegisterError(' ')
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result);
            setSuccess('user successfully login')
        })
        .catch(error => {
            console.log(error);
            const errormsg = error.message
            setRegisterError(errormsg)
        })
        }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Hero register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={heroRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Hero register</button>
            </div>
          { registerError && <p className="text-center text-red-500">{registerError}</p>}
          {success && <p className="text-green-600 text-center">{success}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero_register;
