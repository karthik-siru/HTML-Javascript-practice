function validate ()
{
  var username =  document.getElementById("uname").value ;

  var regx = /@gmail.com/ ; // regular expressions are treated as objects

   //  if we put "/gmail.com/i" it will also accepts the small and big letters

  if (regx.test(username)) // this test () returns bool value , if the strin gis present in the input
  {
     return true ;
  }
  else
  {
    // if it is not a gmail , we  message the user . 

    document.getElementById("lbluser").style.visibility = "visible" ;
    return false ;
  }
}

function msg ()
{
   // this function is for message.html
   alert("miss you bro ");
   return true ;
}
