
/*      ___________________ACCORDION___________________________

    If we select one html tag and apply accordion , then it will consider the first element
    as the heading , and the next immediate as the content ..

    heading - and content can be any html tag , not only h & p . 

    collapsible : when we click on the open tab , the tab collapses .
    event : on click / mouseover
    heightStyle : Height is adjusted according to the element height , rather than
                  maximum element's height .
    active : which tab to open in the starting of the page  :: count starts from 0
    icons : we can change the  icons too .

*/

$(document).ready(function(){

  $(".mydiv").accordion({

    collapsible : true,
    event : "click",
    heightStyle : true,
    active : 1 ,
    icons : { header : "ui-icon-plus" ,activeHeader : "ui-icon-minus" }
  });
});
