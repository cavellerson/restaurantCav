import React from 'react'
import { useState, useEffect } from 'react'
import Home from './components/home'
import OurStory from './components/ourStory'
import Locations from './components/locations'
import Hours from './components/hours'
import GiftShop from './components/giftShop'
import PhotoGallery from './components/photoGallery'
import GiftCertificates from './components/giftCertificates'
import Cart from './components/cart'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'




function App() {

    let navBarArray = [<Home/>, <OurStory/>, <Locations/>, <Hours/>, <GiftShop/>, <PhotoGallery/>, <GiftCertificates/>, <Cart/>]

    const [currentPage, setCurrentPage] = useState(0);
    const [cartNum, setCartNum] = useState(0)

    useEffect(() => {

    },[currentPage])

  return (
    <div className="App">
        <header>
            <ButtonGroup aria-label="Basic example">
                <Button variant="dark" onClick={() => {
                    setCurrentPage(0)
                }}>Home</Button>

                <Button variant="dark" onClick={() => {
                    setCurrentPage(1)
                }}>Our Story</Button>

                <Button variant="dark" onClick={() => {
                    setCurrentPage(2)
                }}>Locations</Button>

                <Button variant="dark" onClick={() => {
                    setCurrentPage(3)
                }}>Hours</Button>

                <Button variant="dark" onClick={() => {
                    setCurrentPage(4)
                }}>Gift Shop</Button>

                <Button variant="dark" onClick={() => {
                    setCurrentPage(5)
                }}>Photo Gallery</Button>

                <Button variant="dark" onClick={() => {
                    setCurrentPage(6)
                }}>Gift Certificates</Button>

                <Button variant="dark" onClick={() => {
                    setCurrentPage(7)
                }}>Cart: {cartNum}</Button>
            </ButtonGroup>

        </header>
            <div>
            {navBarArray[currentPage]}
            </div>







    </div>
  );
}

export default App;
