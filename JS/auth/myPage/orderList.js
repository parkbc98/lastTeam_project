//======================== 기간설정 ⬇️===========================
//=================== 오늘/1개월/3개월/6개월 ⬇️=====================


let prevIndex = 0;
let btnChanges = document.querySelector('.btn_selectList');
let btnChangesLi = btnChanges.querySelectorAll('li');
// btbChangese 안에 있는 li를 배열로 저장. 

let pro_box = document.querySelector('.pro_box');

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

orderCancel.addEventListener("click", () => {

    if (confirm('주문을 취소하시겠습니까?')) {
        alert('주문이 취소되었습니다.');
        pro_box.style.display = 'none';
    } 
})

// ================== 주문취소 상세보기 연결 ⬇️======================

let btnViewDetails = document.querySelector(".btn_ViewDetails");
let btnViewDetailsA = btnViewDetails.querySelector('a');

btnViewDetailsA.addEventListener("click", (e) => {

    if (pro_box.style.display == 'none') {
        alert('주문하신 상품이 없습니다.');
        
        e.preventDefault();
    }
})

