// NOTE: The following implementation is static and based on a student view.
//       Layout and buttons will depend on whether the user is a student or instructor,
//        and if teams have been finalized.

"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useParams } from "next/navigation";
import { ExpandButton } from "./svg-images";

export default function InnerSidebar() {
  const pathname = usePathname();
  const params = useParams();
  const [active, setActive] = useState(false);

  // Manually animate the sidebar
  function hideSidebar() {
    const expandButton = document.getElementsByClassName("expand-button")[0];
    const innerSidebar = document.getElementsByClassName("inner-sidebar")[0];
    const sidebarHeader =
      document.getElementsByClassName("inner-sidebar-text")[0];

    if (active) {
      innerSidebar.style.width = "20rem";
      expandButton.style.left = "23.75rem";
      sidebarHeader.style.color = "var(--foreground)";
    } else {
      innerSidebar.style.width = "0px";
      expandButton.style.left = "3.75rem";
      sidebarHeader.style.color = "var(--background)";
    }
    setActive(!active);
  }

  return (
    <>
      {/*------------------------------- Show/Hide Button -------------------------------*/}
      <button
        className={`expand-button rounded-full z-[101] ${
          active ? "animate-[rotate-to-180] active" : "animate-[rotate-to-360]"
        }`}
        onClick={hideSidebar}
      >
        <ExpandButton height="2.5rem" width="2.5rem" fill="#ffffff" />
      </button>
      {/*------------------------------- Main Content -------------------------------*/}
      <div className="inner-sidebar z-[99]">
        <h2 className="mb-2 mt-[1.25rem] inner-sidebar-text">Winter 2025</h2>
        <ul className="m-5">
          {/*------------------------------- Goals -------------------------------*/}
          <li key={"goals"}>
            <Link href={`/course/${params.id}/goals`} className="w-full block">
              <button
                className="inner-sidebar-button border-t-2"
                disabled={pathname === `/course/${params.id}/goals`}
              >
                Goals
              </button>
            </Link>
          </li>
          {/*------------------------------- Calendar -------------------------------*/}
          <li key={"calendar"}>
            <Link
              href={`/course/${params.id}/calendar`}
              className="w-full block"
            >
              <button
                className="inner-sidebar-button"
                disabled={pathname === `/course/${params.id}/calendar`}
              >
                Calendar
              </button>
            </Link>
          </li>
          {/*------------------------------- Schedule -------------------------------*/}
          <li key={"schedule"}>
            <Link
              href={`/course/${params.id}/schedule`}
              className="w-full block"
            >
              <button
                className="inner-sidebar-button"
                disabled={pathname === `/course/${params.id}/schedule`}
              >
                Schedule
              </button>
            </Link>
          </li>
          {/*------------------------------- People -------------------------------*/}
          <li key={"people"}>
            <Link href={`/course/${params.id}/people`} className="w-full block">
              <button
                className="inner-sidebar-button"
                disabled={pathname === `/course/${params.id}/people`}
              >
                People
              </button>
            </Link>
          </li>
          {/*------------------------------- Class Profile -------------------------------*/}
          <li key={"profile"}>
            <Link
              href={`/course/${params.id}/class-profile`}
              className="w-full block"
            >
              <button
                className="inner-sidebar-button"
                disabled={pathname === `/course/${params.id}/class-profile`}
              >
                Class Profile
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
