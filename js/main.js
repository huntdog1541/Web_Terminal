/**
 * Created by David on 12/27/2015.
 */

window.onload =  function addRoot() {
    var x = document.getElementById("text");
    x.value = "root$ ";
};
/*
window.onclick = function clicked() {
    document.getElementById("display").value = "clicked!";
};*/

var console = {
    startLoc: null,
    endLoc: 0,
    con: document.getElementById("text"),
    dis: document.getElementById("display"),
    history: 0,
    histCommands: []
};



function getStart() {
    if(console.startLoc == null)
    {
        console.startLoc = console.con.selectionStart
    }
    document.getElementById("display").value = console.startLoc;
}

function getKeys() {
    //disableConsole();
    $('#text').keypress(function() {
       $('#display').value += "  detected keypress";
    });
}

function disableConsole() {
    console.con.readOnly = true;
}

function enableConsole() {
    console.con.readOnly = false;
}

function typing() {
    getStart();
    //getKeys();
}
console.con.onclick = typing();
