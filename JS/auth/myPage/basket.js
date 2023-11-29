

//=== 객체 ===========================================================
var MdContainer_list = [
    {
    img : 'https://lastteamproject.web.app/Element/img/auth/myPage/edbacbcd8589cbdd53ebdefb11af12f3.jpg' ,
    name : '브라이스 이너(CT-02/카키)' ,
    package : '배송: [무료]/기본배송',
    number : 1,
    price : 130000,
    sumPrice : 130000,
    option : '[옵션:35cm(=10,000)]'
}
, {
    img : 'https://lastteamproject.web.app/Element/img/auth/myPage/f22f95e5a67a45ef76538c7d51d03661.webp' ,
    name : '캐니언 라이트X / 패브릭',
    package : '배송: [무료]/기본배송',
    number : 1,
    price : 340000,
    sumPrice : 340000,
    option : '[옵션:블랙]'
}, {
    img : 'https://lastteamproject.web.app/Element/img/auth/myPage/ab87ec3ac74590998fe38992d08a7923.png"',
    name : '나윈 윈 체어 / 무도장* 블랙',
    package : '배송: [무료]/기본배송',
    number : 1 ,
    price : 213000,
    sumPrice : 213000,
    option : '[옵션:블랙]'
}, {
    img : 'https://lastteamproject.web.app/Element/img/auth/myPage/edbacbcd8589cbdd53ebdefb11af12f3.jpg' ,
    name : '브라이스 이너(CT-02/카키)' ,
    package : '배송: [무료]/기본배송',
    number : 1,
    price : 130000,
    sumPrice : 130000,
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
        <input class="ckeckB" type="checkbox" name="checkedB" value="box">
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
            <input class="wishBox deleteBox" type="button" value="삭제">
            <input class="wishBox wishListBox" type="button" value="WISH LIST">
        </div>
    </section>`
}
    console.log('ckeckB');

    
// ====견적서 변수선언 ======================================================

let quotaS= document.querySelector('#quota');
console.log(quotaS)

// ==== 견적서 본문 ====================================================

quotaS.addEventListener('click',
()=> {
    console.log(`견적서 출력`);
    window.open('https://lastteamproject.web.app/HTML/auth/login/LoginModule.html','팝업견적서','width=600px, height=700px');
});

// =====wish List======================================================
let wishcontainer = document.getElementsByClassName('wishcontainer');
let wishListBox = document.getElementsByClassName('wishListBox');
let deleteBox = document.getElementsByClassName('deleteBox');

// wishcontainer에 담긴 2개의 wishBox를 눌렀을 때, 
// wishBox의 인덱스가 0인지 1인지 확인 후, 1 일때는 confirm이 나오도록 해야함. 
// 클릭 이벤트가 발생 했을 때, if로 그 친구를 학인 해야함. 

for(let i=0; i< wishcontainer.length;i++){
    wishListBox[i].addEventListener('click',
    ()=> {
        console.log(`이렇게하면 될까?`);
        alert(`관심상품 목록에 추가되었습니다. `)
    });

    deleteBox[i].addEventListener('click',
    ()=> {
        if(confirm(`선택하신 상품을 삭제하시겠습니까?`)){
            yesDelete(); 
        }else { 
            NoDelete();
        }
    });
}

function yesDelete(){
    alert('작동하지 않습니다.');
}
function NoDelete(){
    alert('삭제 취소하셨습니다. ');
    console.log('딜리트 하지 않음');
}
    
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
    // console.log(optionBox);
    
    opChange.addEventListener('click',openclose);
    
    md_btn_cancel[i].addEventListener('click',openclose);
    md_btn_change[i].addEventListener('click',openclose);
    
}

// ====== 숫자 + - 하기 ===================================================

let numbering=document.getElementsByClassName('numF');
let icon_plus_minus=document.getElementsByClassName('material-symbols-outlined');
let pricetag = document.getElementsByClassName('pricetag');
let tot_price = document.querySelector('.lsContent>div>p');
let pricetag_Amount = 0;
// let priceFlag = 1;

//===========================


for(let i=0, icon_idx = 0; i < numbering.length; i++){
    for (let j = 0; j < 2; j++) {
        icon_plus_minus[icon_idx++].addEventListener('click',()=>{
            const direct = j ? -1 : 1;
            numbering[i].value = +numbering[i].value + direct;

            // 수량이 변경될 때 sumPrice 갱신
            MdContainer_list[i].sumPrice += MdContainer_list[i].price * direct;
            console.log(MdContainer_list[i].sumPrice ) ;
            
            pricetag[i].innerText = `${MdContainer_list[i].sumPrice}`;

            // 체크박스가 체크된 경우 총 가격 갱신
            if (checkB[i].checked) {
                updateTotalPrice();
            }
        })
    }
    
}


// ========= 체크 박스에서 체크확인 여부 ================================================================================================

let checkB=document.getElementsByClassName('ckeckB');
console.log(checkB);

// =============================================
// checked에 이벤트를 걸어야함. => addevent click 칸에 
// checkbox에 checked 되어 있는지 안되어 있는지 확인 => if () {}else{}
// 체크가 되어 있으면 sumPrice 더하고
// 체크가 되어 있지 않으면 priceSum을 더하지 않음
// 그리고 그걸 pricetag_Amount 에 넣어 innerText 하기.

for (let i = 0; i < checkB.length; i++) {

    checkB[i].addEventListener('change',()=>{
        
         if (checkB[i].checked) {
            pricetag_Amount += MdContainer_list[i].sumPrice;
        } else {
            pricetag_Amount -= MdContainer_list[i].sumPrice;
        }

        tot_price.innerText = `${pricetag_Amount}` ;
    })
                
}
//============체크박스 상태 변화에 따라 총 가격 업데이트==================================================================================

function updateTotalPrice() {

    pricetag_Amount = 0;

    for (let i = 0; i < checkB.length; i++) {
        if (checkB[i].checked) {
            pricetag_Amount += MdContainer_list[i].sumPrice;
        }
    }
    tot_price.innerText = `${pricetag_Amount}`;
}
