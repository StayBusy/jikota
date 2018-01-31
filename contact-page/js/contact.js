$(document).ready(function() {
    //pick form element id and add submit callback function
    $("#contactUs").submit(function() {
        var textLength = $("#exampleMessage").length;
        //if value length of the string in textarea is less than 30
        if (textLength < 30) {
            //append a new paragraph below the textarea showing an error message
            $("#exampleMessage").after("<p class='float-right'>Your Message has less than 30 characters</p>");
        }
    });


});