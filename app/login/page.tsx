import Button from "@/components/Button"
import Link from "next/link"

const Login = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center ">
            <form className="flex flex-col w-[300px] h-fit bg-bg-secondary p-12 gap-4 rounded-md">
                <h1 className="text-2xl font-semibold text-center">Login</h1>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">E-mail</label>
                    <input placeholder="Enter your email" className="mx-auto w-full rounded-md p-1" type="text" name="email" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input placeholder="Enter your Password" className="mx-auto w-full rounded-md p-1" type="password" name="password" />
                </div>
                <Link href='/home'><Button text="Login" size="small" color="primary" /></Link>
            </form>
        </div>
    )
}

export default Login