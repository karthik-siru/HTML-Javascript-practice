function validate ()
{
  var username  =  document.getElementById("user") ;
  var pswd     =  document.getElementById("pass") ;

   if (username.value.trim() == "")
   {
     username.style.border = "solid 3px red";
     document.getElementById("labeluser").style.visibility = "visible" ;
     return false ;
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
