//yeah , bro I know that , if we use  type = "number" in the html tag of a  and b , i can do it easily
// but to get satisfied solely .. i did this . 



// add function

function add_values()
{
  var a = document.getElementById("a").value ;
  var b = document.getElementById("b").value ;
  // let's declare a regular expression to see whether the given input is number or not

  var reg = /^[0-9]+$/ ;

  if (!(reg.test(a)))
  {
     document.getElementById("alabel").innerHTML = "please input a number" ;
     document.getElementById("alabel").style.color = "red";
     document.getElementById("alabel").style.visibility = "visible";
  }
  else if (!(reg.test(b)))
  {
    document.getElementById("blabel").innerHTML = "please input a number" ;
    document.getElementById("blabel").style.color = "red";
    document.getElementById("blabel").style.visibility = "visible";
  }
  else
  {
     document.getElementById("blabel").style.visibility = "hidden";
     document.getElementById("alabel").style.visibility = "hidden";
     var k =  Number(a) + Number(b)  ;
     document.getElementById("result").innerHTML   = a + "+" + b + "=" + k ;
     document.getElementById("result").style.color = "green";
     document.getElementById("result").style.visibility = "visible";
  }
}

// multiplication program

function multiply()
{
  var a = document.getElementById("a").value ;
  var b = document.getElementById("b").value ;
  // let's declare a regular expression to see whether the given input is number or not

  var reg = /^[0-9]+$/ ;

  if (!(reg.test(a)))
  {
     document.getElementById("alabel").innerHTML = "please input a number" ;
     document.getElementById("alabel").style.color = "red";
     document.getElementById("alabel").style.visibility = "visible";
  }
  else if (!(reg.test(b)))
  {
    document.getElementById("blabel").innerHTML = "please input a number" ;
    document.getElementById("blabel").style.color = "red";
    document.getElementById("blabel").style.visibility = "visible";
  }
  else
  {
    document.getElementById("blabel").style.visibility = "hidden";
    document.getElementById("alabel").style.visibility = "hidden";
     var k =  Number(a) * Number(b)  ;
     document.getElementById("result").innerHTML   = a + "*" + b + "=" + k ;
     document.getElementById("result").style.color = "green";
     document.getElementById("result").style.visibility = "visible";
  }
}


// division program

function division()
{
  var a = document.getElementById("a").value ;
  var b = document.getElementById("b").value ;
  // let's declare a regular expression to see whether the given input is number or not

  var reg = /^[0-9]+$/ ;

  if (!(reg.test(a)))
  {
     document.getElementById("alabel").innerHTML = "please input a number" ;
     document.getElementById("alabel").style.color = "red";
     document.getElementById("alabel").style.visibility = "visible";
  }
  else if (!(reg.test(b)))
  {
    document.getElementById("blabel").innerHTML = "please input a number" ;
    document.getElementById("blabel").style.color = "red";
    document.getElementById("blabel").style.visibility = "visible";
  }
  else
  {

     if (Number(b) != 0)
     {
       document.getElementById("blabel").style.visibility = "hidden";
       document.getElementById("alabel").style.visibility = "hidden";
       var k =  Number(a)/ Number(b)  ;
       document.getElementById("result").innerHTML   = a + "/" + b + "=" + k ;
       document.getElementById("result").style.color = "green";
       document.getElementById("result").style.visibility = "visible";
     }

     else
     {
       document.getElementById("result").innerHTML   = "change the b value brooo " ;
       document.getElementById("result").style.color = "red";
       document.getElementById("result").style.visibility = "visible";
     }
  }
}
