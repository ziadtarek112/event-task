'use client'
import Button from "@/components/Button"
import { EmailIcon, PasswordIcon } from "@/components/Icon";
import Link from "next/link"
import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailEdited, setEmailEdited] = useState(false);
    const [passwordEdited, setPasswordEdited] = useState(false);
    const validateEmail = email.includes('@') && emailEdited;
    const validatePassword = password.length > 6 && passwordEdited;
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailEdited(false);
    }

    const handleEmailBlur = () => {
        setEmailEdited(true);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordEdited(true);
    }
    const handlePasswordBlur = () => {
        setPasswordEdited(true);
    }
    return (
        <div className="h-screen max-h-screen w-full flex justify-center items-center ">
            <div className="flex-[2] h-full hidden md:block">
                <img src="/images/login.jpg" alt="" className="object-cover w-full h-full" />
            </div>
            <form className="flex flex-col h-full flex-1 w-[400px] bg-bg-secondary p-6 md:p-14 lg:p-20 gap-4 max-w-[700px] rounded-md justify-center">
                <h1 className="text-2xl font-semibold text-center">Login</h1>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">E-mail</label>
                    <div>
                        <EmailIcon />
                        <input onBlur={handleEmailBlur} onChange={(e) => handleEmailChange(e)} placeholder="Enter your email" type="email" name="email" />
                    </div>
                    {!validateEmail && <p className="text-red-600">Please Provide a valid email address.</p>}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <div>
                        <PasswordIcon/>
                        <input onBlur={handlePasswordBlur} placeholder="Enter your Password" onChange={(e) => handlePasswordChange(e)} type="password" name="password" />
                    </div>
                    {!validatePassword && <p className="text-red-600">Please Provide a valid Password.</p>}
                </div>
                    <Link href='/home'><Button text="Login" size="large" color="primary" /></Link>
              
            </form>
        </div>
    )
}

export default Login