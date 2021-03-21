/*
    ________________________TOOLTIP_________________________\

    so , tool tip is which popup when hover upon an image .

    Using jquery UI library we can customise it vaastly .

    Change the content ::

    We can change the content in the tooltip using content option :

    Ex :    content : "let's learn tooltip customisation "

    *********************************************************
    Note : This will work , iff we have title attribute in the image properties .
    *********************************************************

    We can track it with our mouse also .. using track = true ;

    Animations -----------  incoming animation   &&&& outgoing animation

    When Track is true ,animations will apply at the start and end , while the mouse is
    on the image , no animations will apply .

    Effects Available :

    bounce
    explode
    pulsate
    highlight
    blind

    1 ) incoming animation :

    show : { effect: "bounce" , duration : 2000 }   duration in micro seconds

    2) Outgoing animation :

    hide : {effect : "explode" , duration : 2000}


*/


$(document).ready(function(){

  $("#abd").tooltip({

    track :true ,
    content : "MR.360",
    show : { effect : "explode" , duration : 500},
    hide : { effect : "explode" , duration : 500}

  });
});
