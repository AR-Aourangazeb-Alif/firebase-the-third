
import { GoogleAuthProvider, createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContextProvider';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [success, setSuccess] = useState("");
    const [failed, setFailed] = useState("");

    const { setLogin } = useContext(UserContext);

    const handleSubmit = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        const photo = e.target.photo.value;

        if (!terms) {
            setFailed("Accept our terms and conditions");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(Result => {
                setSuccess("User registered successfully");

                //set name
                updateProfile(Result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        const loginWithName = Result.user;
                        setLogin(loginWithName)
                    });

                //email verification
                sendEmailVerification(Result.user)
                    .then(() => {
                        alert("Verify your email. Click on the link we sent you through email")
                    });

            })
            .catch(error => {
                setFailed(error.message);
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
            <div className='max-w-[500px] w-[95%] p-6 bg-base-300 rounded-xl shadow-xl'>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col w-full gap-8">

                    <div className="flex flex-col gap-2">

                        <div className='flex gap-2'>
                            <input className="p-3 rounded-lg w-full" type="text" name="name" id="name" placeholder="Enter your name" required />

                            <input className="p-3 rounded-lg w-full" type="email" name="email" id="email" placeholder="Enter your email" required />
                        </div>

                        <div className='flex gap-2'>
                            <div className='w-full'>
                                <input className="p-3 rounded-lg w-full" type="text" name="photo" id="photo" placeholder="Enter profile photo URL" />
                            </div>

                            <div className="relative w-full">
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute text-xl right-2 top-3 text-primary cursor-pointer">

                                    {showPassword ? <FaEye /> : <FaEyeSlash />}

                                </span>

                                <input className="p-3 pr-8 rounded-lg w-full" type={`${showPassword ? "text" : "password"}`} name="password" id="password" placeholder="Enter your password" required />
                            </div>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" name="terms" id="terms" />
                            <label htmlFor="terms"><a className='text-info' href="">Accept our terms and conditions</a></label>
                        </div>
                    </div>


                    <div className='flex flex-col relative'>

                        <span className={`absolute -top-6 ${success ? "text-green-500" : failed ? "text-red-500" : ""}`}>{success ? success : failed ? failed : ""}</span>

                        <button className="p-3 rounded-lg bg-primary text-xl font-semibold text-base-100 active:scale-95 transition-transform">Login</button>
                    </div>
                </form>

                <div className="flex w-full items-center justify-center py-10 border-t border-dashed border-primary mt-10">

                    <button className="flex items-center justify-center border-2 border-base-100 rounded-md shadow-xl p-2 text-4xl active:scale-95 transition-transform" onClick={googleSignIn}><FcGoogle /></button>

                </div>

                <Link
                    to={'/login'}
                    className='text-primary'>Already have an account ? <span className='font-medium'>LogIn</span></Link>
            </div>
        </div>
    );
};

export default Register;