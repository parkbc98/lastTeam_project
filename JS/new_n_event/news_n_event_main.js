'use strict'

let category_menu = document.querySelectorAll('.menu_wrap>span');
let nationPreNexBtn = document.getElementsByClassName('fa-solid');
let boardPassword, boardInfo, allCategoryArray, categoryArray, pageNation, pastNation, currentPage, currentCategory, totNationBtn;
let pastSpan = category_menu[0];
let limitNationbtn = 0;

// 데이터 불러오기 함수
async function getboardInfo() {
   try {
      const response = await axios.get('http://localhost:3000/boardData');
      boardInfo = response.data;
      allCategoryArray = response.data;
      // console.log(boardInfo);
      categoryArray = boardInfo.reduce((acc, curr) => {
         console.log(acc)
         const { category } = curr;
         if (acc[category]) acc[category].push(curr);
         else acc[category] = [curr];
         return acc;
      }, {});
   } catch (err) {
      console.log(err.message);
   }
   boardClone(allCategoryArray);
   nationClone(allCategoryArray);
}

// 메인 컨텐츠 복사 생성 함수
function boardClone(Array, currentPage = 1) {
   let li_wrap = document.getElementsByClassName('li_wrap');
   li_wrap[0].innerHTML = '',
      currentCategory = Array;

   for (let i = Array.length - 1 - (12 * (currentPage - 1)); i > Array.length - 1 - (12 * currentPage); i--) {
      if (Array[i] !== undefined) {

         li_wrap[0].innerHTML += `
         <li class="board_li" value="${Array[i].boardPassword}">
         <div class="thumbnail">
         <a href="./news/newsDetail.html" class="img">
         <img src="${Array[i].url}">
         </a>
         </div>
         <div class="summary">
         <a href="./news/newsDetail.html" class="subject">${Array[i].title}</a>
         <p class="name">${Array[i].writer}${Array[i].boardPassword !== "" ? '<i class="xi-lock-o"></i>' : ''}</p>
         <p class="date">${Array[i].submitDate}</p>
         </div>
         </li> `;
      }
   }
}

// 네이션 복사 생성 함수
function nationClone(Array, limitNationbtn = 0) {
   let pageButton_list = document.getElementsByClassName('pageButton_list');
   totNationBtn = Math.ceil(Array.length / 12);    // Math.ceil() => 인자에 있는 number를 올림해주는 함수

   pageButton_list[0].innerHTML = '';
   for (let i = 1 + (limitNationbtn * 10); i <= 10 + (limitNationbtn * 10); i++) {
      if (i <= totNationBtn)
         pageButton_list[0].innerHTML += `<li><span class="pageNation">${i}</span></li>`;
   }

   pageNation = document.getElementsByClassName('pageNation');
   pageNation[0].style.color = '#000'
   pastNation = pageNation[0];


   for (let i = 0; i < pageNation.length; i++) {
      pageNation[i].addEventListener('click', (e) => {

         nationSelect(e);

         pastNation.style.color = '#999';
         e.target.style.color = '#000';
         pastNation = e.target;
      });
   }
}

// 상단 카테고리 선택 함수
function categorySelect(e) {
   switch (e.target.textContent) {
      case '전체':
         boardClone(allCategoryArray);
         break;
      case 'NEWS':
         boardClone(categoryArray.NEWS);
         break;
      case 'EVENT':
         boardClone(categoryArray.EVENT);
         break;
   }
}

// 네이션 숫자 버튼 선택 함수
function nationSelect(e) {
   currentPage = e.target.textContent;
   switch (currentCategory) {
      case allCategoryArray:
         boardClone(allCategoryArray, currentPage);
         break;
      case categoryArray.NEWS:
         boardClone(categoryArray.NEWS, currentPage);
         break;
      case categoryArray.EVENT:
         boardClone(categoryArray.EVENT, currentPage);
         break;
   }
   pastNation.style.color = '#999';
   e.target.style.color = '#000';
   pastNation = e.target;
}

// 페이지네이션 좌/우 버튼 함수
function btnSelect (currentCategory) {
   switch (currentCategory) {
      case allCategoryArray:
         nationClone(allCategoryArray, limitNationbtn);
         boardClone(allCategoryArray, currentPage);
         break;
      case categoryArray.NEWS:
         nationClone(categoryArray.NEWS, limitNationbtn);
         boardClone(categoryArray.NEWS, currentPage);
         break;
      case categoryArray.EVENT:
         nationClone(categoryArray.EVENT, limitNationbtn);
         boardClone(categoryArray.EVENT, currentPage);
         break;
   }
}

// < 본문 시작 >

getboardInfo();

for (let i = 0; i < category_menu.length; i++) {
   category_menu[i].addEventListener('click', (e) => {
      categorySelect(e);
      nationClone(currentCategory);
      pastSpan.style.color = '#999';
      e.target.style.color = '#000';
      pastSpan = e.target;
   });
}

for (let i = 0; i < nationPreNexBtn.length; i++) {
   nationPreNexBtn[i].addEventListener('click', (e) => {
      if (totNationBtn > 10) {
         switch (e.target.id) {
            case 'btn1':
               limitNationbtn > 0 ? limitNationbtn-- : limitNationbtn = 0;
               currentPage = (limitNationbtn * 10) + 1;
               btnSelect (currentCategory);
               break;
            case 'btn2':
               limitNationbtn < Math.ceil(totNationBtn / 10) - 1 ? limitNationbtn++ : limitNationbtn = Math.ceil(totNationBtn / 10) - 1;
               currentPage = (limitNationbtn * 10) + 1;
               btnSelect (currentCategory);
               break;
         }
      }
   });
}