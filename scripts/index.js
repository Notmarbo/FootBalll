"use strict"

const statesList = document.getElementById("footBallTeam");

window.onload = function () {
    // load the dropdown list
  initStatedropDown();

};


function initStatedropDown(){
    let teams = [
        {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
        {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
        {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
        {code:"KAN", name:"Kansas City Chiefs",
        plays:"Kansas City, MO"},
       ];
    let length = states.length;
    for (let i = 0; i < length; i++) {
        // create the option element
        let theOption = document.createElement("option");
        // set the text and value of the option you created
        theOption.textContent = states[i];
        theOption.value = abbrev[i];
        // append the option as a child of (inside) the
        // select element
        teams.appendChild(theOption);
    }
    // other stuff

}