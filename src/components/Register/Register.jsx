const Register = () => {
    const handleRegister = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <div className="md:max-w-5xl mx-auto border-2 bg-gray-400">
            <div>
            <h4 className="text-4xl mb-5 text-black text-center">Register here</h4>
            <form onSubmit={handleRegister}>
                <input className="w-full py-2 mb-3" type="email" placeholder="Email address" name="email" id="" />
                <br />
                <input  className="w-full py-2 mb-3" type="password" placeholder="password" name="password" id="" />
                <br />
                <input  className="w-full py-2 mb-3  btn btn-secondary" type="submit" value="Register" />
            </form>
            </div>
        </div>
    );
};

export default Register;