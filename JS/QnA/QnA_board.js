'use strict';

// 상품정보선택
const prodchoicebtn = document.getElementsByTagName('button');
let post_uploadbtn = document.getElementById('post_uploadbtn');

prodchoicebtn[0].addEventListener('click', () => {
    window.open('./QnA_prodchoice.html', 'prodchoice', 'width=825, height=500, top=120, left=200');
});

// 문의종류 게시글제목 작성자이름 작성시간 서버에 저장

const date = new Date();
let qna_type = document.getElementById('qna_type'),
    qna_post_title = document.getElementById('qna_post_title'),
    qna_username = document.getElementById('qna_username'),
    post_date = `${date.getFullYear()}.${date.getMonth()}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}`,
    post_content = document.getElementsByClassName('board_textarea_main');

post_uploadbtn.addEventListener('click', (e) => {

    let post_info = {
        'post_type': qna_type.value,
        'post_title': qna_post_title.value,
        'post_username': qna_username.value,
        'post_date': post_date,
        'content': post_content[0].value,
    }

    axios.post('http://localhost:3000/post_info', post_info)

        .then(response => {
            console.log('응답 데이터:', response.data);       // 서버에서 반환한 데이터
            console.log('상태 코드:', response.status);       // HTTP 상태 코드
            console.log('상태 텍스트:', response.statusText); // HTTP 상태 코드 설명
            console.log('응답 헤더:', response.headers);      // 응답 헤더 정보
        })
        .catch(err => {
            console.log(err);
        });

    e.preventDefault;
})