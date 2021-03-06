var id = 0;
var opac = 0 ;

/*

  Ughhhhh , so we have to do this much , to do a simple fadein and fadeout animation , but that's cool . 

  -  So everything , looks similar except the   window.getComputedStyle(img).getPropertyValue("opacity");

  This is because , browsers deals with opacity in other way .. In this sense we need to get the opacity
  value using this . Note that this method returns a string , we have to convert into a number using Number()
  function .



*/

function fadeout()
{
  id = setInterval(hide,100);
}
function fadein()
{
  id = window.setInterval(show , 100);
}

function hide()
{
  var img = document.getElementById("image") ;

  opac = Number(window.getComputedStyle(img).getPropertyValue("opacity"));

  if (opac > 0 )
  {
     opac = opac - 0.1 ;
     img.style.opacity = opac ;
  }
  else
  {
    window.clearInterval(id);
  }

}

function show()
{
  var img = document.getElementById("image") ;

  opac = Number(window.getComputedStyle(img).getPropertyValue("opacity"));

  if (opac < 1 )
  {
     opac = opac + 0.1 ;
     img.style.opacity = opac ;
  }
  else
  {
    window.clearInterval(id);
  }

}
