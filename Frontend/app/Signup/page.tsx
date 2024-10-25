"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../globals.css";
import { Alert } from "@/components/alert";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Visibility, Success, Message } from "@/components/alert";



export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [showAlert, setShowAlert] = useRecoilState(Visibility);
  const setSuccess = useSetRecoilState(Success)
  const setMessage = useSetRecoilState(Message);
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
      try {
        const res = await axios.post("http://localhost:5000/api/v1/user/signUp", {
          username,
          email,
          password,
        });
    
        console.log("Response:", res); // Debug log
    
        // Check the status code manually
        if (res.status === 201) {
          setSuccess(true);
          setMessage("Account created");
          localStorage.setItem("token", res.data.token);
          router.push("/"); // Redirect to dashboard
        } else if (res.status === 403) {
          setSuccess(false);
          setMessage("Wrong Password");
          setShowAlert(true);
        } else if (res.status === 404) {
          setSuccess(false);
          setMessage("Username not found");
          setShowAlert(true);
        } else {
          setSuccess(false);
          setMessage("Unexpected response from the server");
          setShowAlert(true);
        }
      } catch (err) {
        console.error("Error during login request:", err); // Debug log
        // Handle specific Axios errors
        if (axios.isAxiosError(err)) {
          const status = err.response?.status;
          console.log("Axios error status:", status); // Debug log
    
          if (status === 400) {
            setMessage("Use different username or email");
          }else {
            setMessage(err.response?.data?.message || "Request failed");
          }
        } else {
          setMessage("Unexpected error occurred");
        }
    
        setSuccess(false);
        setShowAlert(true);
      }    
  };

  return (
    <>
      {showAlert && (
        <Alert/>
      )}
      <div className="min-h-screen flex items-center justify-center bg-[#DFE6E7]">
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-row w-[80vw] justify-between h-[60vh] p-20 items-center">
          <div>
            <h1 className="text-2xl font-bold mb-6 text-center text-black">
              Login
            </h1>
          </div>
          <div className="w-80">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="Email"
                  id="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-center text-black text-sm">
              Dont have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:text-blue-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
