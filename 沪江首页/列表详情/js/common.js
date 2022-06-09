// common.js
// js效果在所有的页面中都会用到。

/**
 * 实现顶部下拉菜单效果
 * @type {[type]}
 */


 window.addEventListener("load",function(){
    var li1 = document.getElementById("li1");
    li1.onmouseover = function(){
      //把类名改成 toggeli on
      this.className = "toggleli on";
      this.style.background = "#fff"
    }
    li1.onmouseout = function(){
      //把on去掉
      this.className = "toggleli";
      this.style.background = "#F8F8F8"
    }
  
    var li2 = document.getElementById("li2");
    li2.onmouseover = function(){
      //把类名改成 toggeli on
      this.className = "toggleli on";
      this.style.background = "#fff"
    }
    li2.onmouseout = function(){
      //把on去掉
      this.className = "toggleli";
      this.style.background = "#F8F8F8"
    }

    var li3 = document.getElementById("li3");
    li3.onmouseover = function(){
      //把类名改成 toggeli on
      this.className = "toggleli on";
      this.style.background = "#fff"
    }
    li3.onmouseout = function(){
      //把on去掉
      this.className = "toggleli";
      this.style.background = "#F8F8F8"
    }
    var li4 = document.getElementById("li4");
    li4.onmouseover = function(){
      //把类名改成 toggeli on
      this.className = "toggleli on";
      this.style.background = "#fff"
    }
    li4.onmouseout = function(){
      //把on去掉
      this.className = "toggleli";
      this.style.background = "#F8F8F8"
    }
  });
  /**
 * 选项卡效果
 * @type {[type]}
 */
window.addEventListener("load", function () {
  var lis = document.querySelector('.a1').querySelector('ul').querySelectorAll("li")
  var divs = document.querySelector('.a1').querySelectorAll(".xxknr")
  //给每一个li添加事件响应，点击时，显示对应的那个div
  for (let i = 0; i < lis.length; i++) {

    lis[i].onmouseover = function () {

      //让对应的div显示。
      //第一步，把所有的div隐藏
      for (let i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
      }
      //第二步，把当前的div显示
      divs[i].style.display = "block";
    }
  }
});