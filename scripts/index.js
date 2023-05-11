"use strict";

const submitBtn = document.getElementById("submitBtn");
let selectedValueElement = document.getElementById("footballTeamsList");
let answerPara = document.getElementById("answer");
let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "ATL", name: "Atlanta Falcons", plays: "Atlanta, GA" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];


window.onload = function () {
    submitBtn.onclick = onSubmitBtnClicked;
    initFootBallTeams();
}

function initFootBallTeams(){
    //what not to do
    // let codes = ["DAL","DEN","HOU","ATL","KAN"];
    // let teamNames =["Dallas Cowboys","Denver Broncos","Houston Texans","Atlanta Falcons","Kansas City Chiefs"];


    //teams is global so utilize that
    let length = teams.length;

    for(let i = 0; i <length; i++){
        let team = teams[i];
        let theOptions = document.createElement("option");

        //team.name & team.code uses the global team array
        theOptions.textContent = team.name;
        theOptions.value = team.code;
        //Creates the options for the drop down
        footballTeamsList.appendChild(theOptions)
    }
}

function onSubmitBtnClicked() {
    let selectedValue = selectedValueElement.value;

    console.log("clicked")
    if (selectedValue == -1) {
        answerPara.innerHTML = "No team selected.";
        return;
    } else {
        for (let i = 0; i < teams.length; i++) {
            if (selectedValue == teams[i].code) {
                answerPara.innerHTML = `You selected ${teams[i].name}, who play for ${teams[i].plays}.`;
                break;
            }

        }
    }
}