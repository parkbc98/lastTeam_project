'use strict'

let category_menu = document.querySelectorAll('.menu_wrap>span');

let category, title, main_text, url, file1, file2, file3, file4, file5,
   boardPassword, writer, submitDate, id, boardInfo, allBoardInfo;

let showBoardLength, categoryArray;
let pastSpan = category_menu[0]

async function getboardInfo() {
   try {
      const response = await axios.get('http://localhost:3000/boardData');
      boardInfo = response.data;;
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
   for (let i = 0; i < Array.length; i++) {
      li_wrap[0].innerHTML += `
         <li>
         <div class="thumbnail">
            <a href="./news/newsDetail.html" class="img">
               <img src="${Array[i].file1}">               
            </a>
         </div>
         <div class="summary">
            <a href="./news/newsDetail.html" class="subject">${Array[i].title}</a>
            <p class="name">${Array[i].writer}</p>
            <p class="date">${Array[i].submitDate}</p>
         </div>
        </li> `;
   }
}

for (let i = 0; i < category_menu.length; i++) {
   category_menu[i].addEventListener('click', (e) => {
      categorySelect(e);
      pastSpan.style.color = '#999';
      e.target.style.color = '#000';
      pastSpan = e.target;
   })
}