var id = 0;
var seconds = 0;
var pos = 0 ;

/*

   Time - Functions ::

   they come with window , i mean , window is above step of DOM in the hierarchy of DOM

   1)  setTimeout ( function , time ) ;  function must not contains (),as we are not calling and

                                         time -  after how much time , i have to call that .

            **** SO USING THE ABOVE METHOS , WE CAN CALL THE FUNCTION ONLY ONCE ****

    2) clearTimeout (id ) , we have to pass the id of the function , which we want to stop

                            id  -  it is collected  while using setTimeout function

            **** So , by using the above function , we can only intterupt once

     ???? what if i want to call function after particular amount of time repeatedly ..

     3) setInterval ( function , time ) - calls the function for every given time

     4) clearInterval (id ) , stops the function , if we press start again , the function will resume ,
                              rather than starting from the begining .


    ********NOTE THAT I MADE SOME CHANGES FOR MY CONVINIENCE IN THE BELOW CODE *******   

*/


function printmsg()
{
   document.getElementById("count").innerHTML = seconds + " seconds";
   seconds++ ;
}

function start()
{
   id = window.setInterval(printmsg , 1000 );
}
function stop()
{
  window.clearInterval(id);
  seconds = 0 ;
  pos = 0 ;
  document.getElementById("fst").innerHTML = "";
  document.getElementById("scnd").innerHTML = "";
  document.getElementById("trd").innerHTML = "";

  document.getElementById("count").innerHTML = seconds + " seconds";
}

function record()
{
  pos ++ ;
  if (pos == 1)
    document.getElementById("fst").innerHTML = pos + ".  " + seconds + " seconds " ;

  if (pos == 2)
    document.getElementById("scnd").innerHTML = pos + ".  " + seconds + " seconds " ;

  if (pos == 3 )
    document.getElementById("trd").innerHTML = pos + ".  " + seconds + " seconds " ;
}
