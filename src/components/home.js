import React  from 'react';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <div>
            <h1 id="Title"> Welcome to Cavell's Surf and Turf House!</h1>

            <p>Pickup or delivery from 9AM-9PM daily, based on limited availability. Please allow plenty of time for large orders.
            </p>
            <Button variant="outline-success"> Order Online</Button>
        </div>
    )
}

export default Home;
