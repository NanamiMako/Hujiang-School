window.addEventListener("load", function () {
            var sidebar = this.document.getElementById('#sidebar');
            var li1=this.document.getElementById('li1');
            var li2=this.document.getElementById('li2');
            var li3=this.document.getElementById('li3');
            var a1=this.document.getElementById('li1').getElementsByTagName('a')[0];
            var a2=this.document.getElementById('li2').getElementsByTagName('a')[0];
            var a3=this.document.getElementById('li3').getElementsByTagName('a')[0];
            var i1=this.document.getElementById('li3').getElementsByTagName('i')[0];
            // var li2=this.document.getElementById('li2');
            // var li3=this.document.getElementById('li3');
            document.onscroll = function () {
                if(window.pageYOffset >400){
                    li3.style.display='block';
                }else {
                    li3.style.display='none';
                }
            }

                li1.onmouseover = function () {
                  //把类名改成 toggeli on
                  this.className = "toggleli on three";
                  a1.style.color="green";
                };
                li1.onmouseout = function () {
                  //把on去掉
                  this.className = "toggleli three";
                  a1.style.color="black";
                };
              
                li2.onmouseover = function () {
                  //把类名改成 toggeli on
                  this.className = "toggleli on four";
                  a2.style.color="green";
                };
                li2.onmouseout = function () {
                  //把on去掉
                  this.className = "toggleli four";
                  a2.style.color="black";
                };

                li3.onmouseover = function () {
                    //把类名改成 toggeli on
                    a3.style.display="block";
                    i1.style.color='green';
                  };
                  li3.onmouseout = function () {
                    //把on去掉
                    a3.style.display="none";
                    i1.style.color='black';
                  };
                // let toTop = getElementById('toTop');
                // toTtop.addEventListener('click',function{

                // })
           
        });