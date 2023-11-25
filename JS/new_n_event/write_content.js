'use strict'

// 1. 작성자 ID 가져오기
// 2. 카테고리 가져오기
// 3. 제목 가져오기
// 4. 본문 가져오기
//  -> 텍스트에어리어 구현하기
//     1) 개행(Enter) 감지해서 p태그 추가하기
//     2) 예시로 볼드 이테릭체 정렬 1~2개 정도만 구현하기
//  -> 문자 카운팅 구현하기
// 5. url 가져오기
// 6. 첨부파일 가져오기
// 7. 게시글 비밀번호 가져오기
// 8. 등록하기
//  -> 등록한 날짜 가져오기
//  -> 서버에 보내기

// =================================================================


let category = document.getElementById('category_box'),
   title = document.getElementById('title_section'),
   main_text = document.getElementById('main_text'),
   url = document.getElementById('insert_url'),
   file = document.getElementsByClassName('insert_file'),
   board_password = document.getElementById('board_password'),
   push_button = document.getElementById('push_button'),
   letter_count = document.getElementsByClassName('letter_count');

let clientId;

// 서버 보낼 게시물
var getBoard = {};

async function getClientData(){
   try {
      const response = await axios.get('http://localhost:3000/clientData/1');
      clientId = response.data.clientId;
      console.log(clientData);
   } catch (err) {
      console.log(err.message);
   }
}

async function postBoardData() {
   try {
      const response = await axios.post('http://localhost:3000/boardData/', getBoard);

      console.log('응답 데이터:', response.data);       // 서버에서 반환한 데이터
      console.log('상태 코드:', response.status);       // HTTP 상태 코드
      console.log('상태 텍스트:', response.statusText); // HTTP 상태 코드 설명
      console.log('응답 헤더:', response.headers);      // 응답 헤더 정보
   } catch (err) {
      console.log(err);
   }
}

function letterCount(){
   letter_count[0].textContent = main_text.value.length;
}

function pushBoard() {
   if(title.value.length===0){
      alert('제목을 입력 바랍니다.');
      title.focus();
      return false;
   } else if (main_text.value.length===0){
      alert('내용을 입력 바랍니다.')
      main_text.focus();
      return false;
   } else if(!(confirm('작성을 완료 하시겠습니까?'))){
      return false;
   }

   let date = new Date;

   getBoard = {
      'category': category.value,
      'title': title.value,
      'main_text': main_text.value,
      'url': url.value,
      'file1': file[0].value,
      'file2': file[1].value,
      'file3': file[2].value,
      'file4': file[3].value,
      'file5': file[4].value,
      'boardPassword': board_password.value,
      'writer': clientId,
      'submitDate' : `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
   }

   console.log(getBoard);
   
   return true;
}

// < 본문 시작 > => submit 버튼 누르면 이벤트 발생

getClientData();

push_button.addEventListener('click', (e) => {
   if(!pushBoard()){
      e.preventDefault();
   } else {
      postBoardData();
      alert('작성이 완료되었습니다.');
      location.href = '../../HTML/news_n_event/news_n_event_main.html';
   }
});