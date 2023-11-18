'use strict';

/*     어사이드 open / close 모듈    */

// 클릭 할 버튼 요소에 onclick="aside_open()" 추가 해야함.


let onlineshop_btn = document.getElementById('onlineshop_btn'),
    brand_btn = document.getElementById('brand_btn'),
    nav_child_wrap1 = document.getElementsByClassName('nav_child_wrap1'),
    nav_child_wrap2 = document.getElementsByClassName('nav_child_wrap2');

function aside_open(){
    document.getElementById('aside').classList.toggle('active_aside');
    document.getElementById('dimmer').classList.toggle('active_dimmer');
}

function aside_close(){
    document.getElementById('aside').classList.add('active_aside');
    document.getElementById('dimmer').classList.add('active_dimmer');
}

function onlineshop_btn_op(){
    nav_child_wrap1[0].classList.add('active');
    document.getElementById('arrow1').setAttribute('class','xi-angle-down-thin');
    onlineshop_btn.setAttribute('onclick','onlineshop_btn_close()');

}

function onlineshop_btn_close(){
    nav_child_wrap1[0].classList.toggle('active');
    document.getElementById('arrow1').setAttribute('class','xi-angle-right-thin');
    onlineshop_btn.setAttribute('onclick','onlineshop_btn_op()');
}

function brand_btn_op(){
    nav_child_wrap2[0].classList.add('active');
    document.getElementById('arrow2').setAttribute('class','xi-angle-down-thin');
    brand_btn.setAttribute('onclick','brand_btn_close()');

}

function brand_btn_close(){
    nav_child_wrap2[0].classList.toggle('active');
    document.getElementById('arrow2').setAttribute('class','xi-angle-right-thin');
    brand_btn.setAttribute('onclick','brand_btn_op()');
}



