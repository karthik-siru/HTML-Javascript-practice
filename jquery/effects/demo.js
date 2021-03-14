/*
     animate( { css properties to be changed here } , "time" ) ;

     something , wrong with the background-color in jquery , may be we have to use
     style.property to change :(

     

*/


$(document).ready( function () {

  //alert("endho mawa");

  $(".btn").click(function() {

    $("#steve").animate({

      width : "300px",
      height : "200px",
      padding: "60px",
    })
  });
});
