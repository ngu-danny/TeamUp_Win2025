"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AddButton, MoreButton } from "./svg-images";

export default function ClassSidebar() {
  const [displayArchive, setDisplayArchive] = useState(false);
  const pathname = usePathname();

  return (
    <ul className="flex-auto max-h-[19rem] min-h-[4rem] overflow-y-auto overflow-x-hidden bg-app-dark rounded-l-lg my-2 ml-2">
      {/*------------------------------- Active Classes -------------------------------*/}
      <li key="001">
        <Link href="/course/001/goals">
          <button
            className="class-sidebar-button"
            disabled={pathname.startsWith("/course/001}/")}
          >
            <p>CSS 400</p>
          </button>
        </Link>
      </li>
      <li key="002">
        <Link href="/course/002/goals">
          <button
            className="class-sidebar-button"
            disabled={pathname.startsWith("/course/002}/")}
          >
            <p>ARTH 300</p>
          </button>
        </Link>
      </li>
      <li key="003">
        <Link href="/course/003/goals">
          <button
            className="class-sidebar-button"
            disabled={pathname.startsWith("/course/003}/")}
          >
            <p>BCORE 100</p>
          </button>
        </Link>
      </li>
      {/*------------------------------- Add Classes -------------------------------*/}
      {/*CURRENTLY NOT FUNCTIONAL*/}
      <li key="add">
        <button className="class-sidebar-button">
          <AddButton
            height="1.25rem"
            width="1.25rem"
            fill="var(--app-inverse)"
            className="m-auto"
          />
          <p>Add</p>
        </button>
      </li>
      {/*------------------------------- Display Archived Classes -------------------------------*/}
      <li key="more">
        {/*On click, swap between true and false*/}
        <button
          className={`${
            displayArchive ? "add-button-pressed" : ""
          } class-sidebar-button`}
          onClick={() => setDisplayArchive(!displayArchive)}
        >
          <MoreButton
            height="1.25rem"
            width="1.25rem"
            fill={`${
              displayArchive ? "var(--app-theme)" : "var(--app-inverse)"
            }`}
            className="m-auto"
          />
          <p>Archive</p>
        </button>
      </li>
      {/*------------------------------- Archived Classes -------------------------------*/}
      {displayArchive && (
        <li key="004">
          <Link href="/course/004/goals">
            <button
              className="class-sidebar-button"
              disabled={pathname.startsWith("/course/004}/")}
            >
              <p>BIS 400</p>
            </button>
          </Link>
        </li>
      )}
    </ul>
  );
}
