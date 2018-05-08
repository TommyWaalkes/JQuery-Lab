let currentCircle; 

$(document).ready(function(){
    $(".circle").on("click", function() {

        $("#form").fadeIn(1000); 
        currentCircle =  $(this);       
    });

    $("#output").on("click", function(){
        currentCircle.toggleClass("reserved");
        $("#form").fadeOut(500);
    });
});

