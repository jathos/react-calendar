import CalendarWeek from "./CalendarWeek";
import CategoryBar from "./CategoryBar";

function CalendarBody({ dates, days }) {
    return (
        <div>
            <CategoryBar />
            <CalendarWeek dates={[dates[0], dates[1], dates[2], dates[3], dates[4], dates[5], dates[6]]} days={days} />
            <CalendarWeek dates={[dates[7], dates[8], dates[9], dates[10], dates[11], dates[12], dates[13]]} days={days} />
            <CalendarWeek dates={[dates[14], dates[15], dates[16], dates[17], dates[18], dates[19], dates[20]]} days={days} />
            <CalendarWeek dates={[dates[21], dates[22], dates[23], dates[24], dates[25], dates[26], dates[27]]} days={days} />
        </div >
    );
};

export default CalendarBody;