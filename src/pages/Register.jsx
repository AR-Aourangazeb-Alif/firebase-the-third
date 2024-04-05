
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContextProvider';
import { FcGoogle } from 'react-icons/fc';


const Register = () => {

    const [success, setSuccess] = useState("");
    const [failed, setFailed] = useState("");

    const { setLogin } = useContext(UserContext);

    const handleSubmit = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then(Result => {
                setSuccess("User registered successfully");

                //set name
                updateProfile(Result.user, {
                    displayName: name,
                })
                    .then(() => {
                        const loginWithName = Result.user;
                        setLogin(loginWithName)
                    });

            })
            .catch(error => {
                setFailed(error.message);
            })
    }


    // signIn with google
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () =>{
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

                        <input className="p-3 rounded-lg w-full" type="text" name="name" id="name" placeholder="Enter your name" required />

                        <input className="p-3 rounded-lg" type="email" name="email" id="email" placeholder="Enter your email" required />

                        <input className="p-3 rounded-lg" type="password" name="password" id="password" placeholder="Enter your password" required />
                    </div>

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

export default Register;