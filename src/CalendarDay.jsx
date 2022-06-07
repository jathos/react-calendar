import './CalendarDay.css'

function CalendarDay({ day, date }) {
    return (
        <div className='Day'>
            < p >{day}</p >
            <p>{date}</p>
        </div>
    );
};

export default CalendarDay;