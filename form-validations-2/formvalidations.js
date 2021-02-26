function validate ()
{
  var username  =  document.getElementById("user") ; // takes the username from the input text box and stores it in username 
  var pswd     =  document.getElementById("pass") ;  // similarly the password

   if (username.value.trim() == "")
   {
     username.style.border = "solid 3px red";  // makes the boder of the user box red .
     document.getElementById("labeluser").style.visibility = "visible" ;  // pops the message which is already loaded in the label tag . 
     return false ; // says the form validater that , they have entered wrong value . 
   }
   else if (pswd.value.trim() == "" )
  {
     pswd.style.border = "solid 3px green";
     document.getElementById("labelpassword").style.visibility = "visible";
     return false ;
  }

   else if (pswd.value.length <  5 )
   {
     pswd.style.border = "solid 3px yellow";
     document.getElementById("labelshort").style.visibility = "visible";
     return false ;
   }
   else
   {
       return true ;
   }
}

function damn()
{
  alert("endi mawa idhi ");
  return true ;
}
