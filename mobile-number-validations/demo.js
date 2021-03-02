function validate()
{
  var num = document.getElementById("phonenumber").value;

  /*
         so , to validate , the expression , we can do like , [7-9][0-9][0-9].... 9 times .
         but what if  the length of the number is too long ???

         the answer lies in the curly brackets ... if we want a character in a string  to be a particular one
         we can specify our length in {.....} .

          \d  --  match any digit [0-9]
          \w  --  match any word or character {[0-9],[a-z],[A-Z]}
          \s  --  match any spaces or tabs
          \t  --  match only tabs

          BRO , I have a problem , what if he enters some alphabet random string in the begining /end of the phone number ...
          it still validates right ???

          yeah , to solve that , we can do one thing , specify the string when to start and when to start using ^ and $ at the begining and at the end respectively

          ex :::  /^[7-9]\d{9}$/


  */

  var reg = /^[6-9]\d{9}$/ ; // the first character is only 7-9 , because , in india generally , phone numbers start from 7-9 only . 

  if (reg.test(num))
  {
     document.getElementById("lbluser").innerHTML = "valid";
     document.getElementById("lbluser").style.color = "green";
     document.getElementById("lbluser").style.visibility = "visible";
  }

  else
  {
    document.getElementById("lbluser").innerHTML = "invalid";
    document.getElementById("lbluser").style.visibility = "visible";
    document.getElementById("lbluser").style.color = "red";
  }
}
