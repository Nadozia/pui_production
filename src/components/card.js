import React from "react";
import { Link } from 'react-router-dom';
import './card.css'


function Card(props){
    const fadeout = () => {
        alert('alert');
        var cards = document.getElementsByClassName('container');
        cards.style.transform = "translateX(500px)";
    }
    return(
        <Link class="container" to={props.target} onclick={fadeout}>{props.data}</Link>
    )
};


export default Card;