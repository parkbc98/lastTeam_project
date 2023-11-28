'use strict';
//axios 13

let PostData,
    post_title,
    post_type,
    post_date,
    userName,
    comment;

async function getPostData() {
    try {
        const response = await axios.get('http://localhost:3000/post_info');

        PostData = response.data;
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }

    //게시글
    let QnA_bc_topnav = document.getElementsByClassName('QnA_bc_topnav'),
        comment = document.getElementsByClassName('comment');

    function post_clone() {


        // 데이터 받아서 게시글 작성
        QnA_bc_topnav[0].innerHTML = `
                <h3>
                    ${PostData[i].post_title}
                </h3>
                    <div class="post_type">${PostData[i].post_type}</div>
                    <div class="post_time">${PostData[i].post_date}</div>
                    <div class="post_writer">${PostData[i].post_username}</div>
                </div>
            `
        
        comment[i].innerHTML = `
        ${PostData[i].content}
        `
    }
    post_clone();
}

getPostData();