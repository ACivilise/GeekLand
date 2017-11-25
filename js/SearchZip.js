"use strict";


Number.prototype.toMoney = function () {
    var val = this.valueOf();
    var result = (Math.floor(100 * val) / 100).toFixed(2);
    return result;
};

// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!"); 
});

function chercher()
{
// var val = (0.456).toMoney();
var codePostal = $(".codePostal").val();

    $("#example").DataTable({
        ajax: {
            type : "GET",
            url: "https://vicopo.selfbuild.fr/cherche/" + codePostal,
            dataSrc: function ( json ) {
                //Make your callback here.
                console.log("Done!");
                return json.cities;
            }  
        },
        fixedHeader: true,
        autoWidth: false,
        responsive: true,
        bFilter: false,
        displayLength: 12,
        lengthChange: false,
        order: [],
        columns: [
            {
                data: "code"
            },
            {
                data: "city",
            }
        ],
        // initComplete: function (settings, json) {
        //     $("#example").css("text-align", "left");
        // }
    });
}
