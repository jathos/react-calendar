import './CalendarWeek.css'

function CategoryBar() {
    return (
        <div className="Week">
            <h1 className="Category Yellow">Holiday</h1>
            <h1 className="Category Blue">Work</h1>
            <h1 className="Category Green">Errands</h1>
            <h1 className="Category Red">Sick</h1>
        </div>
    );
};

export default CategoryBar;