let select = document.querySelectorAll('select'); //옵션 박스
selectproduct = document.querySelectorAll('.selectproduct'); // 옵션 선택

let detailtitle = document.querySelectorAll('.detail>span'); // 상품 설명 타이틀
previousDT = document.querySelector('.detail>.bold'); // 타이틀 볼드 
detailPopup = document.querySelectorAll('.detailtext>div'); // 상품 설명 하단 텍스트
prevdivDT = document.querySelector('.detailtext>.pop'); // 텍스트 pop

let itemcount = document.querySelectorAll('.num'); // 개별 수량
price = document.querySelectorAll('.price'); // 금액 (출력용)
orignPrice = document.querySelectorAll('.orignPrice'); // 금액 (계산용)
itemnum = document.querySelectorAll('.total>span'); // 총 합계, 총 수량
del = document.querySelectorAll('.del'); // x 버튼

let buybasket = document.querySelectorAll('.button1>input'); // 바로 구매, 장바구니 담기

// 총 수량 function →

function totalCnt() {
    let allnum = 0;
    let selectproductIsShow = document.querySelectorAll('.isShow'); 
    let numArray = new Array(selectproductIsShow.length); 

    for (let i = 0; i < selectproductIsShow.length; i++) {
        let num = selectproductIsShow[i].querySelector('.num'); 
        numArray[i] = +num.textContent;
    }   

    for (let i = 0; i < numArray.length; i++) {
        allnum += numArray[i];
    }

    itemnum[3].textContent = `(${allnum}개)`;  
}

// 총 합계 function →

function totalPrice() {
    let itemprice = 0;
    let totalprice = 0;
    let selectproductIsShow = document.querySelectorAll('.isShow');  
    let itemnumLocal = document.querySelectorAll('.total>span'); 

    for (let i = 0; i < selectproductIsShow.length; i++) {
        let itemcountLocal = selectproductIsShow[i].querySelector('.num'); 
        let orignPriceLocal = selectproductIsShow[i].querySelector('.orignPrice'); 
        let priceLocal = selectproductIsShow[i].querySelector('.price'); 

        itemprice = (+itemcountLocal.textContent) * (+orignPriceLocal.textContent);
        priceLocal.textContent = `${itemprice.toLocaleString()}`;
        
        totalprice = totalprice + itemprice;
    }

    itemnumLocal[1].textContent = `${totalprice.toLocaleString()}`;
}

// 선택 항목 삭제시, 수량과 가격 초기화 function →

function resetcount(idx) {
    let itemcountLocal = document.querySelectorAll('.num'); 
    let orignPriceLocal = document.querySelectorAll('.orignPrice'); 
    let priceLocal = document.querySelectorAll('.price'); 

    itemcountLocal[idx].innerText = '1';
    priceLocal[idx].innerText = (+orignPriceLocal[idx].textContent).toLocaleString();
}

// 수량 추가, 감소 →

for (let i = 0; i < selectproduct.length; i++) {
    let span = selectproduct[i].querySelector('.span') 
    let minus = span.querySelector('.minus'); 
    let plus = span.querySelector('.plus'); 
    let num = span.querySelector('.num'); 

    minus.addEventListener('click', function () {
        let number = +num.textContent;
        if (number > 1) {
            number = (number - 1);
        }
        else {
            number = number;
        }
        num.textContent = number;
        totalCnt();
        totalPrice();
    })

    plus.addEventListener('click', function () {
        let number = +num.textContent;
        number = (number + 1);
        num.textContent = number;
        totalCnt();
        totalPrice();
    })
}

// 상품 선택시 옵션 추가 →

for (let i = 0; i < select.length; i++) {
    select[i].addEventListener('change', function () {
        if (select[i].selectedIndex >= 2) {
            selectproduct[i].classList.toggle('unvisible');
            selectproduct[i].classList.toggle('isShow');
            totalCnt();
            totalPrice();
        }
    })
}

// 선택 항목 삭제 →

for (let i = 0; i < del.length; i++) {
    del[i].addEventListener('click', function () {
        selectproduct[i].classList.toggle('unvisible');
        selectproduct[i].classList.toggle('isShow');
        totalCnt();
        resetcount(i);
        totalPrice();
    })
}

// 상품 설명 타이틀 클릭시, 해당하는 설명 텍스트 보이기 →

for (let i = 0; i < detailtitle.length; i++) {
    detailtitle[i].addEventListener('click', () => {

        previousDT.classList.remove('bold'); // 
        detailtitle[i].classList.add('bold');
        previousDT = detailtitle[i];

        prevdivDT.classList.remove('pop');
        detailPopup[i].classList.add('pop');
        prevdivDT = detailPopup[i];
    })
}

// 구매 버튼, 장바구니 버튼 → 

for (let i = 0; i < buybasket.length; i++) {
    buybasket[i].addEventListener('click', () => {
        if (buybasket[i] == buybasket[0])
            window.open("https://lastteamproject.web.app/HTML/auth/login/Login.html");
        else
            alert('장바구니에 상품이 담겼습니다.');
    })
}