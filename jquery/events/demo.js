
/*
     SO , let's learn two new functions today :::::

     1) fadeIn --- I is CAPITAL ...
     2) fadeOut --- O is CAPITAL ...

*/


function func1(){

  $(".html").fadeIn();
}


function func2(){

  $(".html").fadeOut();
}

/*_________________________________________________________________________

  Events are called differently in jquery   (  Wait a minute !!  what are events )

  So, events are like onclick and mouseover type  :)

  NO , need to mwntion onclick in the html itself , we can explicitly define in jquery.


  $ ( same rules of selectors ) . event  (   function name  ) ;  /

  1) we can define a function inside event () and call them anonymous .

  There is something important here .....

  ****************************************************

   $ ( document ) .ready ( all the jquery functions here ) ;

   this is to make sure that the webpages loades completely ... all the jquery functions works
   only after the page loads completely . 

  ****************************************************

*/

$(".fadein").click(func3);
$(".fadeout").click(func4);

function func3(){
  $(".html").fadeIn();
}

function func4(){
  $(".html").fadeOut();
}
