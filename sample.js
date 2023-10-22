$(document).ready(function () {
    // Assign text to the level 3 headings using jQuery
    $("#name").text("My name is Sukhpreet Gill.");
    $("#major").text("My major is Cybersecurity and Criminal Justice.");
    $("#year").text("I am a sophomore in the Program for Bachelors of Science."); 

    // Use the jQuery html method to add content to the level 4 heading
    $("h4").html("<em>My Home State is Wisconsin.</em>");
    
    // Declare and call a function
    function myFunction() {
    }
    
    // Call the function
    myFunction();
});