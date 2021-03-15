/*

    Suppose , we want to do an action after the effect , in this example alert ,

    If we some time gap , then the next action is performed , before the completion of the
    first action .

    example below ::::

    ******************************************
*/

$(document).ready( function () {

  //alert("endho mawa");

  $(".btn").click(function() {

    $("#steve").fadeToggle(5000);
    alert("hi bro");
  });
});

/*
   **************************** CALLBACK ***************************

   $( selector ).action ( time-duration , action to be done after the first action })

   $(".hope").slideUp(2000 , function(){alert("hi mawa ")})

   action to be done after the first action ----- it can be done in two ways :

                                                 1)  anonymous way

                                                 2)  name of the function .



*/


$(document).ready( function () {

 $(".btn2").click(function(){

   $(".hope").slideUp(2000 , function(){
     alert("hi mawa ")
   })

 });

});


/*

    *************** CHAINING ******************

    what if we want to do, multiple works after the first function ..

    that's where chaining comes in :::


   $( selector ).action ( time-duration) . action2 ( time-duration )  . action3 ( time-duration ) ;

   this will do three actions  ::: action ----- action2 --------action3 ...... in the prescribed order


*/
