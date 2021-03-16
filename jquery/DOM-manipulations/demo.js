$(document).ready(function(){

  $(".text_button").click(function (){

     var text = $(".text").text();
     alert(text);

     /*
         To change the text inside the html tag :::

         pass the required text in text(" here  ");

         ******************************************************
         Note : No changes will be reflected in the html file .....
         ******************************************************
     */

     $(".text").text("yeah , I changed this");
  });

  $(".html_button").click(function (){

     var text = $(".html").text();
     alert(text);

     /*
         To change the html inside the html tag :::

         pass the required text in html(" here  ");

         ******************************************************
         Note : No changes will be reflected in the html file .....
         ******************************************************
     */
      $(".html").html("yeah , I <b>changed</b> this"); 
  });

// so , the difference between text and html element is if there are any html tags in the text
// text() -------- returns just the text .. ex : This is html demo
// html() -------- returns included html elements   ex : this is <b>html</b> demo


// So , let's see how to get the value of the given attribute ...

//Recall -----      attribute    = "value" ;
//Ex :                 class     = "prac" ;
  $(".attr_button").click(function (){

      var text = $("div").attr("class");
      alert(text);

      /*
          To change the attribute value :::

          pass the required text in attr("which attribute" , "what to chnage ");

          ******************************************************
          Note : No changes will be reflected in the html file .....
          ******************************************************
      */
   });

   $(".css_button").click(function (){

       var text = $("div").css("background-color");
       alert(text);

       /*
            To get the vaalue of css properties :::

            $( "selector" ) . css ("property_name") ;
       */

       $("div").css("background-color" ,"yellow");

       /*
           To change the css property value  :::

           pass the required property and value in css("which property" , "what to chnage ");

           ******************************************************
           Note : No changes will be reflected in the css file .....
           ******************************************************
       */
    });

});
