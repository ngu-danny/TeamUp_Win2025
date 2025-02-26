"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { auth } from "../data/firebase/config";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Monitors if user is signed in, if not, redirects to login page and does not load page content
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push(`/logged-out/login`);
      } else {
        setLoading(false);
      }
    });

    return unsub;
  }, []);

  return (
    <div className="w-auto h-auto m-auto grow shrink">
      {loading ? (
        <></>
      ) : (
        <>
          <h1>Welcome to Team Up!</h1>
          <h2>Select a class to begin</h2>
        </>
      )}
    </div>
  );
}
