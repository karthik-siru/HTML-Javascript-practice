
 /*
    $("selector").addClass( " pass the new class here ") -------  add a class
    $("selector").removeClass( " pass the new class here ") -----  removes a class
    $("selector").toggleClass( " pass the new class here ") -----  toggle class
    css()  ----  can change the style elements .

    ********************************************************************
    NOTE: there would be no change in the html file  ( like adding class )
    *********************************************************************
 */

$(document).ready(function(){

  $(".addcls").click( function () {

    $(".prac").addClass("newclass secondnewclass");

  });

  $(".removecls").click( function () {

    $(".prac").removeClass("newclass");

  });

  $(".toggle").click( function () {

    $(".prac").toggleClass("newclass secondnewclass");

  });

  $(".ecss").click( function () {

    $("#p1").css("font-size","48px");

  });

});
