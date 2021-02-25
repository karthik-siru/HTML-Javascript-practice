function validate ()
{
  var name = document.getElementById("usrname").value ;
  var password = document.getElementById("pswd").value ;

  if (name == "" || password == "" )
  {
    alert("rey edava rendu fill chesi nokku ");
    return false ;
  }

  else
  {
     return true ; 
  }
}
