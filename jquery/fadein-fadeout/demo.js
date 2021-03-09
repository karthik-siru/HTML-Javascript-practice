
/*

another thing ... always keep your scripts at the end ... and jquery script before any other scripts to use it . 

 This is a simple code from jquery for fadein and fade out animation ,

 so let's see the anatomy of the code :

 $  ("#heading") .  fadeToggle(  2000  )  ;
 |      |
 |    so this is #heading , to acess html element in jquery
 |
 |
 selector

 and fadeToggle is just like a function and the argument passed to it is time to fade in and fade out .

 So , this is just the begining .. let's travel in the world of jquery ..


*/

function func()
{
  $("#heading").fadeToggle(2000);
}
