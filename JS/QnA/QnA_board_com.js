'use strict';

// 작성된 게시글 제목 작성자이름 작성시간 내용 가져오기

let clientData;

async function getClientData() {
    try {
        const response = await axios.get('http://localhost:3000/clientData');

        /* 
            axios 를 통한 JSON 데이터를 가져오면 JSON.parse() 메서드를 통한
            별도의 js 객체 변환이 필요치 않음.
        */
        clientData = response.data;

        console.log(clientData);

        /* 
            json 객체의 엔드포인트를 제외한 json 객체 내의 특정 배열 요소나
            프로퍼티를 URL 경로를 통한 직접 조회는 불가.
            따라서 아래와같이 조회한 json 객체를 별도로 js 내에서 가공하여
            특정 데이터를 추출.
            단, JSON 서버에서 생성된 id 값을 URL 에 매핑하는 방법은 가능.
        */
        console.log(clientData[1]);

    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}

getClientData();