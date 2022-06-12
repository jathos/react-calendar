import './CalendarDay.css'

function CalendarDay({ day, date }) {
    return (
        <div className="Day">
            < p className='DayDetail' >{day}</p >
            <p className='DayDetail'>{date}</p>
        </div>
    );
};

export default CalendarDay;