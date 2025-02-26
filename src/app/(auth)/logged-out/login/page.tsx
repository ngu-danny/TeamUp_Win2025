"use client";

import Link from "next/link";
import Form from "next/form";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { auth } from "../../../data/firebase/config";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { LoginErrorHandler } from "../../error-handler";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Uses Firebase's method of signing in
  const handleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, form.email, form.password);
    } catch (error) {
      console.error(error);
      setError(LoginErrorHandler(error));
      setLoading(false);
    }
  };

  // Monitors if user is signed in, if so, redirects to home page
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push(`/`);
      }
    });

    return unsub;
  }, [auth]);

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
        <Form action={handleSignIn} className="my-8">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => {
              setError("");
              setForm((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            className="w-full text-black"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => {
              setError("");
              setForm((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
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
