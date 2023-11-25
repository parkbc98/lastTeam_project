'user strict'

// 상품카테고리 검색해서 나오게하기
//  일정 개수가 넘어가면 다음 페이지 생성  옆으로 넘어가는 버튼 누르면 5페이지씩 앞, 뒤로 이동
//  상품 검색시 검색 결과 수 띄워주기
//  검색 결과 수 나눠서 표시하기
//  상품 선택시 서버? 글쓰기에 정보주면서 창닫기

let BuyHistory,
    prod_img,
    prod_name,
    prod_price;

async function getBuyHistory() {
    try {
        const response = await axios.get('http://localhost:3000/buy_history');

        BuyHistory = response.data;

    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }

    let totalprod = BuyHistory.length,
        post_per_page = 20,  //페이지 당 글 수
        pagelist_size = 10,  //보여줄 페이지 수
        prod_buyHistory_content = document.getElementsByClassName('prod_buyhistory_content');

    function buyhistory_clone() {

        for (let i = 0; i < totalprod; i++) {
            prod_buyHistory_content[0].innerHTML += `
            <li id="prod_num" class="prod_buyhistory_content">
                <p class="prod_img">
                ${BuyHistory[i].post_img}
                </p>
                <div class="prod_name">${BuyHistory[i].prod_name}</div>
                <div class="prod_price">${BuyHistory[i].prod_price}</div>
            </li>
            `
        }

    }
    buyhistory_clone();
}
getBuyHistory();

let buyhistory_infopost = document.getElementsByClassName('prod_buyhistory_content');

const date = new Date();
let buyhistory_prodimg = document.getElementsByClassName('prod_img'),
    buyhistory_prodname = document.getElementsByClassName('prod_name'),
    buyhistory_prodprice = document.getElementsByClassName('prod_price');

buyhistory_infopost[0].addEventListener('click', (e) => {

    let buyhistory_info = {
        'prod_img': buyhistory_prodimg[0].valye,
        'prod_name': buyhistory_prodname[0].value,
        'prod_price': buyhistory_prodprice[0].value,
    }
console.log(buyhistory_info);
    axios.post('http://localhost:3000/buyhistory_info', buyhistory_info)

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

});

