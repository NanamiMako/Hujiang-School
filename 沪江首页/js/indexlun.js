
var btn = document.querySelectorAll('.btn');
var hot = document.querySelector('#hot');

var hotlist = document.querySelector('#hotlist');

var hotlistitem = hotlist.children;

var itemlength = hotlistitem.length;

var itemwidth = hotlistitem[0].offsetWidth;

var prev = document.querySelectorAll('.btn-pre');
var next = document.querySelectorAll('.btn-next');

var coming = document.querySelector('#coming');

var cominglist = document.querySelector('#cominglist');



window.addEventListener('load', function () {


  hot.addEventListener('mouseover', function () {
    for (let i = 0; i < btn.length; i++) {
      btn[i].style.display = 'block';
      btn[i].style.opacity = '1';
    }
  });

  hot.addEventListener('mouseout', function () {
    for (let i = 0; i < btn.length; i++) {
      btn[i].style.opacity = '0';
    }
  });



  var nowLeft = 0;
  next[0].addEventListener('click', function () {
    if (nowLeft <= -((itemlength - 5) * (itemwidth + 19))) {
      nowLeft = parseInt(hotlist.style.left);
      return
    }
    hotlist.style.left = nowLeft - ((itemlength - 5) * (itemwidth + 19)) + 'px';
    nowLeft = parseInt(hotlist.style.left);

  });
  // 19是itemwidth的margin值
  // itemlength-5是因为第二页滚动半屏

  prev[0].addEventListener('click', function () {
    if (nowLeft <= 0) {
      hotlist.style.left = 0;
      nowLeft = parseInt(hotlist.style.left);
      return
    }
    hotlist.style.left = nowLeft + ((itemlength - 5) * (itemwidth + 19)) + 'px';
    nowLeft = parseInt(hotlist.style.left);
  });

  // 19是itemwidth的margin值
  // itemlength-5是因为第二页滚动半屏

});

