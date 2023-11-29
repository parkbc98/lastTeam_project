'user strict'

let qna_type_select = document.querySelectorAll('.qna_type_select'),
    nationBtn = document.getElementsByClassName('fa-solid'),
    pastSpan = qna_type_select[0].value;

let limitNationBtn = 0,
    totNationBtn,
    PostData,
    PostDataInfo,
    post_typeArray,
    pageNation,
    pastNation,
    currentPage,
    currentCategory;

async function getPostData() {
    try {
        const response = await axios.get('https://lastteamproject-default-rtdb.asia-southeast1.firebasedatabase.app/post_info.json');

        PostData = response.data;
        PostDataInfo = response.data;
        post_typeArray = PostData.reduce((acc, curr) => {
            const { post_type } = curr;
            if (acc[post_type]) acc[post_type].push(curr);
            else acc[post_type] = [curr];
            return acc;
        }, {});

        console.log(post_typeArray);
        console.log(post_typeArray.상품문의);

    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
    postClone(PostDataInfo);
    nationClone(PostDataInfo);
}

// 게시글 생성 및 정렬
function postClone(Array, currentPage = 1) {
    let qna_main_content = document.getElementsByClassName('qna_main_content');
    qna_main_content[0].innerHTML = '',
        currentCategory = Array;

    for (let i = Array.length - 1 - (10 * (currentPage - 1)); i > Array.length - 1 - (10 * currentPage); i--) {
        if (Array[i] !== undefined) {
            qna_main_content[0].innerHTML += `
            <li class="post_num">
                <a href="https://lastteamproject.web.app/HTML/QnA/QnA_board_com.html">
                <p class="post_title">
                ${Array[i].post_title}
                </p>
                <div class="post_type">${Array[i].post_type}</div>
                <div class="post_time">${Array[i].post_date}</div>
                <div class="post_writer">${Array[i].post_username}</div>
                </a>
            </li>
    
            `
        }
    }
}
//페이지네이션 생성 및 정렬
function nationClone(Array, limitNationBtn = 0) {
    let pageBtnList = document.getElementsByClassName('pagelist'),
        totNationBtn = Math.ceil(Array.length / 10);

    pageBtnList[0].innerHTML = '';
    for (let i = 1 + (limitNationBtn * 10); i <= 10 + (limitNationBtn * 10); i++) {
        if (i <= totNationBtn)
            pageBtnList[0].innerHTML += `<li><span class="pageNation">${i}</span></li>`;
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
    function btnSelect(currentCategory) {
        switch (currentCategory) {
            case PostDataInfo:
                nationClone(PostDataInfo, limitNationBtn);
                postClone(PostDataInfo, currentPage);
                break;
            case post_typeArray.상품문의:
                nationClone(post_typeArray.상품문의, limitNationBtn);
                postClone(post_typeArray.상품문의, currentPage);
                break;
            case post_typeArray.배송문의:
                nationClone(post_typeArray.배송문의, limitNationBtn);
                postClone(post_typeArray.배송문의, currentPage);
                break;
            case post_typeArray취소문의:
                nationClone(post_typeArray취소문의, limitNationBtn);
                postClone(post_typeArray취소의, currentPage);
                break;
            case post_typeArray.교환문의:
                nationClone(post_typeArray.교환문의, limitNationBtn);
                postClone(post_typeArray.교환문의, currentPage);
                break;
            case post_typeArray.환불문의:
                nationClone(post_typeArray.환불문의, limitNationBtn);
                postClone(post_typeArray.환불문의, currentPage);
                break;
            case post_typeArray.AS문의:
                nationClone(post_typeAr배송y.AS문의, limitNationBtn);
                postClone(post_typeArray.AS문의, currentPage);
                break;
        }
    }
    //버튼 작동
    for (let i = 0; i < nationBtn.length; i++) {
        console.log(totNationBtn);
        if (totNationBtn > 10) {
            nationBtn[i].addEventListener('click', (e) => {
                if (totNationBtn > 10) {
                    switch (e.target.id) {
                        case 'btn1':
                            limitNationBtn > 0 ? limitNationBtn-- : limitNationBtn = 0;
                            currentPage = (limitNationBtn * 10) + 1;
                            btnSelect(currentCategory)
                            break;
                        case 'btn2':
                            limitNationBtn < Math.ceil(totNationBtn / 10) - 1 ? limitNationBtn++ : limitNationBtn = Math.ceil(totNationBtn / 10) - 1;
                            currentPage = (limitNationBtn * 10) + 1;
                            btnSelect(currentCategory)
                            break;
                    }
                }
            })
        }
    }
}
// 카테고리 정렬
function categorySelect(test) {
    console.log(test);
    switch (test) {
        case '전체':
            postClone(PostDataInfo);
            break;
        case '상품문의':
            postClone(post_typeArray.상품문의);
            break;
        case '배송문의':
            postClone(post_typeArray.배송문의);
            break;
        case '취소문의':
            postClone(post_typeArray.취소문의);
            break;
        case '교환문의':
            postClone(post_typeArray.교환문의);
            break;
        case '환불문의':
            postClone(post_typeArray.환불문의);
            break;
        case 'AS문의':
            postClone(post_typeArray.AS문의);
            break;
    }
}

function nationSelect(e) {
    currentPage = e.target.textContent;

    switch (currentCategory) {
        case PostDataInfo:
            postClone(PostDataInfo, currentPage);
            break;
        case post_typeArray.prod:
            postClone(post_typeArray.상품문의, currentPage);
            break;
        case post_typeArray.deli:
            postClone(post_typeArray.배송문의, currentPage);
            break;
        case post_typeArray.can:
            postClone(post_typeArray.취소문의, currentPage);
            break;
        case post_typeArray.can:
            postClone(post_typeArray.교환문의, currentPage);
            break;
        case post_typeArray.can:
            postClone(post_typeArray.환불문의, currentPage);
            break;
        case post_typeArray.as:
            postClone(post_typeArray.AS문의, currentPage);
            break;
    }
    pastNation.style.color = '#999';
    e.target.style.color = '#000';
    pastNation = e.target;

    console.log(currentPage);
}

getPostData();


for (let i = 0; i < qna_type_select.length; i++) {
    qna_type_select[i].addEventListener('click', (e) => {
        categorySelect(e.target.value);
        nationClone(currentCategory);
    })
}