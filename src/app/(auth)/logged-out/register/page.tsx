"use client";

import Link from "next/link";
import Form from "next/form";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    schoolID: "",
  });
  const [isInstructor, setIsInstructor] = useState(false);
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
      <div className="w-[500px] flex flex-col overflow-y-auto p-8 content-center">
        <div>
          <p>Logo</p>
        </div>
        <h2 className="pt-4 pb-2 text-center">Register a new account</h2>
        {/*------------------------------- Redirect to login -------------------------------*/}
        <p className="text-[18px] text-center font-semibold">
          Have an account? &nbsp;
          <Link
            href="/logged-out/login"
            className={`text-sky-800 ${loading ? "pointer-events-none" : ""}`}
            aria-disabled={loading}
          >
            Log in
          </Link>
        </p>
        {/*------------------------------- Register form -------------------------------*/}
        <Form action={handleRegister} className="my-8">
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
          <input
            type="checkbox"
            id="instructor"
            name="isInstructor"
            onChange={(e) => {
              setError("");
              setIsInstructor(!isInstructor);
            }}
            checked={isInstructor}
            className="my-2"
          />
          <label htmlFor="instructor" className="pl-4">
            Are you a teacher/professor?
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={(e) => {
              setError("");
              setForm((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            className="w-full mt-4 text-black"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
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
            type="text"
            name="schoolID"
            placeholder="School ID"
            value={form.schoolID}
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
          <button type="submit" className="w-full p-3 my-6" disabled={loading}>
            <p>Register</p>
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
