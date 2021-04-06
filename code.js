$(document).ready(function ()
{
    $("button").on("click",printInfo);
});

function printInfo()
{
    //Gather first and last names from the user//

    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();

    //Get rank the user selected//

    let rank = $("input[name=rank]:checked").data("rank");
    let rankColor = $("input[name=rank]:checked").data("color");

    //Output//

    $("p#rank").text(`Hello, ${rank} ${firstName} ${lastName}`);
    $("p#rank").css("color", rankColor);
}