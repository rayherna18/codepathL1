import React from "react";
import Event from './Event'

const Calendar = () =>
{
    return(
        <div className="Calendar">
            <table>
                <thead>
                <tr>
                    <th>Time</th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
                </thead>
                <tbody>
                <tr>

                    <td className="time">8am</td>
                    <Event event='Drink water ⛲' color='blue' />
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">9am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Spicy Chicken Biscuit 🔥' color='red' />
                    <td></td>
                </tr>
                <tr>
                    <td className="time">10am</td>
                    <Event event='Spicy Chicken Biscuit 🔥' color='red' />
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Chicken Tenders 🍗' color='orange' />
                    <td></td>
                </tr>
                <tr>
                    <td className="time">11am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">12pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Chicken Tenders 🍗' color='orange' />
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">1pm</td>
                    <Event event='Homecooked Meal 🏠' color='yellow' />
                    <Event event='Chicken Tenders 🍗' color='orange' />
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">2pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Homecooked Meal 🏠' color='yellow' />
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">3pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Homecooked Meal 🏠' color='yellow' />
                    <td></td>
                    <Event event='Drink water ⛲' color='blue' />
                </tr>
                <tr>
                    <td className="time">4pm</td>
                    <td></td>
                    <Event event='Homecooked Meal 🏠' color='yellow' />
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">5pm</td>
                    <td></td>
                    <Event event='Drink water ⛲' color='blue' />
                    <Event event='Pizza 🍕' color='orange' location = 'Dominoes' />
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">6pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Homecooked Meal 🏠' color='yellow' />
                    <td></td>
                </tr>
                <tr>
                    <td className="time">7pm</td>
                    <Event event='Chicken Tenders 🍗' color='orange' />
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">8pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Homecooked Meal 🏠' color='yellow' />
                    <td></td>
                </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Calendar;