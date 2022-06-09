//返回顶部缓动效果
window.addEventListener("load", function () {
  var sidebar = this.document.getElementById('sidebar');
  var li1 = this.document.getElementById('li1');
  var li2 = this.document.getElementById('li2');
  var li3 = this.document.getElementById('li3');
  var a1 = this.document.getElementById('li1').getElementsByTagName('a')[0];
  var a2 = this.document.getElementById('li2').getElementsByTagName('a')[0];
  var a3 = this.document.getElementById('li3').getElementsByTagName('a')[0];
  var i1 = this.document.getElementById('li3').getElementsByTagName('i')[0];
  
  document.onscroll = function () {
      if (window.pageYOffset > 500) {
          sidebar.style.height='365px';
          li3.style.display = 'block';
          li2.style.borderBottom='1px solid rgb(200, 200, 200)';
      } else {
          sidebar.style.height='300px';
          li3.style.display = 'none';
          li2.style.borderBottom='none';
      }
  }

  li1.onmouseover = function () {
      //把类名改成 toggeli on
      this.className = "toggleli on three";

      a1.style.color = "green";
  };
  li1.onmouseout = function () {
      //把on去掉
      this.className = "toggleli three";
      a1.style.color = "black";
  };

  li2.onmouseover = function () {
      //把类名改成 toggeli on
      this.className = "toggleli on four";
      a2.style.color = "green";
  };
  li2.onmouseout = function () {
      //把on去掉
      this.className = "toggleli four";
      a2.style.color = "black";
  };

  li3.onmouseover = function () {
      //把类名改成 toggeli on
      a3.style.display = "block";
      i1.style.color = 'green';
      i1.style.marginTop = '10px';
  };
  li3.onmouseout = function () {
      //把on去掉
      a3.style.display = "none";
      i1.style.color = 'black';
      i1.style.marginTop = '20px';
  };



//   //示例
  $('#li3').gotoTop({
      offset : 500, //距离顶部的位置
      speed : 600, //移动到顶部的速度
      /*     iconSpeed : 300, //icon动画样式的速度*/
      // animationShow : {
      //     'transform' : 'translate(0,0)',
      //     'transition': 'transform .5s ease-in-out'
      // }, //icon动画样式显示时
      // animationHide : {
      //     'transform' : 'translate(80px,0)',
      //     'transition': 'transform .5s ease-in-out'
      // } //icon动画样式隐藏时
  });
});
