// NOTE: The following implementation is static and based on a student view.
//       Layout and buttons will depend on whether the user is a student or instructor,
//        and if teams have been finalized.
import {
  EditCalendarButton,
  LeftArrow,
  RightArrow,
} from "../../../../ui/svg-images";

export default function Calendar() {
  /**
   * NOTE: All buttons are currently not functional.
   *
   * When days are clicked, a pop up should appear (and cast a transparent black background preventing other things from being clicked)
   * showing a list of events happening and an option to edit any of the events (which includes deleting events).
   */
  return (
    <main className="flex flex-col grow max-h-full">
      {/*------------------------------- Top Bar -------------------------------*/}
      <div className="flex flex-row my-[0.825rem]">
        <LeftArrow
          height="2rem"
          width="2rem"
          fill="var(--app-theme)"
          className="my-auto ml-[3rem] mr-auto"
        />
        <h2>NOVEMBER</h2>
        <button className="button-bar mr-[1rem] ml-auto">
          <p className="mx-[0.5rem]">New Event</p>
          <EditCalendarButton
            height="1.5rem"
            width="1.5rem"
            fill="var(--app-inverse)"
            className="m-auto mr-[0.5rem]"
          />
        </button>
        <RightArrow
          height="2rem"
          width="2rem"
          fill="var(--app-theme)"
          className="my-auto mx-[3rem]"
        />
      </div>
      {/*------------------------------- Calendar -------------------------------*/}
      <div className="calendar">
        {/*------------------------------- Labels -------------------------------*/}
        <div className="calendar-label border-right">
          <p>Sunday</p>
        </div>
        <div className="calendar-label border-right">
          <p>Monday</p>
        </div>
        <div className="calendar-label border-right">
          <p>Tuesday</p>
        </div>
        <div className="calendar-label border-right">
          <p>Wednesday</p>
        </div>
        <div className="calendar-label border-right">
          <p>Thursday</p>
        </div>
        <div className="calendar-label border-right">
          <p>Friday</p>
        </div>
        <div className="calendar-label">
          <p>Saturday</p>
        </div>
        {/*------------------------------- Week 1 -------------------------------*/}
        <div className="calendar-day border-right invalid-day"></div>
        <div className="calendar-day border-right invalid-day"></div>
        <div className="calendar-day border-right invalid-day"></div>
        <div className="calendar-day border-right invalid-day"></div>
        <div className="calendar-day border-right invalid-day"></div>
        <div className="calendar-day border-right">
          <p>1</p>
          <div className="mt-auto">
            <div className="calendar-event bg-emerald-800">
              <p className="event-text bg-emerald-800">
                10 AM Meeting with team
              </p>
            </div>
          </div>
        </div>
        {/*Should remove past events after their time has passed*/}
        <div className="calendar-day today">
          <p>2</p>
          <div className="mt-auto">
            <div className="calendar-event bg-emerald-800">
              <p className="event-text bg-emerald-800">
                10 AM Meeting with team
              </p>
            </div>
            <div className="calendar-event bg-rose-700">
              <p className="event-text bg-rose-700">
                1 PM Meeting with professor
              </p>
            </div>
            <div className="calendar-event bg-indigo-800">
              <p className="event-text bg-indigo-800">5 PM Zoom meeting</p>
            </div>
          </div>
        </div>
        {/*------------------------------- Week 2 -------------------------------*/}
        <div className="calendar-day border-right">
          <p>3</p>
          <div className="mt-auto">
            <div className="calendar-event bg-rose-700">
              <p className="event-text bg-rose-700">
                1 PM Meeting with professor
              </p>
            </div>
          </div>
        </div>
        <div className="calendar-day border-right">
          <p>4</p>
        </div>
        <div className="calendar-day border-right">
          <p>5</p>
        </div>
        <div className="calendar-day border-right">
          <p>6</p>
        </div>
        <div className="calendar-day border-right">
          <p>7</p>
        </div>
        <div className="calendar-day border-right">
          <p>8</p>
        </div>
        <div className="calendar-day">
          <p>9</p>
        </div>
        {/*------------------------------- Week 3 -------------------------------*/}
        <div className="calendar-day border-right">
          <p>10</p>
        </div>
        <div className="calendar-day border-right">
          <p>11</p>
        </div>
        <div className="calendar-day border-right">
          <p>12</p>
        </div>
        <div className="calendar-day border-right">
          <p>13</p>
        </div>
        <div className="calendar-day border-right">
          <p>14</p>
        </div>
        <div className="calendar-day border-right">
          <p>15</p>
        </div>
        <div className="calendar-day">
          <p>16</p>
        </div>
        {/*------------------------------- Week 4 -------------------------------*/}
        <div className="calendar-day border-right">
          <p>17</p>
        </div>
        <div className="calendar-day border-right">
          <p>18</p>
        </div>
        <div className="calendar-day border-right">
          <p>19</p>
        </div>
        <div className="calendar-day border-right">
          <p>20</p>
        </div>
        <div className="calendar-day border-right">
          <p>21</p>
        </div>
        <div className="calendar-day border-right">
          <p>22</p>
        </div>
        <div className="calendar-day">
          <p>23</p>
        </div>
        {/*------------------------------- Week 5 -------------------------------*/}
        <div className="calendar-day border-right">
          <p>24</p>
        </div>
        <div className="calendar-day border-right">
          <p>25</p>
        </div>
        <div className="calendar-day border-right">
          <p>26</p>
        </div>
        <div className="calendar-day border-right">
          <p>27</p>
        </div>
        <div className="calendar-day border-right">
          <p>28</p>
        </div>
        <div className="calendar-day border-right">
          <p>29</p>
        </div>
        <div className="calendar-day">
          <p>30</p>
        </div>
        {/*------------------------------- Week 6 -------------------------------*/}
        <div className="calendar-day border-right">
          <p>31</p>
        </div>
        <div className="calendar-day border-right invalid-day"></div>
        <div className="calendar-day border-right invalid-day"></div>
        <div className="calendar-day border-right invalid-day"></div>
        <div className="calendar-day border-right invalid-day"></div>
        <div className="calendar-day border-right invalid-day"></div>
        <div className="calendar-day invalid-day"></div>
      </div>
    </main>
  );
}
