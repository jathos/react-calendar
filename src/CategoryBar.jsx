import { useState } from 'react';
import './CalendarWeek.css'

function CategoryBar({ setColor, color }) {

    const [yellow, setYellow] = useState("Category Yellow")
    const [blue, setBlue] = useState("Category Blue")
    const [green, setGreen] = useState("Category Green")
    const [red, setRed] = useState("Category Red")

    function handleYellow() {
        if (color == "Yellow") {
            setColor("")
            setYellow("Category Yellow")
        } else {
            setColor("Yellow")
            setYellow("Category Yellow highlighted")
            setBlue("Category Blue")
            setRed("Category Red")
            setGreen("Category Green")
        }
    }

    function handleBlue() {
        if (color == "Blue") {
            setColor("")
            setBlue("Category Blue")
        } else {
            setColor("Blue")
            setBlue("Category Blue highlighted")
            setGreen("Category Green")
            setYellow("Category Yellow")
            setRed("Category Red")
        }
    }

    function handleGreen() {
        if (color == "Gren") {
            setColor("")
            setGreen("Category Green")
        } else {
            setColor("Green")
            setGreen("Category Green highlighted")
            setBlue("Category Blue")
            setYellow("Category Yellow")
            setRed("Category Red")
        }
    }

    function handleRed() {
        if (color == "Red") {
            setColor("")
            setRed("Category Red")
        } else {
            setColor("Red")
            setRed("Category Red highlighted")
            setGreen("Category Green")
            setYellow("Category Yellow")
            setBlue("Category Blue")
        }
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