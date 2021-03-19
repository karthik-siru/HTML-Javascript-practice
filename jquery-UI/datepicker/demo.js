/*

   so , jquery is a very useful library built upon javascript
   It is useful while making some useful thimngs like calender and all , rather than from the scratch .

   numberOfMonths - number of months to be displayed once
   changeYear   -  year dropdown box
   changeMonth  - month dropdown box
   showWeek   - to show week number
   weekHeader -  what to display above week number
   sbowOtherMonths - include other month dates , which comes as a part weekHeader
   date limits
   1) minDate
   2) maxDate 

*/


$(document).ready(function(){

  $("#myinput").datepicker({
    numberOfMonths : 2,
    changeYear : true ,
    changeMonth : true ,
    showWeek : true,
    weekHeader : "Week NO",
    showOtherMonths : true ,
    minDate : new Date(2017,0,1),
    maxDate : new Date(2021,2,24)
  });
});
