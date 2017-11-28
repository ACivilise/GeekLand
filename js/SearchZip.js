"use strict";

$(document).ready(function () {
    console.log("ready!");

    $("#codePostal").keydown(function(event) {
        if (event.which === 13 || event.keyCode === 13) {
            $("#searchButton").click();
        }
    });
});

function chercher() {
    // var val = (0.456).toMoney();
    var codePostal = $(".codePostal").val();

    var cities;

    $.get("https://vicopo.selfbuild.fr/cherche/" + codePostal)
        .done(function (json) {
            if (json.cities.length > 0) {
                cities = json.cities;

                if (cities !== undefined) {
                    $("#table").DataTable({
                        pageResize: true,
                        responsive: true,
                        bFilter: false,
                        destroy: true,
                        data: cities,
                        columns: [
                            {
                                data: "code"
                            },
                            {
                                data: "city",
                            }
                        ]
                    });
                }
            }
        })
        .fail(function () {
            alert("No City was found...");
        });
}
