import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Hero_register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef(null);
    // refference for reset password 
    const heroRegister = (e) => {
      setRegisterError('')
      setSuccess('')
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
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          if(result.user.emailVerified){
            setSuccess('user successfully login')
          }
          else{
            alert('Email is not verified')
          }
          // console.log(result);
            sendEmailVerification(auth.currentUser)
            .then(()=>{
              console.log('please check your mail and verify it');
              return;
            })
        })
        .catch(error => {
            console.log(error);
            const errormsg = error.message
            setRegisterError(errormsg)
        })
        }
    const handleForgetPassword = () =>{
      // console.log(emailRef.current.value);
      const email = emailRef.current.value;
        if(!email){
          console.log('enter a email');
          return;
        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
         console.log('Provide a valid email'); 
         return;
        }
        sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log('please check your email box');
        })
        .catch(error => {
          console.log(error.message);
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
                ref={emailRef}
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
                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">
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
            <p className="ml-2">
              Do not have an account?
            <Link to={'/register'}>
              <span className="text-red-500 ml-2">  Login</span>
            </Link>
            </p>
        </div>
      </div>
    </div>
  );
}

export default Hero_register;
