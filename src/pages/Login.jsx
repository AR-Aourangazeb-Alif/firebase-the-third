import { useContext, useState } from "react";
import { UserContext } from "../context/UserContextProvider";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const [failed, setFailed] = useState("");
    const [success, setSuccess] = useState("");

    const { setLogin } = useContext(UserContext);

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then(Result => {
                setSuccess("Login succesful")
                setLogin(Result.user);
                console.log(Result.user);
            })
            .catch(error => {
                setFailed(error.message);
                if(error.message === "Firebase: Error (auth/invalid-login-credentials)."){
                    setFailed("Wrong email or password");
                }else{
                    setFailed(error.message);
                }
                console.log(error.message);
            })
    }

    // signIn with google
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(Result => {
                console.log(Result.user);
                setLogin(Result.user);
            })
            .catch(error => console.log(error.message));
    }

    return (
        <div className="h-[calc(100svh-73px)] flex justify-center items-center">

            <div className="max-w-[500px] w-[95%] p-6 bg-base-300 rounded-xl shadow-xl">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 w-full">

                    <div className="flex flex-col gap-2">
                        <input className="p-3 rounded-lg" type="email" name="email" id="email" placeholder="Enter your email" required />
                        <input className="p-3 rounded-lg" type="password" name="password" id="password" placeholder="Enter your password" required />
                    </div>

                    <h1 className="text-info font-medium text-sm">forget password ?</h1>

                    <div className='flex flex-col relative'>

                        <span className={`absolute -top-6 ${success ? "text-green-500" : failed ? "text-red-500" : ""}`}>{success ? success : failed ? failed : ""}</span>

                        <button className="p-3 rounded-lg bg-primary text-xl font-semibold text-base-100 active:scale-95 transition-transform">Login</button>
                    </div>

                </form>

                <div className="flex w-full items-center justify-center py-10 border-t border-dashed border-primary mt-10">

                    <button className="flex items-center justify-center border-2 border-base-100 rounded-md shadow-xl p-2 text-4xl active:scale-95 transition-transform" onClick={googleSignIn}><FcGoogle /></button>

                </div>
            </div>

        </div>
    );
};

export default Login;