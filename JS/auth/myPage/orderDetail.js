// 주문정보
let orderInfo = document.querySelector(".order_info");

// 주문상품
let proInfo = document.querySelector(".pro_info");

// 주문취소 버튼
let canceBoxList = document.querySelector(".cancelBox_list");
let canceBoxListA = canceBoxList.querySelector('a');

// 결제정보
let paymentTitle = document.querySelector(".payment_title");

// 배송지 정보
let clientTitle = document.querySelector(".client_title");

//======================== 주문정보 ⬇️===========================

// orderNumber(주문번호)
// orderDays(주문일자)
// orderer(주문자)
// orderStatus(주문처리상태)
let orderDetailsBox = document.querySelector(".orderDetails_box");
let orderDetailsBoxDIV = orderDetailsBox.querySelectorAll('div');

clientOrderData =
{
    orderNumber: '20231123-0000000',
    orderDays: '2023-11-23 11:11:11',
    orderer: '전모모',
    orderStatus: '입금전'
}


console.log(orderDetailsBoxDIV);
let idx = 1;
for (const property in clientOrderData) {
    console.log(`${property}: ${clientOrderData[property]}`)
    orderDetailsBoxDIV[idx].innerText = clientOrderData[property];
    idx += 2;
}

// 주문정보: (주문번호,주문일자,주문자,주문처리상태)
orderInfo.addEventListener("click", () => {
    if (orderDetailsBox.style.display == "grid") {
        orderDetailsBox.style.display = 'none';
    } else {
        orderDetailsBox.style.display = 'grid';
    }
});

//======================== 주문상품 ⬇️===========================

// 주문상품: (상품사진,주문상품,상품명,배송정보,수량,금액,옵션)
proInfo.addEventListener("click", () => {
    let orderProductBox = document.querySelector(".orderProduct_box");

    if (orderProductBox.style.display == "flex") {
        orderProductBox.style.display = 'none';
    } else {
        orderProductBox.style.display = 'flex';
    }
});
//======================== 주문취소 ⬇️===========================

// window, location, history back > 뒤로가기 >  

// 주문취소
canceBoxListA.addEventListener("click", () => {
    let choiceCancel;

    choiceCancel = confirm('주문을 취소하시겠습니까?');
});

//======================== 결제정보 ⬇️===========================

// 결제정보: (결제수단,총결제금액,총주문금액,상품금액,배송비,지역별배송비)
let paymentInfo = document.querySelector(".payment_info");
let paymentInfoDIV = paymentInfo.querySelectorAll('div');
console.log(paymentInfo);

paymentInfomation =
{
    paymentMethod: '무통장입금',
    paymentAmount: '270,000원',
}

// paymentMethod(결제수단)
let paymentBoxList = document.querySelector(".paymentBox_list");
let paymentBoxListDIV = paymentBoxList.querySelectorAll('div');


paymentBoxListDIV[1].innerText = paymentInfomation.paymentMethod;

// paymentAmount(총 결제금액)
let paymentFootBox = document.querySelector(".payment_footBox");
let paymentFootBoxDIV = paymentFootBox.querySelectorAll('div');

paymentFootBoxDIV[1].innerText = paymentInfomation.paymentAmount;

paymentInfomation2 =
{
    totalOrderAmount: '270,000원',
    commodityAmount: '240,000원',
    delivery: '0원',
    deliveryRegion: '0원'
}

// totalOrderAmount(총 주문금액)
// commodityAmount(상품금액)
// delivery(배송비)
// deliveryRegion(지역별 배송비)
let shipppingInfo = document.querySelector(".shippping_info");
let shipppingInfoDIV = shipppingInfo.querySelectorAll('div') 

let idxP = 1;
for (const property in paymentInfomation2) {
    console.log(`${property}: ${paymentInfomation2[property]}`)
    shipppingInfoDIV[idxP].innerText = paymentInfomation2[property];
    idxP += 2;
}

paymentTitle.addEventListener("click", () => {

    if (paymentInfo.style.display == "grid") {
        paymentInfo.style.display = 'none';
    } else {
        paymentInfo.style.display = 'grid';
    }
});

//======================== 배송지 정보 ⬇️===========================

// 배송지 정보: (받으시는분,우편번호,주소,휴대전화,배송메세지,주문목록보기)

// orderer(받으시는분)
// zipCode(우편번호)
// address(주소)
// phoneNumber(휴대전화)
// message(배송메세지)
let clientList = document.querySelector(".client_list");
let clientListDIV = clientList.querySelectorAll("div");
console.log(clientListDIV);

clientInfomation =
{
    orderer: '전모모',
    zipCode: '100609',
    address: '서울 특별시 모모의 집',
    phoneNumber: '010-0000-0000',
    message: '배송 전에 미리 연락바랍니다.'
}

let idxC = 1;
for (const property in clientInfomation) {
    console.log(`${property}: ${clientInfomation[property]}`)
    clientListDIV[idxC].innerText = clientInfomation[property];
    idxC += 2;
}


clientTitle.addEventListener("click", () => {

    if (clientList.style.display == "grid") {
        clientList.style.display = 'none';
    } else {
        clientList.style.display = 'grid';
    }
});