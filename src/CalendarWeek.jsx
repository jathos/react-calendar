import CalendarDay from "./CalendarDay";
import './CalendarWeek.css'

function CalendarWeek({ dates, days }) {
    return (
        <div className="Week">
            {days.map((ele, idx) => < CalendarDay day={ele.name} date={dates[idx]} key={idx} />)}
        </div>
    );
};

export default CalendarWeek;