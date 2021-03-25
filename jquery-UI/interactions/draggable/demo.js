
/*      __________________DRAGGABLE__________________________


       axis : "y" ,   ----------------------  can be movable in y axis only
       containment : "document", -----------  movement can be limited to parent box or document.
       cursor : "grabbing", ----------------  cursor when we are dragging
       opacity : 0.5 , ---------------------  opacity when dragging
       snap : true ,   ---------------------  attach to the next when come near
       snapTolerance : 30, -----------------  how much near , ( in pixels )
       grid : [300,300] --------------------  can be moved in steps of 300px each .

*/

$(document).ready(function(){

 $(".cube").draggable({

   containment : "document",
   cursor : "grabbing",
   opacity : 0.5 ,
   snap : true ,
   snapTolerance : 30,

 });

});
