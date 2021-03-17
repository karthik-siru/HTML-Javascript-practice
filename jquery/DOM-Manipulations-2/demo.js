
 /*
    append() ------ adds  at the end of the element
    after() ------- adds  after the element
    prepend() ----- adds  at the begining of the element
    before()  ----- adds  before the element
    empty()  ----- removes the element
    remove() ------  removes all the elements in the element .

    We can add  html tags also

    ********************************************************************
    NOTE : If you keep on clicking the button , it will add continously .
    *********************************************************************
 */

$(document).ready(function(){

   $(".append").click(function(){

     $(".prac").append(" <p>text added through <b>append</b> method <br> </p>");

   });

   $(".after").click(function(){

     $(".prac").after("text added through <b>after</b> method <br>");

   });

   $(".prepend").click(function(){

     $(".prac").prepend("text added through <b>prepend</b> method <br> ");

   });

   $(".before").click(function(){

     $(".prac").before("text added through <b>before</b> method <br> ");

   });

   $(".remove").click(function(){

     $(".prac").remove(); // we can pass the desired elements inside remove method . 

   });

   $(".empty").click(function(){

     $(".prac").empty();

   });

});
