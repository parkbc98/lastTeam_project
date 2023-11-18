'use strict';

/*     어사이드 open / close 모듈    */

// 클릭 할 버튼 요소에 onclick="aside_open()" 추가 해야함.

function aside_open(){
    document.getElementById('aside').classList.toggle('active_aside');
    document.getElementById('dimmer').classList.toggle('active_dimmer');
}

function aside_close(){
    document.getElementById('aside').classList.add('active_aside');
    document.getElementById('dimmer').classList.add('active_dimmer');
}