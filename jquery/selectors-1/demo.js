
/*
   So , today , we will learn , selectors in jquery ..

   syntax : $(" name of the class /id ") . action( for how much time  ) ;

   $(" name of the class / id  ") -----> this means document.getElementsByClassName('className') in javascript

    action() --- means what to perform

    parameter in action() determines the duration of the action -- generally .

*/


// _________________________________________________________________________

/*
      ---------------TYPES OF SELECTORS-----------

      1)  element selectors
      2)  selectors by class name
      3)  selectors by id
      4)  multiple selections at once >>>

*/


function element(){
  $("h2").fadeToggle();

  //  but there is a problem , it will selects all the h2 tags in the html page
  // to overcome that , we use classes and ids . 
}

function classfunc(){

  $(".heading").fadeToggle();
}

function idfunc(){

  $("#heading1").fadeToggle();
}

function multipleclassfunc(){

  $(".heading2").fadeToggle();
}
