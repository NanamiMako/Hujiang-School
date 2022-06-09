
var detailNavBar = document.getElementById('detail-nav-bar');
var target = detailNavBar.offsetTop; //保存目标位置


window.onscroll = function () {
  var top = document.body.scrollTop || document.documentElement.scrollTop;
  if(top >= target ){

    detailNavBar.style.position = "fixed";

    detailNavBar.style.top = "0px";
    detailNavBar.style.left = "150px";
  }
  else{
    detailNavBar.style.position = "static";
  }


  
}


