function validate ()
{
  var username =  document.getElementById("uname").value ;

  var regx = /@gmail.com/ ; // regular expressions are treated as objects

   //  if we put "/gmail.com/i" it will also accepts the small and big letters
   //   what if we want to have some particular letters and word format

  // for example ::  aimple , bimple , cimple . dimple .. what if i want to allow the user , who type any of these words
  // we can do like this :

  //  var  regx =  /[abcd]imple/ --  this will clears the problem 
  // ok , nice .. what if i want to include from a to x , we cando that  using  range function
  //  var reg = /[a-x]imple/ ..

  //what if i dont want to include certain characters ...

  //  we can use ^ sizde in the subscript operator

  // var reg = /[^abcd]imple/; --- now , if you type any of aimple , bimple , cimple ,dimple ..you will get an error .

  if (regx.test(username)) // this test () returns bool value , if the strin gis present in the input
  {
    alert ("super bro ");
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
