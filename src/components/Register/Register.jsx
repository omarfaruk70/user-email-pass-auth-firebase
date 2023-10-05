import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error);
        }
    )}
    return (
        <div className="md:max-w-5xl mx-auto border-2 bg-orange-300">
            <div>
            <h4 className="text-4xl mb-5 text-black text-center">Register here</h4>
            <form onSubmit={handleRegister}>
                <input className="w-full py-2 mb-3" type="email" placeholder="Email address" name="email" id="" />
                <br />
                <input  className="w-full py-2 mb-3" type="password" placeholder="password" name="password" id="" />
                <br />
                <input  className="w-full py-2 mb-3  btn btn-secondary" type="submit" value="Register" />
            </form>
            <p className="text-center color">New here ?  <Link className="text-xl" to={'/heroregister'}>Register</Link></p>
            </div>
        </div>
    );
};

export default Register;