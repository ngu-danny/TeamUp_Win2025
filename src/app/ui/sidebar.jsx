"use client";

import Link from "next/link";
import ClassSideBar from "./sidebar-class";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { auth } from "../data/firebase/config";
import { signOut, onAuthStateChanged } from "firebase/auth";
import {
  AccountIcon,
  ChatIcon,
  CircleIcon,
  LogoutIcon,
  NotifIcon,
  SettingsIcon,
} from "./svg-images";

export default function Sidebar() {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  async function onLogOut() {
    try {
      localStorage.removeItem("UID");
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  }

  // Monitors if user is signed in, if logged in, displays sidebar
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("UID", user.uid);
        setLoading(false);
      }
    });
    return unsub;
  }, []);

  return (
    <div className="flex flex-col sticky text-center bg-app-theme text-app-inverse h-screen w-[5rem] min-w-[5rem] z-[100] overflow-hidden">
      {/*------------------------------- Logo -------------------------------*/}
      <Link href="/">
        <div className="sidebar-button">
          <CircleIcon
            height="1.5625rem"
            width="1.5625rem"
            fill="var(--app-inverse)"
            className="m-auto"
          />
        </div>
      </Link>

      {loading ? (
        <></>
      ) : (
        <>
          {/*------------------------------- Notifications -------------------------------*/}
          <button className="sidebar-button">
            <NotifIcon
              height="1.5625rem"
              width="1.5625rem"
              fill="var(--app-inverse)"
              className="m-auto"
            />
            <div className="mb-[0.625rem]">
              <p>Alerts</p>
            </div>
          </button>
          {/*------------------------------- Chat -------------------------------*/}
          <button className="sidebar-button">
            <ChatIcon
              height="1.5625rem"
              width="1.5625rem"
              fill="var(--app-inverse)"
              className="m-auto"
            />
            <div className="mb-[0.625rem]">
              <p>Inbox</p>
            </div>
          </button>
          {/*------------------------------- Class List  -------------------------------*/}
          <ClassSideBar />
          {/*------------------------------- Settings  -------------------------------*/}
          <Link href="/settings">
            {/* Pushes outwards if settings has been selected and changes color */}
            <button
              className="sidebar-button"
              disabled={pathname === "/settings"}
            >
              <SettingsIcon
                height="1.5625rem"
                width="1.5625rem"
                fill={`${
                  pathname === "/settings"
                    ? "var(--app-theme)"
                    : "var(--app-inverse)"
                }`}
                className="m-auto"
              />
              <div className="mb-[0.625rem]">
                <p>Settings</p>
              </div>
            </button>
          </Link>
          {/*------------------------------- Profile  -------------------------------*/}
          <Link href="/profile">
            {/* Pushes outwards if profile has been selected and changes color */}
            <button
              className="sidebar-button"
              disabled={pathname === "/profile"}
            >
              <AccountIcon
                height="1.5625rem"
                width="1.5625rem"
                fill={`${
                  pathname === "/profile"
                    ? "var(--app-theme)"
                    : "var(--app-inverse)"
                }`}
                className="m-auto"
              />
              <div className="mb-[0.625rem]">
                <p>Profile</p>
              </div>
            </button>
          </Link>
          {/*------------------------------- Log out  -------------------------------*/}
          <button className="sidebar-button mt-auto" onClick={onLogOut}>
            <LogoutIcon
              height="1.5625rem"
              width="1.5625rem"
              fill="var(--app-inverse)"
              className="m-auto"
            />
            <div className="mb-[0.625rem]">
              <p>Log Out</p>
            </div>
          </button>
        </>
      )}
    </div>
  );
}
