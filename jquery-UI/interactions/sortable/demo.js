
/*      __________________SORTABLE-UI__________________________




*/

$(document).ready(function(){

 $("#mydiv").sortable({

   distance : 50 , //  we can be able to sort , iff we drag a distance of 50px
   delay  : 0, //  delay to select
   cursor : "grabbing",
   opacity : 0.5,
   containment : "parent"

 });
});
