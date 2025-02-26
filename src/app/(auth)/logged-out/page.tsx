"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();

  // Automatically pushes to login page
  useEffect(() => {
    router.push(`/logged-out/login`);
  }, []);

  return (
    <div className="flex flex-row w-screen h-screen">
      {/*------------------------------- Main Content -------------------------------*/}
      <div className="w-[500px] flex flex-col p-8 content-center"></div>
      {/*------------------------------- Right area (should contain misc images and about us) -------------------------------*/}
      <div className="w-auto h-auto grow shrink bg-app-theme text-app-inverse text-center">
        <h1>Welcome to Team Up!</h1>
      </div>
    </div>
  );
}
