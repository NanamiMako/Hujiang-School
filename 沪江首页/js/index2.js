
window.addEventListener("load", function () {
    var navs1 = document.getElementById('lan-nav');
    var ceiling = document.getElementById('ceiling');
    var lis1 = document.getElementById('ceiling').getElementsByTagName('li');
    document.addEventListener('scroll',function (){
        if (window.pageYOffset >= navs1.offsetTop &&
            window.pageYOffset < navs1.offsetTop + 500) {
                // console.log(window.pageYOffset);
                // console.log(212121);
            ceiling.style.position = 'fixed';
            ceiling.style.top = '0px';
            ceiling.style.left = '0px';
            ceiling.style.width = '100%';
            lis1[0].className = 'first';
            lis1[1].className = '';
            lis1[2].className = '';
            lis1[3].className = '';
            lis1[4].className = '';
            lis1[5].className = '';
            lis1[6].className = '';
            lis1[7].className = '';
        } else if (window.pageYOffset >= navs1.offsetTop + 500 &&
            window.pageYOffset < navs1.offsetTop + 1000) {
            ceiling.style.position = 'fixed';
            ceiling.style.top = '0px';
            ceiling.style.left = '0px';
            ceiling.style.width = '100%';
            lis1[1].className = 'first';
            lis1[0].className = '';
            lis1[2].className = '';
            lis1[3].className = '';
            lis1[4].className = '';
            lis1[5].className = '';
            lis1[6].className = '';
            lis1[7].className = '';
        } else if (window.pageYOffset >= navs1.offsetTop + 1000 &&
            window.pageYOffset < navs1.offsetTop + 1500) {
            ceiling.style.position = 'fixed';
            ceiling.style.top = '0px';
            ceiling.style.left = '0px';
            lis1[2].className = 'first';
            ceiling.style.width = '100%';
            lis1[1].className = '';
            lis1[0].className = '';
            lis1[3].className = '';
            lis1[4].className = '';
            lis1[5].className = '';
            lis1[6].className = '';
            lis1[7].className = '';
        } else if (window.pageYOffset >= navs1.offsetTop + 1500 &&
            window.pageYOffset < navs1.offsetTop + 2000) {
            ceiling.style.position = 'fixed';
            ceiling.style.top = '0px';
            ceiling.style.left = '0px';
            lis1[3].className = 'first';
            ceiling.style.width = '100%';
            lis1[1].className = '';
            lis1[2].className = '';
            lis1[0].className = '';
            lis1[4].className = '';
            lis1[5].className = '';
            lis1[6].className = '';
            lis1[7].className = '';
        } else if (window.pageYOffset >= navs1.offsetTop + 2000 &&
            window.pageYOffset < navs1.offsetTop + 2500) {
            ceiling.style.position = 'fixed';
            ceiling.style.top = '0px';
            ceiling.style.left = '0px';
            lis1[4].className = 'first';
            ceiling.style.width = '100%';
            lis1[1].className = '';
            lis1[2].className = '';
            lis1[3].className = '';
            lis1[0].className = '';
            lis1[5].className = '';
            lis1[6].className = '';
            lis1[7].className = '';
        } else if (window.pageYOffset >= navs1.offsetTop + 2500 &&
            window.pageYOffset < navs1.offsetTop + 3000) {
            ceiling.style.position = 'fixed';
            ceiling.style.top = '0px';
            ceiling.style.left = '0px';
            lis1[5].className = 'first';
            ceiling.style.width = '100%';
            lis1[1].className = '';
            lis1[2].className = '';
            lis1[3].className = '';
            lis1[0].className = '';
            lis1[4].className = '';
            lis1[6].className = '';
            lis1[7].className = '';
        } else if (window.pageYOffset >= navs1.offsetTop + 3000 &&
            window.pageYOffset < navs1.offsetTop + 3500) {
            ceiling.style.position = 'fixed';
            ceiling.style.top = '0px';
            ceiling.style.left = '0px';
            lis1[6].className = 'first';
            ceiling.style.width = '100%';
            lis1[1].className = '';
            lis1[2].className = '';
            lis1[3].className = '';
            lis1[0].className = '';
            lis1[5].className = '';
            lis1[4].className = '';
            lis1[7].className = '';
        } else if (window.pageYOffset >= navs1.offsetTop + 3500 &&
            window.pageYOffset < navs1.offsetTop + 6000) {
            ceiling.style.position = 'fixed';
            ceiling.style.top = '0px';
            ceiling.style.left = '0px';
            ceiling.style.width = '100%';
            lis1[7].className = 'first';
            lis1[1].className = '';
            lis1[2].className = '';
            lis1[3].className = '';
            lis1[0].className = '';
            lis1[5].className = '';
            lis1[6].className = '';
            lis1[4].className = '';
        } else {
            ceiling.style.width = '1136px';
            ceiling.style.position = 'absolute';
            ceiling.style.left = '0px';
            ceiling.style.top = '0px';
        }
    })
        // for(let i= 0;i<lis1.length;i++){
        //     this.document.addEventListener('scroll',function(){
        //         flag = 1;
        //     })
        // }


    for (var i = 0; i < lis1.length; i++) {
        lis1[i].index = i;
        lis1[i].onclick = function () {
            for (var i = 0; i < lis1.length; i++) {
                lis1[i].className = '';
            }
            this.index.className = 'first';
        }
    }
});