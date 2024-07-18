import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function Calendar() {
  const events = [{ title: "Meeting", start: new Date() }];

  return (
    <div className="p-4 flex-1">
      <div className="bg-white rounded-lg">
        <div className="flex justify-between items-center p-4 border-b border-divider">
          <span className="text-3xl text-grey00 font-bold leading-10">
            달력
          </span>
        </div>
        <div className="flex items-start p-10 gap-10">
          <div className="basis-8/12">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={events}
              eventContent={renderEventContent}
            />
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-lg">
            <div className="text-2xl text-grey00 font-semibold p-4">
              2024.07 결산
            </div>
            <div className="flex flex-col gap-1 p-4 border-t border-divider">
              <span className="text-income">수입</span>
              <span className="text-grey00">999,999,999</span>
            </div>
            <div className="flex flex-col gap-1 p-4 border-t border-divider">
              <span className="text-cost">지출</span>
              <span className="text-grey00">999,999,999</span>
            </div>
            <div className="flex flex-col gap-1 p-4 border-t border-divider">
              <div>
                <span className="text-income">수입</span>
                <span className="text-grey00">-</span>
                <span className="text-cost">지출</span>
              </div>
              <span className="text-grey00 text-2xl">999,999,999</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
