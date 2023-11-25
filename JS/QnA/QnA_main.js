
// 1.p게시글제목 2.문의종류 3.작성시간 4.작성자 5.배열크기 정보받기
// >html복사해서 배열크기만큼 innerHtml로 출력
// innerHtml 1번 넣고 출력

let PostData,
    post_title,
    post_type,
    post_date,
    username;

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
        post_per_page = 20,  // 한 페이지 당 글 수  rowPerPage
        totalPost = PostData.length, //서버에 저장된 글 수 rowsCount
        pagelist_size = 10,  //보여줄 페이지 수
        totalpage = Math.ceil(totalPost / post_per_page), //Math.ceil 소숫점 올림
        pagelist = document.querySelector('#pagelist'); //페이지네이션

    function post_clone() {

        // 페이지네이션
        for (let j = 1; j <= totalpage; j++) {
            pagelist.innerHTML += `<li><a href="">${j}</a></li>`;
        }

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
            // 페이지리스트 링크    
            let pagelistBtn = pagelist.querySelectorAll('a');

            // 현재 페이지 나타내기
            pagelistBtn.forEach((item, idx) => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();                     // a태그 기본기능 막기

                    displaypage(idx);  //페이지 출력 함수
                });
            });

            //post_per_nowpage
            function displaypage(idx) {
                let start = idx * post_per_page,  //페이지첫글번호
                    end = start + post_per_page,      //페이지마지막글 번호
                    pageArray = [...PostData];    //// 여기서부터 오류?

                console.log(pageArray);

                // for (pa of pageArray) {
                //     pa.Style.display = 'none';
                // }

                // let nowpage = pageArray.slice(start, end);

                // for (np of nowpage) {
                //     np.Style.display = '';
                // }

                // for (let pagenum of pagelistBtn) {          //현재 페이지 위치 표시
                //     pagenum.classList.remove('active');
                // }
                // pagelistBtn[idx].classList.add('active');
            }

            //시작시 첫페이지 설정
            displaypage(0);

        }

    }
    post_clone();
}

getPostData();
