import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {

    const navigate = useNavigate();

    const [state, setState] = React.useState("login");

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiUrl = import.meta.env.VITE_REACT_BACKEND_API;


        try {
            const res = await axios.post(`${apiUrl}/login`, {
                email: formData.email,
                password: formData.password
            });

            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("refreshToken", res.data.refreshToken);

            toast.success("Login successful");

            navigate("/dashboard");

        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.error || "Login failed");
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-1 w-full sm:w-96 text-center bg-blue border border-white/10 rounded-2xl px-8"
            >

                <h1 className="text-white text-3xl mt-10 font-medium">
                    {state === "login" ? "Login" : "Sign up"}
                </h1>

                <p className="text-gray-300 text-sm mt-2">
                    Please sign in to continue
                </p>

                {state !== "login" && (
                    <div className="flex items-center mt-6 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2">

                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-full bg-transparent text-white placeholder-white/60 outline-none"
                            value={formData.name}
                            onChange={handleChange}
                        />

                    </div>
                )}

                <div className="flex items-center w-full mt-4 bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2">

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full bg-transparent text-white placeholder-white/60 outline-none"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="flex items-center mt-4 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2">

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full bg-transparent text-white placeholder-white/60 outline-none"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="mt-4 text-left">
                    <button
                        type="button"
                        className="text-sm text-indigo-300 hover:underline"
                    >
                        Forget password?
                    </button>
                </div>

                <button
                    type="submit"
                    className="mt-2 w-full h-11 rounded-full text-white bg-orange cursor-pointer  hover:bg-indigo-500 transition"
                >
                    {state === "login" ? "Login" : "Sign up"}
                </button>

                <p
                    onClick={() =>
                        setState((prev) => (prev === "login" ? "register" : "login"))
                    }
                    className="text-gray-400 text-sm mt-3 mb-11 cursor-pointer"
                >
                    {state === "login"
                        ? "Don't have an account?"
                        : "Already have an account?"}
                    <span className="text-white hover:underline ml-1">
                        click here
                    </span>
                </p>

            </form>

            {/* animated grid background */}
            <div className="fixed inset-0 -z-10 overflow-hidden">

                <div className="absolute inset-0 bg-slate-200" />

                <div
                    className="absolute inset-0 opacity-60"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)",
                        backgroundSize: "120px 120px", // bigger grid
                        animation: "gridMove 25s linear infinite"
                    }}
                />

            </div>
        </div>
    );
};

export default Login;