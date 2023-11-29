'use strict'
/*     어사이드 open / close 모듈    */

// 클릭 할 버튼 요소에 onclick="aside_open()" 추가 해야함.

export function asideRun () {
    let onlineshop_btn = document.getElementById('onlineshop_btn'),
        brand_btn = document.getElementById('brand_btn'),
        nav_child_wrap1 = document.getElementsByClassName('nav_child_wrap1'),
        nav_child_wrap2 = document.getElementsByClassName('nav_child_wrap2');

    let hambergerBtn = document.querySelector('.hambergerBtn'),
        dimmer = document.querySelector('.dimmer'),
        onlineshopBtn = document.querySelector('#onlineshop_btn'),
        brandBtn = document.querySelector('#brand_btn');

    function aside_open(){
        document.getElementById('aside').scrollTo(0,0);
        document.getElementById('aside').classList.toggle('active_aside');
        document.getElementById('dimmer').classList.toggle('active_dimmer');
    }

    function aside_close(){
        document.getElementById('aside').classList.add('active_aside');
        document.getElementById('dimmer').classList.add('active_dimmer');

    }

    function onlineshop_btn_action(){
        nav_child_wrap1[0].classList.toggle('active');

        if (nav_child_wrap1[0].classList.contains('active')) {
            document.getElementById('arrow1').setAttribute('class','xi-angle-down-thin');
        } else {
            document.getElementById('arrow1').setAttribute('class','xi-angle-right-thin');
        }
    }

    function brand_btn_action(){
        nav_child_wrap2[0].classList.toggle('active');

        if (nav_child_wrap2[0].classList.contains('active')) {
            document.getElementById('arrow2').setAttribute('class','xi-angle-down-thin');
        } else {
            document.getElementById('arrow2').setAttribute('class','xi-angle-right-thin');
        }
    }

    // addEventListener 추가
    hambergerBtn.addEventListener('click', aside_open);
    dimmer.addEventListener('click', aside_close);
    onlineshopBtn.addEventListener('click', onlineshop_btn_action);
    brandBtn.addEventListener('click', brand_btn_action);
}