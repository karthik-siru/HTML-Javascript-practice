function changestyling()
{
  var tag =  document.getElementsByClassName('mypara');// now tag will be an array of elements with class attribute mypara

  for(var i = 0 ;i < tag.length ; i ++)
  {
    tag[i].style.color = "red";
  }
}
