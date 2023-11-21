
// quota 팝업창 생성 (HTML CSS 필요)
// 상품을 담은 경우 늘어나는 칸 자체 
// 상품 가격 계산하기 

let MdContainer_list = [
    'img : ../../../CSS/auth/myPage/limsw/edbacbcd8589cbdd53ebdefb11af12f3.jpg',
    'name : 브라이스 이너(CT-02/카키)',
    'package : 배송: [무료]/기본배송',
    'number : 1',
    'price : 130,000',
    'option : [옵션:35cm(=10,000)]'
];

let MdContainer_list2 = [
    'img : ../../../CSS/auth/myPage/limsw/f22f95e5a67a45ef76538c7d51d03661.webp',
    'name : 캐니언 라이트X / 패브릭',
    'package : 배송: [무료]/기본배송',
    'number : 1',
    'price : 340,000',
    'option : [옵션:블랙]'
];
let MdContainer_list3 = [
    'img : ../../../CSS/auth/myPage/limsw/f22f95e5a67a45ef76538c7d51d03661.webp',
    'name : 나윈 윈 체어 / 무도장* 블랙',
    'package : 배송: [무료]/기본배송',
    'number : 1',
    'price : 213,000',
    'option : [옵션:블랙]'
];


// ==== 변수선언 =========================================================

// quota [견적서]
let quotaS= document.getElementsByTagName('a');
let optionWarp=document.querySelectorAll('.optionWarp');
let newBox = `<div class= basketBox>${MdContainer_list}<div/>`

console.log(newBox)
// ==== 견적서 본문 ====================================================

// quota 견적서 출력 링크
quotaS[6].addEventListener('click',
()=> {window.open('../../../HTML/auth/login/Login.html','팝업견적서','width=600px, height=700px');
});

// ====================================================================
// ====== 옵션박스 본문 ================================================

for(let i = 0; i < optionWarp.length; i++){
    let opChange = optionWarp[i].querySelector('.opChange');
    let optionBox = optionWarp[i].querySelector('.optionBox');

    console.log(opChange);
    console.log(optionBox);
    
    opChange.addEventListener('click', ()=>{
        optionBox.classList.toggle('active');
    });
}

// ====================================================================
// ====== 상자 칸 늘어나기 =============================================


console.log(MdContainer_list);
console.log(MdContainer_list2);
console.log(MdContainer_list3);
