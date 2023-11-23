'use strict';

let client_type = document.querySelectorAll('.client_type_radio_wrap>input'),
   reValues = document.getElementsByClassName('value'),
   selValues = document.getElementsByClassName('selValue'),
   submitBtn = document.getElementById('submit_button'),
   agreeCheckBox = document.getElementsByClassName('agree_checkBox');

//파라미터 변수들
let clientType, solunar;


// 고객정보 객체

var clientData = {};

// ===================================================================


//  1. value 클래스 들 빈칸 확인
//  2. client type 확인 체크
//  3. 아이디 체크 (영문대문자, 숫자 자릿수 체크)
//  4. 비밀번호 (조합 확인)
//  5. 재입력 비밀번호와 같은지 확인
//  6. 이름
//  7. address 상세주소 필요하게 구현
//  8. 전화번호
//  9. 이메일 형식 확인
// 10. 선택사항 입력 (생일)
// 11. 약관 동의(수신확인) 체크


// ===================================================================


/* -------- reValue 인덱스 값들 -------

reValues[0]  - id
reValues[1]  - passward
reValues[2]  - passward confirm
reValues[3]  - name
reValues[4]  - zip-code
reValues[5]  - address 1
reValues[6]  - address 2
reValues[7]  - phone 1
reValues[8]  - phone 2
reValues[9]  - phone 3
reValues[10] - cell 1
reValues[11] - cell 2
reValues[12] - cell 3
reValues[13] - e-mail
reValues[14] - agreeCheck 1
reValues[15] - agreeCheck 2

*/
// ===================================================================


/* -------- selValue 인덱스 값들 -------

selValues[0]  - solar
selValues[1]  - lunar
selValues[2]  - birthYear
selValues[3]  - birthMonth
selValues[4]  - birthDay
selValues[5]  - agreeCheck3

*/
// ===================================================================


// 약관 동의 체크박스 전체 선택 및 각개 선택 로직
function allAgreeChecker() {
   if (agreeCheckBox[0].checked) {
      for (let i = 1; i < agreeCheckBox.length; i++) {
         agreeCheckBox[i].checked = true;
      }
   } else {
      for (let i = 1; i < agreeCheckBox.length; i++) {
         agreeCheckBox[i].checked = false;
      }
   }
}

function allAgreeChecker_off() {
   if (agreeCheckBox[1].checked && agreeCheckBox[2].checked && agreeCheckBox[3].checked) {
      agreeCheckBox[0].checked = true;
   } else if (agreeCheckBox[3].checked || agreeCheckBox[2].checked || agreeCheckBox[1].checked) {
      agreeCheckBox[0].checked = false;
   }
}



// < 본문 > -- 회원가입 버튼 시작

submitBtn.addEventListener('click', (e) => { 
   if( !validation(e) ){
      e.preventDefault();  // 새로 렌더링되는 것을 막음
   } else {
      // 서버로 post 하는 구간!!!!!!!!

      alert(`'${clientData.clientName}'님 콤마나인에 오신것을 환영합니다!`);
      // location.href = '../../../../index.html';     // 현재 페이지에서 이동을해 페이지 정보를 갖고 있음
      
      // location.replace('../../../../index.html');   // 실제 서비스 처럼 메인 화면으로 가기
   }
});

// < 본문 끝 >



// 유효성 검사 함수
function validation() {

   // 1. value 클래스 들 빈칸 확인
   for (let i = 0; i < reValues.length-2; i++) {
      if (reValues[i].value==='') {
         alert('필수 입력 항목이 입력되지 않았습니다.');
         reValues[i].focus();
         return false;
      } else if (!reValues[14].checked || !reValues[15].checked){
         alert('필수 약관에 동의하지 않았습니다.')
         reValues[14].focus();
         return false;
      }
   }

   // 2. client type 확인 체크
   for (let i = 0; i < client_type.length; i++) {
      if (client_type[i].checked) {
         clientType = client_type[i].value;
      }
   }


   // 3. 아이디 체크 (영문자, 숫자 자릿수 체크)  ==> 3 번부터 reValues[] 인덱싱 시작
   if (reValues[0].value.length >= 4 && reValues[0].value.length <= 16) {
      if (/^[A-Za-z0-9][A-Za-z0-9]*$/.test(reValues[0].value)) {
      } else {
         alert("아이디는 '영문' 또는 '숫자'로 구성되어야 합니다.");
         reValues[0].focus();
         return false;
      }
   } else {
      alert('아이디는 4글자 이상, 16글자 이하여야 합니다.');
      reValues[0].focus();
      return false;
   }


   // 4~5. 비밀번호 (조합 확인) & 재입력 비교
   if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/.test(reValues[1].value)) {
      if (reValues[1].value === reValues[2].value) {
      } else {
         alert("재입력 비밀번호와 일치하지 않습니다.");
         reValues[1].focus();
         return false;
      }
   } else {
      alert("비밀번호는 8글자 이상 16글자 이하 영문, 숫자, 특수문자를 조합해서 입력하십시오.");
      reValues[1].focus();
      return false;
   }


   // 6. 이름 입력              


   // 7. address


   // 8. 전화번호


   // 9. 이메일 형식 확인
   let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
   
   if(!regex.test(reValues[13].value)){
      alert('이메일 형식이 아닙니다. 다시 한번 확인 바랍니다.');
      reValues[13].focus();
      return false;
   }


   // 10. 선택사항 입력 (생일)
   if (selValues[0].checked) {
      solunar = selValues[0].value;
   } else {
      solunar = selValues[1].value;
   }
   

   // clientData 객체 생성
    clientData = {
      'clientType' : clientType,
      'clientId' : reValues[0].value,
      'clientPassward' : reValues[1].value,
      'clientName' : reValues[3].value,
      'clientZipcode' : reValues[4].value,
      'clientAdd' : `${reValues[5].value}\n${reValues[6].value}`,
      'phone1' : reValues[7].value,
      'phone2' : reValues[8].value,
      'phone3' : reValues[9].value,
      'cell1' : reValues[10].value,
      'cell2' : reValues[11].value,
      'cell3' : reValues[12].value,
      'email' : reValues[13].value,
      'solunar' : solunar,
      'birthYear' : selValues[2].value,
      'birthMonth' : selValues[3].value,
      'birthDay' : selValues[4].value,
      'useAgree' : reValues[14].checked,
      'privateInfoAgree' : reValues[15].checked,
      'sendAgree' : selValues[5].checked,
   }

   console.log(clientData);

   return true;
}


// =============================   참고한 OPEN SOURCE ==============================


// 집코드 및 도로명주소 상세주소 검색 함수 
function execDaumPostcode() {
   new daum.Postcode({
      oncomplete: function (data) {
         document.getElementById('zip-code').value = data.zonecode;
         document.getElementById('address-1').value = data.address;
      }
   }).open();
}

// 아이디 유효성 검사 정규식
// /^[A-Za-z0-9][A-Za-z0-9]*$/.test(reValues[0].value)

// 비밀번호 유효성 검사 정규식
// /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/.test(reValues[1].value)

// 이메일 형식 검사 정규식, 객체생성 후 test()
// let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")



/*
 coded By. LeeMocha (2023-11-22 to 2023-11-23)
*/
