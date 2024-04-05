import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";

const ResetPassword = () => {

    const handleResetPassword = e =>{
        e.preventDefault();
        const email = e.target.email.value;

        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Check your email");
        })
    }

    return (
        <div className="h-[calc(100svh-73px)] flex justify-center items-center">

            <form className="max-w-[500px] w-[95%] p-6 bg-base-300 rounded-xl shadow-xl flex flex-col gap-4" onSubmit={handleResetPassword}>

                <input type="email" name="email" className="p-3 rounded-lg" placeholder="Enter your email" />

                <button className="p-3 rounded-lg bg-primary text-xl font-semibold text-base-100 active:scale-95 transition-transform">
                    Send Password Reset Email
                </button>
            </form>
            
        </div>
    );
};

export default ResetPassword;