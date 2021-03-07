var id = 0;
var width = 200 ;

/*
 So , guys this is pretty much similar to the previous one . fadein fade out ..

 but there is a small change , that is this function *** callInterval() ***in the

 start  of the functions expand and shrink , This is because if we move the mouse before ,
 it reaches the width of 400 , the call Interval function is never called and the setInterval
 call repeats , so tackle that we put callIntervall function at the begining . 
*/

function expand()
{
  if(width < 400)
  {
    width += 30 ;
    document.getElementById('image').width = width ;
  }
  else
  {
    clearInterval(id);
  }
}

function shrink()
{
  if(width > 200)
  {
    width -= 30 ;
    document.getElementById('image').width = width ;
  }
  else
  {
    clearInterval(id);
  }
}

function decrease ()
{
  clearInterval(id);
  id =  setInterval(shrink , 20);
}

function increase()
{
  clearInterval(id);
  id =  setInterval(expand , 20);
}
