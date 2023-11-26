'use strict'

let category_menu = document.querySelectorAll('.menu_wrap>span');

let boardPassword, id, boardInfo, allBoardInfo;

let showBoardLength, categoryArray;
let pastSpan = category_menu[0];

async function getboardInfo() {
   try {
      const response = await axios.get('http://localhost:3000/boardData');
      boardInfo = response.data;
      allBoardInfo = response.data;
      categoryArray = boardInfo.reduce((acc, curr) => {
         const { category } = curr;
         if (acc[category]) acc[category].push(curr);
         else acc[category] = [curr];
         return acc;
      }, {});
      boardClone(allBoardInfo);
   } catch (err) {
      console.log(err.message);
   }
}

getboardInfo();

function categorySelect(e) {
   switch (e.target.textContent) {
      case '전체':
         boardClone(allBoardInfo);
         break;
      case 'NEWS':
         boardClone(categoryArray.NEWS);
         break;
      case 'EVENT':
         boardClone(categoryArray.EVENT);
         break;
   }
}



function boardClone(Array) {
   let li_wrap = document.getElementsByClassName('li_wrap');
      
      li_wrap[0].innerHTML = '';
      for (let i = Array.length-1; i >= 0; i--) {
         li_wrap[0].innerHTML += `
         <li class="board_li" value="${Array[i].boardPassword}">
         <div class="thumbnail">
         <a href="./news/newsDetail.html" class="img">
         <img src="${Array[i].url}">
         </a>
         </div>
         <div class="summary">
         <a href="./news/newsDetail.html" class="subject">${Array[i].title}</a>
         <p class="name">${Array[i].writer}${Array[i].boardPassword!==""?'<i class="xi-lock-o"></i>':''}</p>
         <p class="date">${Array[i].submitDate}</p>
         </div>
         </li> `;
      }
}

// 이벤트 위임에 대해서
// li_wrap 에다 이벤트를 걸고 요소 생성 후
// 이벤트를 위임받아 생성된 자식 li요소에 이벤트를 걸게해주는 방법을 찾아라

// 그 후 그 게시글에 비밀번호가 있는 게시글이라면
// 비밀번호 확인 후 상세페이지로 갈 수 있게 하기

for (let i = 0; i < category_menu.length; i++) {
   category_menu[i].addEventListener('click', (e) => {
      categorySelect(e);
      pastSpan.style.color = '#999';
      e.target.style.color = '#000';
      pastSpan = e.target;
   });
}