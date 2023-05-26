import React, { PropTypes } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";



function Rating(props) {
    var experience = null;

    /*
    The prop "StartYear" is used if I am actively using a specific technology/tool.
        The value supplied with this prop will be the year I started using it and will then need to be calculated how many years 
        I have been using that program.
    */
    if (props.startYear) {
        experience = new Date().getFullYear() - props.startYear
        if (experience <= 1 ) {
            //In case years of experience was calculated as 0 -- set to 1 year of experience for simplicity, to avoid calculating months
            experience = 1
            //Format for later use as a string
            experience = "(" + experience + " year)"
        }
        else {
            //Format for later use as a string
            experience = "(" + experience + " years)"
        }
    }
    
    /*
        If I am not actively using a technology/tool, or if I would rather specify plain text such as "10+ years" and no calculation is needed,
            I will supply the text that is displayed inside of the prop "experienceString" instead of "startYear". 
            This will require no string manipulation, so I will just set it as the variable "experience". 

        startYear and experienceString are used interchangeably depending on need, whether it is a years of experience being calculated or a simple string input of how many years learned without calculations.
    */
   if (props.experienceString) { 
       experience = props.experienceString 
    }

    return( 
        <ul className="rating no-bullets">
        <span className="ability-type">{ props.title } <span className="italic">{experience}</span></span>
        <span className="ability-rating">
            <i className={props.star >= 1 ? "bi bi-star-fill" : "bi bi-star"}></i>
            <i className={props.star >= 2 ? "bi bi-star-fill" : "bi bi-star"}></i>
            <i className={props.star >= 3 ? "bi bi-star-fill" : "bi bi-star"}></i>
            <i className={props.star >= 4 ? "bi bi-star-fill" : "bi bi-star"}></i>
            <i className={props.star >= 5 ? "bi bi-star-fill" : "bi bi-star"}></i>
        </span>
      </ul>
    );

}

export default Rating;