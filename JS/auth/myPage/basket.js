
// quota 팝업창 생성 (HTML CSS 필요)
// 상품 가격 계산하기 


//=== 객체 ===========================================================
var MdContainer_list = [
    {
    img : '../../../CSS/auth/myPage/limsw/edbacbcd8589cbdd53ebdefb11af12f3.jpg' ,
    name : '브라이스 이너(CT-02/카키)' ,
    package : '배송: [무료]/기본배송',
    number : 1,
    price : 130000,
    option : '[옵션:35cm(=10,000)]'
}
, {
    img : '../../../CSS/auth/myPage/limsw/f22f95e5a67a45ef76538c7d51d03661.webp' ,
    name : '캐니언 라이트X / 패브릭',
    package : '배송: [무료]/기본배송',
    number : 1,
    price : 340000,
    option : '[옵션:블랙]'
}, {
    img : '../../../CSS/auth/myPage/limsw/ab87ec3ac74590998fe38992d08a7923.png"',
    name : '나윈 윈 체어 / 무도장* 블랙',
    package : '배송: [무료]/기본배송',
    number : 1 ,
    price : 213000,
    option : '[옵션:블랙]'
}, {
    img : '../../../CSS/auth/myPage/limsw/edbacbcd8589cbdd53ebdefb11af12f3.jpg' ,
    name : '브라이스 이너(CT-02/카키)' ,
    package : '배송: [무료]/기본배송',
    number : 1,
    price : 130000,
    option : '[옵션:35cm(=10,000)]'
}
];


// ====================================================================
// ====== 상자 칸 늘어나기 =============================================

let makingFrame = document.getElementsByClassName('basketBox');

for( i = 0; i < MdContainer_list.length ; i++) {
    makingFrame[0].innerHTML +=
    `<section class="MdContainer">
        <label class="mdList">
        <input class="ckeckB" type="checkbox" name="checkedB" value="box" checked>
        </label>
    
        <div class="mdList"><a href=""><img src="${MdContainer_list[i].img}" alt="상품 이미지"></a></div>
    
        <div class="mdList">
            <span>${MdContainer_list[i].name}</span>
            <span>${MdContainer_list[i].package}</span>
        </div>
    
        <div class="mdList amount">
            <a><span class="material-symbols-outlined icon_plus">add</span></a>
            <input class="numF" type="text" value="1">
            <a><span class="material-symbols-outlined icon_minus">remove</span></a>
        </div> 
    
        <div class="mdList pricetag">${MdContainer_list[i].price}</div>
    
        <div class="mdList optionWarp">
            <div class="optionContainer"> 
                <p>${MdContainer_list[i].option}</p>                   
                <input class="opChange" type="button" value="옵션 변경"> 
            </div>
    
            <div class="optionBox active">
                <p class="mdBox1">패턴 및 색상</p>
                <select class="mdBox2" name ="mdColor">색상
                    <option value="option">[필수]옵션을 선택해주세요</option>
                    <option value="----">----</option>
                    <option value="black">블랙</option>
                    <option value="red">빨강</option>
                    <option value="white">화이트</option>
                    <option value="green">카키</option>
                </select>
    
                <div class="mdBox3 md_btn_change"><input class="btn1" type="button" value="변경"></div>
                <div class="mdBox4 md_btn_cancel"><input class="btn1" type="button" value="취소"></div>
            </div>
    
        </div>
    
        <div class="mdList wishcontainer">
            <input class="wishBox" type="button" value="삭제">
            <input class="wishBox" type="button" value="WISH LIST">
        </div>
    </section>`
}
    

    
// ====견적서 변수선언 ======================================================

let quotaS= document.querySelector('#quota');
console.log(quotaS)

// ==== 견적서 본문 ====================================================

quotaS.addEventListener('click',
()=> {
    console.log(`견적서 출력`);
    window.open('../../../HTML/auth/login/Login.html','팝업견적서','width=600px, height=700px');
});

    
// ===== 옵션 박스 변수 =================================================

let optionWarp=document.querySelectorAll('.optionWarp');
let md_btn_change=document.querySelectorAll('.md_btn_change');
let md_btn_cancel=document.querySelectorAll('.md_btn_cancel');
// let optionBox = optionWarp[0].querySelector('.optionBox');


// ====== 옵션박스 본문 ================================================


for (let i=0; i<optionWarp.length;i++){
    
    let opChange = optionWarp[i].querySelector('.opChange');
    let optionBox = optionWarp[i].querySelector('.optionBox');
    
    function openclose(){
        optionBox.classList.toggle('active');
    }
    console.log(optionBox);

    opChange.addEventListener('click',openclose);

    md_btn_cancel[i].addEventListener('click',openclose);
    md_btn_change[i].addEventListener('click',openclose);

}

// ====== 숫자 + - 하기 ===================================================
// numF 의 value에 접근하기. 
let numbering=document.getElementsByClassName('numF');
let icon_plus=document.getElementsByClassName('icon_plus');
let icon_minus=document.getElementsByClassName('icon_minus');

console.log(icon_plus)

for(let i=0; i < numbering.length; i++){
    
    icon_plus[i].addEventListener('click',()=>{
        let numbering_Plus = +(numbering[i].value) ;
        
        numbering[i].value = ++(numbering_Plus);
    
        MdContainer_list[i].number = numbering[i].value;
        console.log(MdContainer_list[i].number)
        
        // 가격 계산하기
        let MdContainer_price = MdContainer_list[i].number * MdContainer_list[i].price;

        // 문석 (가격 출력하기 )

        {
            let pricetag = event.target.closest('.MdContainer').getElementsByClassName('pricetag');
            console.log(pricetag)

            pricetag[0].innerText = `${MdContainer_price}`
        }

    })
}



for (let i=0;i<numbering.length;i++){
    icon_minus[i].addEventListener('click',()=>{
        let numbering_minus = +(numbering[i].value);

        numbering[i].value = (numbering_minus-1);

        
        // 마이너스 가격 계산 및 출력하기 
        {   
            MdContainer_list[i].number = numbering[i].value;
            // console.log(MdContainer_list[i].number )
            let MdContainer_price = MdContainer_list[i].number * MdContainer_list[i].price;
            // console.log(MdContainer_price);

            let pricetag = document.querySelectorAll('.pricetag');
            // console.log(pricetag);

            pricetag[i].innerText = `${MdContainer_price}`
        }
    })
}


//======총 선택상품 가격 계산하기========================================



