'use strict'

let category_menu = document.querySelectorAll('.menu_wrap>span');
let nationPreNexBtn = document.getElementsByClassName('fa-solid');
let boardPassword, id, boardInfo, allBoardInfo, showBoardLength, categoryArray, pageNation, pastNation, currentPage, currentCategory, totNationBtn;
let pastSpan = category_menu[0];
let limitNationbtn = 1;

console.log(pastSpan);

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
   } catch (err) {
      console.log(err.message);
   }
   boardClone(allBoardInfo);
   nationClone(allBoardInfo);
}

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

function nationClone(Array, limitNationbtn = 1) {
   // console.log(limitNationbtn);
   let pageButton_list = document.getElementsByClassName('pageButton_list');
   totNationBtn = Math.ceil(Array.length / 12);

   pageButton_list[0].innerHTML = '';
   for (let i = 1 + ((limitNationbtn-1) * 10); i <= 10 + ((limitNationbtn-1) * 10); i++) {
      if(i <= Math.ceil(Array.length / 12))
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

function nationSelect(e) {
   currentPage = e.target.textContent;
   switch (currentCategory) {
      case allBoardInfo:
         boardClone(allBoardInfo, currentPage);
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

// console.log(nationPreNexBtn);
for (let i = 0; i < nationPreNexBtn.length; i++) {
   // console.log(nationPreNexBtn[i]);
   nationPreNexBtn[i].addEventListener('click', (e) => {
      // console.log(e.target.id);
      // console.log(currentCategory);

         switch (e.target.id) {
            case 'btn1':
               limitNationbtn>1?limitNationbtn--:limitNationbtn=1;
               switch (currentCategory) {
                  case allBoardInfo:
                     nationClone(allBoardInfo, limitNationbtn);
                     break;
                  case categoryArray.NEWS:
                     nationClone(categoryArray.NEWS, limitNationbtn);
                     break;
                  case categoryArray.EVENT:
                     nationClone(categoryArray.EVENT, limitNationbtn);
                     break;
               }
               break;
            case 'btn2':
               limitNationbtn < Math.ceil(totNationBtn / 10)?limitNationbtn++:limitNationbtn=Math.ceil(totNationBtn / 10);
               switch (currentCategory) {
                  case allBoardInfo:
                     nationClone(allBoardInfo, limitNationbtn);
                     break;
                  case categoryArray.NEWS:
                     nationClone(categoryArray.NEWS, limitNationbtn);
                     break;
                  case categoryArray.EVENT:
                     nationClone(categoryArray.EVENT, limitNationbtn);
                     break;
               }
               // console.log(limitNationbtn);
               break;               
            }
   });
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