
/*      __________________DIALOG-BOX___________________________


*/

$(document).ready(function(){

 $(".second").dialog({

   title : "Accept This and Continue ",
   resizable :true ,
   modal : true,
   draggable :true, 
   buttons : [
     {
       text : "Yeah , I will",
       click : function(){
         $(this).dialog("close");
       }
     }
   ]

 });

});
