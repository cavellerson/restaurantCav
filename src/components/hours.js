import React  from 'react';

function Hours() {
    let weekArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    return (
        <div>
            <h1 id="Title">Hours of Business</h1>
            <div>
                <ul className="schedule">
                    <div>{weekArray.map((day, id) => <li key={id}>{day} 9am-9pm</li>
                    )}
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Hours;
