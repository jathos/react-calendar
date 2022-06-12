import './CalendarDay.css'

function CalendarDay({ day, date, color }) {

    function handleClick(evt) {
        evt.currentTarget.className = `Day ${color}`
    }

    return (
        <div className="Day" onClick={handleClick}>
            < p className='DayDetail' >{day}</p >
            <p className='DayDetail'>{date}</p>
        </div>
    );
};

export default CalendarDay;