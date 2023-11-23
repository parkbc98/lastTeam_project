'use strict'

// ====== 더미데이터 ===========================================================

const mainProductArrya = [
    {
        id: 1,
        imgUrl: 'https://cdn.pixabay.com/photo/2023/04/24/03/16/camping-7947056_1280.jpg',
        productName: '나인원 체어',
        productPrice: 100000,
        isNew: ture
    },
    {
        id: 2,
        imgUrl: 'https://cdn.pixabay.com/photo/2023/04/24/03/16/camping-7947056_1280.jpg',
        productName: '나인2 체어',
        productPrice: 110000,
        isNew: ture
    },
    {
        id: 3,
        imgUrl: 'https://cdn.pixabay.com/photo/2023/04/24/03/16/camping-7947056_1280.jpg',
        productName: '나인3 체어',
        productPrice: 10000,
        isNew: ture
    },
    {
        id: 4,
        imgUrl: 'https://cdn.pixabay.com/photo/2023/04/24/03/16/camping-7947056_1280.jpg',
        productName: '나인4 체어',
        productPrice: 105000,
        isNew: ture
    },
    {
        id: 5,
        imgUrl: 'https://cdn.pixabay.com/photo/2023/04/24/03/16/camping-7947056_1280.jpg',
        productName: '나인5 체어',
        productPrice: 120000,
        isNew: ture
    },
    {
        id: 6,
        imgUrl: 'https://cdn.pixabay.com/photo/2023/04/24/03/16/camping-7947056_1280.jpg',
        productName: '나인6 체어',
        productPrice: 60000,
        isNew: ture
    },
    {
        id: 7,
        imgUrl: 'https://cdn.pixabay.com/photo/2023/04/24/03/16/camping-7947056_1280.jpg',
        productName: '나인7 체어',
        productPrice: 870000,
        isNew: ture
    },
    {
        id: 8,
        imgUrl: 'https://cdn.pixabay.com/photo/2023/04/24/03/16/camping-7947056_1280.jpg',
        productName: '나인8 체어',
        productPrice: 10000000,
        isNew: ture
    },
]


// toLocaleString()
// isNew true => https://comma9.co.kr/web/upload/custom_116708980383884.gif

const {imgUrl, productName, productPrice, isNew} = mainProductArrya[i];

// ====== 참조변수 =============================================================
let mainProductListContainer = document.querySelector('.main-product-list-container');

// ====== 요소생성 =============================================================

// 상품 컨테이너 div
let mainProductContainer = document.createElement('div');
mainProductContainer.classList.add('main-product-container', `product_${i}`);

// div> 상품 링크 a태그
let mainProductA = document.createElement('a');
mainProductA.href = "#";

// div>a> 상품이미지 div
let ImgDiv = document.createElement('div');
mainProductImgDiv = classList.add('main-product-img-container');

// div>a>div> 상품이미지 img
let productImg = document.createElement('img');
productImg.src = `${i}`;                            //여기 수정필요

// div>a> 상품설명 div
let productCommentContainer = document.createElement('div');
productCommentContainer.classList.add('main-product-comment-container');

// div>a>div> ul
let productCommentUl = document.createElement('ul');

// div>a>div>ul> li>p
for(let j = 0; j < 3; j++){
    let li = document.createElement('li');
    let p = document.createElement('p');
    //  p 내용
    p.innerHTML = `${5+1}`;                      // 여기 수정필요
    // li <- p
    li.appendChild(p)
    // ul <- li
    productCommentUl.appendChild(li)
}

// ===== 요소 append =========================================================

// div(상품설명) <- ul
productCommentContainer.appendChild(productCommentUl);

// div(상품이미지) <- img
ImgDiv.appendChild(productImg);

// a(상품링크) <- div(상품이미지), div(상품설명
mainProductA.append(ImgDiv, productCommentContainer);

// 상품 컨테이너 div
mainProductContainer.appendChild(mainProductA);

