"use client";

import Link from "next/link";
import Form from "next/form";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    setLoading(true);
    router.push(`/logged-out/login`);
  };

  return (
    <div className="flex flex-row w-screen h-screen">
      {/*------------------------------- Main Content -------------------------------*/}
      <div className="w-[500px] flex flex-col p-8 content-center">
        <div>
          <p>Logo</p>
        </div>
        <h2 className="pt-4 pb-2 text-center">Log in to your account</h2>
        {/*------------------------------- Redirect to register -------------------------------*/}
        <p className="text-[18px] text-center font-semibold">
          Haven't registered? &nbsp;
          <Link
            href="/logged-out/register"
            className={`text-sky-800 ${loading ? "pointer-events-none" : ""}`}
            aria-disabled={loading}
          >
            Sign Up
          </Link>
        </p>
        {/*------------------------------- Login form -------------------------------*/}
        <Form action={handleRegister} className="my-8">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setError("");
              setEmail(e.target.value);
            }}
            className="w-full text-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setError("");
              setPassword(e.target.value);
            }}
            className="w-full text-black"
          />
          {/*------------------------------- Error display -------------------------------*/}
          {error ? <div className="error">${error}</div> : <></>}
          {/*------------------------------- Submit button -------------------------------*/}
          <button type="submit" className="w-full p-3 my-10" disabled={loading}>
            <p>Sign In</p>
          </button>
        </Form>
      </div>
      {/*------------------------------- Right area -------------------------------*/}
      {/*(Should contain misc images and about us)*/}
      <div className="w-auto h-auto grow shrink bg-app-theme text-app-inverse text-center">
        <h1 className="m-auto">Welcome to Team Up!</h1>
      </div>
    </div>
  );
}
