//======================== 기간설정 ⬇️===========================
//=================== 오늘/1개월/3개월/6개월 ⬇️=====================

let prevIndex = 0;
let btnChanges = document.querySelector('.btn_selectList');
let btnChangesLi = btnChanges.querySelectorAll('li');
// btbChangese 안에 있는 li를 배열로 저장. 

// 상품이미지, 상품명, 판매가, 수량
let pro_box = document.querySelector('.pro_box');
// 주문일자, 주문번호, 상세보기
let order_listTop = document.querySelector(".order_listTop");

let normal = document.querySelectorAll(".btn_normal").forEach((v, i) => {
    v.addEventListener("click", (b) => {
        let btnChangesLiA = btnChangesLi[prevIndex].querySelector('a');
        btnChangesLiA.style.backgroundColor = "white";
        btnChangesLiA.style.color = "black";

        prevIndex = i;


        b.target.style.backgroundColor = "black";
        b.target.style.color = "white";


        // btnChanges.li[2]
        if (pro_box.classList.contains('active')) {
            pro_box.classList.remove('active');

        } else {
            pro_box.classList.add('active');
        }

        if (order_listTop.classList.contains('active')) {
            order_listTop.classList.remove('active');
        } else {
            order_listTop.classList.add('active');
        }


    });
});

//======================== 기간설정 ⬇️===========================

let dataselect = document.querySelector(".btn_dataSelect");

dataselect.addEventListener("click", () => {
    let date = document.querySelector(".date_list");

    if (date.classList.contains('visibility')) {
        date.classList.remove('visibility');
    } else {
        date.classList.add('visibility');
    }
});

//======================== 주문취소 ⬇️===========================

let orderCancel = document.querySelector(".orderCancel");
let topBox = document.querySelector(".top_box");
let topBoxLiA = topBox.querySelectorAll('a');
console.log(topBoxLiA);

// orderDetailsInquiry(주문내역 조회)
// cancelDetails(취소/교환/반품 내역)
let orderListState =
{
    orderDetailsInquiry: '주문내역 조회(1건)',
    cancelDetails: '취소/교환/반품 내역(0건)'
}

let idx = 0;
for (const property in orderListState) {
    console.log(`${property}: ${orderListState[property]}`)
    topBoxLiA[idx].innerText = orderListState[property];
    idx += 1;
}

//==================== 주문취소 건 숫자 표시 ⬇️===================

orderCancel.addEventListener("click", () => {

    if (confirm('주문을 취소하시겠습니까?')) {
        pro_box.remove();
        order_listTop.remove();

        let changeOrder =
        {
            orderDetailsInquiry: '주문내역 조회(0건)',
            cancelDetails: '취소/교환/반품 내역(1건)'
        }

        let idxC = 0;
        for (const property in changeOrder) {
            console.log(`${property}: ${changeOrder[property]}`)
            topBoxLiA[idxC].innerText = changeOrder[property];
            idxC += 1;
        }
        alert('주문이 취소되었습니다.');
    }
})

