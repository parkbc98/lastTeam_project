'use strict';

let client_type = document.querySelectorAll('.client_type_radio_wrap>input'),
   reValues = document.getElementsByClassName('value'),
   selValues = document.getElementsByClassName('selValue'),
   submitBtn = document.getElementById('submit_button'),
   agreeCheckBox = document.getElementsByClassName('agree_checkBox');

//파라미터 변수들
let clientType, clientId, clientPassward, clientName, clientZipcode, clientAdd,
    phone1, phone2, phone3, cell1, cell2, cell3, email;

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
// 11. 선택사항 입력 (수신확인)


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

selValues[0]
selValues[1]
selValues[2]
selValues[3]
selValues[4]
selValues[5]

*/
// ===================================================================


// 약관 동의 체크박스 전체 선택 및 각개 선택 로직
function allAgreeChecker() {
   console.log(agreeCheckBox[0].checked)
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



// 회원가입 버튼 시작

submitBtn.addEventListener('click', e => { validation(e) });


function validation() {


   // 1. value 클래스 들 빈칸 확인
   for (let i = 0; i < reValues.length; i++) {
      if (!reValues[i].checked || !reValues[i].value) {
         alert('필수 입력 항목이 입력되지 않았거나 필수 동의 체크 되지 않았습니다.');
         reValues[i].focus();
         return false;
      }
   }

   // 2. client type 확인 체크
   for (let i = 0; i < client_type.length; i++) {
      if (client_type[i].checked) {
         clientType = client_type[i].value;                                       // seccess     0.  clientType
      }
   }

   // 3. 아이디 체크 (영문대문자, 숫자 자릿수 체크)  ==> 3 번부터 reValues[] 인덱싱 시작
   if (reValues[0].value.length >= 4 && reValues[0].value.length <= 16) {
      if (/^[A-Za-z0-9][A-Za-z0-9]*$/.test(reValues[0].value)) {
         console.log(reValues[0].value);                                          // success     1.  clientId
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

   // 4. 비밀번호 (조합 확인)
   if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/.test(reValues[1].value)) {
      // 5. 재입력 비밀번호와 같은지 확인
      if (reValues[1].value === reValues[2].value) {
         clientPassward = reValues[1].value;                                      // success     2.  clientPassward
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
   clientName = reValues[3].value;                                                 // sucess     3.  clientName
   console.log(clientName);


   // 7. address
   clientZipcode = reValues[4].value;                                              // sucess     4.  clientZipcode
   clientAdd = `${reValues[5].value}\n${reValues[6].value}`;                       // sucess     5.  clientAdd
   console.log(clientAdd);


   // 8. 전화번호
   phone1 = reValues[7].value;                                                     // sucess     6.  phone1
   phone2 = reValues[8].value;                                                     // sucess     7.  phone2
   phone3 = reValues[9].value;                                                     // sucess     8.  phone3
   cell1 = reValues[10].value;                                                     // sucess     9.  cell1
   cell2 = reValues[11].value;                                                     // sucess     10. cell2
   cell3 = reValues[12].value;                                                     // sucess     11. cell3


   // 9. 이메일 형식 확인
   if(reValues[13].value.include('@') && reValues[13].value.include('.')){
      email = reValues[13].value;                                                  // sucess     12. email
   }


   // 10. 선택사항 입력 (생일)


   
   // 11. 선택사항 입력 (수신확인)




   e.preventDefault();  // 새로 렌더링되는 것을 막음
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