'use strict'

import { slideImg } from "./slideImg.js";

// ====== 더미데이터 ===========================================================

const mainProductArrya = [
    {
        id: 1,
        imgUrl: 'https://comma9.co.kr/web/product/small/202212/336ac6536d83958253ea99892b874f8e.jpg',
        productName: '나인원 체어',
        productPrice: 100000,
        isNew: 'https://comma9.co.kr/web/upload/custom_116708980383884.gif'
    },
    {
        id: 2,
        imgUrl: 'https://comma9.co.kr/web/product/medium/202305/2174251c10344ab77f9fdfa844d5bb55.jpg',
        productName: '나인2 체어',
        productPrice: 110000,
        isNew: 'https://comma9.co.kr/web/upload/custom_116708980383884.gif'
    },
    {
        id: 3,
        imgUrl: 'https://comma9.co.kr/web/product/medium/202305/0850919e332a593ade0c50378fd6eb2f.jpg',
        productName: '나인3 체어',
        productPrice: 10000,
        isNew: 'https://comma9.co.kr/web/upload/custom_116708980383884.gif'
    },
    {
        id: 4,
        imgUrl: 'https://comma9.co.kr/web/product/medium/202309/ae62a9d986a84efc1c8e4d27bdd0e2bb.webp',
        productName: '나인4 체어',
        productPrice: 105000,
        isNew: ''
    },
    {
        id: 5,
        imgUrl: 'https://comma9.co.kr/web/product/small/202306/3d604782f181b1ae8b720e26bac4a06c.jpg',
        productName: '나인5 체어',
        productPrice: 120000,
        isNew: ''
    },
    {
        id: 6,
        imgUrl: 'https://comma9.co.kr/web/product/medium/202311/767718fef53e8118c98e8e0a3642c2df.webp',
        productName: '나인6 체어',
        productPrice: 60000,
        isNew: 'https://comma9.co.kr/web/upload/custom_116708980383884.gif'
    },
    {
        id: 7,
        imgUrl: 'https://comma9.co.kr/web/product/small/202306/e6f6d5ba941b6b3caf86c419bf285515.jpg',
        productName: '나인7 체어',
        productPrice: 870000,
        isNew: ''
    },
    {
        id: 8,
        imgUrl: 'https://comma9.co.kr/web/product/extra/big/202301/db6e3006fc330e290e81aea9ad40803c.jpg',
        productName: '나인8 체어',
        productPrice: 10000000,
        isNew: 'https://comma9.co.kr/web/upload/custom_116708980383884.gif'
    },
]

// isNew true => 'https://comma9.co.kr/web/upload/custom_116708980383884.gif'

// ====== 참조변수 =============================================================
let slideContainer = document.querySelector('.slide-container');

// 요소 create & append
for(let i = 0; i < mainProductArrya.length; i++) {
    let mainProductContainer = document.createElement('div');
    mainProductContainer.classList.add('main-product-container', `product_${i}`);
    mainProductContainer.innerHTML = 
        `<!-- 상품 링크 a태그 -->
        <a href="https://lastteamproject.web.app/HTML/rpoduct/productDetail.html">
            <!-- 상품이미지 -->
            <div class="main-product-img-container">
                <img src="" alt="">
            </div>
            <!-- 상품 설명 -->
            <div class="main-product-comment-container">
                <ul>
                    <!-- 상품 이름 -->
                    <li>
                        <p></p>
                    </li>
                    <!-- 상품 가격 -->
                    <li>
                        <p></p>
                    </li>
                    <!-- 상품 정보 (신상 등) -->
                    <li>
                        <img src="" alt="">
                    </li>
                </ul>
            </div>
        </a>`;
    slideContainer.appendChild(mainProductContainer);
}

// append한 요소 참조 배열 선언
let mainProductContainerList = slideContainer.querySelectorAll('.main-product-container');

// 각 요소에 innerText, src 채우기
for(let i  =  0; i < mainProductArrya.length; i++){
    // Json 값 배열 구조분해 할당
    const {imgUrl, productName, productPrice, isNew} = mainProductArrya[i];

    // 값을 넣을 요소 참조
    const productImg = mainProductContainerList[i].querySelectorAll('img'); // 이미지) 0:상품이미지, 1:new이미지
    const productText = mainProductContainerList[i].querySelectorAll('p');  // p태그) 0:상품이름, 1:상품가격

    // 각요소 값 할당
    productImg[0].src = `${imgUrl}`;                                // 상품이미지
    productImg[1].src = `${isNew}`;                                 // NEW 이미지
    productText[0].innerText = `${productName}`;                    // 상품명
    productText[1].innerText = `${productPrice.toLocaleString()}`;  // 상품가격
}


// ===== 슬라이드 이미지 ===========================================================
// slideContainer 재참조
let mainProductListContainer = document.querySelector(".main-product-list-container")
let slideItems = slideContainer.querySelectorAll(".main-product-container");
slideImg(mainProductListContainer, slideContainer, slideItems);