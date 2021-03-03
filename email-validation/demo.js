
function validate()
{
  var email = document.getElementById("mail").value;

  /*
        so , now let's learn how to validate email

        now , email can be divided into 4 parts :

        (yourname) @ (domain) .(extension) .(extension)

        ex :: karthik@learn_javascript.co.in

        1. any letters , numbers,dot or hyphen
        2. any letter , number and / or hyphen
        3. any letter (a-z)
        4. a dot and any letter

        But , there is a problem here  if we write :
       var regx = /a.b/ --it means that it can accept 'a'[any letter in b/w]'b'
       for ex :   axb -- correct , acd -- correct

       so to remove the special property of we add backslash(\)

       now , let's write the first set of email -- yourself

       so our regular expression will be in this form ----  /^()@().()(.)?$/--- question mark symbol denotes that the argument is optional

       /^([\w]{20})/ --  this have two problems  1) \w doesn't include hyphen and dot
                                                 2)  and the person having name greater than 20 characters be like bruhhh :(

      so , to solve these problems--  /^([a-z A-Z 0-9 \.-] + )/   --  the plus symbol at the end is for the above guy (whose name length greater than 20 characters )

      so let's write all the four parts now

       /^( [a-zA-Z0-9\.-] + )  ( [@] [a-zA-Z-] + )  ( [\.] [a-z]{2,8} ) ( [\.] [a-z] {2,8} ) ? $/  --- {2,8} means the minimum length of the third part is b/w (2-8)


  */

  var reg =  /^([a-zA-Z0-9\.-]+)([@][a-zA-Z-]+)([\.][a-z]{2,8})([\.][a-z]{2,8})?$/


  if (reg.test(email))
  {
     document.getElementById("lbluser").innerHTML = "valid" ;
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
