// 버튼 클릭시 mdbox2가 내려와야함. 
// quota 팝업창 생성 (HTML CSS 필요)
// 상품을 담은 경우 늘어나는 칸 자체 
// 상품 가격 계산하기 


// quota [견적서]
let quotaS= document.getElementsByTagName('a');
let mdlist=document.getElementsByClassName('mdList');
console.log(document.getElementsByClassName('optionBox'));
let optionBox=document.getElementsByClassName('optionBox');
let pricetag=document.getElementsByClassName('pricetag');
let opChange=document.getElementsByClassName('opChange');

// quota 견적서 출력 링크
quotaS[6].addEventListener('click',
    ()=> {window.open('../../../HTML/auth/login/Login.html');
});


//버튼 클릭시 mdbox2가 내려갔다가 올라와야 함. 
// 커서가 옵션변경 버튼을 클릭하는 경우, optionBox가 display 가 none으로 변하게 됨.
//eventlistener을 활용(?)
// 옵션 박스 디스플레이가 일반 일때 옵션 박스 디스플레이를 히든으로 바꿈


// let btn_func = function() {
//     if(optionBox.display =='grid'){
//         function btn_hidden(){
//         optionBox.style.display='hidden';
//         }
//     }
// };

// mdlist[5].addEventListener('click', btn_func());
//안되네^^
// ..? 디스플레이가 지금 그리드 인데..? 
// 캭!!!!!

// mdlist[5].addEventListener('click' , () => {
//     if(optionBox[0].style.display!='none')optionBox[0].style.display='none';
// });

// 버튼을 누른 경우 옵션창이 없어졌다가 있다가 하기
console.log(optionBox[0]);

function openoptionBox() {
    optionBox[0].classList.add('active');
    opChange[0].setAttribute('onclick','closeoptionBox()');
}
function closeoptionBox() {
    optionBox[0].classList.toggle('active'); //없애기
    opChange[0].setAttribute('onclick','openoptionBox()');
}


// 이걸 반복문으로 만들어 보자. 
// 크게 function 2개를 반복 할거야. 언제까지 인덱스-1까지. 








//상품을 담은 경우, section class Mdcontianer 자체를 복사해서 넣기. 
//차라리 팝업창을 만들까.. 되는게 없는데... ㅎ...


//상품 가격 계산하기
//계산해야 할 값을 같은 클래스를 주면 더 생겨도 가능?
//인덱스  - 1 만큼 반복하겠네?

// for(;;){
//     pricetag[i]+
// }