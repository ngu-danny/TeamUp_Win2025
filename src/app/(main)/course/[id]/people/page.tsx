// NOTE: The following implementation is static and based on a student view.
//       Layout and buttons will depend on whether the user is a student or instructor,
//        and if teams have been finalized.

import { FilterButton, AccountIcon } from "../../../../ui/svg-images";

export default function People() {
  // NOTE: Each name would be linked to the person's respective profile page, but currently not implemented.
  return (
    <main className="w-auto max-h-screen grow shrink overflow-y-auto">
      {/*------------------------------- Filter -------------------------------*/}
      <div className="flex flex-row-reverse my-[0.825rem]">
        <button className="button-bar mx-[1rem]">
          <FilterButton
            height="2rem"
            width="2rem"
            fill="var(--app-inverse)"
            className="m-auto"
          />
        </button>
      </div>
      {/*------------------------------- Team 1 -------------------------------*/}
      <div className="m-[2rem] mb-[0.5rem] border-bottom">
        <h2>TEAM 1</h2>
      </div>
      <div className="profile-link">
        <AccountIcon
          height="2rem"
          width="2rem"
          fill="var(--app-theme)"
          className="my-auto mr-[1rem]"
        />
        Student 1 (You)
      </div>
      <div className="profile-link">
        <AccountIcon
          height="2rem"
          width="2rem"
          fill="var(--app-theme)"
          className="my-auto mr-[1rem]"
        />
        Student 2
      </div>
      <div className="profile-link">
        <AccountIcon
          height="2rem"
          width="2rem"
          fill="var(--app-theme)"
          className="my-auto mr-[1rem]"
        />
        Student 3
      </div>
      <div className="profile-link">
        <AccountIcon
          height="2rem"
          width="2rem"
          fill="var(--app-theme)"
          className="my-auto mr-[1rem]"
        />
        Student 4
      </div>
      {/*------------------------------- Faculty -------------------------------*/}
      <div className="m-[2rem] mb-[0.5rem] border-bottom">
        <h2>FACULTY</h2>
      </div>
      <div className="profile-link">
        <AccountIcon
          height="2rem"
          width="2rem"
          fill="var(--app-theme)"
          className="my-auto mr-[1rem]"
        />
        Roberts
      </div>
      <div className="profile-link">
        <AccountIcon
          height="2rem"
          width="2rem"
          fill="var(--app-theme)"
          className="my-auto mr-[1rem]"
        />
        Harris
      </div>
      {/*------------------------------- Team 2 -------------------------------*/}
      <div className="m-[2rem] mb-[0.5rem] border-bottom">
        <h2>TEAM 2</h2>
      </div>
      <div className="profile-link">
        <AccountIcon
          height="2rem"
          width="2rem"
          fill="var(--app-theme)"
          className="my-auto mr-[1rem]"
        />
        Student
      </div>
      <div className="profile-link">
        <AccountIcon
          height="2rem"
          width="2rem"
          fill="var(--app-theme)"
          className="my-auto mr-[1rem]"
        />
        Student
      </div>
      <div className="profile-link">
        <AccountIcon
          height="2rem"
          width="2rem"
          fill="var(--app-theme)"
          className="my-auto mr-[1rem]"
        />
        Student
      </div>
      <div className="profile-link">
        <AccountIcon
          height="2rem"
          width="2rem"
          fill="var(--app-theme)"
          className="my-auto mr-[1rem]"
        />
        Student
      </div>
      {/*------------------------------- Team 3 -------------------------------*/}
      <div className="m-[2rem] mb-[0.5rem] border-bottom">
        <h2>TEAM 3</h2>
      </div>
      <div className="profile-link">
        <AccountIcon
          height="2rem"
          width="2rem"
          fill="var(--app-theme)"
          className="my-auto mr-[1rem]"
        />
        Student
      </div>
      <div className="profile-link">
        <AccountIcon
          height="2rem"
          width="2rem"
          fill="var(--app-theme)"
          className="my-auto mr-[1rem]"
        />
        Student
      </div>
      <div className="profile-link">
        <AccountIcon
          height="2rem"
          width="2rem"
          fill="var(--app-theme)"
          className="my-auto mr-[1rem]"
        />
        Student
      </div>
      <div className="profile-link">
        <AccountIcon
          height="2rem"
          width="2rem"
          fill="var(--app-theme)"
          className="my-auto mr-[1rem]"
        />
        Student
      </div>
    </main>
  );
}
