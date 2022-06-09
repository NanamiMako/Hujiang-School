var btn1 = document.querySelectorAll('.btn1');

var xiajiantou = document.querySelectorAll('.icon-xiajiantou2');

var toggle = document.querySelectorAll('.item');

var togglelist = document.querySelectorAll('.toggle');
var toggleicon = document.querySelectorAll('.icon-xiajiantou3');

window.addEventListener('load', function () {
  for (var i = 0; i < btn1.length; i++) {
    btn1[i].addEventListener('mouseover', function () {
      this.style.color = '#49b849';
      for (var i = 0; i < btn1.length; i++) {
        xiajiantou[i].className = 'iconfont icon-shangjiantou1';
      };
    });
    btn1[i].addEventListener('mouseout', function () {
      this.style.color = '#858a91';
      for (var i = 0; i < btn1.length; i++) {
        xiajiantou[i].className = 'iconfont icon-xiajiantou2';
      };
    });
  }

  for (let i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('mouseover', function () {
      for (let j = 0; j < toggle.length; j++) {
        togglelist[j].style.display = 'none';
      }
      toggleicon[i].className = 'iconfont icon-shangjiantou2';
      togglelist[i].style.display = 'block';
    });

    toggle[i].addEventListener('mouseout', function () {
      toggleicon[i].className = 'iconfont icon-xiajiantou3';
      togglelist[i].style.display = 'none';
    })
  }

});

// banner选项卡变色

var adnav = document.querySelector("#adnav");

var adnavlist = adnav.children;

var carousel = document.querySelector('#carousel');

var width = carousel.children[0].offsetWidth;
window.addEventListener('load', function () {

  for (let i = 0; i < adnavlist.length; i++) {
    adnavlist[i].addEventListener('mouseover', function () {
      for (let j = 0; j < adnavlist.length; j++) {
        adnavlist[j].className = '';

      }
      adnavlist[i].className = 'cur';
      clearInterval(timer);
      carousel.style.left = -(width * i) + 'px';
      x = i; //让信号量等于当前选项卡位置后继续自动轮播
    });

    adnavlist[i].addEventListener('mouseout', function () {
      lunbo();
    });
  }
});


var timer;

var x = 0;

function lunbo() {
  clearInterval(timer);
  timer = setInterval(function () {
    for (let j = 0; j < adnavlist.length; j++) {
      adnavlist[j].className = '';
    }
    x++;
    if (x > adnavlist.length - 1) {
      x = 0;
    }
    adnavlist[x].className = 'cur';
    carousel.style.left = -(width * x) + 'px';


  }, 8000);
}
lunbo();

carousel.addEventListener('mouseover', function () {
  clearInterval(timer);
});

carousel.addEventListener('mouseout', function () {
  lunbo();
});
//  动态修改伪元素
// var css = function (t, s) {
//   s = document.createElement('style');
//   s.innerText = t;
//   document.body.appendChild(s);
// }
// css('.banner .bannerlist .ad-nav li.cur:after{width:0;}');