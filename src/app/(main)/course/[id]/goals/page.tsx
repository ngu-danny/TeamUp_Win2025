// NOTE: The following implementation is static and based on a student view.
//       Layout and buttons will depend on whether the user is a student or instructor,
//        and if teams have been finalized.

import {
  PlusButton,
  EditButton,
  FilterButton,
  AccountIcon,
} from "../../../../ui/svg-images";

export default function Goals() {
  /**
   * NOTE: All buttons are currently not functional. Each name would be linked to the person's respective profile page, but currently not implemented.
   *
   * When the edit button being hovered, a tooltip should appear with the text "Edit".
   * Clicking on edit will open a pop up (and cast a transparent black background preventing other things from being clicked)
   * and let the user edit or delete the goal.
   */
  return (
    <main className="w-auto max-h-screen grow overflow-y-auto">
      <div className="flex flex-row-reverse my-[0.825rem]">
        {/*------------------------------- Filter -------------------------------*/}
        <button className="button-bar mx-[1rem]">
          <FilterButton
            height="1.5rem"
            width="1.5rem"
            fill="var(--app-inverse)"
            className="m-auto"
          />
        </button>
        {/*------------------------------- New Item -------------------------------*/}
        <button className="button-bar mx-[1rem]">
          <p className="mx-[0.5rem]">New Item</p>
          <PlusButton
            height="1.5rem"
            width="1.5rem"
            fill="var(--app-inverse)"
            className="m-auto"
          />
        </button>
      </div>
      {/*------------------------------- Goals -------------------------------*/}
      <div className="goals-grid">
        {/*------------------------------- Header -------------------------------*/}
        <div className="goals-grid-header border-right">
          <h2>10/26 GOALS</h2>
        </div>
        <div className="goals-grid-header border-right">
          <h3>Owner</h3>
        </div>
        <div className="goals-grid-header border-right">
          <h3>Status</h3>
        </div>
        <div className="goals-grid-header">
          <h3>Priority</h3>
        </div>
        <div></div>
        {/*------------------------------- Goal 1 -------------------------------*/}
        <div className="goals-grid-goalowner border-right">
          <p>Meet with Professor Roberts</p>
        </div>
        <div className="goals-grid-goalowner border-right">
          <AccountIcon
            height="1.5rem"
            width="1.5rem"
            fill="var(--app-theme)"
            className="my-auto mr-[1rem]"
          />
          <p>Student 2</p>
        </div>
        <div className="goals-grid-statuspriority border-right-white status-done">
          <p>Done</p>
          <p className="modified-text">Last modified by Student 2</p>
        </div>
        <div className="goals-grid-statuspriority priority-high">
          <p>High</p>
          <p className="modified-text">Last modified by Student 1</p>
        </div>
        <div>
          <EditButton
            height="1.5rem"
            width="1.5rem"
            fill="var(--app-theme)"
            className="m-auto"
          />
        </div>
        {/*------------------------------- Goal 2 -------------------------------*/}
        {/*NOTE: Every other row should be a different color to help with contrast*/}
        <div className="goals-grid-goalowner border-right bg-[#f2f2f2]">
          <p>Create sorting algorithm</p>
        </div>
        <div className="goals-grid-goalowner border-right bg-[#f2f2f2]">
          <AccountIcon
            height="1.5rem"
            width="1.5rem"
            fill="var(--app-theme)"
            className="my-auto mr-[1rem]"
          />
          <p>Student 1</p>
        </div>
        <div className="goals-grid-statuspriority border-right-white status-pending">
          <p>Pending</p>
          <p className="modified-text">Last modified by Student 4</p>
        </div>
        <div className="goals-grid-statuspriority priority-med">
          <p>Med</p>
          <p className="modified-text">Last modified by Student 4</p>
        </div>
        <div>
          <EditButton
            height="1.5rem"
            width="1.5rem"
            fill="var(--app-theme)"
            className="m-auto"
          />
        </div>
        {/*------------------------------- Goal 3 -------------------------------*/}
        <div className="goals-grid-goalowner border-right">
          <p>Create a website</p>
        </div>
        <div className="goals-grid-goalowner border-right">
          <AccountIcon
            height="1.5rem"
            width="1.5rem"
            fill="var(--app-theme)"
            className="my-auto mr-[1rem]"
          />
          <p>Student 3</p>
        </div>
        <div className="goals-grid-statuspriority border-right-white status-notdone">
          <p>Not Started</p>
          <p className="modified-text">Last modified by Student 4</p>
        </div>
        <div className="goals-grid-statuspriority priority-low">
          <p>Low</p>
          <p className="modified-text">Last modified by Student 4</p>
        </div>
        <div>
          <EditButton
            height="1.5rem"
            width="1.5rem"
            fill="var(--app-theme)"
            className="m-auto"
          />
        </div>
      </div>
      {/*------------------------------- Goals -------------------------------*/}
      <div className="goals-grid">
        {/*------------------------------- Header -------------------------------*/}
        <div className="goals-grid-header border-right">
          <h2>11/06 GOALS</h2>
        </div>
        <div className="goals-grid-header border-right">
          <h3>Owner</h3>
        </div>
        <div className="goals-grid-header border-right">
          <h3>Status</h3>
        </div>
        <div className="goals-grid-header">
          <h3>Priority</h3>
        </div>
        <div></div>
        {/*------------------------------- Goal 1 -------------------------------*/}
        <div className="goals-grid-goalowner border-right">
          <p>Find a sponsor</p>
        </div>
        <div className="goals-grid-goalowner border-right">
          <AccountIcon
            height="1.5rem"
            width="1.5rem"
            fill="var(--app-theme)"
            className="my-auto mr-[1rem]"
          />
          <p>Roberts</p>
        </div>
        <div className="goals-grid-statuspriority border-right-white status-pending">
          <p>Pending</p>
          <p className="modified-text">Last modified by Roberts</p>
        </div>
        <div className="goals-grid-statuspriority priority-high">
          <p>High</p>
          <p className="modified-text">Last modified by Roberts</p>
        </div>
        <div>
          <EditButton
            height="1.5rem"
            width="1.5rem"
            fill="var(--app-theme)"
            className="m-auto"
          />
        </div>
        {/*------------------------------- Goal 2 -------------------------------*/}
        {/*NOTE: Every other row should be a different color to help with contrast*/}
        <div className="goals-grid-goalowner border-right bg-[#f2f2f2]">
          <p>Create presentation</p>
        </div>
        <div className="goals-grid-goalowner border-right bg-[#f2f2f2]">
          <AccountIcon
            height="1.5rem"
            width="1.5rem"
            fill="var(--app-theme)"
            className="my-auto mr-[1rem]"
          />
          <p>Roberts</p>
        </div>
        <div className="goals-grid-statuspriority border-right-white status-done">
          <p>Done</p>
          <p className="modified-text">Last modified by Roberts</p>
        </div>
        <div className="goals-grid-statuspriority priority-med">
          <p>Med</p>
          <p className="modified-text">Last modified by Roberts</p>
        </div>
        <div>
          <EditButton
            height="1.5rem"
            width="1.5rem"
            fill="var(--app-theme)"
            className="m-auto"
          />
        </div>
        {/*------------------------------- Goal 3 -------------------------------*/}
        <div className="goals-grid-goalowner border-right">
          <p>Plan pizza party</p>
        </div>
        <div className="goals-grid-goalowner border-right">
          <AccountIcon
            height="1.5rem"
            width="1.5rem"
            fill="var(--app-theme)"
            className="my-auto mr-[1rem]"
          />
          <p>Roberts</p>
        </div>
        <div className="goals-grid-statuspriority border-right-white status-notdone">
          <p>Not Started</p>
          <p className="modified-text">Last modified by Roberts</p>
        </div>
        <div className="goals-grid-statuspriority priority-low">
          <p>Low</p>
          <p className="modified-text">Last modified by Roberts</p>
        </div>
        <div>
          <EditButton
            height="1.5rem"
            width="1.5rem"
            fill="var(--app-theme)"
            className="m-auto"
          />
        </div>
      </div>
      {/*------------------------------- Archive  -------------------------------*/}
      <div className="m-[2rem] mb-[5rem] border-bottom">
        <h1>COMPLETED</h1>
      </div>
      {/*------------------------------- Goals -------------------------------*/}
      <div className="goals-grid">
        {/*------------------------------- Header -------------------------------*/}
        <div className="goals-grid-header border-right">
          <h2>10/19 GOALS</h2>
        </div>
        <div className="goals-grid-header border-right">
          <h3>Owner</h3>
        </div>
        <div className="goals-grid-header border-right">
          <h3>Status</h3>
        </div>
        <div className="goals-grid-header">
          <h3>Priority</h3>
        </div>
        <div></div>
        {/*------------------------------- Goal 1 -------------------------------*/}
        <div className="goals-grid-goalowner border-right">
          <p>Meet with each other</p>
        </div>
        <div className="goals-grid-goalowner border-right">
          <AccountIcon
            height="1.5rem"
            width="1.5rem"
            fill="var(--app-theme)"
            className="my-auto mr-[1rem]"
          />
          <p>Student 1</p>
        </div>
        <div className="goals-grid-statuspriority border-right-white status-done">
          <p>Done</p>
        </div>
        <div className="goals-grid-statuspriority priority-high">
          <p>High</p>
        </div>
        <div className="size-[1.5rem]">{/*Empty <div> for grid*/}</div>
        {/*------------------------------- Goal 2 -------------------------------*/}
        {/*NOTE: Every other row should be a different color to help with contrast*/}
        <div className="goals-grid-goalowner border-right bg-[#f2f2f2]">
          <p>Create agenda</p>
        </div>
        <div className="goals-grid-goalowner border-right bg-[#f2f2f2]">
          <AccountIcon
            height="1.5rem"
            width="1.5rem"
            fill="var(--app-theme)"
            className="my-auto mr-[1rem]"
          />
          <p>Student 1</p>
        </div>
        <div className="goals-grid-statuspriority border-right-white status-done">
          <p>Done</p>
        </div>
        <div className="goals-grid-statuspriority priority-med">
          <p>Med</p>
        </div>
        <div className="size-[1.5rem]">{/*Empty <div> for grid*/}</div>
        {/*------------------------------- Goal 3 -------------------------------*/}
        <div className="goals-grid-goalowner border-right">
          <p>Create drafts for project</p>
        </div>
        <div className="goals-grid-goalowner border-right">
          <AccountIcon
            height="1.5rem"
            width="1.5rem"
            fill="var(--app-theme)"
            className="my-auto mr-[1rem]"
          />
          <p>Student 1</p>
        </div>
        <div className="goals-grid-statuspriority border-right-white status-done">
          <p>Done</p>
        </div>
        <div className="goals-grid-statuspriority priority-low">
          <p>Low</p>
        </div>
        <div className="size-[1.5rem]">{/*Empty <div> for grid*/}</div>
        {/*------------------------------- Goal 4 -------------------------------*/}
        <div className="goals-grid-goalowner border-right bg-[#f2f2f2]">
          <p>Create drafts for website</p>
        </div>
        <div className="goals-grid-goalowner border-right bg-[#f2f2f2]">
          <AccountIcon
            height="1.5rem"
            width="1.5rem"
            fill="var(--app-theme)"
            className="my-auto mr-[1rem]"
          />
          <p>Student 1</p>
        </div>
        <div className="goals-grid-statuspriority border-right-white status-done">
          <p>Done</p>
        </div>
        <div className="goals-grid-statuspriority priority-low">
          <p>Low</p>
        </div>
        <div className="size-[1.5rem]">{/*Empty <div> for grid*/}</div>
      </div>
    </main>
  );
}
