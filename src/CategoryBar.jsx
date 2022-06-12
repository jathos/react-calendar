import { useState } from 'react';
import './CalendarWeek.css'

function CategoryBar({ setColor }) {

    const [yellow, setYellow] = useState("Category Yellow")
    const [blue, setBlue] = useState("Category Blue")
    const [green, setGreen] = useState("Category Green")
    const [red, setRed] = useState("Category Red")

    function handleYellow() {
        setColor("Yellow")
        setYellow("Category Yellow highlighted")
        setBlue("Category Blue")
        setRed("Category Red")
        setGreen("Category Green")
    }

    function handleBlue() {
        setColor("Blue")
        setBlue("Category Blue highlighted")
        setGreen("Category Green")
        setYellow("Category Yellow")
        setRed("Category Red")
    }

    function handleGreen() {
        setColor("Green")
        setGreen("Category Green highlighted")
        setBlue("Category Blue")
        setYellow("Category Yellow")
        setRed("Category Red")
    }

    function handleRed() {
        setColor("Red")
        setRed("Category Red highlighted")
        setGreen("Category Green")
        setYellow("Category Yellow")
        setBlue("Category Blue")
    }

    return (
        <div className="Week">
            <h1 className={yellow} onClick={handleYellow}>Holiday</h1>
            <h1 className={blue} onClick={handleBlue}>Work</h1>
            <h1 className={green} onClick={handleGreen}>Errands</h1>
            <h1 className={red} onClick={handleRed}>Sick</h1>
        </div>
    );
};

export default CategoryBar;

// onClick={handleBlue}
// onClick={handleGreen}
// onClick={handleRed}