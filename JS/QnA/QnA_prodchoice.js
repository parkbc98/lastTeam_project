'user strict'
//axios 17 60

let BuyHistory,
    prod_img,
    prod_name,
    prod_price;
//서버에서 구매내역 받아오기
async function getBuyHistory() {
    try {
        const response = await axios.get('https://lastteamproject-default-rtdb.asia-southeast1.firebasedatabase.app/buy_history.json');

        BuyHistory = response.data;

    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }

    let totalprod = BuyHistory.length,
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

        let buyHistory_infoPost = document.getElementsByClassName('prod_buyhistory_content');
        
        const date = new Date();
        let buyhistory_prodimg = document.getElementsByClassName('prod_img'),
            buyhistory_prodname = document.getElementsByClassName('prod_name'),
            buyhistory_prodprice = document.getElementsByClassName('prod_price');
 
//해당 정보를 누르면 게시글 상품정보선택에 데이터 넘겨주기
        buyHistory_infoPost[0].addEventListener('click', (e) => {
        
            let buyhistory_info = {
                'prod_img': buyhistory_prodimg[0].valye,
                'prod_name': buyhistory_prodname[0].value,
                'prod_price': buyhistory_prodprice[0].value,
            }
        
        window.close();
        
            axios.post('https://lastteamproject-default-rtdb.asia-southeast1.firebasedatabase.app/buyhistory_info.json', buyhistory_info)
        
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

    }
    buyhistory_clone();

}
getBuyHistory();


