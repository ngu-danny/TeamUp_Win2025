"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { db } from "../data/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { AddButton, MoreButton } from "./svg-images";

export default function ClassSidebar() {
  const [loading, setLoading] = useState(true);
  const [displayArchive, setDisplayArchive] = useState(false);
  const [classes, setClasses] = useState({});
  const [archivedClasses, setArchivedClasses] = useState({});
  const pathname = usePathname();

  // On first load, fetch classes from user
  useEffect(() => {
    // Grab user document
    const uid = localStorage.getItem("UID");
    const docRef = doc(db, "users", uid);

    async function getClasses() {
      const docSnap = await getDoc(docRef);
      // If successful, extract object
      if (docSnap.exists()) {
        const userData = docSnap.data();

        // Set key value pairs of active and archived classes
        await getClassNames(userData.classes, userData.schoolid, true);
        await getClassNames(userData.archivedclasses, userData.schoolid, false);
        setLoading(false);
      }
    }
    getClasses();
  }, []);

  async function getClassNames(classList, schID, notArchive) {
    const tempObj = {};
    for (const classID of classList) {
      // Grab the document for each class within a subcollection of the school
      const docRef = doc(db, `schools/${schID}/classes/${classID}`);
      const docSnap = await getDoc(docRef);

      // If successful, grab name of course from document and store in tempObj
      if (docSnap.exists()) {
        const classData = docSnap.data();
        Object.assign(tempObj, { [classID]: classData.name });
      }
    }

    if (notArchive) {
      setClasses(tempObj);
    } else {
      setArchivedClasses(tempObj);
    }
  }

  return (
    <ul className="flex-auto max-h-[19rem] min-h-[4rem] overflow-y-auto overflow-x-hidden bg-app-dark rounded-l-lg my-2 ml-2">
      {loading ? (
        <></>
      ) : (
        <>
          {/*------------------------------- Active Classes -------------------------------*/}
          {Object.entries(classes).map(([key, value]) => (
            <li key={key}>
              <Link href={`/course/${key}/goals`}>
                <button
                  className="class-sidebar-button"
                  disabled={pathname.startsWith(`/course/${key}/`)}
                >
                  <p>{value}</p>
                </button>
              </Link>
            </li>
          ))}
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
          {displayArchive &&
            Object.entries(archivedClasses).map(([key, value]) => (
              <li key={key}>
                <Link href={`/course/${key}/goals`}>
                  <button
                    className="class-sidebar-button"
                    disabled={pathname.startsWith(`/course/${key}/`)}
                  >
                    <p>{value}</p>
                  </button>
                </Link>
              </li>
            ))}
        </>
      )}
    </ul>
  );
}
