'use strict'

//  게시글 등록시 자동으로 li에 추가해주고 페이지에 일정 개수가 넘어가면 다음 페이지 생성
//  옆으로 넘어가는 버튼 누르면 10페이지씩 앞, 뒤로 이동
//  검색 버튼 작동시 선택한 카테고리(작성자,게시글 정보선택) 중 인풋박스에 포함된 입력된 내용이 포함된 글 띄워주기
//  카테고리, 작성 후 지난 시간 해당 카테고리로 등록된 글만 정렬

// 1.p게시글제목 2.문의종류 3.작성시간 4.작성자 5.배열크기 정보받기
// >html복사해서 배열크기만큼 innerHtml로 출력
// innerHtml 1번 넣고 출력

let PostData,
    post_title,
    post_type,
    post_date,
    userName;

async function getPostData() {
    try {
        const response = await axios.get('http://localhost:3000/post_info');

        PostData = response.data;
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
    
    //게시글
    let qna_main_content = document.getElementsByClassName('qna_main_content'),
    post_per_page =10,  // 한 페이지 당 글 수  rowPerPage
    totalPost = PostData.length, //서버에 저장된 글 수 rowsCount
    totalPage = Math.ceil(totalPost / post_per_page), //Math.ceil 소숫점 올림
    pageList = document.querySelector('#pagelist'); //페이지네이션
    
    function post_clone() {

        
        // 데이터 받아서 게시글 생성
        for (let i = 0; i < totalPost; i++) {
            
            qna_main_content[0].innerHTML += `
            <li class="post_num">
            <p class="post_title">
            ${PostData[i].post_title}
            </p>
            <div class="post_type">${PostData[i].post_type}</div>
            <div class="post_time">${PostData[i].post_date}</div>
            <div class="post_writer">${PostData[i].username}</div>
            </li>
            `
        }
        
        // 페이지리스트 링크    
        let pageListBtn = pageList.querySelectorAll('a'),
        pageLeftBtn = document.querySelector('.qna_main_pagelist .fa-chevron-left'),
        pageRightBtn = document.querySelector('.qna_main_pagelist .fa-chevron-right'),
        pageActiveIdx = 0,  //현재 보고있는 페이지그룹 번호
        currentPageNum = 0, // 현재 보고있는 페이지 번호
        pageListSize = 5; // 하나의 페이지그룹 안에 페이지 수
        
        // 페이지네이션
        for (let j = 1; j <= totalPage; j++) {
            pageList.innerHTML += `<li><a href="">${j}</a></li>`;
        }

        //페이지네이션 번호 감추기
        for(pnb of pageListBtn){            //안보여야되는데 왜보임?
            pnb.style.display = 'none';
        }

        // 현재 페이지 나타내기
        pageListBtn.forEach((item, idx) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();                     // a태그 기본기능 막기

                displayPage(idx);  //페이지 출력 함수
            });
        });
        
        //post_per_nowpage
        function displayPage(idx) {             // 페이지당 글 20개로 짤려야되는데 왜 안짤림?
            let start = idx * post_per_page,  //페이지첫글번호
            end = start + post_per_page;      //페이지마지막글 번호
            
            for(pl of PostData){ //err--
                pl.style.display = 'none'; // 페이지번호 눌렀을 때 전부 사라지고
            }
            
            let nowPage = PostData.slice(start, end);
            for(np of nowPage){             //현재 페이지에 해당하는 번호의 글만 나타나게
                np.style.display = ''; //err
            }
 
            console.log(PostData);

            for (let pageNum of pageListBtn) {          //현재 페이지 위치 표시
                pageNum.classList.remove('active');
            }
            pageListBtn[idx].classList.add('active');
        }
        //시작시 첫페이지 설정
        displayPage(0);

        //페이지네이션 그룹 표시
        function displayPageList(num){
            for(pnb of pageListBtn){
                pnb.style.display = 'none';
            }
            let totalPageCount = Math.ceil(totalPage/pageListSize), //페이지 그룹 수
            pageArr = [...pageListBtn],
            start = num * pageListSize,
            end = start + pageListSize,
            pageListArr = pageArr.slice(start, end);

            // 상태에 따른 버튼 숨기기, 표시하기
            for(let item of pageListArr){
                item.style.display = 'block';
            }

            if(pageActiveIdx == 0){
                pageLeftBtn.style.display = 'none';
            } else {
                pageLeftBtn.style.display = 'block';
            }

            if(pageActiveIdx == totalPageCount - 1){
                pageRightBtn.style.display = 'none';
            } else {
                pageRightBtn.style.display = 'block';
            }

        }
        displayPageList(0);

        //이전 버튼 클릭
        pageLeftBtn.addEventListener('click', () =>{
            let beforePageNum = pageActiveIdx * pageListSize - pageListSize;
            displayPage(beforePageNum);
            --pageActiveIdx
            displayPage(pageActiveIdx);
        });

        //다음 버튼 클릭
        pageRightBtn.addEventListener('click', () =>{
            let nextPageNum = pageActiveIdx * pageListSize + pageListSize;
            displayPage(nextPageNum);
            ++pageActiveIdx
            displayPage(pageActiveIdx);
        });
    }
    post_clone();
}
getPostData();
